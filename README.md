# Materials-cli

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
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

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Project Details

http://www.flexboxdefense.com
http://www.flexboxfroggy.com

Jeffrey Biles is the presenter

`{{some-link click=(transition-to "test" 'arg-to-route')}}`

[ember daily](http://www.emberdaily.tips/2016/06/17/15-material-design)
[ember screen casts](https://www.emberscreencasts.com/tags/material-design-with-ember-paper)
[ember-paper](https://github.com/miguelcobain/ember-paper)
[ember-paper documentation](http://miguelcobain.github.io/ember-paper/release-1/#/)
[css3 flex box](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
[flex box tutorial](https://www.youtube.com/watch?v=Y8zMYaD1bz0&list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG)
[flex box tutorial source code](https://github.com/iamshaunjp/css-flexbox-playlist)
 
[google design](https://design.google.com/)
[index route reference](https://guides.emberjs.com/v2.6.0/tutorial/routes-and-templates/)
[duplicate this page for demo](https://design.google.com/newsletter/)

[w3 schools flexbox](http://www.w3schools.com/css/css3_flexbox.asp)
[w3 schools w3.css](http://www.w3schools.com/w3css/default.asp)
[angular material design](https://material.angularjs.org/latest/layout/introduction)

{{paper-input label='Email' type='email' value=email customValidations=multipleConstraints}}
{{paper-input class="md-block" label="Value should be even and equal 4." type="email" value=customMultiple onChange=(action (mut customMultiple)) customValidations=multipleConstraints}}
{{paper-input label="E-mail" type="email" value=customemail onChange=(action (mut customemail)) customValidations=emailValidation}}

In addition to required, min, max, and maxlength, you may define your own custom validations.
Custom validations are defined by an object with two attributes, errorMessage and isError.
You may bind a single validation object, or an array of validation objects.
 
The **type** option (text, number, date, email, password, etc) set the input type
[see here](http://www.w3schools.com/html/html_form_input_types.asp)
 
The **passThru** option sets the html5 attributes described below
[input helpers](https://guides.emberjs.com/v2.0.0/templates/input-helpers/)
{{paper-input flex=true label="Submission date" type="date" value=date onChange=(action (mut date))}}
 
There is also a validation library on ember add-ons that can be used such as ember-cp-validations
[here](https://www.npmjs.com/package/ember-cp-validations)
[and here](https://vimeo.com/146857699)
 
write a validator ember g validator unique-username from above video
using a debouncing observer from a raw value to an actual value
 
another good read on ember-data 2
[here](https://vimeo.com/146840596)
 
