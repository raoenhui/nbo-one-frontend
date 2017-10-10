const Express = require('express');
const App = Express();
const Path = require('path');
const DistPath=Path.resolve(__dirname, '../dist');
const History = require('connect-history-api-fallback');


App.use(History());
//加载静态地址
App.use(Express.static(DistPath));
App.listen(8082, function() {
  console.log('Server listening on http://localhost:8082, Ctrl+C to stop')
})

