

const prettier = require('prettier');

function generateTeam(employees) {

    if (employees === undefined) return "";

    const employeecards = employees.map((employee) => {

        if (employee.getRole() === 'Manager') {
            const employeeCard = prettier.format(
                `
            <div class="card col-sm-10 col-md-6 col-lg-2 mr-2 mb-3 p-0 ">
                <div class="card-header bg-primary">
                    <h4>${employee.name}</h4>
                    <p>${employee.getRole()} </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: ${employee.email}</li>
                    <li class="list-group-item">OfficeNumber: ${employee.officenumber}</li>
                </ul>
            </div>
            
            `, { parser: "html", }
            );

            return employeeCard;
        }
        if (employee.getRole() === 'Engineer') {
            const employeeCard = prettier.format(
                `
            <div class="card col-sm-10 col-md-6 col-lg-2 mr-2 mb-3 p-0 ">
                <div class="card-header bg-primary">
                    <h4>${employee.name}</h4>
                    <p>${employee.getRole()} </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: ${employee.email}</li>
                    <li class="list-group-item">GitHub:<a href= "https://github.com/${employee.githubUsername}" target="_blank">  ${employee.githubUsername} </a></li>
                </ul>
            </div>
            
            `, { parser: "html", }

            );

            return employeeCard;
        }
        if (employee.getRole() === 'Intern') {
            const employeeCard = prettier.format(
                `
            <div class="card col-sm-10 col-md-6 col-lg-2 mr-2 mb-3 p-0 ">
                <div class="card-header bg-primary">
                    <h4>${employee.name}</h4>
                    <p>${employee.getRole()} </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: ${employee.email}</li>
                    <li class="list-group-item">School: ${employee.school}</li>
                </ul>
            </div>
            
            `, { parser: "html", }

            );

            return employeeCard;
        }

    });

    return employeecards.join("");

}


module.exports = generateTeam;