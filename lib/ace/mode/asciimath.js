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
    this.$rules = {
        "start": [
            { token: "keyword.operator", regex: /\+|\-|\*|cdot|\*\*|ast|\*\*\*|star|\/\/|\\\\|backslashsetminus|xx|times|\-\:|div|\|\>\<|ltimes|\>\<\||rtimes|\|\>\<\||bowtie|\@|circ|o\+|oplus|ox|otimes|o\.|odot|sum|prod|\^\^|wedge|\^\^\^|bidwedge|vv|vee|vvv|bigvee|nn|cap|nnn|bigcap|uu|cup|uuu|bigcup|2\/3|frac\{2\}\{3\}|2\^3|sqrt|root\(3\)|int|oint|del|partial|grad|nabla|\+\-|pm|O\/|emptyset|oo|infty|aleph|\:\.|therefore|\:\'|because|\|\.\.\.\||\|ldots\||\|cdots\||vdots|ddots|\|\\\ \||\|quad\||\/_|angle|frown|\/_\\|triangle|diamond|square|\|__|lfloor|__\||rfloor|\|\~|lceiling|\~\||rceiling|CC|NN|QQ|RR|ZZ|\=|\!\=|ne|\<|lt|\>|gt|\<\=|le|\>\=|ge|\-\<|prec|\-\<\=|preceq|\>\-|succ|\>\-\=|succeq|in|\!in|notin|sub|subset|sup|supset|sube|subseteq|supe|supseteq|\-\=|equiv|\~\=|cong|\~\~|approx|prop|propto|and|or|not|neg|\=\>|implies|if|\<\=\>|iff|AA|forall|EE|exists|_\|_|bot|TT|top|\|\-\-|vdash|\|\=\=|models|\(|\)|\[|\]|\{|\}|\(\:|langle|\:\)|rangle|\<\<|\>\>|abs|floor|ceil|norm|uarr|uparrow|darr|downarrow|rarr|rightarrow|\-\>|to|\>\-\>|rightarrowtail|\-\>\>|twoheadrightarrow|\>\-\>\>|twoheadrightarrowtail|\|\-\>|mapsto|larr|leftarrow|harr|leftrightarrow|rArr|Rightarrow|lArr|Leftarrow|hArr|Leftrightarrow|hat|bar|overline|ul|underline|vec|ddot|dot|overset|underset|ubrace|obrace|underbrace|overbrace|color|cancel/ },
            { token: "comment.block", regex: /text\(.*?\)/ },
            { token: "comment.block", regex: /".*?"/ },
            { token: "constant.numeric", regex: /[0-9]+(?:\.[0-9]+)?/ }
        ],
    };
};

oop.inherits(AsciiMathHighlightRules, TextHighlightRules);

exports.AsciiMathHighlightRules = AsciiMathHighlightRules;
});

// vim: shiftwidth=4 softtabstop=4 tabstop=4
