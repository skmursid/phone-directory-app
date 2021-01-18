# PhoneDirectoryApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

# Steps required to search names from phone directory with suggestions
1. I have created this sample phone directory using angular and plain html.
2. First I created an angular project using following command --> ng new phone-directory-app. 
3. Then I created service phone-directory-service using command ng g service phone-directory
4. Added a json file in path ./assets/Contacts/names.json for data purpose. Inside the json file added few person names.
5. When a user starts typing character in input text function searchValue get triggered present in app.component typescript file, which inturn calls service for fetching values from json file. Once the value is fetch, i'm storing it into an array and using html list populating the values on the screen.
6. In names.json file, i have added names of person in different format, kindly refer the same. Also we can modify those and test the same.
   a. Search is very easy i.e. if we know the person last name also, it'll give suggestion for match.
   For example, if we search with text shah also it'll fetch Full name for us.




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
