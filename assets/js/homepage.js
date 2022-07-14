var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var getUserRepos = function(user) {
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            
        });
    });
};

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
}

userFormEl.addEventListener("submit", formSubmitHandler);