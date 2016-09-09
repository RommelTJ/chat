import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.chat.onCreated(function chatOnCreated() {
  // counter starts at 0 (default)
  this.counter = new ReactiveVar(0);
});

Template.chat.helpers({
  counter() {
    return Template.instance().counter.get(); //Retrieve session.
  },
  doubleNumber(num) {
    return num*2;
  }
});

Template.chat.events({
  'click .clickable'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1); //Set session.
  },
});
