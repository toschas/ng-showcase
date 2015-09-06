'use strict';

/**
 * @ngdoc overview
 * @name Routes
 * @description
 * # Routes
 *
 * Routes of the application
 */
angular
  .module('labDay00002App')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('template', {
        url: "",
        abstract: true,
        views: {
          "header": { templateUrl: "views/header.html" },
          "footer": { templateUrl: "views/footer.html" }
        }
      })
      .state('home', {
        parent: "template",
        url: "/",
        views: {
          "content@": {
            templateUrl: "views/home.html",
            controller: "HomeCtrl"
          }
        }
      })
      .state('about', {
        parent: "template",
        url: "/about/:param?order&reverse",
        views: {
          "content@": {
            templateUrl: "views/about.html",
            controller: "AboutCtrl"
          }
        }
      })
      .state('contact', {
        parent: "template",
        url: "/contact",
        views: {
          "content@": {
            templateUrl: "views/contact.html",
            controller: "ContactCtrl"
          }
        }
      });
  });
