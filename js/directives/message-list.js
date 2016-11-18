const app = angular.module('myApp', []);

app.directive('messageList', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/directives/message-list.html'
    };
});