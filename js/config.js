// List of project's modules
var $modules = [
    'LoginModule',
    'LogoutModule'
];

var $dependencies = [
    'ui.router'
];

// Merge modules list and dependencies list
$dependencies = $dependencies.concat($modules);

// App name
var $app = 'AngumoApp';