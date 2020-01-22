const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function generateHTML(team) {
    console.log("team", team);

    const createManagerCard = (manager) => `
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">Manager</div>
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <div class="card">
                <ul class="list-group list-group-flush text-body">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: ${manager.email}</li>
                    <li class="list-group-item">Office #: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>`;

    const createEngineerCard = (engineer) => `
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Engineer</div>
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <div class="card">
                <ul class="list-group list-group-flush text-body">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: ${engineer.email}</li>
                    <li class="list-group-item">GitHub: ${engineer.github}</li>
                </ul>
            </div>
        </div>
    </div>`;

    const createInternCard = (intern) => `
    <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">Intern</div>
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <div class="card">
                <ul class="list-group list-group-flush text-body">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: ${intern.email}</li>
                    <li class="list-group-item">Education: ${intern.school}</li>
                </ul>
            </div>
        </div>
    </div>`;

    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Generator</title>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">My Team</h1>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-6">
                ${createManagerCard(team[0])}
            </div>
            <div class="col-md-4 col-sm-6">
                ${createEngineerCard(team[1])}
            </div>
            <div class="col-md-4 col-sm-6">
                ${createInternCard(team[2])}
            </div>
        </div>
    </div>
</body>
</html>
    `;

    console.log(html);
}

// generateHTML([new Manager('mario', 123, 'harpmari12@gmail.com', 123), new Engineer('andy', 456, 'andyb@gmail.com', 654), new Intern('jordan', 789, 'jordanh@gmail.com', 987)]);

module.exports = generateHTML;
