'use strict';

angular.module('thot-ng-client').directive('healthMonitor', ['Health', '$timeout', function (Health, $timeout) {
    return {
      templateUrl: 'scripts/server/health-monitor.html',
      restrict: 'A',
      scope: {},
      link: function (scope) {
        var promise;

        scope.isUp = false;

        (function pollHealth() {
          Health.get(null, function (health) {
            scope.isUp = (health.status === 'UP');
            promise = $timeout(pollHealth, 5000);
          }, function () {
            scope.isUp = false;
            promise = $timeout(pollHealth, 5000);
          });
        })();

        scope.$on('$destroy', function () {
          $timeout.cancel(promise);
        });
      }
    };
}]);