"use strict";
var GoldenerHerbstClasses;
(function (GoldenerHerbstClasses) {
    function drawLeaf(_color) {
        let canvas = document.querySelector("canvas");
        let leaves = new Path2D();
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        GoldenerHerbstClasses.crc2.moveTo(0, 0);
        leaves.arc(x, y, 30, 500, 50 * Math.PI);
        GoldenerHerbstClasses.crc2.fillStyle = "#af4933";
        GoldenerHerbstClasses.crc2.rotate(Math.random() * 360);
        GoldenerHerbstClasses.crc2.fill(leaves);
    }
    GoldenerHerbstClasses.drawLeaf = drawLeaf;
    function drawSquirrel() {
        GoldenerHerbstClasses.crc2.resetTransform();
        GoldenerHerbstClasses.crc2.save();
        //crc2.translate(_position.x, _position.y);
        GoldenerHerbstClasses.crc2.fillStyle = "#9a7847";
        //tail
        GoldenerHerbstClasses.crc2.save();
        GoldenerHerbstClasses.crc2.beginPath();
        GoldenerHerbstClasses.crc2.ellipse(-15, -30, 15, 25, 3, 10, 20);
        GoldenerHerbstClasses.crc2.closePath();
        GoldenerHerbstClasses.crc2.fill();
        GoldenerHerbstClasses.crc2.restore();
        //body
        GoldenerHerbstClasses.crc2.beginPath();
        GoldenerHerbstClasses.crc2.ellipse(5, -20, 10, 25, 10, 20, 40);
        GoldenerHerbstClasses.crc2.closePath();
        GoldenerHerbstClasses.crc2.fill();
        //arm
        GoldenerHerbstClasses.crc2.beginPath();
        GoldenerHerbstClasses.crc2.ellipse(20, -20, 3, 6, 2, 10, 20);
        GoldenerHerbstClasses.crc2.closePath();
        GoldenerHerbstClasses.crc2.fill();
        //leg
        GoldenerHerbstClasses.crc2.beginPath();
        GoldenerHerbstClasses.crc2.ellipse(-4, -1, 4.5, 18, 1.7, 20, 40);
        GoldenerHerbstClasses.crc2.closePath();
        GoldenerHerbstClasses.crc2.fill();
        //head
        GoldenerHerbstClasses.crc2.beginPath();
        GoldenerHerbstClasses.crc2.ellipse(17, -40, 8, 10, 2, 20, 40);
        GoldenerHerbstClasses.crc2.closePath();
        GoldenerHerbstClasses.crc2.fill();
        //eye
        var rEye = 2;
        GoldenerHerbstClasses.crc2.fillStyle = "#000000"; //ohr wird auch schwarz
        GoldenerHerbstClasses.crc2.beginPath();
        GoldenerHerbstClasses.crc2.arc(20, -40, rEye, 0, 2 * Math.PI);
        GoldenerHerbstClasses.crc2.lineWidth = 1;
        GoldenerHerbstClasses.crc2.closePath();
        GoldenerHerbstClasses.crc2.fill();
        //ear
        GoldenerHerbstClasses.crc2.fillStyle = "#9a7847";
        GoldenerHerbstClasses.crc2.beginPath();
        GoldenerHerbstClasses.crc2.moveTo(10, -45);
        GoldenerHerbstClasses.crc2.lineTo(15, -60);
        GoldenerHerbstClasses.crc2.lineTo(13, -40);
        GoldenerHerbstClasses.crc2.closePath();
        GoldenerHerbstClasses.crc2.fill();
    }
    GoldenerHerbstClasses.drawSquirrel = drawSquirrel;
})(GoldenerHerbstClasses || (GoldenerHerbstClasses = {}));
//# sourceMappingURL=Paths.js.map