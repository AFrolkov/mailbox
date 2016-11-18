app.controller('messagesController', function(mailService) {
	mailService.getInbox().then((res) => { this.inbox = this.messages = res});
	mailService.getSent().then((res) => { this.sent = res});
	mailService.getSpam().then((res) => { this.spam = res});
	mailService.getContacts().then((res) => { this.contacts = res});

	this.showMessages = function(type) {
		this.messages = this[type];
	};
});