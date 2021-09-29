function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
const randomString = uuidv4();
if (window.location.href.includes("address.html")) {
    console.info({ href: window.location.href });
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
    }, 2000);
}
function randomizeElementNameAndLabelv2(id, label, randomString2) {
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
            for (const labelElement of labelElements) {
                if (labelElement.htmlFor === element.id) {
                    labelElement.htmlFor = newId;
                    labelElement.innerHTML = uuidv4();
                    labelElement.innerHTML = label;
                }
            }
        }
    }
}
function randomizeElementNameAndId(id) {
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
    const addressForm = document.getElementById("addressForm");
    addressForm.reset();
}
// console.log(uuidv4());
function printDebugging(element) {
    // 1. Select the div element using the id property
    const app = document.getElementById("debugging");
    // 2. Create a new <p></p> element programmatically
    const p1 = document.createElement("p");
    // 3. Add the text content
    p1.textContent = `Id: ${element}`;
    // 4. Append the p element to the div element
    app?.appendChild(p1);
}
function reverse(s) {
    return [...s].reverse().join("");
}
//# sourceMappingURL=address.js.map