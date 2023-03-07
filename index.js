
var last;
if (!document.getElementById("last-chapter")) {
    last = document.createElement("button");
    last.id = "last-chapter"
    last.innerText = "Last Chapter";

    if (isErrorPage()) {

        document.getElementsByClassName("page-header-content")[0].appendChild(last);
        last.onclick = e => window.location = getLastUrl();

    } else if(isChapterPage()) {

        document.getElementsByClassName("entry-content-wrap")[0].appendChild(last);
        document.getElementsByClassName("entry-content")[0].after(last);
        last.onclick = e => window.location = getLastUrl();
    }
}

if (!document.getElementById("next-chapter")) {
    if (isChapterPage()) {
        var next = document.createElement("button");
        next.id = "next-chapter"
        next.innerText = "Next Chapter";
        document.getElementsByClassName("entry-content-wrap")[0].appendChild(next);
        last.after(next);
        next.onclick = e => window.location = getNextUrl();
    }
}

function isChapterPage() {
    return window.location.pathname.match("chapter-[0-9]*-") != null;
}
function isErrorPage() {
    return !isChapterPage() && window.location.pathname.match("chapter-[0-9]*") != null;
}

function getLastUrl() {
    return "/chapter-" + (getCurrentChapter() - 1);
}

function getNextUrl() {
    return "/chapter-" + (getCurrentChapter() + 1);
}

function getCurrentChapter() {
    return parseInt(window.location.pathname.match("chapter-([0-9]*)")[1]);
}