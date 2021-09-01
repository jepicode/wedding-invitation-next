import connectDB from '../../middleware/mongodb';
import Greeting from '../../models/greeting';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, greetings, isWillCome } = req.body;

    try {
      const greetingData = new Greeting({
        name,
        greetings,
        isWillCome
      });
      await greetingData.save();
      return res.status(200).json({ status: true, message: 'Succes' });
    } catch (err) {
      return res.status(500).json({ status: false, message: 'Failed Save' });
    }
  }
  if (req.method === 'GET') {
    try {
      const listGreetings = await Greeting.find({});
      return res.status(200).json({ status: true, data: listGreetings });
    } catch (err) {
      return res.status(500).json({ status: false, message: 'Failed Load' });
    }
  }
  return res.status(404).json({ status: false, message: 'Not Found' });
};

export default connectDB(handler);
