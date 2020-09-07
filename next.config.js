const hasPort =
  process.argv.indexOf("-p") === -1 ? false : process.argv.indexOf("-p");
const PORT = !hasPort ? 3000 : process.argv[hasPort + 1];

module.exports = {
  publicRuntimeConfig: {
    API_URL: `${process.env.API_HOST}:${PORT}/${process.env.API_BASE}`,
    FRONTEND_URL: process.env.FRONTEND_URL,
    ALGOLIA_APP_KEY: process.env.ALGOLIA_APP_KEY,
    ALGOLIA_ACCESS_KEY: process.env.ALGOLIA_ACCESS_KEY,
    MERCADOPAGO_KEY: process.env.MERCADOPAGO_KEY
  },
};
