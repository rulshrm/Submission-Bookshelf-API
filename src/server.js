const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 3500,
    host: 'localhost'
  });

  await server.start(routes);
  console.log('Server berjalan pada: ', server.info.uri);
};

init().catch(err => {
  console.error('Server gagal memulai: '. err);
  process.exit(1);
});
