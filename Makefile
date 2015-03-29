BROWSERIFY = node_modules/.bin/browserify
UGLIFY = node_modules/.bin/uglifyjs

build:
	$(BROWSERIFY) lib/bookmarklet-src.js | $(UGLIFY) -c -m -o chrome/bookmarklet.js
