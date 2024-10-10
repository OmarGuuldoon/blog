import db from '../models/indexModel.js';

const AboutUs = db.aboutUs;

const createAboutUs = async (req, res) => {
  console.log("Request received at /createContent"); // First thing to check if the request hits the route

  try {
    const { content } = req.body;
    
    // Log the incoming content to check if it's being received
    console.log("Received content from req.body:", content);

    const AboutUsContent = await AboutUs.create({
      content
    });

    // Log the newly created content in the database
    console.log("Saved AboutUs content:", AboutUsContent);

    res.send({
      message: "Content saved successfully",
      content: AboutUsContent
    });
  } catch (error) {
    console.error("Error saving content:", error);
    res.status(500).json({
       message : error.message
    });
  }
};


const selectAllContentInABoutUs = async (req, res) => {
    try {
      const content = await AboutUs.findAll();

      if(!content){
        res.json ({
            message : "nothing here sir"
          })
      }
      res.json({
        content
      })
    }
    catch(error){
        res.status(500).send({
            message : error.message
        })
    }


}

export default {createAboutUs, selectAllContentInABoutUs};