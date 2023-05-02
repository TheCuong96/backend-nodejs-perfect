const Task = require("../models/task");
const aqp = require("api-query-params");

const createTaskService = async (data) => {
    try {
        if (data.type === "EMPTY-TASK") {
            // dùng để tạo task
            return await Task.create(data);
        }
        // if (data.type === "ADD-USERS") {
        //     // dùng để thêm người dùng vào task
        //     let myTask = await Task.findById(data.taskId).exec();
        //     myTask.usersInfor.push(...data.userArr);
        //     return await myTask.save();
        // }
        // if (data.type === "REMOVE-USERS") {
        //     // dùng để xóa người dùng ra khỏi task, muốn xóa người dùng ra khỏi task chỉ cần ghi đè lại nó và loại nó ra khỏi data trong lúc ghi đè là được
        //     let myTask = await Task.findById(data.taskId).exec();
        //     console.log("myTask", myTask);
        //     const aaa = myTask.usersInfor.pull(...data.userArr);
        //     console.log("aaa", aaa);

        //     return await myTask.save();
        // }
    } catch (error) {
        console.log("error", error);
        return null;
    }
};

const getTask = async (queryString) => {
    const page = queryString.page;
    const { filter, limit } = aqp(queryString);
    delete filter.page;
    try {
        let offset = (page - 1) * limit;
        return await Task.find(filter).skip(offset).limit(limit).exec();
    } catch (error) {
        console.log("error", error);
        return null;
    }
};

const updateTaskService = async (dataUpdate) => {
    try {
        return await Task.updateOne({ _id: dataUpdate.id }, { ...dataUpdate });
    } catch (error) {
        console.log("error", error);
        return null;
    }
};

const deleteTaskService = async (id) => {
    console.log("id", id);
    try {
        return await Task.deleteById(id); // deleteById là phương thức của mongoose-delete, ta phải dùng nó thì mới xóa mềm được, còn dùng của mongoose thì nó sẽ xóa thẳng vào data và mất luôn
    } catch (error) {
        console.log("error", error);
        return null;
    }
};
module.exports = {
    createTaskService,
    getTask,
    updateTaskService,
    deleteTaskService,
};
