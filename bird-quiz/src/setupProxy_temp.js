//Idk I guess I'm not allowed to just make direct API calls or ebird gets mad
import API_KEY from './APIKey';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/ebird-api',
    createProxyMiddleware({
      target: 'https://api.ebird.org/v2',
      changeOrigin: true,
      pathRewrite: { '^/ebird-api': '' },
      onProxyReq: (proxyReq) => {
        proxyReq.setHeader('X-eBirdApiToken', API_KEY);
    },
})
  );
};
