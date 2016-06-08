'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data;
    });

    $scope.addMessage = function ( message ) {
      if (message) {
        messageService.addMessage(message).then(function ( response ) {
          $scope.messages = response.data;
        });
      }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.userName = "Steve Dimple";
    $scope.userName2 = "Clairece Hanable";
    $scope.userImage = function(){
      new Image(100, 200);
      userImage.src = "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.png";
}
  });
