let maximum = 0;

fetch("https://hacker-news.firebaseio.com/v0/maxitem.json")
    .then(response => response.json())
    .then(data => {
        maximum = data;
        console.info({ data });
        fetch(`https://hacker-news.firebaseio.com/v0/item/${maximum}.json`)
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
                    p1.className = "comment";
                    p4.textContent = `type: ${decodeHtml(data.text)}`;
                    app?.appendChild(p4);
                }
            });
    });

function decodeHtml(html: string) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}