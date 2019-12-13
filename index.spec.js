require("jasmine")
var add=require("./index.js")

//test suits
describe("Mon example de test Nodejs", function(){

    //test case
    it("should return 2 when adding +1", function(){
        let actual=add(5,5);
        let expected=10
        expect(actual).toBe(expected)
    });
});