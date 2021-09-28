function uuidv4Old() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
const randomStringOld = uuidv4Old();
randomizeElementNameAndIdOld("street");
randomizeElementNameAndIdOld("street2");
randomizeElementNameAndIdOld("state");
randomizeElementNameAndIdOld("postalCode");
function randomizeElementNameAndIdOld(id) {
    console.info({ id });
    console.info({ randomString: randomStringOld });
    const element = document.getElementById(id);
    console.info({ element });
    if (element) {
        const newId = `${element.id}-${randomStringOld}`;
        element.id = newId;
        element.setAttribute("name", newId);
        printDebuggingOld(element.id);
        const labelElements = document.getElementsByTagName('label');
        for (const labelElement of labelElements)
            if (labelElement.htmlFor === id) {
                labelElement.htmlFor = newId;
            }
    }
}
function resetOld() {
    alert("we will reset the form for you");
    const addressForm = document.getElementById("addressForm");
    addressForm.reset();
}
// console.log(uuidv4());
function printDebuggingOld(element) {
    // 1. Select the div element using the id property
    const app = document.getElementById("debugging");
    // 2. Create a new <p></p> element programmatically
    const p1 = document.createElement("p");
    // 3. Add the text content
    p1.textContent = `Id: ${element}`;
    // 4. Append the p element to the div element
    app?.appendChild(p1);
}
function reverseOld(s) {
    return [...s].reverse().join("");
}
//# sourceMappingURL=addressOld.js.map