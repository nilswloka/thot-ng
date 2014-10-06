'use strict';

describe('Directive: healthMonitor', function () {

  var element,
    $scope,
    mockHealth,
    mockHealthSpy;

  beforeEach(function () {


    module('thot-ng-client');
    module('scripts/server/health-monitor.html');

    module(function ($provide) {
      mockHealth = {
        get: function () {
        }
      };
      mockHealthSpy = spyOn(mockHealth, 'get').andCallThrough();
      $provide.value('Health', mockHealth);
    });

    inject(function ($rootScope, $compile) {
      $scope = $rootScope.$new();
      element = $compile('<span health-monitor></span>')($scope);
      $scope.$digest();
    });

  });

  it('should get from Health', function () {
    expect(mockHealth.get).toHaveBeenCalled();
  });

  it('should display success badge when server is up', function () {
    mockHealthSpy.mostRecentCall.args[1]({status: 'UP'});
    $scope.$digest();
    var badge = element.find('span').eq(0);
    expect(badge.hasClass('label-success')).toBe(true);
    expect(badge.text()).toContain('Server running');
  });

  it('should display error badge when server is down', function () {
    mockHealthSpy.mostRecentCall.args[2]();
    $scope.$digest();
    var badge = element.find('span').eq(0);
    expect(badge.hasClass('label-success')).toBe(false);
    expect(badge.text()).toContain('Server down');
  });

  it('should queue next server call on success', inject(function ($timeout) {
    expect(mockHealthSpy.calls.length).toBe(1);
    mockHealthSpy.mostRecentCall.args[1]({});
    $timeout.flush();
    expect(mockHealthSpy.calls.length).toBe(2);
    mockHealthSpy.mostRecentCall.args[1]({});
    $timeout.flush();
    expect(mockHealthSpy.calls.length).toBe(3);
  }));

  it('should queue next server call on success', inject(function ($timeout) {
    expect(mockHealthSpy.calls.length).toBe(1);
    mockHealthSpy.mostRecentCall.args[2]();
    $timeout.flush();
    expect(mockHealthSpy.calls.length).toBe(2);
    mockHealthSpy.mostRecentCall.args[2]();
    $timeout.flush();
    expect(mockHealthSpy.calls.length).toBe(3);
  }));

  it('should stop polling server when scope is destroyed', inject(function($timeout) {
    expect(mockHealthSpy.calls.length).toBe(1);
    mockHealthSpy.mostRecentCall.args[1]({});
    $timeout.flush();
    expect(mockHealthSpy.calls.length).toBe(2);
    mockHealthSpy.mostRecentCall.args[1]({});
    $scope.$destroy();
    try {
      $timeout.flush();
    } catch (err) {
      expect(err.message).toBe('No deferred tasks to be flushed');
    }
    expect(mockHealthSpy.calls.length).toBe(2);
  }));

});
