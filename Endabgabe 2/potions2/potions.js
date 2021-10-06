"use strict";
var Firework;
(function (Firework) {
    let label;
    async function createElements() {
        let answer = await fetch("potions.json");
        let offers = await answer.text();
        let detail = JSON.parse(offers);
        //Creating the images 
        for (let category in detail) {
            let items = detail[category];
            createImage(items, category);
        }
        installListeners();
    }
    Firework.createElements = createElements;
    function createImage(_items, _category) {
        let potionWrapper = document.querySelector(".potions-wrapper");
        let rowOne = document.createElement("div");
        rowOne.classList.add("row");
        rowOne.classList.add("row-1");
        let rowTwo = document.createElement("div");
        rowTwo.classList.add("row");
        rowTwo.classList.add("row-2");
        let rowThree = document.createElement("div");
        rowThree.classList.add("row");
        rowThree.classList.add("row-3");
        potionWrapper.appendChild(rowOne);
        potionWrapper.appendChild(rowTwo);
        potionWrapper.appendChild(rowThree);
        //Iterating through the Array 
        for (let i = 0; i < _items.length; i++) {
            let img = document.createElement("img");
            img.id = "z" + _items[i].value;
            img.classList.add(_items[i].name);
            img.classList.add("potion");
            img.setAttribute("alt", _items[i].name);
            img.setAttribute("src", "bottles/" + _items[i].image);
            let span = document.createElement("span");
            let text = _items[i].name.replace("_", " ");
            span.innerHTML = text;
            span.setAttribute("name", "z" + _items[i].value);
            span.classList.add("description");
            let wrapper = document.createElement("div");
            wrapper.appendChild(img);
            wrapper.appendChild(span);
            if (i < 9) {
                rowOne.appendChild(wrapper);
            }
            else if (i > 8 && i < 18) {
                rowTwo.appendChild(wrapper);
            }
            else {
                rowThree.appendChild(wrapper);
            }
        }
    }
    function installListeners() {
        let items = document.querySelectorAll(".potion");
        //Installing the Listeners
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener("mouseover", handleHover);
            items[i].addEventListener("mousemove", handleMove);
            items[i].addEventListener("click", Firework.selectColor);
        }
    }
    function handleHover(_event) {
        let target = _event.target;
        let nameAttr = target.id;
        label = document.querySelector("[name=" + nameAttr + "]");
    }
    function handleMove(_event) {
        let posX = _event.clientX;
        let posY = _event.clientY;
        let wrapper = document.querySelector(".potions-wrapper");
        let offset = wrapper.getBoundingClientRect();
        let offsetX = offset.left;
        let offsetY = offset.top;
        label.style.top = posY - offsetY + "px";
        label.style.left = posX - offsetX + "px";
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=potions.js.map