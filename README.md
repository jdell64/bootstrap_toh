# Stackoverflow question 43314103
[This issue](http://stackoverflow.com/questions/43314103) on Stackoverflow can be reproduced in the following way:

1. go to a 'hero detail' page of hero 11:
  - note the spinning svg. This is the spinner img component. When the img cannot be found (or is loading), it defaults to a spinner img. OnLoad changes the image to the actual image. hero 11 does not have an image, so the spinner stays (desired affect).
2. type "m" in the search bar in the nav.
3. click on `Bombasto`. Note the pic loads
4. click on `Mr. Nice (no pic)`. Note that there is now no image (although this is hero 11, and we had a spinner before).

Another minor issue (which might be solved at the same time), is why does the menu stay open on navigate? Maybe I can clear the search bar on navigate?

# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


#install primeng
- npm install primeng --save
- npm install @angular/animations --save
- npm install font-awesome --save

angular-cli.json
  "../node_modules/primeng/resources/primeng.min.css",
        "../node_modules/primeng/resources/themes/omega/theme.css",
        "../node_modules/font-awesome/css/font-awesome.min.css"

sources:
http://sirajc.github.io/angular2-bs4-navbar/heroes

style guide -> more than 7 files, consider making a folder
https://www.npmjs.com/package/angular2-fontawesome
http://stackoverflow.com/questions/37048210/visual-studio-code-files-autosave-onfocuschange-not-working

https://preloaders.net/en/filtered-search/circular/free/
http://loading.io/

todo: add a loading directive
todo: fix the back button

https://v4-alpha.getbootstrap.com/layout/responsive-utilities/
http://stackoverflow.com/questions/33770823/angular2-how-to-set-element-class-name-when-using-ng-for-only-on-first-element

npm install angular-in-memory-web-api

`#heroName` -> (template reference variable) -> https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ref-vars

 docker run -p 49160:4200 -d jdell64/bootstrap_toh


 // "start": "ng serve -H 0.0.0.0",