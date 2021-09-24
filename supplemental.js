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
randomizeElementNameAndId("zip");
function randomizeElementNameAndId(id) {
    var element = document.getElementById(id);
    if (element) {
        var newId = element.id + "-" + randomString;
        element.id = newId;
        element.setAttribute("name", newId);
    }
}
function reset() {
    alert("we will reset the form for you");
    var addressForm = document.getElementById("addressForm");
    addressForm.reset();
}
console.log(uuidv4());
