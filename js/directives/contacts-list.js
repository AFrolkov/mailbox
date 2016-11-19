app.directive('contactsList', function() {
	return {
		restrict: 'E',
		scope: {
			contacts: '='
		},
		templateUrl: 'js/directives/contacts-list.html'
	};
});