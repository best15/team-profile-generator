const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

const generateHtml = require('../lib/generate-html.js');


describe("generate-html", () => {

    it("generates empty html page when no employee provided", () => {
        expect(generateHtml([])).toMatchSnapshot();
    });

    it("generates html with employee cards when employee detail is provided", () => {

        const empManager = new Manager("kshetri", "001", "kshetri@email.com", "04123456");
        const NewEngineer = new Engineer("sam", "002", "sam@email.com", "sam-git");
        const NewIntern = new Intern("sun", "004", "sun@email.com", "SWA");
        expect(generateHtml([empManager], [NewEngineer], [NewIntern])).toMatchSnapshot();
    });



});