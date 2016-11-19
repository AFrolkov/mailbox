app.controller('messagesController', function(mailService) {
	mailService.getInbox().then((res) => { this.inbox = this.messages = res});
	mailService.getSent().then((res) => { this.sent = res});
	mailService.getSpam().then((res) => { this.spam = res});
	mailService.getContacts().then((res) => { this.contacts = res});

	this.currentTab = 'inbox';
	this.showMes = true;
	this.showCont = false;

	this.showMessages = function(type) {
		this.messages = this[type];
		this.currentTab = type;
		this.showMes = true;
		this.showCont = false;
	};

	this.showContacts = function () {
		this.showCont = true;
		this.showMes = false;
		this.currentTab = 'contacts';
	};
});