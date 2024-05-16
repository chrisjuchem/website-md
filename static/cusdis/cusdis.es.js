/* copied from https://cusdis.com/js/cusdis.es.js 2024-05-16 */
/* modified onload event to read papermod theme */
/* inserted custom css */
window.CUSDIS = {};
let e;

function t(t) {
    return e || (e = document.createElement("iframe"), function(e, t) {
        const d = d => {
                try {
                    const i = JSON.parse(d.data);
                    if ("cusdis" === i.from) switch (i.event) {
                        case "onload":
                            n("setTheme", document.querySelector("body.dark") ? "dark" : "light");
                            break;
                        case "resize":
                            e.style.height = i.data + "px"
                    }
                } catch (i) {}
            };

        window.addEventListener("message", d);
    }(e, t)), e.srcdoc = (e => {
        const t = e.dataset.host || "https://cusdis.com",
            n = e.dataset.iframe || `${t}/js/iframe.umd.js`;
        return `<!DOCTYPE html>\n<html>\n  <head>\n    <link rel="stylesheet" href="${t}/js/style.css">\n <link rel="stylesheet" href="/cusdis/cusdis.css">\n   <base target="_parent" />\n    <link>\n    <script>\n      window.CUSDIS_LOCALE = ${JSON.stringify(window.CUSDIS_LOCALE)}\n      window.__DATA__ = ${JSON.stringify(e.dataset)}\n    <\/script>\n    <style>\n      :root {\n        color-scheme: light;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="root"></div>\n    <script src="${n}" type="module">\n      \n    <\/script>\n  </body>\n</html>`
    })(t), e.style.width = "100%", e.style.border = "0", e
}

function n(t, n) {
    e && e.contentWindow.postMessage(JSON.stringify({
        from: "cusdis",
        event: t,
        data: n
    }))
}

function s(e) {
    if (e) {
        e.innerHTML = "";
        const n = t(e);
        e.appendChild(n)
    }
}

function d() {
    let e;
    window.cusdisElementId ? e = document.querySelector(`#${window.cusdisElementId}`) : document.querySelector("#cusdis_thread") ? e = document.querySelector("#cusdis_thread") : document.querySelector("#cusdis") && (console.warn("id `cusdis` is deprecated. Please use `cusdis_thread` instead"), e = document.querySelector("#cusdis")), !0 === window.CUSDIS_PREVENT_INITIAL_RENDER || e && s(e)
}
window.renderCusdis = s, window.CUSDIS.renderTo = s, window.CUSDIS.setTheme = function(e) {
    n("setTheme", e)
}, window.CUSDIS.initial = d, d();