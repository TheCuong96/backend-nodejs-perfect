const Project = require("../models/project");

const createProjectService = async (data) => {
    try {
        if (data.type === "EMPTY-PROJECT") {
            return await Project.create(data);
        }
        if (data.type === "ADD-USERS") {
            let myProject = await Project.findById(data.projectId).exec();
            myProject.usersInfor.push(...data.userArr);
            return await myProject.save();
        }
    } catch (error) {
        console.log("error", error);
        return null;
    }
};

module.exports = {
    createProjectService,
};
