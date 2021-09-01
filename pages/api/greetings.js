// import connectDB from '../../middleware/mongodb';
// import Greeting from '../../models/greeting';

// const handler = async (req, res) => {
//   if (req.method === 'POST') {
//     const { name, greetings, isWillCome } = req.body;

//     try {
//       const greetingData = new Greeting({
//         name,
//         greetings,
//         isWillCome
//       });
//       await greetingData.save();
//       return res.status(200).json({ status: true, message: 'Succes' });
//     } catch (err) {
//       return res.status(500).json({ status: false, message: 'Failed Save' });
//     }
//   }
//   if (req.method === 'GET') {
//     return res.status(200).json({ status: true, data: [], uy: process.env.mongodburl });
//     try {
//       const listGreetings = await Greeting.find({});
//       return res.status(200).json({ status: true, data: listGreetings });
//     } catch (err) {
//       return res.status(500).json({ status: false, message: 'Failed Load' });
//     }
//   }
//   return res.status(404).json({ status: false, message: 'Not Found' });
// };

// export default connectDB(handler);

import dbConnect from '../../lib/dbConnect';
import Greeting from '../../models/greeting';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const listGreetings = await Greeting.find({});
        res.status(200).json({ success: true, data: listGreetings });
      } catch (error) {
        res.status(400).json({ success: false });
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
      res.status(400).json({ success: false });
      break;
  }
}
