import db from '../models/indexModel.js';

const contactUs = db.contacUs;

const createContactUsInfo = async (req, res) => {
    console.log("Request received at /createContent");
  try {
    const {name, email, message} = req.body;
    console.log("Received content from req.body:", name, email, message);

    const createInfo = await contactUs.create({
     name,
     email,
     message
    });
    console.log("Saved contact Us content:", createInfo);
    
 
    res.json({
     message : "contact Us info registered succesfully",
     createInfo
    });
  }
  catch (error) {
    res.status(500).send({
        message : error.message
    });
  }

}
const veiwContactUsInfo = async (req, res) => {
    try {
        const contacUsInfo  = await contactUs.findAll();

    if(!contacUsInfo) {
        res.send({
            message : "there are not contact information in the database"
        });
    }
    res.json({
        contacUsInfo
    });
    }
    catch (error) {
       res.status(500).send({
        message : error.message
       })
    }

}
export default {createContactUsInfo, veiwContactUsInfo};