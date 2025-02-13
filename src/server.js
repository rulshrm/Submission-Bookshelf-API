const Hapi = require('@hapi/hapi');
const routes = require('./routes');

/**
 * Inisialisasi dan memulai server Hapi.
 * 
 * @async
 * @function init
 * @returns {Promise<void>} Tidak mengembalikan nilai, hanya memulai server.
 * @description Fungsi ini membuat instance server Hapi, menetapkan rute, dan memulai server pada port 9000 di localhost. Setelah server berjalan, URL server akan dicetak ke konsol.
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
