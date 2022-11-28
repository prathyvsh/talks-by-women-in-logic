const talkGridView = (data) => {

    let {author = "No Author",
            title = "No Title",
            date = "No Year",
            author_image = "default-avatar.png",
            talk_image = "cover-art.svg",
            talk_link = "#",
            author_link = "#",
        description = "No description provided"} = data;

        console.log(data);

        if(talk_link) {
            video_id = talk_link.split("watch?v=")[1];
            talk_image = `https://img.youtube.com/vi/${video_id}/maxresdefault.jpg`;
        };

    return ["div.card",
        ["a.video-thumbnail",
            ["img", {alt: `${title}  by ${author} given on ${date}`, src: talk_image}]],
            ["div.date-and-author",
            ["div.title-and-date",
            ["a.talk-link", {href: talk_link}, ["h3.title", title]],
                ["time", date]],
                ["a.author", {href: author_link},
                ["div.avatar", ["img", {src: author_image, alt: `Portrait of ${author}`}]],
                ["p", author]]],
                ["p.description", description]];

};

/* Toggle List or Grid Mode */

const talks = (data) => data.map(talkGridView);

const render = async () => {

    z.$("#view-selector .list-view").addEventListener("click", () => { z.$("#talk-list").classList = "list-mode"; });

    z.$("#view-selector .grid-view").addEventListener("click", () => { z.$("#talk-list").classList = "grid-mode"; });

    const data = await (await fetch("./data.json")).json();

    z.render("#talk-list", (data != null) ? data.map(d => talkGridView(d)) : ["p", "No talks found!"]);

};

window.onload = render;