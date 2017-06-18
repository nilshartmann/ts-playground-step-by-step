"use strict";
function interfaces() {
    // Basic interface
    var susi = { name: 'Susi', language: 'TypeScript' };
    var Logger = (function () {
        function Logger() {
        }
        Logger.prototype.audit = function () { };
        return Logger;
    }());
    var ExtendedLogger = (function () {
        function ExtendedLogger() {
        }
        ExtendedLogger.prototype.audit = function () { };
        return ExtendedLogger;
    }());
}
