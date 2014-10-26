angular.module($app, $dependencies)

    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('login');

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'modules/login/views/index.html',
                controller: 'LoginController'
            })

            .state('logout', {
                url: '/logout',
                templateUrl: 'modules/logout/views/index.html',
                controller: 'LogoutController'
            })
    })