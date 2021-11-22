/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", window.users);
console.log("todos: ", window.todos);

let inputLetter = prompt("Enter a letter:");
if(Number(inputLetter)){
    alert("Please enter a letter");
}else{
    let usersNames = findUsersName(users,inputLetter);
    console.log(usersNames)
    greetUser(usersNames);
}



let userId = Number(prompt("Enter your ID: "));
if(isNaN(userId) || userId === null){
    alert("Please enter a valid input number.")
}else if(getIncompletedTodosTitle(todos,userId).length === 0){
    alert("This ID does not exist.")
}
else{
    console.log(getIncompletedTodosTitle(todos,userId));
}


//Greets a user every 2 sec
function greetUser(usersNames){
    let variable = usersNames.length;
    const intervalID = setInterval(function(){
    console.log("Hello "+usersNames[variable-1]);
    variable--;
    if(variable<1){
        clearInterval(intervalID);
    }
    },2000)
}

//Returns an array with the names of the users which contain a specific letter
function findUsersName(users,inputLetter){
    let usersNames  = users.filter(function(user){
    if(user['name'].includes(inputLetter.toUpperCase()) || user['name'].includes(inputLetter.toLowerCase()) )
    return true;
    })
    .map(function(user){
    return user.name;
    });
    return usersNames;
}
//Returns an array of titles of all the incompleted todos for a specific user
function getIncompletedTodosTitle(todos,userId){
    let userTodos = todos.filter(function(todo){
        if(todo['userId'] === userId)
        return todo.completed === false;
      
    })
    .map(function(todo){
        return todo.title;
    })
    return userTodos;
}