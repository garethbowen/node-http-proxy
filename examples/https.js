var caronte = require('caronte');
/*
 * Create your proxy server pointing to a secure domain
 */
var options = {target:'https://google.com'};

var proxyServer = caronte.createProxyServer(options);
console.log("Proxy server listening on port 8000");
proxyServer.listen(8000);
