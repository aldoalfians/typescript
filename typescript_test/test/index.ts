import axios from "axios";

export const url = "http://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(url)
  .then((response) => {
    const todo = response.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    // RESULT UNDEFINED
    // const ID = todo.ID; // undefined agar tidak undefined kita interface terlebih dahulu
    // const title = todo.Title; // undefined agar tidak undefined kita interface terlebih dahulu
    // const finished = todo.Finished; // undefined agar tidak undefined kita interface terlebih dahulu

    // Error, title menjadi boolean karena posisi title tidak ditempat posisi aslinya
    // logTodo(id, completed, title);
    // Error, title menjadi boolean karena posisi title tidak ditempat posisi aslinya

    // Correct
    logTodo(id, title, completed);
  })
  .catch((err) => {
    console.log("someting went worng");
  });

// catching more Error
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id},
    Has a title of: ${title},
    Is it finished? ${completed} 
    `);
};
