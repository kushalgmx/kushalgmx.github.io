fetch("https://hacker-news.firebaseio.com/v0/maxitem.json")
    .then(response => response.json())
    .then(data => {
        printItem(data);
        console.info({ data });
    });

fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then(response => response.json())
    .then(data => {
        console.info({ data });
        for (const item of data) {
            console.info({ item });
            printItem(item);
            if (item?.kids?.length > 0) {
                for (let kid of item.kids) {
                    printItem(kid);
                }
            }
        }
    })

function printItem(id: number): void {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(response => response.json())
        .then(data => {
            console.info({ data });
            // 1. Select the div element using the id property
            const app = document.getElementById("app");
            // 2. Create a new <p></p> element programmatically
            const p1 = document.createElement("p");
            // 3. Add the text content
            p1.textContent = `Id: ${data.id}`;
            // 4. Append the p element to the div element
            app?.appendChild(p1);

            const p2 = document.createElement("p");
            p2.textContent = `By: ${data.by}`;
            app?.appendChild(p2);

            const p3 = document.createElement("p");
            p3.textContent = `type: ${data.type}`;
            app?.appendChild(p3);

            if (data.type === "comment") {
                const p4 = document.createElement("p");
                p4.className = "comment";
                p4.textContent = `Comment text: ${decodeHtml(data.text)}`;
                app?.appendChild(p4);
            }

            if (data.type === "story") {
                const p4 = document.createElement("p");
                p4.className = "story";
                p4.innerHTML = `Story: <a href="${data.url}">${decodeHtml(data.title)}</a>`;
                app?.appendChild(p4);
            }
        });
}

function decodeHtml(html: string): string {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}