var maximum = 0;
fetch("https://hacker-news.firebaseio.com/v0/maxitem.json")
    .then(function (response) { return response.json(); })
    .then(function (data) {
    maximum = data;
    console.info({ data: data });
    fetch("https://hacker-news.firebaseio.com/v0/item/" + maximum + ".json")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.info({ data: data });
        // 1. Select the div element using the id property
        var app = document.getElementById("app");
        // 2. Create a new <p></p> element programmatically
        var p1 = document.createElement("p");
        // 3. Add the text content
        p1.textContent = "Id: " + data.id;
        // 4. Append the p element to the div element
        app === null || app === void 0 ? void 0 : app.appendChild(p1);
        var p2 = document.createElement("p");
        p2.textContent = "By: " + data.by;
        app === null || app === void 0 ? void 0 : app.appendChild(p2);
        var p3 = document.createElement("p");
        p3.textContent = "type: " + data.type;
        app === null || app === void 0 ? void 0 : app.appendChild(p3);
        if (data.type === "comment") {
            var p4 = document.createElement("p");
            p1.className = "comment";
            p4.textContent = "type: " + decodeHtml(data.text);
            app === null || app === void 0 ? void 0 : app.appendChild(p4);
        }
    });
});
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
