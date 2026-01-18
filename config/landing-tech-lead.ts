import { LandingPageConfig } from "@/types/landing-page";

const config: LandingPageConfig = {
    meta: {
        title: "HEXACO Synergy Radar dla Tech Leadów | Precyzyjna Analiza Zespołu",
        description: "Narzędzie dla liderów technicznych do przewidywania konfliktów i budowania efektywnych zespołów. Oparte na nauce, lepsze niż MBTI.",
        keywords: ["narzędzia dla tech leada", "zarządzanie zespołem inżynierskim", "HEXACO vs MBTI", "rozwiązywanie konfliktów", "budowanie zespołu"]
    },
    hero: {
        eyebrow: "Precyzja klasy lotniczej w zarządzaniu dynamiką zespołów inżynierskich",
        headline: "HEXACO Synergy Radar dla liderów technicznych",
        subheadline: "Przewiduj konflikty w zespole, zanim wybuchną — w oparciu o naukę, a nie zgadywanie z Myers-Briggs. Oparte na dowodach, napędzane danymi.",
        primaryCTA: {
            text: "Rozpocznij analizę zespołu",
            href: "#pricing-section",
        },
        secondaryCTA: {
            text: "Poznaj Founding Partner Program",
            href: "/pl#application",
        },
        trustBadges: [
            "27+ Liderów Tech",
            "Alternatywa dla MBTI",
            "Naukowo Zweryfikowane"
        ],
        imageSrc: "/synergy-radar-actual.png",
        imageAlt: "Pełny interfejs HEXACO Synergy Radar",
    },

    problem: {
        title: "Dlaczego liderzy inżynierii wybierają HEXACO Synergy Radar",
        subtitle: "Odzyskaj kontrolę nad zespołem dzięki inżynierskiemu podejściu do dynamiki międzyludzkiej.",
        problemCards: [
            {
                emoji: "🎯",
                title: "Przewidywanie konfliktów",
                description: "Zobacz, które pary osobowości zderzą się podczas sprintów na 3-6 miesięcy przed kryzysem. To realna analiza predykcyjna."
            },
            {
                emoji: "🔧",
                title: "Konkretne wnioski",
                description: "Nie dowiesz się, że 'Robert jest INTJ'. Dowiesz się: 'Robert (niskie H) lekceważy wkład innych. Nie angażuj go w burze mózgów'."
            },
            {
                emoji: "🚀",
                title: "Klasa lotnicza",
                description: "Zbudowane przez inżyniera lotnictwa. To nie 'narzędzie HR', to precyzyjny instrument dla liderów pod presją."
            }
        ],
        costTitle: "Wartość precyzji w liczbach:",
        costItems: [
            {
                value: "3-6 msc",
                description: "Wcześniejsze ostrzeżenie przed konfliktem"
            },
            {
                value: "Zero",
                description: "Lania wody (oparte na dowodach, nie horoskopach)"
            },
            {
                value: "15 min",
                description: "Czas konfiguracji i oceny"
            }
        ]
    },

    solution: {
        title: "Jak działa precyzyjna analiza zespołu",
        subtitle: "Proces w 3 krokach: od danych do decyzji",
        steps: [
            {
                title: "Ocena HEXACO (15 min)",
                description: "Zespół wypełnia 60 pytań mierzących 6 wymiarów. W tym Uczciwość-Pokorę (H) - kluczowy predyktor toksyczności, którego MBTI nie ma."
            },
            {
                title: "Analiza wzorców AI",
                description: "Algorytm przewiduje, które pary zderzą się pod presją. Identyfikuje brak równowagi ról i ryzyko wypalenia."
            },
            {
                title: "Konkretne rekomendacje",
                description: "Otrzymujesz specyficzne wytyczne: kogo parować w code review, kogo wzmacniać na standupach, co zmienić w strukturze."
            }
        ],
        imageSrc: "/synergy-radar-actual.png",
        imageAlt: "Proces analizy Synergy Radar",
        imageCaption: "Debuguj dynamikę zespołu tak, jak debugujesz kod."
    },

    socialProof: {
        title: "Wyniki 27+ Liderów Inżynierii",
        metrics: [
            {
                value: "87%",
                label: "Trafność przewidywań"
            },
            {
                value: "40%",
                label: "Redukcja tarć"
            },
            {
                value: "Zero",
                label: "Rotacji Seniorów"
            }
        ],
        testimonials: [
            {
                quote: "Kiedyś myślałem, że 'umiejętności miękkie' są wrodzone. LU Teams dało mi ramy do debugowania interakcji w zespole tak, jak weryfikuję złożone projekty lotnicze.",
                authorName: "Tomasz M.",
                authorTitle: "Engineering Manager",
                authorCompany: "Producent Lotniczy"
            },
            {
                quote: "Synergy Radar pokazał nam dokładnie, dlaczego nasze składy utknęły. To nie był dług techniczny — to było tarcie poznawcze między perfekcjonistami o wysokim C a innowatorami o niskim C.",
                authorName: "Katarzyna L.",
                authorTitle: "VP Engineering",
                authorCompany: "Enterprise SaaS"
            }
        ]
    },

    pricing: {
        title: "Precyzyjna Analiza Zespołu",
        subtitle: "Mniej niż koszt 1 dnia rotacji senior developera"
    },

    faq: {
        title: "Często Zadawane Pytania",
        items: [
            {
                question: "Jaka jest różnica między Standard Access a Founding Partner Program?",
                answer: "<strong>Standard Access:</strong> Stabilne funkcje, natychmiastowy dostęp, samodzielna nauka. <br/><br/><strong>Founding Partner Program:</strong> Eksperymentalne funkcje, kontakt z założycielem, dożywotnia zniżka 50%, wymagana aplikacja."
            },
            {
                question: "Dlaczego HEXACO, a nie Myers-Briggs?",
                answer: "MBTI to 'horoskop biznesowy' z 1943 r. HEXACO to nauka. Mierzy Uczciwość-Pokorę (toksyczność) i Emocjonalność (stres), co jest kluczowe w pracy."
            },
            {
                question: "Czy muszę zwalniać ludzi na podstawie wyników?",
                answer: "Nie. HEXACO mówi: 'Nie paruj X i Y w stresie'. Pozwala Ci zarządzać dynamiką, a nie usuwać ludzi."
            },
            {
                question: "Czy to tylko dla zespołów z problemami?",
                answer: "Zespoły, które 'wydają się OK', często mają ukryte napięcia. HEXACO ujawnia je, zanim staną się kryzysami."
            },
            {
                question: "Ile trwa konfiguracja?",
                answer: "Samo założenie konta to chwila. Ocena zajmuje 15 min na osobę. Wyniki masz natychmiast."
            }
        ]
    },

    cta: {
        headline: "Przestań zgadywać, zacznij mierzyć",
        subheadline: "Konflikty w zespole nie są losowe. HEXACO Synergy Radar pokazuje wzorce, które je powodują. Precyzja klasy lotniczej.",
        primaryCTA: {
            text: "Rozpocznij Analizę",
            href: "#pricing-section"
        },
        secondaryCTA: {
            text: "Aplikuj do Founding Partners",
            href: "/pl#application"
        }
    }
};

export default config;
