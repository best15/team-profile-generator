const engineer = require("../lib/engineer");

describe("Engineer", () => {

    it("Creates new engineer with name,id,email and github username when receives name,id,email and github Username ", () => {

        expect(new engineer("sam", "002", "sam@email.com", "sam-git"))
            .toEqual({ name: "sam", id: "002", email: "sam@email.com", githubUsername: "sam-git" });
    });

    it("Returns engineer name when call getname()", () => {
        const NewEngineer = new engineer("sam", "002", "sam@email.com", "sam-git");
        expect(NewEngineer.getName()).toEqual('sam');

    });

    it("Returns engineer id when call getId()", () => {
        const NewEngineer = new engineer("sam", "002", "sam@email.com", "sam-git");
        expect(NewEngineer.getId()).toEqual('002');

    });

    it("Returns engineer email when call getEmail()", () => {
        const NewEngineer = new engineer("sam", "002", "sam@email.com", "sam-git");
        expect(NewEngineer.getEmail()).toEqual('sam@email.com');

    });

    it("Returns engineer github username  when call getGithub()", () => {
        const NewEngineer = new engineer("sam", "002", "sam@email.com", "sam-git");
        expect(NewEngineer.getGithub()).toEqual('sam-git');

    });

    it("Returns 'Engineer'  when call getRole()", () => {
        const NewEngineer = new engineer("sam", "002", "sam@email.com", "sam-git");
        expect(NewEngineer.getRole()).toEqual('Engineer');

    });




});