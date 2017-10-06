var Wowzasdk = require("nativescript-wowzasdk").Wowzasdk;
var wowzasdk = new Wowzasdk();

describe("greet function", function() {
    it("exists", function() {
        expect(wowzasdk.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(wowzasdk.getSimpleName()).toEqual("WowzaGoCoder");        
    }); 
});

