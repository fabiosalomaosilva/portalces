angular.module("appCes", ["ngRoute","ngMaterial"]);

angular.module("appCes").config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('orange');
});

