"use strict";
var Potions;
(function (Potions) {
    window.addEventListener("load", createElements);
    let label;
    async function createElements() {
        //Fetching the data from potions.json, where all Informations for each potion are listed
        let answer = await fetch("potions.json");
        let offers = await answer.text();
        let detail = JSON.parse(offers);
        //Creating the images 
        for (let category in detail) {
            let items = detail[category];
            createImage(items, category);
        }
        //After all images are created, the Event-Listeners are installed
        installListeners();
    }
    function createImage(_items, _category) {
        //Selecting the Wrapper from the HTML where all Elements are put into
        let potionWrapper = document.querySelector(".potions-wrapper");
        //Creating three rows (one for each shelf) and give them the classes they need
        let rowOne = document.createElement("div");
        rowOne.classList.add("row");
        rowOne.classList.add("row-1");
        let rowTwo = document.createElement("div");
        rowTwo.classList.add("row");
        rowTwo.classList.add("row-2");
        let rowThree = document.createElement("div");
        rowThree.classList.add("row");
        rowThree.classList.add("row-3");
        //Adding the created rows to the HTML
        potionWrapper.appendChild(rowOne);
        potionWrapper.appendChild(rowTwo);
        potionWrapper.appendChild(rowThree);
        //Iterating through the Array 
        for (let i = 0; i < _items.length; i++) {
            //Creating an image-Element
            let img = document.createElement("img");
            //Adding the ID and a z, because we need the ID of the Image and the name-Attribute of the Span need to match. 
            //(Name-Attributes need to start with an letter and as some of the hex-Values start with numbers, we need to add a letter. 
            //And as the ID and the name-Attribute need to match, a z is added to the id as well)
            img.id = "z" + _items[i].value;
            //Adding classes to the image
            img.classList.add(_items[i].name);
            img.classList.add("potion");
            //Adding an alt-Attribute in case something goes wrong and the image can not be loaded
            img.setAttribute("alt", _items[i].name);
            //Adding the most important thing, the src-Attribute. As the filled potions are in the folder "bootles", we need to add this to the string
            img.setAttribute("src", "bottles/" + _items[i].image);
            //Creating the Span-Element (The Element that is shown on hover)
            let span = document.createElement("span");
            //Replacing _ with a blank space, so it looks prettier (but we needed the _ so the spaces do not throw errors). This thing is called a Regex (regular expression)
            let text = _items[i].name.replace("_", " ");
            //Adding the string with spaces to the innerHTML again
            span.innerHTML = text;
            //Adding the name-Attribute with the z (see explanation above)
            span.setAttribute("name", "z" + _items[i].value);
            //Adding the class description (this is needed for the hover-effect)
            span.classList.add("description");
            //Creating a wrapper and putting the image and the span into it. The image needs to be first or else the css (the hover effect) will not work
            let wrapper = document.createElement("div");
            wrapper.appendChild(img);
            wrapper.appendChild(span);
            //Depending on the value of the iterator, the wrapper is added to one of the three divs (one for each shelf)
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
        //Selecting all images from the HTML (it is really important to write HTMLImageElement instead of HTMLElement, or else the _event: MouseEvent will throw an error)
        let items = document.querySelectorAll(".potion");
        //Installing the Listeners
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener("mouseover", handleHover);
            items[i].addEventListener("mousemove", handleMove);
        }
    }
    function handleHover(_event) {
        //Getting the Element which triggered the Event, and declaring it to be an HTMLElement, so that we can get the ID (as only HTMLElements can have an ID)
        let target = _event.target;
        //Storing the ID of the Target in a Variable 
        let nameAttr = target.id;
        //Selecting the Span-Element where the name-Attribute matches the ID of the Target(you can use css selectors with querySelector) and assigning it to the global Variable "label", to be able
        //to access it in handleMove
        label = document.querySelector("[name=" + nameAttr + "]");
    }
    function handleMove(_event) {
        //Getting the positions of the Mouse
        let posX = _event.clientX;
        let posY = _event.clientY;
        //Giving the positon to the current label and adding px, as a css value needs a unit 
        label.style.top = posY + "px";
        label.style.left = posX + "px";
    }
})(Potions || (Potions = {}));
//# sourceMappingURL=potions.js.map