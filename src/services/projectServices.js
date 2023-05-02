const Project = require("../models/project");
const aqp = require("api-query-params");

const createProjectService = async (data) => {
    try {
        if (data.type === "EMPTY-PROJECT") {
            // dùng để tạo project
            return await Project.create(data);
        }
        if (data.type === "ADD-USERS") {
            // dùng để thêm người dùng vào project
            let myProject = await Project.findById(data.projectId).exec();
            myProject.usersInfor.push(...data.userArr);
            return await myProject.save();
        }
        if (data.type === "REMOVE-USERS") {
            // dùng để xóa người dùng ra khỏi project, muốn xóa người dùng ra khỏi project chỉ cần ghi đè lại nó và loại nó ra khỏi data trong lúc ghi đè là được
            let myProject = await Project.findById(data.projectId).exec();
            console.log("myProject", myProject);
            const aaa = myProject.usersInfor.pull(...data.userArr);
            console.log("aaa", aaa);

            return await myProject.save();
        }
    } catch (error) {
        console.log("error", error);
        return null;
    }
};

const getProject = async (queryString) => {
    const page = queryString.page;
    const { filter, limit } = aqp(queryString);
    delete filter.page;
    try {
        let offset = (page - 1) * limit;
        return await Project.find(filter)
            .populate(queryString.populate)
            .skip(offset)
            .limit(limit)
            .exec();
    } catch (error) {
        console.log("error", error);
        return null;
    }
};

module.exports = {
    createProjectService,
    getProject,
};
