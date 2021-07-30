function newTask (title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? ' ' : " not "}been completed`);
    },

    markCompleted: function() {
      task.complete = true;
    }
  };
  return task;
}

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskComplete.push(false);
// }


// function newTask(title, description) {
//   taskTitles.push(title);
//   taskDescriptions.push(description);
//   taskComplete.push(false);
// }

// DRIVER CODE BELOW

const task1 = newTask('Clean Cat Litter', 'Take all the 💩 out of the litter box');
const task2 = newTask('Do Laundry', "😨");
const tasks = [task1, task2];
// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);
