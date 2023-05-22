const server = Bun.serve({
    port: 8000,
    development: true,
    fetch(req) {
        return new Response("Hello from Bun!!!")
    }
});

console.log(`We're live from port ${server.port}`);