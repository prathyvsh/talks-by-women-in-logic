const talkGridView = (data) => {

    const {author = "No Author",
            title = "No Title",
            date = "No Year",
            author_image = "default-avatar.png",
            talk_image = "cover-art.svg",
            talk_link = "#",
            author_link = "#",
        description = "No description provided"} = data;

    return ["div.card",
        ["a.video-thumbnail",
            ["img", {alt: `${title}  by ${author} given on ${date}`, src: talk_image}]],
            ["div.date-and-author",
            ["div.title-and-date",
            ["a.talk-link", {href: talk_link}, ["h3.title", title]],
                ["time", year]],
                ["div.author",
                ["div.avatar", ["img", {src: author_image, alt: `Portrait of ${author}`}]],
                ["p", author]]],
                ["p.description", description]];

};

/* Toggle List or Grid Mode */

z.$("#list-mode .list-view").addEventListener("click", () => { z.$("#talk-list").classList = "list-mode"; });

z.$("#list-mode .grid-view").addEventListener("click", () => { z.$("#talk-list").classList = "grid-mode"; });

const talks = (data) => data.map(talkGridView);

const render = async () => {

    const data = await (await fetch("./data.json")).json();

    z.render("#talk-list", data ? tasks(data) : ["p", "No talks found!"]);

};

window.onload = render;