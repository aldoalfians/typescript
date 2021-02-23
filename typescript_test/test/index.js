"use strict";
exports.__esModule = true;
exports.url = void 0;
var axios_1 = require("axios");
exports.url = "http://jsonplaceholder.typicode.com/todos/1";
axios_1["default"]
    .get(exports.url)
    .then(function (response) {
    var todo = response.data;
    var ID = todo.id;
    var Title = todo.title;
    var Finished = todo.completed;
    // RESULT UNDEFINED
    // const ID = todo.ID; // undefined agar tidak undefined kita interface terlebih dahulu
    // const title = todo.Title; // undefined agar tidak undefined kita interface terlebih dahulu
    // const finished = todo.Finished; // undefined agar tidak undefined kita interface terlebih dahulu
    console.log("The Todo with ID: " + ID + ",\n       Has a title of: " + Title + ",\n       Is it finished? " + Finished + " ");
})["catch"](function (err) {
    console.log("someting went worng");
});
