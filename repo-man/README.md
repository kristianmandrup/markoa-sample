Repo Manager
============

Repo Project Manager for Web development projects using micro services architecture :)

Requirements
------------

-	Node ES6 compatible (f.ex [io.js](iojs.org)\)
-	npm (node package manager)

Installation
------------

Install IO.js via [nvm](https://github.com/creationix/nvm)

`nvm install iojs``nvm alias default iojs`

Install node packages required by the server app

`npm install`

Run
---

`node server.js`

Run
---

Leverages the Markoa appplication architecture for Rapid rendering of static sites and rapid prototyping!!!

Local testing
-------------

Run `npm link` from markoa root folder to link the package.

Then from an app or appContainer that uses markoa, use `npm link markoa` to link the dependency, which creates a symbolic link in your `node_modules` pointing to your local markoa package.

Now run `npm install` from your app ;)

TODO
----

Styles:

-	Semantic UI
-	Stylus
-	Jeet and other nice Stylus addons :)

Lasso:

-	Reference external assets
