import mongoose from 'mongoose';

const { Schema } = mongoose;

const greeting = new Schema({
  name: {
    type: String,
    required: true
  },
  greetings: {
    type: String,
    required: true
  },
  isWillCome: {
    type: Boolean,
    default: null
  }
});

mongoose.models = {};

const Greeting = mongoose.model('Greeting', greeting);

export default Greeting;
