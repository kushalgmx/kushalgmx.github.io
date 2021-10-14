function myFunction(x) {
    x.style.background = "yellow";
    x.setAttribute("autocomplete", "off");
    // x.dispatchEvent(new KeyboardEvent("keydown", {
    //     'key': 'Escape'
    // }));
    $.Event("keydown", { keyCode: 27 });
    // if (x.value && x.value.trim() === "") {
    //     x.value = "";
    // } else {
    //     let pandu = x.value;
    //     x.value = "";
    //     x.value = pandu;
    // }
}
