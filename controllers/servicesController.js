import db from '../models/indexModel.js';

const Services = db.services;

const createService = async (req, res) => {
    try {
        const {title,description} = req.body;

    const uploadserviceInfo = Services.create({
        title,
        description
    });

    res.json({
        uploadserviceInfo
    })
    }
    catch (error) {
        res.send({
            message : error.message
        })
    }
}

const selectAllServices = async (req, res) => {

    try {
        const allServices = await Services.findAll();
        res.json({
        allServices
        });
    }
    catch(error){
        res.status(500).send({
            message : error.message
        });
    }

}
const selectServiceById = async (req, res) => {
    try {
        const {id} = req.params;
    const selectedService = await Services.findByPk(id);

    if(!selectedService){
        res.json({
            message : "service does not exist"
        })
    }

    res.json({
        selectedService
    });
    }
    catch(error){
        res.status(500).send({
            message : error.message
        })
    }
}
const updatedService = async (req, res) => {
    try {
        const {id} = req.params;
        const {title,description} = req.body;

    const service = await Services.findByPk(id);

    if(!service){
        res.json({
            message : "service not found"
        });
    }

    res.json({
        service
    })

    if(title) service.title = title;
    if(description) service.description = description;

    await service.save();
    }
    catch(error){
        res.json({
            message : error.message
        })
    }
}
const deleteServiceById = async (req, res) => {
    try {
        const {id} = req.params;

        const deleteService = await Services.findByPk(id);

    if(!deleteService) {
        return res.json({
            message : "service does not exist"
        })
    }
    await deleteService.destroy();
    res.json({
        message : "service deleted succesfully"
    })
    }
    catch(error){
        res.status(500).send({
           message : error.message
        });
    }

}
export default {createService, selectAllServices, selectServiceById, updatedService, deleteServiceById}