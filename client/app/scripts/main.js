var app = angular.module('thot-ng-client', ['ui.bootstrap']);

app.controller('OpenSpaceCtrl', ['$scope', function ($scope) {

  $scope.days = [
    {
      id: 0,
      date: new Date(2014, 8, 20),
      active: true
    },
    {
      id: 1,
      date: new Date(2014, 8, 21),
      active: false
    },
    {
      id: 2,
      date: new Date(2014, 8, 22),
      active: false
    }
  ];

  var rooms = [
    {
      day: 0,
      rooms: [
        {
          id: 0,
          name: 'Alpha 1 A'
        },
        {
          id: 1,
          name: 'Alpha 1 B'
        },
        {
          id: 2,
          name: 'Alpha 2'
        },
        {
          id: 3,
          name: 'Beta'
        },
        {
          id: 4,
          name: 'Epsilon'
        }
      ]
    },
    {
      day: 1,
      rooms: [
        {
          id: 0,
          name: 'Alpha 1 A'
        },
        {
          id: 1,
          name: 'Alpha 1 B'
        },
        {
          id: 2,
          name: 'Alpha 2'
        },
        {
          id: 3,
          name: 'Beta'
        },
        {
          id: 4,
          name: 'Epsilon'
        },
        {
          id: 5,
          name: 'Window Lounge'
        },
        {
          id: 6,
          name: 'Couch Lounge'
        }

      ]
    },
    {
      day: 2,
      rooms: [
        {
          id: 0,
          name: 'Alpha 1 A'
        },
        {
          id: 1,
          name: 'Alpha 1 B'
        },
        {
          id: 2,
          name: 'Alpha 2'
        },
        {
          id: 3,
          name: 'Beta'
        },
        {
          id: 4,
          name: 'Epsilon'
        },
        {
          id: 5,
          name: 'Window Lounge'
        },
        {
          id: 6,
          name: 'Couch Lounge'
        },
        {
          id: 7,
          name: 'Lobby'
        }
      ]
    }
  ];

  var slots = [
    {
      day: 0,
      slots: [
        {
          id: 0,
          start: new Date(2014, 8, 20, 14, 0, 0),
          end: new Date(2014, 8, 20, 14, 45, 0)
        },
        {
          id: 1,
          start: new Date(2014, 8, 20, 15, 0, 0),
          end: new Date(2014, 8, 20, 15, 45, 0)
        },
        {
          id: 2,
          start: new Date(2014, 8, 20, 16, 0, 0),
          end: new Date(2014, 8, 20, 16, 45, 0)
        }
      ]
    },
    {
      day: 1,
      slots: [
        {
          id: 3,
          start: new Date(2014, 8, 20, 14, 10, 0),
          end: new Date(2014, 8, 20, 14, 45, 0)
        },
        {
          id: 4,
          start: new Date(2014, 8, 20, 14, 50, 0),
          end: new Date(2014, 8, 20, 15, 25, 0)
        },
        {
          id: 5,
          start: new Date(2014, 8, 20, 15, 30, 0),
          end: new Date(2014, 8, 20, 16, 5, 0)
        }
      ]
    },
    {
      day: 2,
      slots: [
        {
          id: 6,
          start: new Date(2014, 8, 20, 14, 10, 0),
          end: new Date(2014, 8, 20, 14, 50, 0)
        },
        {
          id: 7,
          start: new Date(2014, 8, 20, 15, 0, 0),
          end: new Date(2014, 8, 20, 15, 40, 0)
        },
        {
          id: 8,
          start: new Date(2014, 8, 20, 15, 50, 0),
          end: new Date(2014, 8, 20, 16, 30, 0)
        }
      ]
    }
  ];

  $scope.roomsFor = function (dayId) {
    for (var i = 0; i < rooms.length; i++) {
      if (rooms[i].day === dayId) {
        return rooms[i].rooms;
      }
    }
    return [];
  };

  $scope.slotsFor = function (dayId) {
    for (var i = 0; i < slots.length; i++) {
      if (slots[i].day === dayId) {
        return slots[i].slots;
      }
    }
    return [];
  }

}]);