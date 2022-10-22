const proxy = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    proxy.createProxyMiddleware('/api', {
      target: 'http://localhost:3001/',
      changeOrigin: true,
      // localhost:8080/api/users -> localhost:3000/users
      pathRewrite: {
        '^/api': ''
      }
    })
  )
};