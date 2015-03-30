fuck-shit-up-bookmarklet
==================

This is a Chrome extension that sprinkles some 'fucks' into whatever you're reading. (The project started as a bookmarklet, but can't have a 1.7 MB bookmarklet.)

Installation
------------

1. Clone this repo.
2. Run `make build` to build bookmarklet.js.
3. Go to Extensions in Chrome.
4. Check "Developer mode".
5. Hit "Load unpacked extension" and point it to the `chrome` directory in this repo.

Usage
-----

    make run    

Or run [wzrd](https://github.com/maxogden/wzrd) directly:

    wzrd index.js

Then, wzrd will say something like:

    wzrd index.js
    server started at http://localhost:9966

You can open your browser to that.

Tests
-----

Run tests with `make test`.

License
-------

MIT.
