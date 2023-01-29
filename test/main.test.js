var assert = require('assert');
const ConvertisserNombresRomains = require("../app/ConvertisseurNombresRomains.js")


describe("Unit test", function() {
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
    it("should return 12", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(12), "XII");
    });
    it("should return 13", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(13), "XIII");
    });
    it("should return 14", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(14), "XIV");
    });
    it("should return 15", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(15), "XV");
    });
    it("should return 16", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(16), "XVI");
    });
    it("should return 17", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(17), "XVII");
    });
    it("should return 18", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(18), "XVIII");
    });
    it("should return 19", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(19), "XIX");
    });
    it("should return 20", function() {
        assert.strictEqual(ConvertisserNombresRomains.convertir(20), "XX");
    });
});