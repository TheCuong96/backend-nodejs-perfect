const {
    createProjectService,
    getProject,
    updateProjectService,
    deleteProjectService,
} = require("../services/projectServices");

module.exports = {
    postCreateProjectAPI: async (req, res) => {
        let project = await createProjectService(req.body);
        console.log("project", project);
        return res.status(200).json({
            EC: 0,
            data: project,
        });
    },
    getAllProjectAPI: async (req, res) => {
        console.log("req.query", req.query);
        let project = await getProject(req.query);
        console.log("project", project);
        return res.status(200).json({
            EC: 0,
            data: project,
        });
    },
    updateProjectAPI: async (req, res) => {
        let results = await updateProjectService(req.body);
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
    deleteProjectAPI: async (req, res) => {
        let results = await deleteProjectService(req.body.id);
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
