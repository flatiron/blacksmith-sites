var fs = require("fs"),
    alists = require("alists");

module.exports = function (cb) {

  var root = __dirname + '/sites';

  fs.readdir(root, function (err, dirs) {
    if (err) {
      cb(err);
    }

    try {
      dirs = alists.toObj(
        dirs.filter(function (dir) {
          return fs.statSync(root + '/' + dir).isDirectory;
        }).map(function (dir) {
          return [ dir, root + '/' + dir];
        })
      );

    }
    catch (err) {
      cb(err);
    }

    cb(null, dirs);

  });

}
