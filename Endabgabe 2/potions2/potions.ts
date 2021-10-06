namespace Firework {
    let label: HTMLSpanElement;

    export async function createElements(): Promise<void> {
        let answer: Response = await fetch("potions.json");
        let offers: string = await answer.text();
        let detail: Data = JSON.parse(offers);

        //Creating the images 
        for (let category in detail) {
            let items: Potion[] = detail[category];
            createImage(items, category);
        }

        installListeners();
    }

    function createImage(_items: Potion[], _category: string): void {
        let potionWrapper: HTMLDivElement = <HTMLDivElement>document.querySelector(".potions-wrapper");

        let rowOne: HTMLDivElement = document.createElement("div");
        rowOne.classList.add("row");
        rowOne.classList.add("row-1");
        let rowTwo: HTMLDivElement = document.createElement("div");
        rowTwo.classList.add("row");
        rowTwo.classList.add("row-2");
        let rowThree: HTMLDivElement = document.createElement("div");
        rowThree.classList.add("row");
        rowThree.classList.add("row-3");

        potionWrapper.appendChild(rowOne);
        potionWrapper.appendChild(rowTwo);
        potionWrapper.appendChild(rowThree);

        //Iterating through the Array 
        for (let i: number = 0; i < _items.length; i++) {
            let img: HTMLImageElement = document.createElement("img");
            img.id = "z" + _items[i].value;
            img.classList.add(_items[i].name);
            img.classList.add("potion");
            img.setAttribute("alt", _items[i].name);
            img.setAttribute("src", "bottles/" + _items[i].image);

            let span: HTMLSpanElement = document.createElement("span");
            let text: string = _items[i].name.replace("_", " ");
            span.innerHTML = text;
            span.setAttribute("name", "z" + _items[i].value);
            span.classList.add("description");

            let wrapper: HTMLDivElement = document.createElement("div");
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

    function installListeners(): void {
        let items: NodeListOf<HTMLImageElement> = document.querySelectorAll(".potion");

        //Installing the Listeners
        for (let i: number = 0; i < items.length; i++) {
            items[i].addEventListener("mouseover", handleHover);
            items[i].addEventListener("mousemove", handleMove);
            items[i].addEventListener("click", selectColor); 
        }
    }

    function handleHover(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;

        let nameAttr: string = target.id;
        label = <HTMLSpanElement>document.querySelector("[name=" + nameAttr + "]");
    }

    function handleMove(_event: MouseEvent): void {
        let posX: number = _event.clientX;
        let posY: number = _event.clientY;  

        let wrapper: HTMLDivElement = <HTMLDivElement>document.querySelector(".potions-wrapper"); 
        let offset: DOMRect = wrapper.getBoundingClientRect(); 
        let offsetX: number = offset.left; 
        let offsetY: number = offset.top; 

        label.style.top = posY - offsetY + "px";
        label.style.left = posX - offsetX + "px";
    }
}