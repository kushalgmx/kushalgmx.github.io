function uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const randomString = uuidv4();
randomizeElementNameAndId("street");
randomizeElementNameAndId("street2");
randomizeElementNameAndId("state");
randomizeElementNameAndId("zip");

function randomizeElementNameAndId(id: string): void {
    const element = document.getElementById(id);
    if (element) {
        const newId = `${element.id}-${randomString}`;
        element.id = newId;
        element.setAttribute("name", newId);
    }
}

function reset() {
    alert("we will reset the form for you");
    const addressForm = document.getElementById("addressForm") as HTMLFormElement;
    addressForm.reset();
}

console.log(uuidv4());