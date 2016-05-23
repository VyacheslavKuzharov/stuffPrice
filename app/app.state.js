angular
    .module('ngStuffPrice')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$mdThemingProvider', function(
            $stateProvider,
            $urlRouterProvider,
            $mdThemingProvider){

        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange');

        // any unknown URLS go to 404
        // $urlRouterProvider.otherwise('/404');
        // no route goes to index
        // $urlRouterProvider.when('', '/');

        $stateProvider
            .state('authentication', {
                url: '/',
                templateUrl: 'app/components/authentication/register/signup.tpl.html'
            })
            // .state('authentication', {
            //     url: '/login',
            //     templateUrl: 'app/components/authentication/register/login.tpl.html'
            // })
            // .state('authentication', {
            //     url: '/forgot_password',
            //     templateUrl: 'app/components/authentication/register/password.tpl.html'
            // })
            .state('products', {
                url: '/products',
                templateUrl: 'app/components/products/products.tpl.html',
                controller: 'productsController',
                controllerAs: 'stuffCtrl'
            })
            .state('products.new', {
                url: '/new',
                templateUrl: 'app/components/products/new/products.new.tpl.html',
                controller: 'newProductsController',
                controllerAs: 'stuffCtrl',
                params: {
                    categories: null
                }
            })
            .state('products.edit', {
                url: '/:id/edit',
                templateUrl: 'app/components/products/edit/products.edit.tpl.html',
                controller: 'editProductsController',
                controllerAs: 'stuffCtrl',
                params: {
                    product: null
                }
            });
    }]);