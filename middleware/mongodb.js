import mongoose from 'mongoose';

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect('mongodb+srv://admin:T1oj0!T2Y^wMkfPk@cluster0.mo5pt.mongodb.net/greetings', (err) => {
    if (err) throw err;
    console.log('Connected to DB');
  });
  return handler(req, res);
};

export default connectDB;
