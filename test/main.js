var assert = require('assert');
const ConvertisserNombresRomains = require("../app/ConvertisseurNombresRomains.js")


describe("integration test", function() {
    it("should return 1", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(1), "I");
    });
    it("should return 2", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(2), "II");
    });
    it("should return 3", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(3), "III");
    });
});