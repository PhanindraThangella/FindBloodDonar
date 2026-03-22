const sendGmailToDonor=async(req,res)=>
{
    const { name, hospitalName, phoneNumber, address, receiverEmail  } = req.body;

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
        to: receiverEmail ,
        subject:'URGENT BLOOD REQUIRED!',
        text: `HI There,\n I Hope You Are Well\nThere Is A Urgent Blood Requirement\nHere Is The Details\nAcceptor Name:${name}\nHosipital Name:${hospitalName}\nPhoneNumber:${phoneNumber}\nAddress:${address}\nIf You Are Able To Bonate Blood Please Contact.\nTime Is Ticking,Each Minute Takes Life Of Needy`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}
module.exports=sendGmailToDonor;