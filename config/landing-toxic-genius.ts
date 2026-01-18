import { LandingPageConfig } from "@/types/landing-page";

const config: LandingPageConfig = {
    meta: {
        title: "Toksyczny Geniusz w Zespole IT? | HEXACO Synergy Radar",
        description: "Czy jeden toksyczny pracownik niszczy Twój zespół? Poznaj HEXACO Synergy Radar - narzędzie do przewidywania konfliktów osobowości i rotacji.",
        keywords: ["toksyczny pracownik", "konflikty w zespole IT", "rotacja programistów", "HEXACO", "zarządzanie zespołem"]
    },
    hero: {
        eyebrow: "Od lidera technologii lotniczych, który wyciągnął lekcje z trudnych doświadczeń",
        headline: "Czy toksyczny geniusz niszczy Twój zespół?",
        subheadline: "Precyzja klasy lotniczej w przewidywaniu konfliktów zespołowych, zanim wybuchną. Zobacz, które osobowości zderzą się pod presją, na 3-6 miesięcy przed kryzysem.",
        primaryCTA: {
            text: "Rozpocznij precyzyjną analizę",
            href: "#pricing-section",
        },
        secondaryCTA: {
            text: "Poznaj Founding Partner Program",
            href: "/pl#application",
        },
        trustBadges: [
            "27+ Liderów Tech",
            "Lotnicza Precyzja",
            "Naukowo Zweryfikowane"
        ],
        imageSrc: "/synergy-radar-mockup.png",
        imageAlt: "HEXACO Synergy Radar pokazujący przewidywanie konfliktów osobowości",
    },

    problem: {
        title: "Ukryty wzorzec destrukcji",
        subtitle: "Toksyczny geniusz to nie tylko bycie nieuprzejmym. To promień rażenia lękiem, który niszczy zespół.",
        problemCards: [
            {
                emoji: "🤐",
                title: "Początek cichego zastraszania",
                description: "Juniorzy przestają zadawać pytania. Code review zamieniają się w przesłuchania. Zespół mówi 'sam to wymyślę', by uniknąć interakcji."
            },
            {
                emoji: "🛑",
                title: "Narastanie tarcia",
                description: "Strategiczne myślenie migruje do jednej osoby. Innowacyjność umiera. Standupy stają się monologami."
            },
            {
                emoji: "🚪",
                title: "Cicha eksodus",
                description: "Najlepsi seniorzy odchodzą 'dla rozwoju'. Tracisz cichych, strategicznych myślicieli, a toksyczny geniusz zostaje."
            }
        ],
        costTitle: "Ile naprawdę kosztuje jeden toksyczny geniusz:",
        costItems: [
            {
                value: "50,000+ zł",
                description: "Za każdą rotację Senior Developera"
            },
            {
                value: "30-40%",
                description: "Spadek tempa przez ciszę napędzaną lękiem"
            },
            {
                value: "6 miesięcy",
                description: "Czas wdrożenia nowej osoby na miejsce seniora"
            }
        ]
    },

    solution: {
        title: "Jak działa HEXACO Synergy Radar",
        subtitle: "3 kroki do przewidywalnego zespołu i eliminacji konfliktów",
        steps: [
            {
                title: "Ocena osobowości (15 min)",
                description: "Zespół wypełnia zweryfikowany kwestionariusz HEXACO (6 wymiarów). Mierzymy m.in. Uczciwość-Pokorę (H) - kluczowy predyktor toksyczności."
            },
            {
                title: "Analiza synergii AI",
                description: "Algorytm mapuje wzorce interakcji pod presją. Np. Tomek (niskie H) + Ania (wysokie O) = 87% ryzyka starcia w code review."
            },
            {
                title: "Precyzyjne rekomendacje",
                description: "Otrzymujesz konkretne instrukcje: 'Nie łącz w pary X i Y w tygodniu sprintu', 'Wzmocnij głos Z na standupie'."
            }
        ],
        imageSrc: "/synergy-radar-actual.png",
        imageAlt: "Interfejs Synergy Radar",
        imageCaption: "Synergy Radar ujawnia, którzy członkowie zespołu zderzą się pod presją - zanim napiszą pierwszą linię kodu."
    },

    socialProof: {
        title: "Tech Leadzi, Którzy Opanowali Chaos",
        metrics: [
            {
                value: "27+",
                label: "Liderów Tech"
            },
            {
                value: "40%",
                label: "Redukcja konfliktów"
            },
            {
                value: "3-6 msc",
                label: "Wcześniejsze ostrzeżenie"
            }
        ],
        testimonials: [
            {
                quote: "Rozmowy wyjściowe były uprzejme — 'rozwój kariery'. Ale wiedziałem, że coś jest nie tak. Synergy Radar pokazał mi wzorzec, którego nie widziałem. Nie zwolniłem 'toksycznego geniusza', po prostu przestałem zmuszać niekompatybilne osobowości do współpracy.",
                authorName: "Marcin K.",
                authorTitle: "Tech Lead, 12-osobowy zespół",
                authorCompany: "Producent Lotniczy"
            },
            {
                quote: "Dzięki analizie zrozumieliśmy, dlaczego nasi cisi architekci odchodzili. Teraz projektujemy interakcje tak, by ich głos był słyszalny, zanim zostaną zagłuszeni.",
                authorName: "Tomasz W.",
                authorTitle: "CTO",
                authorCompany: "Fintech Scale-up"
            }
        ]
    },

    pricing: {
        title: "Zainwestuj w Spokój Zespołu",
        subtitle: "Wybierz plan dopasowany do wielkości Twojego zespołu"
    },

    faq: {
        title: "Pytania Liderów Technicznych",
        items: [
            {
                question: "Jaka jest różnica między Standard Access a Founding Partner Program?",
                answer: "<strong>Standard Access:</strong> Stabilne funkcje, natychmiastowy dostęp, samodzielna nauka. <br/><br/><strong>Founding Partner Program:</strong> Eksperymentalne funkcje, kontakt z założycielem, dożywotnia zniżka 50%, wymagana aplikacja."
            },
            {
                question: "Czym to się różni od narzędzi HR (Culture Amp, Lattice)?",
                answer: "Tamte narzędzia mierzą nastroje (skutek). Synergy Radar przewiduje tarcia oparte na osobowości (przyczynę), zanim stworzą problemy z nastrojami."
            },
            {
                question: "Dlaczego HEXACO, a nie Myers-Briggs?",
                answer: "MBTI ma niską trafność prognostyczną i nie mierzy Uczciwości-Pokory (H) - najlepszego predyktora toksycznych zachowań. HEXACO jest standardem w lotnictwie i obronności."
            },
            {
                question: "Czy dane zespołu są prywatne?",
                answer: "Pełna prywatność i RODO. Tylko Ty (Tech Lead) widzisz analizę zespołu. Pracownicy widzą tylko swoje wyniki. Nie sprzedajemy danych."
            },
            {
                question: "Co jeśli nie będę zadowolony?",
                answer: "14-dniowy pełny zwrot pieniędzy, bez pytań. Jeśli analiza nie ujawni konkretnych wniosków, napisz do nas."
            }
        ]
    },

    cta: {
        headline: "Przestań tracić najlepszych ludzi",
        subheadline: "Synergy Radar pokazuje Ci wzorce konfliktów 3-6 miesięcy przed wybuchem. Zainwestuj mniej niż koszt jednego dnia rotacji seniora.",
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
