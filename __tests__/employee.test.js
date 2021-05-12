const employee = require('../lib/employee');

describe("Employee", () => {

    it('Creates new employee with name,id,email when receives name,id,email  ', () => {

        expect(new employee("sar", "003", "hey@email.com"))
            .toEqual({ name: "sar", id: "003", email: "hey@email.com" });
    });

    it("Returns employee name when call getname()", () => {
        const NewEmp = new employee("sar", "003", "hey@email.com");
        expect(NewEmp.getName()).toEqual('sar');

    });

    it("Returns employee id when call getId()", () => {
        const NewEmp = new employee("sar", "003", "hey@email.com");
        expect(NewEmp.getId()).toEqual('003');

    });

    it("Returns employee email when call getEmail()", () => {
        const NewEmp = new employee("sar", "003", "hey@email.com");
        expect(NewEmp.getEmail()).toEqual('hey@email.com');

    });

    it("Returns 'Employee'  when call getRole()", () => {
        const NewEmp = new employee("sar", "003", "hey@email.com");
        expect(NewEmp.getRole()).toEqual('Employee');

    });

})