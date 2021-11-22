require("./src/db/mongoose");
const User = require("./src/models/user");
const Task = require("./src/models/task");

/* Using Promise Chaining Approach */
User.findByIdAndUpdate("6187b8997a2ae35f524c15cd", { $set: { age: 34 } })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 34 });
  })
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });

/* Using Async/Await Syntax */
const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return { user, count };
};

updateAgeAndCount("6187a85ef68dc446dccc863f", 34)
  .then((result) => {
    console.log(result.user);
    console.log(result.count);
  })
  .catch((error) => {
    console.log(error);
  });

/* ----------------------------------------------------- */

/* Using Promise Chaining Approach */
Task.findByIdAndDelete("6187cf2e5fa55d9d08877d64")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });

/* Using Async/Await Syntax */
const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return { task, count };
};

deleteTaskAndCount("61879c818a6dcf16c13ed2be")
  .then((result) => {
    console.log(result.task);
    console.log(result.count);
  })
  .catch((error) => {
    console.log(error);
  });
