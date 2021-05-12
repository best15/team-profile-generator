const intern = require("../lib/intern");

describe("Intern", () => {

    it("Creates new intern with name,id,email and school when receives name,id,email and school ", () => {

        expect(new intern("sun", "004", "sun@email.com", "SWA"))
            .toEqual({ name: "sun", id: "004", email: "sun@email.com", school: "SWA" });
    });

    // it("Returns engineer name when call getname()", () => {
    //     const NewEngineer = new engineer("sam", "002", "sam@email.com", "sam-git");
    //     expect(NewEngineer.getName()).toEqual('sam');

    // });

    // it("Returns engineer id when call getId()", () => {
    //     const NewEngineer = new engineer("sam", "002", "sam@email.com", "sam-git");
    //     expect(NewEngineer.getId()).toEqual('002');

    // });

    // it("Returns engineer email when call getEmail()", () => {
    //     const NewEngineer = new engineer("sam", "002", "sam@email.com", "sam-git");
    //     expect(NewEngineer.getEmail()).toEqual('sam@email.com');

    // });

    // it("Returns engineer github username  when call getGithub()", () => {
    //     const NewEngineer = new engineer("sam", "002", "sam@email.com", "sam-git");
    //     expect(NewEngineer.getGithub()).toEqual('sam-git');

    // });

    // it("Returns 'Engineer'  when call getRole()", () => {
    //     const NewEngineer = new engineer("sam", "002", "sam@email.com", "sam-git");
    //     expect(NewEngineer.getRole()).toEqual('Engineer');

    // });




});