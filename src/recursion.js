fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then(function (response) { return response.json(); })
    .then(function (data) {
    console.info({ data: data });
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        console.info({ item: item });
        printRecursion(item);
    }
});
function printRecursion(id) {
    fetch("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var _a;
        if (((_a = data === null || data === void 0 ? void 0 : data.kids) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            console.info({ kids: data === null || data === void 0 ? void 0 : data.kids });
            for (var _i = 0, _b = data.kids; _i < _b.length; _i++) {
                var kid = _b[_i];
                printRecursion(kid);
            }
        }
    });
}
