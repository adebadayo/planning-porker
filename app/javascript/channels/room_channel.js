import consumer from "./consumer"

const chatChannel = consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    return alert(data.message);
  },

  speak(message) {
    console.log("message : "+ message)
    return this.perform('speak', {
      message: message
    });
  },
});

$(document).on('keypress', '[data-behavior~=room_speaker]', function(event){
  if(event.keyCode == 13){
    chatChannel.speak(event.target.value);
    event.target.value = '';
    return event.preventDefault();
  }
});
