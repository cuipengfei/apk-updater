var apkUpdater = require('./lib/updater');
var express = require('express');

var app = express();
app.use(express.bodyParser());

apkUpdater.enable(app, '/', './apks');

var server = app.listen(8090, '0.0.0.0', function () {
    console.log('apk updater running');
});
