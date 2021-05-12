const manager = require("../lib/manager");


describe("Manager", () => {

    it("Creates new manager with name,id,email and officenumber when receives name,id,email and officenumber ", () => {

        expect(new manager("kshetri", "001", "kshetri@email.com", "04123456"))
            .toEqual({ name: "kshetri", id: "001", email: "kshetri@email.com", officenumber: "04123456" });
    });

    it("Returns manager name when call getname()", () => {
        const Newmanager = new manager("kshetri", "001", "kshetri@email.com", "04123456");
        expect(Newmanager.getName()).toEqual('kshetri');

    });

    it("Returns manager id when call getId()", () => {
        const Newmanager = new manager("kshetri", "001", "kshetri@email.com", "04123456");
        expect(Newmanager.getId()).toEqual('001');

    });

    it("Returns manager email when call getEmail()", () => {
        const Newmanager = new manager("kshetri", "001", "kshetri@email.com", "04123456");
        expect(Newmanager.getEmail()).toEqual('kshetri@email.com');

    });

    it("Returns 'Manager'  when call getRole()", () => {
        const Newmanager = new manager("kshetri", "001", "kshetri@email.com", "04123456");
        expect(Newmanager.getRole()).toEqual('Manager');

    });




});