import Ember from 'ember';

export default Ember.Controller.extend({

  fullName: 'Norm Lorenz',
  emailAddress: 'normlorenz@gmail.com',
  company: 'Umpqua Bank',
  role: 'Software Engineer',
  city: 'Spokane',
  country: 'USA',
  countries: ['USA', 'Canada', 'Mexico'],
  letmeKnow: true,

  multipleConstraints: [
    {
      message: 'Value is not even',
      validate: (inputValue) => (+inputValue % 2) === 0
    },
    {
      message: 'Value does not equal 4',
      validate: (inputValue) => +inputValue === 4
    }
  ],

  emailValidation: [
    {
      message: 'Please provide email in a valid format',
      validate: (inputValue) => {
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(inputValue);
      }
    }
  ],

  actions: {
  }

});
