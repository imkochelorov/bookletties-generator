Array.from(document.getElementsByClassName("title-wrapper")).forEach(title => {
    title.style.display = "block";
    title.innerHTML = title.textContent.replace(/\S/g, "<span class='title'>$&</span>");
});
Array.from(document.getElementsByClassName("plain-wrapper")).forEach(plain => {
    plain.style.display = "block";
    plain.innerHTML = plain.textContent.replace(/\S/g, "<span class='plain'>$&</span>");
});
Array.from(document.getElementsByClassName("footer-wrapper")).forEach(footer => {
    footer.style.display = "block";
    footer.innerHTML = footer.textContent.replace(/\S/g, "<span class='footer'>$&</span>");
});

anime.timeline()
    .add({
        targets: '#page1 .title',
        scale: [0.5, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i + 1)
    }).add({
        targets: '#page1 .plain',
        scale: [0.3, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 200,
        delay: (el, i) => 1000 + 70 * (i + 1)
    }).add({
        targets: '#page1 .footer',
        scale: [0.3, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 200,
        delay: (el, i) => 1000 + 70 * (i + 1)
    }).add({
        targets: '#page2',
        opacity: '1',
        duration: 250,
        easing: 'easeInOutQuad',
        begin: function () {
            document.querySelector('#page2').style.display = 'block';
        },
    });

document.getElementsByClassName("wrapper")[0].onscroll = scroll;

var page2scrolled = false
var page3scrolled = false
var page4scrolled = false
var page5scrolled = false

function scroll() {
    if (document.getElementsByClassName("wrapper")[0].scrollTop >= window.innerHeight && !page2scrolled) {
        page2scrolled = true;
        anime.timeline()
            .add({
                targets: '#page2 .title',
                scale: [0.3, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 600,
                delay: (el, i) => 70 * (i + 1)
            }).add({
                targets: '#page2 .plain',
                scale: [0.3, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 600,
                delay: (el, i) => 2000 + 200 * (i + 1)
            }).add({
                targets: '#page2 .footer',
                scale: [0.3, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 200,
                delay: (el, i) => 1000 + 20 * (i + 1)
            }).add({
                targets: '#page3',
                opacity: '1',
                duration: 250,
                easing: 'easeInOutQuad',
                begin: function () {
                    document.querySelector('#page3').style.display = 'block';
                },
            });
    }

    if (document.getElementsByClassName("wrapper")[0].scrollTop >= window.innerHeight * 2 && !page3scrolled) {
        page3scrolled = true;
        anime.timeline()
            .add({
                targets: '#page3 .title',
                scale: [0.3, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 400,
                delay: (el, i) => 40 * (i + 1)
            }).add({
                targets: '#page3 .plain',
                scale: [0.3, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 200,
                delay: (el, i) => 1000 + 20 * (i + 1)
            }).add({
                targets: '#page3 .footer',
                scale: [0.3, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 200,
                delay: (el, i) => 4000 + 70 * (i + 1)
            }).add({
                targets: '#page4',
                opacity: '1',
                duration: 250,
                easing: 'easeInOutQuad',
                begin: function () {
                    document.querySelector('#page4').style.display = 'block';
                },
            });
    }

    if (document.getElementsByClassName("wrapper")[0].scrollTop >= window.innerHeight * 3 && !page4scrolled) {
        page4scrolled = true;
        anime.timeline()
            .add({
                targets: '#page4 .title',
                scale: [0.3, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 600,
                delay: (el, i) => 70 * (i + 1)
            }).add({
                targets: '#page4 .plain',
                scale: [0.3, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 600,
                delay: (el, i) => 70 * (i + 1)
            }).add({
                targets: '#page4 .footer',
                scale: [0.3, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 200,
                delay: (el, i) => 1000 + 20 * (i + 1)
            }).add({
                targets: '#page5',
                opacity: '1',
                duration: 250,
                easing: 'easeInOutQuad',
                begin: function () {
                    document.querySelector('#page5').style.display = 'block';
                },
            });
    }

    if (document.getElementsByClassName("wrapper")[0].scrollTop >= window.innerHeight * 4 && !page5scrolled) {
        page5scrolled = true;
        anime.timeline()
            .add({
                targets: '#page5 .title',
                scale: [0.3, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 600,
                delay: (el, i) => 70 * (i + 1)
            }).add({
                targets: '#page5 .plain',
                scale: [0.3, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 600,
                delay: (el, i) => 70 * (i + 1)
            });
    }
}