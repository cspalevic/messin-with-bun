import { serve, file } from "bun";

const server = serve({
    port: 8000,
    development: true,
    fetch(req) {
        const url = new URL(req.url);
        const path = url.pathname === "/" ? "/index.html" : url.pathname;
        return new Response(file(`./public${path}`))
    }
});

console.log(`We're live from port ${server.port}`);