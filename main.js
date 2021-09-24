fetch("https://hacker-news.firebaseio.com/v0/maxitem.json")
    .then(function (response) { return response.json(); })
    .then(function (data) {
    printItem(data);
    console.info({ data: data });
});
fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then(function (response) { return response.json(); })
    .then(function (data) {
    var _a;
    console.info({ data: data });
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        console.info({ item: item });
        printItem(item);
        if (((_a = item === null || item === void 0 ? void 0 : item.kids) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            for (var _b = 0, _c = item.kids; _b < _c.length; _b++) {
                var kid = _c[_b];
                printItem(kid);
            }
        }
    }
});
function printItem(id) {
    fetch("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
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
            p4.className = "comment";
            p4.textContent = "Comment text: " + decodeHtml(data.text);
            app === null || app === void 0 ? void 0 : app.appendChild(p4);
        }
        if (data.type === "story") {
            var p4 = document.createElement("p");
            p4.className = "story";
            p4.innerHTML = "Story: <a href=\"" + data.url + "\">" + decodeHtml(data.title) + "</a>";
            app === null || app === void 0 ? void 0 : app.appendChild(p4);
        }
    });
}
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
