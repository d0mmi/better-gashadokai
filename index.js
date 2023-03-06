
var last;
if (!document.getElementById("last-chapter")) {
    last = document.createElement("button");
    last.id = "last-chapter"
    last.innerText = "Last Chapter";

    if (document.getElementsByClassName("page-title").length > 0 && document.getElementsByClassName("page-title")[0].innerHTML == "404") {

        document.getElementsByClassName("page-header-content")[0].appendChild(last);
        last.onclick = e => window.location = "/chapter-" + (parseInt(window.location.pathname.match("chapter-([0-9]*)")[1]) - 1);

    } else {

        document.getElementsByClassName("entry-content-wrap")[0].appendChild(last);
        document.getElementsByClassName("entry-content")[0].after(last);
        last.onclick = e => window.location = "/chapter-" + (parseInt(window.location.pathname.match("chapter-([0-9]*)")[1]) - 1);
    }
}

if (!document.getElementById("next-chapter")) {
    if (document.getElementsByClassName("page-title").length == 0) {
        var next = document.createElement("button");
        next.id = "next-chapter"
        next.innerText = "Next Chapter";
        document.getElementsByClassName("entry-content-wrap")[0].appendChild(next);
        last.after(next);
        next.onclick = e => window.location = "/chapter-" + (parseInt(window.location.pathname.match("chapter-([0-9]*)")[1]) + 1);
    }
}