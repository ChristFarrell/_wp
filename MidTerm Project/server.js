import { Application, send } from "https://deno.land/x/oak@v12.6.1/mod.ts";

const app = new Application();

app.use(async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: Deno.cwd(),
    index: "index.html",
  });
});

console.log("Server running at http://localhost:8000");
await app.listen({ port: 8000 });
