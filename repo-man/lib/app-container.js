let markoa = require('markoa');
let app = markoa.app;
let appContainer = markoa.appContainer();

let root = __dirname;
// mounting multiple apps from same root dir, blank state
let accountApp = app.config('account', {root: root});
let otherApp = app.config('other', {root: root});

// mounting multiple apps on appContainer instance
appContainer.mountApps([accountApp, otherApp]);
