import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  // ctx.response.status = 404
  console.log('url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if (pathname == '/') {
    ctx.response.body = `<html>
<body>
<h1>我的自我介紹</h1>
<ol>
<li><a href="/Name">姓名</a></li>
<li><a href="/Age">年齡</a></li>
<li><a href="/Gender">性別</a></li>
<li><a href="/School">學校</a></li>
<li><a href="/ID">學號</a></li>
</ol>
</body>
</html>
`
  } else if (pathname == '/Name') {
    ctx.response.body = '丁瑞祥'
  } else if (pathname == '/Age') {
    ctx.response.body = '18'
  } else if (pathname == '/Gender') {
    ctx.response.body = 'Man'
  } else if (pathname == '/School') {
    ctx.response.body = 'Quemoy Uneiversity'
  } else if (pathname == '/ID') {
    ctx.response.body = '111310520'
}
  // ctx.response.body = 'Not Found!'
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 })
