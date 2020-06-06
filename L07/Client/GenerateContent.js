"use strict";
var L06;
(function (L06) {
    function generateContent(_data) {
        for (let category in _data) {
            let items = _data[category];
            let group = null;
            switch (category) {
                case "product":
                    group = createMultiple(items, category);
                    break;
                case "household":
                    group = createMultiple(items, category);
                    break;
                case "driving":
                    group = createRadio(items, category);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L06.generateContent = generateContent;
    function generateDetail(_detail) {
        for (let category in _detail) {
            let element = _detail[category];
            let group = null;
            switch (category) {
                case "ort":
                    group = createDataList(element, category);
                    break;
                case "fahrt":
                    group = createSingle(element, category);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L06.generateDetail = generateDetail;
    function createMultiple(_item, _category) {
        let group = document.createElement("div");
        for (let item of _item) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let br = document.createElement("br");
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name; //damit wir auch auf label für abchecken drücken können
            group.appendChild(checkbox);
            group.appendChild(label);
            if (_category == "product") {
                createInput(group, item.name, checkbox, item.unit);
            }
            group.appendChild(br);
        }
        return group;
    }
    function createInput(_parent, _name, _box, _unit) {
        let input = document.createElement("input");
        let span = document.createElement("span");
        span.innerHTML = "Menge:";
        span.classList.add("amount" + _name);
        input.type = "number";
        input.classList.add(_name);
        input.setAttribute("name", _name);
        let span2 = document.createElement("span");
        span2.innerHTML = _unit;
        _parent.appendChild(span);
        _parent.appendChild(input);
        _parent.appendChild(span2);
        _box.setAttribute("unit", _unit); //box ist die checkbox
    }
    function createRadio(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("price", item.price.toFixed(2));
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;
            let br = document.createElement("br");
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(radio);
            group.appendChild(label);
            group.appendChild(br);
        }
        return group;
    }
    function createDataList(_elements, _product) {
        let group = document.createElement("div");
        let input = document.createElement("input");
        input.setAttribute("list", _product);
        input.setAttribute("placeholder", "Welcher Supermarkt?");
        input.name = _product;
        let datalist = document.createElement("datalist");
        datalist.id = _product;
        for (let item of _elements) {
            let option = document.createElement("option");
            option.setAttribute("name", item.name);
            option.value = item.name;
            group.appendChild(input);
            datalist.appendChild(option);
            group.appendChild(datalist);
        }
        return group;
    }
    function createSingle(_elements, _product) {
        let group = document.createElement("div");
        for (let item of _elements) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.value = item.name;
            radio.name = _product;
            radio.id = item.name;
            let br = document.createElement("br");
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(radio);
            group.appendChild(label);
            group.appendChild(br);
        }
        return group;
    }
})(L06 || (L06 = {}));
//# sourceMappingURL=GenerateContent.js.map