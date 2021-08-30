// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: 'jepi.usuluddin.1@gmail.com',
        pass: 'nM43$o*Mx5#FS!KK'
      },
      secure: true
    });

    const mailData = {
      from: 'no-reply@gmail.com',
      to: 'jepi.usuluddin@gmail.com',
      subject: 'Buku Tamu',
      text: `Name : ${req.body.name}\nCatatan : ${req.body.notes}\nAkan Hadir : ${req.body.confirmation}`
    };

    return transporter.sendMail(mailData, (err, info) => {
      console.log(err, info);
      res.status(200).json({ status: true });
    });
  }
  return res.status(404).json({ status: false, message: 'Not Found' });
}
