(function prep() {
    "use strict";
    var node = {
        child = require("child_process").exec
    };
    node.child("git clone git@github.com:prettydiff/biddle.git", function prep_clone(cer, stdcout, stdcer) {
        if (cer !== null) {
            return console.log(cer);
        }
        if (stdcer !== null && stdcer !== "") {
            return console.log(stdcer);
        }
        node.child("node biddle global", {cwd:"biddle"}, function prep_clone_global(ger, stdgout, stdger) {
            if (ger !== null) {
                return console.log(ger);
            }
            if (stdger !== null && stdger !== "") {
                return console.log(stdger);
            }
            node.child("biddle install http://prettydiff.com/downloads/jslint/jslint_latest.zip", function prep_clone_global_install(ier, stdiout, stdier) {
                var test = require("./lint.js");
                if (ier !== null) {
                    return console.log(ier);
                }
                if (stdier !== null && stdier !== "") {
                    return console.log(stdier);
                }
                test();
                return stdiout;
            });
            return stdgout;
        });
        return stdcout;
    });
}());