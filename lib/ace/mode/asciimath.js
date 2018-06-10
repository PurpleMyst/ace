define("ace/mode/asciimath", function(require, exports, module) {

var oop = require("ace/lib/oop");
var TextMode = require("ace/mode/text").Mode;
var AsciiMathHighlightRules = require("ace/mode/asciimath_highlight_rules").AsciiMathHighlightRules;

var Mode = function() {
    this.HighlightRules = AsciiMathHighlightRules;
};
oop.inherits(Mode, TextMode);

(function() {
    // Extra logic goes here. (see below)
}).call(Mode.prototype);

exports.Mode = Mode;
});

define('ace/mode/asciimath_highlight_rules', function(require, exports, module) {

var oop = require("ace/lib/oop");
var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

var AsciiMathHighlightRules = function() {
    // TODO: Flesh this out.
    this.$rules = {
        "start": [
            { token: "keyword.operator", regex: /sqrt/ }
        ]
    };
};

oop.inherits(AsciiMathHighlightRules, TextHighlightRules);

exports.AsciiMathHighlightRules = AsciiMathHighlightRules;
});

// vim: shiftwidth=4 softtabstop=4 tabstop=4
