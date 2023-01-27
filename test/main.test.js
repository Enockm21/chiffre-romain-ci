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
    it("should return 4", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(4), "IV");
    });
    it("should return 5", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(5), "V");
    });
    it("should return 6", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(6), "VI");
    });
    it("should return 7", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(7), "VII");
    });
    it("should return 8", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(8), "VIII");
    });
    it("should return 9", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(9), "IX");
    });
    it("should return 10", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(10), "X");
    });
    it("should return 11", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(11), "XI");
    });
});