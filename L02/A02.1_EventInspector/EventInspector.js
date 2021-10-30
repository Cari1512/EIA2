"use strict";
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("customEvent", handlerFunction);
        let btn = document.querySelector("button");
        let event = new CustomEvent("CustomEvent", { bubbles: true, detail: { someKey: "hello" } });
        btn.dispatchEvent(event);
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        let body = document.querySelector("body");
        body.addEventListener("keyup", logInfo);
        body.addEventListener("click", logInfo);
        let div = document.querySelector("div");
        div.addEventListener("keyup", logInfo);
        div.addEventListener("click", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.pageX;
        let y = _event.pageY;
        let position = document.querySelector("span");
        let mouseTarget = _event.target;
        let targetName = mouseTarget.localName;
        position.innerHTML = " target: " + targetName + " " + "<br>" + " x: " + x + "<br>" + " y: " + y;
        position.style.left = x + 7 + "px";
        position.style.top = y + 12 + "px";
    }
    function logInfo(_event) {
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    function handlerFunction(_event) {
        console.log(_event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map