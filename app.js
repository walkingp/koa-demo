const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "Hello world";
  ctx.response.status = 200;
});

app.listen(3001);
console.log(`server: http://localhost:3001 started`);
