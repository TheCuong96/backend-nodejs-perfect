const { createProjectService } = require("../services/projectServices");

module.exports = {
    postCreateProjectAPI: async (req, res) => {
        let project = await createProjectService(req.body);
        console.log("project", project);
        return res.status(200).json({
            EC: 0,
            data: project,
        });
    },
};
