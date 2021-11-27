"use strict";
var GoldenerHerbst;
(function (GoldenerHerbst) {
    //Berge, Wolken von Inverted Classroom
    //Tree insperation von "Learn HTML canvas by coding a JavaScript game | HTML Canvas tutorial for beginners" video https://www.youtube.com/watch?v=Ymbv6m3EuNw&t=618s
    // Eichhörnchen Insperation von Tetik, Asya 
    let crc2;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#6d8583");
        gradient.addColorStop(0.2, "#a3a796");
        // gradient.addColorStop(0.4, "#7b4732");
        gradient.addColorStop(0.4, "#573a2a");
        gradient.addColorStop(1, "#f0c499");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        drawCloud({ x: 1200, y: 100 }, { x: 325, y: 50 });
        drawMountain({ x: 0, y: 300 }, 75, 200, "grey", "white");
        drawMountain({ x: 0, y: 300 }, 50, 150, "grey", "lightgrey");
        drawTrees({ x: 600, y: 450 }, { x: 25, y: -75 }, 50, "#eb8526");
        drawTrees({ x: 500, y: 600 }, { x: 30, y: -90 }, 70, "#eb8526");
        drawTrees({ x: 900, y: 780 }, { x: 40, y: -100 }, 85, "#eb8526");
        drawTrees({ x: 1400, y: 400 }, { x: 15, y: -80 }, 30, "#eb8526");
        drawTrees({ x: 1500, y: 650 }, { x: 25, y: -75 }, 50, "#af4933");
        drawTrees({ x: 1000, y: 500 }, { x: 25, y: -75 }, 50, "#af4933");
        drawFrameTree({ x: 100, y: -100 }, 0, 200, 250);
        drawFrameTree({ x: 100, y: 150 }, 0, 200, 150);
        drawFrameTree({ x: 100, y: 290 }, 0, 200, 150);
        drawFrameTree({ x: 160, y: 420 }, 0, 200, 180);
        drawFrameTree({ x: 160, y: 550 }, 0, 200, 250);
        drawleavesRed({ x: 80, y: 15 });
        drawleavesRed({ x: 30, y: 50 });
        drawleavesOrange({ x: 80, y: 15 });
        drawSquirrel({ x: 500, y: 800 });
        drawSquirrel({ x: 1400, y: 700 });
        drawSquirrel({ x: 970, y: 500 });
    }
    function drawMountain(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawTrees(_position, _size, _radius, _colour) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.fillStyle = "#d0b49f";
        crc2.fillRect(0, 0, _size.x, _size.y);
        crc2.fillStyle = _colour;
        drawCircle(0, -100, _radius);
        drawCircle(-20, -120, _radius);
        drawCircle(-10, -140, _radius);
        drawCircle(12.5, -160, _radius);
        drawCircle(25, -100, _radius);
        drawCircle(40, -130, _radius);
        function drawCircle(_x, _y, _radius) {
            crc2.beginPath();
            crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
            crc2.fill();
        }
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 80;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(132, 6%, 83%, 0.5)");
        gradient.addColorStop(1, "HSLA(132, 6%, 83%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawFrameTree(_position, _x, _y, _radius) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.fillStyle = "#af4933";
        crc2.beginPath();
        crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawleavesRed(_amount) {
        let nLeaves = _amount.x;
        let r = _amount.y;
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            let canvas = document.querySelector("canvas");
            let leaves = new Path2D();
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            leaves.arc(x, y, r, 500, 50 * Math.PI);
            crc2.fillStyle = "#af4933";
            crc2.rotate(Math.random() * 360);
            crc2.fill(leaves);
        }
    }
    function drawleavesOrange(_amount) {
        let nLeaves = _amount.x;
        let r = _amount.y;
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            let canvas = document.querySelector("canvas");
            let leaves = new Path2D();
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            leaves.arc(x, y, r, 500, 50 * Math.PI);
            crc2.fillStyle = "#eb8526";
            crc2.rotate(Math.random() * 360);
            crc2.fill(leaves);
        }
    }
    function drawSquirrel(_position) {
        crc2.resetTransform();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "#9a7847";
        //tail
        crc2.save();
        crc2.beginPath();
        crc2.ellipse(-15, -30, 15, 25, 3, 10, 20);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //body
        crc2.beginPath();
        crc2.ellipse(5, -20, 10, 25, 10, 20, 40);
        crc2.closePath();
        crc2.fill();
        //arm
        crc2.beginPath();
        crc2.ellipse(20, -20, 3, 6, 2, 10, 20);
        crc2.closePath();
        crc2.fill();
        //leg
        crc2.beginPath();
        crc2.ellipse(-4, -1, 4.5, 18, 1.7, 20, 40);
        crc2.closePath();
        crc2.fill();
        //head
        crc2.beginPath();
        crc2.ellipse(17, -40, 8, 10, 2, 20, 40);
        crc2.closePath();
        crc2.fill();
        //eye
        var rEye = 2;
        crc2.fillStyle = "#000000"; //ohr wird auch schwarz
        crc2.beginPath();
        crc2.arc(20, -40, rEye, 0, 2 * Math.PI);
        crc2.lineWidth = 1;
        crc2.closePath();
        crc2.fill();
        //ear
        crc2.fillStyle = "#9a7847";
        crc2.beginPath();
        crc2.moveTo(10, -45);
        crc2.lineTo(15, -60);
        crc2.lineTo(13, -40);
        crc2.closePath();
        crc2.fill();
    }
})(GoldenerHerbst || (GoldenerHerbst = {}));
//# sourceMappingURL=canvas.js.map