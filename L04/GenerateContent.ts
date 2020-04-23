namespace L04_CocktailBar {

    export function generateContent(_data: Data): void {

        for (let category in _data) {
            // console.log(category);
            let items: Item[] = _data[category];

            let group: HTMLElement | null = null; //es darf auch null sein
            switch (category) {
                case "Drink":
                    group = createSelect(items, category);
                    break;
                case "Container":
                    group = createSingle(items, category);
                    break;
                case "Extras":
                    group = createMultiple(items, category);
                    break;

                default:
                    break;
            }

            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group) // nur wenn fieldset und group da sind
                fieldset.appendChild(group);
        }
    }

    function createSelect(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLElement = document.createElement("div");
        let select: HTMLSelectElement = document.createElement("select");
        select.name = _category;
        group.appendChild(select);
        for (let item of _items){
            let option: HTMLOptionElement = document.createElement("option");
            option.innerHTML = item.name;
            option.value = item.name;
            option.setAttribute("price", item.price.toFixed(2));

            select.appendChild(option);
        }
        return group;
    }
    function createSingle(_items: Item[],  _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let radio: HTMLInputElement = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("price", item.price.toFixed(2));
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;
            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(radio);
            group.appendChild(label);
        }

        return group;
    
    }
    function createMultiple(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
}