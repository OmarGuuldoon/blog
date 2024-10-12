import db from '../models/indexModel.js';

const getPostReports =  async (req, res) => {
        const { startDate, endDate, userId }= req.query;
        
        try {
            // Build query options based on filters
            const queryOptions = {
                where: {},
                include: [{ model: db.user, attributes: ['username'] }], 
            };

            if (startDate && endDate) {
                queryOptions.where.createdAt = {
                    [db.Sequelize.Op.between]: [startDate, endDate]
                };
            }

            if (userId) {
                queryOptions.where.user_id = userId;
            }

            const reports = await db.postModel.findAll(queryOptions);
            return res.status(200).json({ reports });
        } catch (error) {
            console.error("Error fetching post reports:", error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
};
const getCommentReports = async (req, res) => {
        const { postId, startDate, endDate, userId } = req.query;

        try {
            const queryOptions = {
                where: {},
                include: [{ model: db.postModel, attributes: ['title'] }] 
            };

            if (postId) {
                queryOptions.where.post_id = postId;
            }

            if (startDate && endDate) {
                queryOptions.where.createdAt = {
                    [db.Sequelize.Op.between]: [startDate, endDate]
                };
            }

            if (userId) {
                queryOptions.where.user_id = userId;
            }

            const reports = await db.commentModel.findAll(queryOptions);
            return res.status(200).json({ reports });
        } catch (error) {
            console.error("Error fetching comment reports:", error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
};

const getUserReports = async (req, res) => {
    try {
        const { startDate, endDate} = req.query;

        const filters = {};
        if (startDate && endDate) {
            filters.registrationDate = {
                [Op.between]: [new Date(startDate), new Date(endDate)],
            };
        }

        const reports = await db.user.findAll({
            where: filters,
            attributes: ['username', 'role','created_at'],
        });

        return res.json({ reports });
    } catch (error) {
        console.error('Error fetching user reports:', error);
        return res.status(500).json({ message: 'Error fetching user reports' });
    }
};
const getContactUsReports = async (req, res) => {
    try {
        const { startDate, endDate } = req.query;

        const filters = {};
        if (startDate && endDate) {
            filters.createdAt = {
                [Op.between]: [new Date(startDate), new Date(endDate)],
            };
        }

        const reports = await db.contacUs.findAll({
            where: filters,
            attributes: ['name', 'message', 'created_at'],
        });

        return res.json({ reports });
    } catch (error) {
        console.error('Error fetching contact us reports:', error);
        return res.status(500).json({ message: 'Error fetching contact us reports' });
    }
};




export default {getPostReports, getCommentReports, getUserReports, getContactUsReports };
