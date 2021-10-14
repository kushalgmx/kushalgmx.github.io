function myFunction(x) {
    x.style.background = "yellow";
    x.setAttribute("autocomplete", "off");
    // x.dispatchEvent(new KeyboardEvent("keydown", {
    //     'key': 'Escape'
    // }));
    var esc = $.Event("keydown", { keyCode: 27 });
    $("body").trigger(esc);
}

$("body").keydown(function(e) {
    if (e.keyCode === 27) {
        alert("hello, pandu");
    }
    console.log(e);
})