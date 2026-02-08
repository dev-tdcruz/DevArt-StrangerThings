// Registrar as extensões da biblioteca GSap

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Scrool suave

ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
});

function animarPagina() {
    // Animação de entrada da Hero

    gsap.from(".hero", {
        opacity: 0,
        duration: 1
    });


    gsap.from("picture:nth-child(2)", {
        y: 60,
        duration: 1.3
    });

    gsap.from("picture:nth-child(1)", {
        y: -60,
        duration: 1.3
    });

    // Animação dos cards das cidades

    gsap.from(".card", {
        opacity: 0,
        filter: "blur(5px)",
        stagger: .2,
        scrollTrigger: {
            trigger: ".card",
            start: "0% 70%",
            end: "100% 70%",
            scrub: true,
        }
    });

    // animação das cidades

    gsap.from(".cidades li", {
        opacity: 0,
        duration: 1,
        stagger: .02,
        scrollTrigger: {
            trigger: ".cidades",
            start: "0% 70%"
        }
    });

    // animação footer

    gsap.from("footer", {
        y: -300,
        immediateRender: false,
        scrollTrigger: {
            trigger: "footer",
            scrub: true,
            invalidateOnRefresh: true,
            end: "100% 100%"

        }
    });

    // letras surgindo

    const grupoTextoSplit = document.querySelectorAll(".textoSplit");

    grupoTextoSplit.forEach((unicoSplit) => {

        const split = SplitText.create(unicoSplit, {
            type: "lines, words, chars",
            mask: "lines",
        });

        gsap.from(split.chars, {
            y: 40,
            opacity: 0,
            stagger: .03,
            scrollTrigger: {
                trigger: unicoSplit,

            }
        })

    });
}

// Animação Pré-Loader

const tl = gsap.timeline({
    onComplete() {
        gsap.to("#preLoader", {
            opacity: 0,
            display: "none",
        });

        animarPagina();

    }
});

tl.to("#preLoader path", {
    duration: 1.5,
    strokeDashoffset: 0,
})

gsap.from("#preLoader path", {
    opacity: 0,
    duration: 1,
})

tl.to("#preLoader path", {
    duration: 1.5,
    strokeDashoffset: 110,
})

tl.to("#preLoader path", {
    duration: .5,
    fill: "rgb(168, 19, 19)"
})
