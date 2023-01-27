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
        assert.strictEqual(ConvertisserNombresRomains.convertir(7), "VI");
    });
});