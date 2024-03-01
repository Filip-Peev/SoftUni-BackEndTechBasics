describe("myDescription", () => {
    before(() => {
        console.log('I am before.');
    })
    after(() => {
        console.log('I am after.');
    })
    beforeEach(() => {
        console.log('I am BeforeEach.');
    })
    afterEach(() => {
        console.log('I am AfterEach.');
    })
    describe("nestedDescription", () => {


        it("test1", () => {



        })
        it("test2", () => {



        })
        it("test3", () => {



        })
    })

    it("test1", () => {



    })
    it("test2", () => {



    })
    it("test3", () => {



    })
})