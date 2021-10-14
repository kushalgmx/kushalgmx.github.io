function myFunction(x) {
    x.style.background = "yellow";
    x.setAttribute("autocomplete", "off");
    x.setAttribute("id", "somename");
    // x.dispatchEvent(new KeyboardEvent("keydown", {
    //     'key': 'Escape'
    // }));
    // var esc = $.Event("keydown", { keyCode: 27 });
    // $("body").trigger(esc);
}

$("body").keydown(function(e) {
    console.log(e);
    // if (e.keyCode === 27) {
    //     return true;
    // }
    return false;
})