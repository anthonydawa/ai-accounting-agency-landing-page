import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, sep, extname } from "node:path";
const root = resolve("out");
const port = Number(process.env.PORT ?? 3101);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".woff2": "font/woff2", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml" };
createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(new URL(req.url ?? "/", "http://localhost").pathname);
    if (basePath && path.startsWith(`${basePath}/`)) path = path.slice(basePath.length);
    let file = resolve(root, `.${path}`);
    if (file !== root && !file.startsWith(root + sep)) { res.writeHead(403); res.end(); return; }
    if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
    const data = await readFile(file);
    res.writeHead(200, { "Content-Type": types[extname(file)] ?? (data[0] === 137 && data[1] === 80 ? "image/png" : "application/octet-stream") });
    res.end(data);
  } catch { res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" }); res.end(await readFile(resolve(root, "404.html"))); }
}).listen(port, "127.0.0.1", () => console.log(`Website preview: http://localhost:${port}${basePath}/`));
