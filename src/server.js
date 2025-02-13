const Hapi = require('@hapi/hapi');
const routes = require('./routes');

/**
 * Inisialisasi dan memulai server Hapi.
 * 
 * @async
 * @function init
 * @returns {Promise<void>} Mengembalikan promise yang diselesaikan ketika server berhasil dimulai.
 * @throws {Error} Jika terjadi kesalahan saat memulai server.
 */
const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost'
  });

  server.route(routes);

  await server.start();
  console.log('Server berjalan pada: ', server.info.uri);
};

init().catch(err => {
  console.error('Server gagal memulai: ', err);
  process.exit(1);
});
