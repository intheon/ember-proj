import Ember from 'ember';

export default Ember.Controller.extend({

	responseMessage: "",
	emailAddress: '',
	actions: {

		saveMessage(){
			const email = this.get("emailAddress");
			const message = this.get("message");
			const newMessage = this.store.createRecord("messages", {
				email: email,
				message: message
			});


			newMessage.save().then((response) => {
				this.set("responseMessage", `Thank you for your message. Message sent was ${this.get("message")}`);
				this.set("emailAddress", "");
				this.set("message", "");
			});
		}

	}


});
