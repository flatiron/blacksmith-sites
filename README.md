[![build status](https://secure.travis-ci.org/flatiron/blacksmith-sites.png)](http://travis-ci.org/flatiron/blacksmith-sites)
# Blacksmith-sites

## Example:

    > var sites = require("./index")
    > sites
    [Function]
    > sites(console.log)
    > null { doc: '/home/josh/dev/blacksmith-sites/sites/doc',
      blog: '/home/josh/dev/blacksmith-sites/sites/blog' }

## Install:

  git clone git@github.com:flatiron/blacksmith-sites.git

## API:

### sites(cb):

Callback has signature (err, result) where 'result' is paths and keys.

## License:

MIT/X11.
