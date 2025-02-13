const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require("./handler");

/**
 * Daftar rute untuk API Buku.
 * 
 * @type {Array<Object>}
 * @property {string} method - Metode HTTP yang digunakan (POST, GET, PUT, DELETE).
 * @property {string} path - Jalur endpoint API.
 * @property {Function} handler - Fungsi penanganan yang akan dijalankan saat rute diakses.
 * 
 * @example
 * // Menambahkan buku baru
 * {
 *   method: "POST",
 *   path: "/books",
 *   handler: addBookHandler,
 * }
 * 
 * @example
 * // Mendapatkan semua buku
 * {
 *   method: "GET",
 *   path: "/books",
 *   handler: getAllBooksHandler,
 * }
 * 
 * @example
 * // Mendapatkan buku berdasarkan ID
 * {
 *   method: "GET",
 *   path: "/books/{id}",
 *   handler: getBookByIdHandler,
 * }
 * 
 * @example
 * // Mengedit buku berdasarkan ID
 * {
 *   method: "PUT",
 *   path: "/books/{id}",
 *   handler: editBookByIdHandler,
 * }
 * 
 * @example
 * // Menghapus buku berdasarkan ID
 * {
 *   method: "DELETE",
 *   path: "/books/{id}",
 *   handler: deleteBookByIdHandler,
 * }
 */
const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBookByIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: editBookByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;