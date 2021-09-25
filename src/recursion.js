fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then(response => response.json())
    .then(data => {
    //console.info({ data });
    for (const item of data) {
        console.info({ item });
        printRecursion(item);
    }
});
function printRecursion(id) {
    sleep(2000);
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(response => response.json())
        .then(data => {
        if (data?.kids?.length > 0) {
            //console.info({ kids: data?.kids });
            for (let kid of data.kids) {
                sleep(2000);
                printRecursion(kid);
            }
        }
    });
}
function sleep(ms) {
    console.info(`now sleeping for ${ms} milliseconds...`);
    return new Promise((resolve) => setTimeout(resolve, ms));
}
//# sourceMappingURL=recursion.js.map