namespace L05 {
    export function generateContent(_data: Data): void {
        for (let category in _data) {
            let items: Item[] = _data[category];
            let group: HTMLElement | null = null;
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

            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }

    export function generateDetail(_detail: Detail): void {
        for (let category in _detail) {
            let element: Element[] = _detail[category];
            let group: HTMLElement | null = null;
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

            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }

    
    function createMultiple(_item:Item[], _category:string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _item){
            let checkbox:HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value= item.name;
            checkbox.name =_category;
            checkbox.id = item.name;

            let br:HTMLBRElement = document.createElement("br");

            let label: HTMLLabelElement = document.createElement("label");
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
    function createInput(_parent: HTMLDivElement, _name: string, _box: HTMLInputElement, _unit: string): void {
        let input = document.createElement("input");
        let span = document.createElement("span");
        span.innerHTML = "Menge:"
        span.classList.add("amount" + _name);
        input.type= "number";
        input.classList.add(_name);
        input.setAttribute("name",_name);
        let span2 = document.createElement("span");
        span2.innerHTML = _unit;
        _parent.appendChild(span); 
        _parent.appendChild(input);
        _parent.appendChild(span2); 
        _box.setAttribute("unit", _unit);//box ist die checkbox
    }

    function createRadio(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let radio: HTMLInputElement = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("price", item.price.toFixed(2));
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;
            let br: HTMLBRElement = document.createElement("br");

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(radio);
            group.appendChild(label);
            group.appendChild(br);
        }
        
        
        
        return group;
    }
    function createDataList(_elements: Element[], _product: string): HTMLElement | null {
        let group : HTMLDivElement = document.createElement("div");
        let input: HTMLInputElement = document.createElement("input");
        input.setAttribute("list", _product);
        input.setAttribute("placeholder", "Welcher Supermarkt?");
        input.name = _product;
        let datalist: HTMLDataListElement = document.createElement("datalist");
        datalist.id = _product;
        for (let item of _elements) {
            let option: HTMLOptionElement = document.createElement("option");
            option.setAttribute("name", item.name);
            option.value = item.name;

            group.appendChild(input);
            datalist.appendChild(option);
            group.appendChild(datalist);
            

        }
        return group;
    }
    function createSingle(_elements: Element[], _product: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _elements) {
            let radio: HTMLInputElement = document.createElement("input");
            radio.type = "radio";
            radio.value = item.name;
            radio.name = _product;
            radio.id = item.name;

            let br: HTMLBRElement = document.createElement("br");

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(radio);
            group.appendChild(label);
            group.appendChild(br);
        }
        return group;
    }


}