namespace FancyTable {

    angular.module('FancyTable', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: FancyTable.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('location', {
                url: '/location',
                templateUrl: '/ngApp/views/location.html',
                controller: FancyTable.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('menu', {
                url: '/menu',
                templateUrl: '/ngApp/views/menu.html',
                controller: FancyTable.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/ngApp/views/contact.html',
                controller: FancyTable.Controllers.ContactController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: FancyTable.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    

}
