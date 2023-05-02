const {
    createTaskService,
    getTask,
    updateTaskService,
    deleteTaskService,
} = require("../services/tasKServices");

module.exports = {
    postCreateTaskAPI: async (req, res) => {
        let task = await createTaskService(req.body);
        return res.status(200).json({
            EC: 0,
            data: task,
        });
    },
    getAllTaskAPI: async (req, res) => {
        let task = await getTask(req.query);
        return res.status(200).json({
            EC: 0,
            data: task,
        });
    },
    updateTaskAPI: async (req, res) => {
        let results = await updateTaskService(req.body);
        if (results) {
            return res.status(200).json({
                errorCode: 0,
                data: results,
            });
        } else {
            return res.status(200).json({
                EC: -1,
                data: results,
            });
        }
    },
    deleteTaskAPI: async (req, res) => {
        let results = await deleteTaskService(req.body.id);
        if (results) {
            return res.status(200).json({
                errorCode: 0,
                data: results,
            });
        } else {
            return res.status(200).json({
                EC: -1,
                data: results,
            });
        }
    },
};
