import express from 'express';
import postReportController from '../controllers/reportsController.js';

const reportRouter = express.Router();

reportRouter.get('/reports/posts', postReportController.getPostReports);
reportRouter.get('/reports/comments', postReportController.getCommentReports);
reportRouter.get('/reports/users', postReportController.getUserReports);
reportRouter.get('/reports/contacUs', postReportController.getContactUsReports);

export default reportRouter;
