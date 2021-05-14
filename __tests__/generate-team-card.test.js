const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

const prettier = require('prettier');
const generateTeam = require('../lib/generate-team-card');


describe("generate-cards", () => {


    it("Returns empty when no employee details provided", () => {
        expect(generateTeam()).toEqual("");
    });

    it("Create card when employee provide with  employee detail", () => {
        const empManager = new Manager("managerSahab", "1", "manager@email.com", "0412345");
        const expected = prettier.format(`
            <div class="card col-sm-10 col-md-6 col-lg-2 mr-2 mb-3 p-0 ">
                <div class="card-header bg-primary">
                    <h4>managerSahab</h4>
                    <p> Manager </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: 1 </li>
                    <li class="list-group-item">Email:<a href="mailto:manager@email.com" target="_blank" > manager@email.com</a></li>
                    <li class="list-group-item">OfficeNumber: 0412345</li>
                </ul>
            </div>
            `,
            { parser: "html", });
        expect(generateTeam([empManager])).toEqual(expected);

    })
})


