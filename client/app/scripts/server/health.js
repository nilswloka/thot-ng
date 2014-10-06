'use strict';

angular.module('thot-ng-client').factory('Health', ['$resource', function ($resource) {
  return $resource('http://localhost:8080/health');
}]);