var ourLostTrees;
(function (ourLostTrees) {
    window.addEventListener("DOMContentLoaded", hndLoad);
    var startSpan;
    function hndLoad() {
        startSpan = document.querySelector(".overlay");
        startSpan.addEventListener("pointerdown", hndStart);
    }
    function hndStart(_event) {
        var body = document.querySelector("body");
        startSpan = document.querySelector(".overlay");
        startSpan.innerHTML = "";
    }
})(ourLostTrees || (ourLostTrees = {}));
