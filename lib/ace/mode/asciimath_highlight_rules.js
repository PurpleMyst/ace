define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var AsciiMathHighlightRules = function() {
// regexp must not have capturing parentheses. Use (?:) instead.
// regexps are ordered -> the first match is used
    this.$rules = {
        "start": [
            { "token": "keyword", regexp: /sqrt/ },
            { "token": "identifier", regexp: /[A-za-z]/ },
        ]
    };
};

oop.inherits(AsciiMathHighlightRules, TextHighlightRules);

exports.AsciiMathHighlightRules = AsciiMathHighlightRules;

});

// vim: set shiftwidth=4 softtabstop=4 tabstop=4 expandtab:
