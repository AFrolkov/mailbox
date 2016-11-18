const app = angular.module('myApp', []);

app.directive('messageList', function() {
    return {
        restrict: 'E',
        scope: {
            messages: "=",
            contacts: "="
        },
        templateUrl: 'js/directives/message-list.html'
    };
});