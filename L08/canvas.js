"use strict";
var L08_Canvas;
(function (L08_Canvas) {
    // Zeitnot in dieser Woche, daher etwas ungenaues auf Blatt geschriebenes Diagramm und nicht vollständiger Code. Teile by Luzia und Nelly
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    window.addEventListener("load", start);
    function start() {
        background();
        humanCell({ x: 150, y: 150 }, { x: 300, y: 130 });
        antibody({ x: 200, y: 450 }, { x: 50, y: 50 });
        particles({ x: 200, y: 450 }, { x: 375, y: 550 });
        killerCell({ x: 200, y: 450 }, { x: 375, y: 550 });
        virus({ x: 200, y: 450 }, { x: 375, y: 550 });
    }
    function background() {
        //backgroundpattern
        let pattern = document.createElement('canvas').getContext('2d');
        pattern.canvas.width = 80;
        pattern.canvas.height = 40;
        pattern.fillStyle = "#f3eee8";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(40, 0);
        pattern.lineTo(60, 0);
        pattern.lineTo(80, 20);
        pattern.lineTo(60, 40);
        pattern.lineTo(40, 40);
        pattern.lineTo(20, 20);
        pattern.stroke();
        //Zellkern
        pattern.beginPath();
        pattern.arc(50, 20, 2, 0, 2 * Math.PI);
        pattern.fillStyle = "#8cb0ae";
        pattern.fill();
        pattern.beginPath();
        pattern.arc(10, 2, 2, 0, 2 * Math.PI);
        pattern.fillStyle = "#8cb0ae";
        pattern.fill();
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
    function humanCell(_position, _size) {
        let r1 = 1;
        let r2 = 30;
        let count = 4;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        particle.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "#a2798f");
        gradient.addColorStop(0.3, "white");
        gradient.addColorStop(0.8, "#dfdfde");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < count; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function virus(_position, _size) {
        let r = 30;
        let count = 4;
        let particle = new Path2D();
        particle.arc(0, 0, r, 0, 2 * Math.PI);
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "grey";
        for (let drawn = 0; drawn < count; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function antibody(_position, _size) {
        let particle = new Path2D();
        let count = 3;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.rotate(Math.random() * 360);
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 24);
        crc2.strokeStyle = "#363b74";
        crc2.lineWidth = 3;
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(0, 36, 12, 0, 1 * Math.PI, true);
        crc2.stroke();
        for (let drawn = 0; drawn < count; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function particles(_position, _size) {
        let r1 = 1;
        let r2 = 5;
        let count = 100;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        particle.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "#fff5ee");
        gradient.addColorStop(0.5, "#faebd7");
        gradient.addColorStop(0.9, "#faebd7");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < count; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function killerCell(_position, _size) {
        let count = 5;
        let killerCell = new Path2D();
        crc2.beginPath();
        killerCell.arc(20, 20, 20, 0, 2 * Math.PI);
        killerCell.moveTo(30, 30);
        killerCell.lineTo(10, 10);
        killerCell.moveTo(30, 10);
        killerCell.lineTo(10, 30);
        killerCell.closePath();
        crc2.fillStyle = "#aec8ce";
        crc2.fill();
        crc2.stroke();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        for (let i = 0; i < count; i++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(killerCell);
            crc2.restore();
        }
        crc2.restore();
    }
})(L08_Canvas || (L08_Canvas = {}));
//# sourceMappingURL=canvas.js.map