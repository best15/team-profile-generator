const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

const generateTeam = require('../lib/generate-team.js');

let employees = [];

// employees = new Manager("Manager", "01", "manager@email.com");

describe("generate-team", () => {

    it("generates empty team cards when no employee provided", () => {
        expect(generateTeam(employees)).toMatchSnapshot();

    });

});