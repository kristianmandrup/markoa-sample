Project app
===========

This is a sample SPA for markoa.

Test and development
--------------------

The `app.js` demonstrates how to mount it on an empty `appContainer` instance. It can then be run on a Koa server for testing/development.

Mounting in app Container
-------------------------

For mounting the app in an `appContainer` with multiple other SPAs, first require the apps. Then use the `appContainer` mounter `appContainer.mount` API to mount the apps.

```js
let markoa = require('markoa');
let appContainer = markoa.appContainer();

let app = {
  account: require('account-app'),
  index: require('index-app')  
}

appContainer.mount.apps([app.account, app.index]);
appContainer.init(koa).start();
```

Local testing
-------------

Run `npm link` from markoa root folder to link the package.

Then from an app or appContainer that uses markoa, use `npm link markoa` to link the dependency, which creates a symbolic link in your `node_modules` pointing to your local markoa package.

Now run `npm install` from your app ;)
