BROWSERIFY = node_modules/.bin/browserify
UGLIFY = node_modules/.bin/uglifyjs

build:
	$(BROWSERIFY) lib/bookmarklet-src.js | $(UGLIFY) -c -m -o chrome/bookmarklet.js

build-dev:
	$(BROWSERIFY) -d lib/bookmarklet-src.js > chrome/bookmarklet.js
