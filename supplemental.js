function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
var randomString = uuidv4();
randomizeElementNameAndId("street");
randomizeElementNameAndId("street2");
randomizeElementNameAndId("state");
randomizeElementNameAndId("postalCode");
function randomizeElementNameAndId(id) {
    console.info({ id: id });
    console.info({ randomString: randomString });
    var element = document.getElementById(id);
    console.info({ element: element });
    if (element) {
        var newId = element.id + "-" + randomString;
        element.id = newId;
        element.setAttribute("name", newId);
        printDebugging(element.id);
    }
}
function reset() {
    alert("we will reset the form for you");
    var addressForm = document.getElementById("addressForm");
    addressForm.reset();
}
// console.log(uuidv4());
function printDebugging(element) {
    // 1. Select the div element using the id property
    var app = document.getElementById("debugging");
    // 2. Create a new <p></p> element programmatically
    var p1 = document.createElement("p");
    // 3. Add the text content
    p1.textContent = "Id: " + element;
    // 4. Append the p element to the div element
    app === null || app === void 0 ? void 0 : app.appendChild(p1);
}
