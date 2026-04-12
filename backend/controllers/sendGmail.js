const nodemailer = require('nodemailer');
const sendGmailToDonor=async(req,res)=>
{
    const { name, hospitalname, contactnumber, address, receiveremail  } = req.body;
    // Configure transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'knowntheunknown07@gmail.com',
            pass: 'igmupbhuwigstnbm' // Use App Password or OAuth
        }
    });

    const mailOptions = {
        from: 'knowntheunknown07@gmail.com',
        to: receiveremail ,
        subject:'URGENT BLOOD REQUIRED!',
        text: `HI There,\n I Hope You Are Well\nThere Is A Urgent Blood Requirement\nHere Is The Details\nAcceptor Name:${name}\nHosipital Name:${hospitalname}\nPhoneNumber:${contactnumber}\nAddress:${address}\nIf You Are Able To Bonate Blood Please Contact.\nTime Is Ticking,Each Minute Takes Life Of Needy`
    };

    try {
        const info=await transporter.sendMail(mailOptions);
        console.log(info);
        if(info.accepted.length){
            res.status(200).send({ success: true, message: 'Email sent successfully!' });
        }
        if(info.rejected.length){
            res.status(503).send({ success: false, message: 'Failed to sent Email!' });
        }
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}
const subscribeToNewsLetter=async(req,res)=>
{
    const receiveremail = req.body.receiverEmail;
    // Configure transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'knowntheunknown07@gmail.com',
            pass: 'igmupbhuwigstnbm' // Use App Password or OAuth
        }
    });

    const mailOptions = {
        from: 'knowntheunknown07@gmail.com',
        to: receiveremail ,
        subject:'Welcome to BloodDonors NewsLetter Service.',
        text: `Firstly Thanking you for subscribing to our news letter,\n We Hope You Are Well.\n From now onwards you will also walk through our journey and help us in making the world the best place to live.`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}
module.exports={sendGmailToDonor,subscribeToNewsLetter};