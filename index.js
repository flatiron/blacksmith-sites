var fs = require("fs");

module.exports = function (cb) {

  var root = __dirname + '/sites';

  fs.readdir(root, function (err, dirs) {
    if (err) {
      cb(err);
    }

    try {
      dirs = dirs.map(function (dir) {
        return root + '/' + dir;
      }).filter(function (dir) {
        return fs.statSync(dir).isDirectory;
      });
    }
    catch (err) {
      cb(err);
    }

    cb(null, dirs);

  });

}
