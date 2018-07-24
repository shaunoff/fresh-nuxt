var functions = require('firebase-functions');
var Nuxt = require('nuxt').Nuxt;
var express = require('express');
var app = express();
var config = {
    dev: false,
    buildDir: 'nuxt',
    build: {
        publicPath: '/assets/'
    }
};
var nuxt = new Nuxt(config);
function handleRequest(req, res) {
    res.set('Cache-Control', 'public, max-age=150, s-maxage=150');
    return new Promise(function (resolve, reject) {
        nuxt.render(req, res, function (promise) {
            promise.then(resolve).catch(reject);
        });
    });
}
app.use(handleRequest);
exports.nuxtssr = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map