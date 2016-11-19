const app = angular.module('myApp', []);

app.directive('messageList', function() {
    return {
        restrict: 'E',
        scope: {
            messages: "="
        },
        templateUrl: 'js/directives/message-list.html'
    };
});