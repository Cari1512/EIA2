"use strict";
var L11;
(function (L11) {
    let canvas = document.querySelector("canvas");
    L11.crc2 = canvas.getContext("2d");
    let cell = [];
    window.addEventListener("load", start);
    function start() {
        background();
        window.setInterval(update, 20);
        //humanCell({x: 150, y: 150}, {x: 300, y: 130});
        // antibody({x: 200, y: 450}, {x: 50, y: 50});
        // killerCell({x: 200, y: 450}, {x: 375, y: 550});
        //createvirus(10);
        createCell();
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
        L11.crc2.fillStyle = L11.crc2.createPattern(pattern.canvas, "repeat");
        L11.crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
    function update() {
        L11.crc2.fillRect(0, 0, L11.crc2.canvas.width, L11.crc2.canvas.height);
        for (let Cell of cell) {
            Cell.move(1 / 20);
            Cell.draw();
        }
    }
    // function humanCell(_position: Vectorbackup, _size: Vectorbackup): void{
    //     let r1: number = 1;
    //     let r2: number = 30;
    //     let count: number = 4;
    //     let particle: Path2D = new Path2D();
    //     let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
    //     particle.arc(0, 0, r2, 0, 2 * Math.PI);
    //     gradient.addColorStop(0, "#a2798f");
    //     gradient.addColorStop(0.3, "white"); 
    //     gradient.addColorStop(0.8, "#dfdfde");
    //     crc2.save();
    //     crc2.translate(_position.x, _position.y);
    //     crc2.fillStyle = gradient;
    //     for (let drawn: number = 0; drawn < count; drawn++) {
    //         crc2.save();
    //         let x: number = (Math.random() - 0.5) * _size.x;
    //         let y: number = - (Math.random() * _size.y);
    //         crc2.translate(x, y);
    //         crc2.fill(particle);
    //         crc2.restore();
    //     }
    //     crc2.restore();
    // }
    // function createvirus(_nVirus: number): void{
    //     for (let i: number = 0; i < _nVirus; i++) {
    //         let virus: Virus = new Virus(1.0);
    //         cell.push(virus);
    //     }
    //     crc2.restore();
    // }
    // function antibody(_position: Vector, _size: Vector): void {
    //     let particle: Path2D = new Path2D();
    //     let count: number = 3;
    //     crc2.save();
    //     crc2.translate(_position.x, _position.y);
    //     crc2.beginPath();
    //     crc2.rotate(Math.random() * 360);
    //     crc2.moveTo(0, 0);
    //     crc2.lineTo(0, 24);
    //     crc2.strokeStyle = "#363b74"
    //     crc2.lineWidth = 3;
    //     crc2.stroke();
    //     crc2.closePath();
    //     crc2.beginPath();
    //     crc2.arc(0, 36, 12, 0, 1 * Math.PI, true);
    //     crc2.stroke();
    //     for (let drawn: number = 0; drawn < count; drawn++) {
    //         crc2.save();
    //         let x: number = (Math.random() - 0.5) * _size.x;
    //         let y: number = - (Math.random() * _size.y);
    //         crc2.translate(x, y);
    //         crc2.fill(particle);
    //         crc2.restore();
    //     }
    //     crc2.restore();
    // }
    function createCell() {
        let x;
        let y;
        let nVirus = 20;
        let nParticle = 50;
        //Virus
        for (let i = 0; i < nVirus; i++) {
            x = (Math.random() * canvas.width);
            y = (Math.random() * canvas.height);
            let position = new L11.Vector(x, y);
            let virus = new L11.Virus(position);
            virus.draw;
            cell.push(virus);
        }
        L11.crc2.restore();
        //Particle
        for (let i = 0; i < nParticle; i++) {
            x = (Math.random() * canvas.width);
            y = (Math.random() * canvas.height);
            let position = new L11.Vector(x, y);
            let particle = new L11.Particle(position);
            particle.draw;
            cell.push(particle);
        }
        L11.crc2.restore();
    }
})(L11 || (L11 = {}));
//# sourceMappingURL=main.js.map