## Rapid Render
## Requirements


- Node ES6 compatible (f.ex [io.js](iojs.org))
- npm (node package manager)

## Installation

Install IO.js via [nvm](https://github.com/creationix/nvm)

`nvm install iojs`
`nvm alias default iojs`


Install node packages required by the server app

`npm install`

## Run

`node server.js`

Pages working now

- `http://localhost:4004/`
- `http://localhost:4004/account`
- `http://localhost:4004/registration`

## TODO

Make top menu link to all active pages so we can click around in demo!

## Design

Showcases simple design of Multi-page Application server using Koa.js server, REST APIs and Marko templating

## File structure

- test/fixtures : sample data to simulate REST API calls (for tests)
- /config : pages config, ...
- /lib : small libraries of functions
  - data-provider.js : page configuration for which data to load
  - loader.js : loads json data from various sources such as json files etc
  - render.js : renders page with data from data providers using Marko async fragments
  - route.js : route factory methods
  - store.js : map of available data store
  - utils.js : basic utility methods like delayed
- /views : it have the pages, template and partials marko style
  - /pages : content for pages like live content, prematch content, ...
  - /layouts : shared common layouts
  - /partials : shared common fragments to be included in layouts

strategies for koa such as streaming
- /public : static resources

- koa-config.js : configures koa server app with port, and rendering
- server.js : server init

## Usage

Please read the [docs](https://github.com/smigit/rapid-render/tree/master/docs) for detailed usage guidelines, instructions etc.

## Marko Templating: Async, Out-of Order, Streamed, Compressed Fragments

Marko has several **killer features** that set it apart:

*   Marko offers **streamed** template **rendering**, which **sends** your html **content** to the browser **early** and **often**.
*   Marko supports **asynchronous rendering** of html **fragments**, which basically means you define sections of your template as asynchronous and you _let Marko_ _handle_ the _waiting_, _buffering_ and eventual _rendering_.
*   Marko offers **out of order rendering** while still displaying the html content in _correct order_. This means that as soon as your asynchronous _queries_ _complete_, Marko will _render_ the relevant portions of the template and _send_ it _to_ the _browser_, even if this means sending the content out of the final display sequence. Then Marko displays the content in the correct sequence by using client side JavaScript.
These three **features** in combination **result** in **huge gains** in **perceived** and **actual** loading **performance** particularly when used on multi-page web applications that serves dynamic content.

The **reason** for the significant performance gains is because Marko is **designed** to **leverage Progressive Rendering** in the browser, a feature supported by all modern browsers.

The idea behind Progressive Rendering is that the **browser** should attempt to **paint** or render as much of the **page** as can as **early** as possible.

You should really **watch** to **demo** to get a **sense** of **why** _Progressive Rendering_ and **Marko** are so **important**.

Please join my mailing list so I can let you know when new screencasts are released

http://knowthen.com/join/
