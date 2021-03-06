function uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const randomString = uuidv4();

if (window.location.href.includes("address.html")) {
    console.info({ href: window.location.href })
    randomizeElementNameAndId("street1");
    randomizeElementNameAndId("street2");
    randomizeElementNameAndId("state");
    randomizeElementNameAndId("postalCode");
}

if (window.location.href.includes("address-nospace.html")) {
    setInterval(function () {
        let randomString2 = uuidv4();
        randomizeElementNameAndLabelv2("street1", "Street", randomString2);
        randomizeElementNameAndLabelv2("street2", "Street 2", randomString2);
        randomizeElementNameAndLabelv2("state", "State", randomString2);
        randomizeElementNameAndLabelv2("postalCode", "ZIP", randomString2);
    }, 20);
}

function randomizeElementNameAndLabelv2(id: string, label: string, randomString2: string): void {

    console.info({ id });
    console.info({ randomString2 });
    const querySelector = `[id^="${id}"]`;
    console.info({ querySelector });
    const elements = document.querySelectorAll(querySelector);
    console.info({ element: elements });
    for (const element of elements) {
        if (element) {
            const newId = `${id}-${randomString2}`;
            element.id = newId;
            element.setAttribute("name", newId);

            const labelElements = document.getElementsByTagName('label');
            console.info({ labelElements });
            for (const labelElement of labelElements) {
                if (labelElement.htmlFor.includes(id)) {
                    console.info({ labelElement });
                    labelElement.htmlFor = newId;
                    console.info({ condition: labelElement.innerHTML === label });
                    console.info({ label });
                    console.info({ innerHtml: labelElement.innerHTML });
                    // if (labelElement.innerHTML === label) {
                    //     labelElement.innerHTML = randomString2;
                    // } else {
                    //     labelElement.innerHTML = label;
                    // }
                    labelElement.innerHTML = randomString2;
                }
            }
        }
    }
}

function randomizeElementNameAndId(id: string): void {
    console.info({ id });
    console.info({ randomString });
    const element = document.getElementById(id);
    console.info({ element });
    if (element) {
        const newId = `${reverse(element.id)}-${randomString}`;
        element.id = newId;
        element.setAttribute("name", newId);
        printDebugging(element.id);

        const labelElements = document.getElementsByTagName('label');
        for (const labelElement of labelElements)
            if (labelElement.htmlFor === id) {
                labelElement.htmlFor = newId;
            }
    }
}

function reset() {
    alert("we will reset the form for you");
    const addressForm = document.getElementById("addressForm") as HTMLFormElement;
    addressForm.reset();
}

// console.log(uuidv4());

function printDebugging(element: string): void {
    // 1. Select the div element using the id property
    const app = document.getElementById("debugging");
    // 2. Create a new <p></p> element programmatically
    const p1 = document.createElement("p");
    // 3. Add the text content
    p1.textContent = `Id: ${element}`;
    // 4. Append the p element to the div element
    app?.appendChild(p1);
}

function reverse(s: string): string {
    return [...s].reverse().join("");
}
