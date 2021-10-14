function myFunction(x) {
    x.style.background = "yellow";
    x.setAttribute("autocomplete", "off");
    // x.dispatchEvent(new KeyboardEvent("keydown", {
    //     'key': 'Escape'
    // }));
    var esc = $.Event("keydown", { keyCode: 27 });
    $("body").trigger(esc);
}
