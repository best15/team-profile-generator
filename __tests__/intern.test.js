const intern = require("../lib/intern");

describe("Intern", () => {

    it("Creates new intern with name,id,email and school when receives name,id,email and school ", () => {

        expect(new intern("sun", "004", "sun@email.com", "SWA"))
            .toEqual({ name: "sun", id: "004", email: "sun@email.com", school: "SWA" });
    });

    it("Returns intern name when call getname()", () => {
        const NewIntern = new intern("sun", "004", "sun@email.com", "SWA");
        expect(NewIntern.getName()).toEqual('sun');

    });

    it("Returns intern id when call getId()", () => {
        const NewIntern = new intern("sun", "004", "sun@email.com", "SWA");
        expect(NewIntern.getId()).toEqual('004');

    });

    it("Returns intern email when call getEmail()", () => {
        const NewIntern = new intern("sun", "004", "sun@email.com", "SWA");
        expect(NewIntern.getEmail()).toEqual('sun@email.com');

    });

    it("Returns intern school  when call getschool()", () => {
        const NewIntern = new intern("sun", "004", "sun@email.com", "SWA");
        expect(NewIntern.getschool()).toEqual('SWA');

    });

    it("Returns 'Intern'  when call getRole()", () => {
        const NewIntern = new intern("sun", "004", "sun@email.com", "SWA");
        expect(NewIntern.getRole()).toEqual('Intern');

    });




});