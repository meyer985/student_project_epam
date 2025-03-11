

describe('First test', ()=>{
    it('shuld return true for 1 === 1', ()=>{
        const testvariable = 1
        expect(testvariable) === 1
    }),

    it ('shuld return false for "EPAM" === "EPUM"', () => {
        const testString = "EPAM";
        expect("EPUM").toBe(testString)
    })


})