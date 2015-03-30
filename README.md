fuck-shit-up-bookmarklet
==================

This is a Chrome extension that sprinkles some 'fucks' into whatever you're reading. (The project started as a bookmarklet, but can't have a 1.7 MB bookmarklet.)

If you just want to use it, you can [go here](https://chrome.google.com/webstore/detail/fuck-shit-up/aacmlcbfmkjencmcpckpcgegoiejeeeg) and ignore the rest of this.

Installation
------------

1. Clone this repo.
2. Run `make build` to build bookmarklet.js.
3. Go to Extensions in Chrome.
4. Check "Developer mode".
5. Hit "Load unpacked extension" and point to the `chrome` directory in this repo.

Structure
---------

__background.js__ waits around in the (wait for it) background to respond to the user hitting the extension's button. When that happens, it loads bookmarklet.js to be executed in the context of the page in the current tab.

__bookmarklet.js__ grabs all of the children of &lt;body&gt; that do not themselves have children, then runs their text through the fuck-shit-up module, and replaces their innerText with the results.

License
-------

MIT, mostly, but this project uses [pos-js](https://github.com/dariusk/pos-js), which is licensed under the [GNU LGPLv3](http://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License).
