# ticketfly-css-doc

This project is the rendered docs of [ticketfly-css](https://github.com/Ticketfly-UI/ticketfly-css).

## Configuring Modules

The CSS in every module is fetched on each visit to `/available-css` to ensure the doc is in sync with updates. 

To add/remove modules, assuming the ticketfly-css structure doesn't change, simply make a pull request to edit module names in [app/module-names.js](https://github.com/Ticketfly-UI/ticketfly-css-doc/blob/master/app/module-names.js).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd ticketfly-css-doc`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Deployment is made to [pagefront](https://www.pagefronthq.com/).

`ember deploy production` 

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
