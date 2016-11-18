app.service('mailService', function($http) {
	this.getInbox = function() {
		return $http.get('http://localhost:3000/inbox')
					.then((res) => { return res.data });
	};

	this.getSent = function() {
		return $http.get('http://localhost:3000/sent')
					.then((res) => { return res.data });
	};

	this.getSpam = function() {
		return $http.get('http://localhost:3000/spam')
					.then((res) => { return res.data });
	};

	this.getContacts = function() {
		return $http.get('http://localhost:3000/contacts')
					.then((res) => { return res.data });
	};
});