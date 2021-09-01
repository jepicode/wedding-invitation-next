import dbConnect from '../../lib/dbConnect';
import Greeting from '../../models/greeting';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const listGreetings = await Greeting.find({});
        res.status(200).json({ status: true, data: listGreetings });
      } catch (error) {
        res.status(400).json({ status: false });
      }
      break;
    case 'POST':
      try {
        const { name, greetings, isWillCome } = req.body;

        const greetingData = new Greeting({
          name,
          greetings,
          isWillCome
        });
        await greetingData.save();
        res.status(200).json({ status: true, message: 'Succes' });
      } catch (err) {
        res.status(500).json({ status: false, message: 'Failed Save' });
      }
      break;
    default:
      res.status(400).json({ status: false });
      break;
  }
}
