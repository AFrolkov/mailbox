app.directive('navigationList', function() {
    return {
        restrict: 'E',
        scope: {
            inbox: "@",
            sent: "@",
            spam: "@",
            contacts: "@",
            showMes: "&showMes",
            showContacts: "&showContacts",
            currentTab: '@'
        },
        templateUrl: 'js/directives/navigation-list.html'
    };
});
