AngularJS Sub-Modules
====================

This is the example implement of module-based app for AngularJS.

## Folder struct

```
+ your-app
    - lib
        - (angularjs and other libs here)
    - js
        - config.js
        - app.js
    - modules
        - module-1
        - module-2
```

The `lib` folder contains all libraries you need for the project.

`js` folder contains 2 main files:
- **config.js:** _This is where you define your app name, modules,..._
- **app.js:** _Define all routing here_

`modules` folder contains your project's modules

## Usage

### 1) Config modules

Open `config.js` and define the list of modules you want to use:

```
var $modules = [
    'LoginModule',
    'LogoutModule'
];
```

And your app name:

`var $app = 'AngumoApp';`

Then open `app.js` to define routing:

```
.state('login', {
    url: '/login',
    templateUrl: 'modules/login/views/index.html',
    controller: 'LoginController'
})
```

### 2) Loading module's controllers

In your module folder, there is a `module.js` file, in this file, you have to define your module:

`angular.module('LoginModule', ['ui.router']);`

And load all module's controller with `bulkLoad` method

```
bulkLoad([
    'modules/login/controllers/loginController.js'
]);
```

### 3) Done
