// server.js (Deno + Oak)
import { Application, send } from "https://deno.land/x/oak@v12.6.1/mod.ts";

const app = new Application();

// Static file middleware
app.use(async (ctx) => {
  // Serve index or any static file
  await send(ctx, ctx.request.url.pathname, {
    root: Deno.cwd(),
    index: "home.html",
  });
});

console.log("Server running at http://localhost:8000");
await app.listen({ port: 8000 });
