import Koa from 'koa';
import server from './server';

const port = 4000;
const app = new Koa();

server.start();
server.applyMiddleware({ app });

app.listen({ port }, () => {
  // eslint-disable-next-line no-console
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`,
  );
});
