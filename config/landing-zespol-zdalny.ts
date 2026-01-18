import { LandingPageConfig } from "@/types/landing-page";

const config: LandingPageConfig = {
    meta: {
        title: "Zarządzanie Zespołem Zdalnym i Hybrydowym | HEXACO Synergy Radar",
        description: "Praca zdalna potęguje konflikty. Zoptymalizuj komunikację w zespole rozproszonym dzięki analizie osobowości HEXACO.",
        keywords: ["zespół zdalny", "zarządzanie zespołem rozproszonym", "konflikty w pracy zdalnej", "HEXACO", "komunikacja w IT"]
    },
    hero: {
        eyebrow: "Od lidera, który zrozumiał: praca zdalna potęguje każdą dysfunkcję zespołu",
        headline: "Zespół zdalny = Zdalne problemy?",
        subheadline: "Komunikacja kuleje, ale na Slacku nie widać dlaczego. HEXACO mapuje style komunikacji, które załamują się w środowisku rozproszonym.",
        primaryCTA: {
            text: "Analizuj Zespół Zdalny",
            href: "#pricing-section",
        },
        secondaryCTA: {
            text: "Poznaj Founding Partner Program",
            href: "/pl#application",
        },
        trustBadges: [
            "27+ Liderów Tech",
            "Optymalizacja Async",
            "Naukowo Zweryfikowane"
        ],
        imageSrc: "/synergy-radar-actual.png",
        imageAlt: "Analiza wzorców komunikacji HEXACO dla zespołów rozproszonych",
    },

    problem: {
        title: "Praca zdalna potęguje każdą dysfunkcję",
        subtitle: "Tracisz bufor społeczny (mowę ciała, korytarz). Konflikty eskalują szybciej, a cisi pracownicy znikają.",
        problemCards: [
            {
                emoji: "🤬",
                title: "Toksyczność na Slacku",
                description: "Brak mowy ciała sprawia, że szorstkie komentarze czyta się jako ataki. Promień rażenia toksycznego geniusza rośnie."
            },
            {
                emoji: "😶",
                title: "Cisi architekci znikają",
                description: "Wysokie O (Otwartość) + Niskie X (Ekstrawersja) milczą na Zoomie. Ich strategiczne uwagi giną w wątkach, których nikt nie czyta."
            },
            {
                emoji: "🔥",
                title: "Wypalenie Ekstrawertyków",
                description: "Osoby z wysokim X gasną w trybie 'tylko async'. Czują się izolowane i tracą motywację bez interakcji live."
            }
        ],
        costTitle: "Koszt błędnego zarządzania zdalnego:",
        costItems: [
            {
                value: "30-40%",
                description: "Spadek wydajności przez tarcia komunikacyjne"
            },
            {
                value: "50,000+ zł",
                description: "Rotacja seniorów ('praca zdalna to nie dla mnie')"
            },
            {
                value: "Utracona innowacja",
                description: "Strategiczne uwagi cichych architektów nigdy nie wypływają"
            }
        ]
    },

    solution: {
        title: "Jak projektować zdalną komunikację wokół osobowości",
        subtitle: "Różne osobowości potrzebują rożnych proporcji Sync vs Async",
        steps: [
            {
                title: "Preferencja Sync vs Async",
                description: "Wysokie X (Ekstrawertyk) potrzebuje spotkań live. Niskie X (Introwertyk) potrzebuje czasu na pisanie. Stwórz hybrydowy protokół."
            },
            {
                title: "Ton komunikacji pisemnej",
                description: "Niskie H (Pokora) + Niskie A (Ugodowość) brzmią brutalnie na Slacku. Przenieś ich feedback na Zoom, gdzie ton jest łagodzony."
            },
            {
                title: "Struktura vs Chaos",
                description: "Wysokie C (Sumienność) potrzebuje rytuałów. Niskie C potrzebuje elastyczności. Dostosuj procesy, by nie wypalić jednych i nie zgubić drugich."
            }
        ],
        imageSrc: "/synergy-radar-actual.png",
        imageAlt: "Profile komunikacyjne w Synergy Radar",
        imageCaption: "Synergy Radar pokazuje, kto potrzebuje więcej Zooma, a kto więcej ciszy."
    },

    socialProof: {
        title: "Odzyskana Wydajność Zespołów Hybrydowych",
        metrics: [
            {
                value: "45%",
                label: "Poprawy współpracy"
            },
            {
                value: "60%",
                label: "Mniej konfliktów Slack"
            },
            {
                value: "Async+",
                label: "Balans komunikacji"
            }
        ],
        testimonials: [
            {
                quote: "Myśleliśmy, że hybryda to to co najlepsze. Zamiast tego mieliśmy chaos. HEXACO pokazało, że ekstrawertycy potrzebują biura, a introwertycy ciszy w domu. Dopasowaliśmy dni pracy do osobowości.",
                authorName: "Piotr Z.",
                authorTitle: "CTO",
                authorCompany: "Software House (50+ osób)"
            },
            {
                quote: "Nasi cisi architekci przestali się odzywać na Zoomie. Wprowadziliśmy zasadę pisemnych propozycji przed standupem dla osób z wysokim O/niskim X. Innowacyjność wróciła.",
                authorName: "Anna K.",
                authorTitle: "Engineering Manager",
                authorCompany: "Fintech Startup"
            }
        ]
    },

    pricing: {
        title: "Inwestycja w Zdalną Produktywność",
        subtitle: "Zoptymalizuj komunikację, zanim wydajność spadnie o 30%"
    },

    faq: {
        title: "Pytania o Zespoły Zdalne",
        items: [
            {
                question: "Jaka jest różnica między Standard Access a Founding Partner Program?",
                answer: "<strong>Standard Access:</strong> Stabilne funkcje, natychmiastowy dostęp, samodzielna nauka. <br/><br/><strong>Founding Partner Program:</strong> Eksperymentalne funkcje, kontakt z założycielem, dożywotnia zniżka 50%, wymagana aplikacja."
            },
            {
                question: "Jesteśmy w 5 strefach czasowych. Czy to pomoże?",
                answer: "Tak. Projektujesz okna współpracy live dla Ekstrawertyków i procesy async dla Introwertyków, zamiast zmuszać wszystkich do siedzenia po nocach."
            },
            {
                question: "Czy to rozwiąże konflikty na Slacku?",
                answer: "Tak. HEXACO wskaże, kto (niskie H/niskie A) staje się toksyczny w piśmie. Przenosisz ich trudne rozmowy na wideo, a Slacka zostawiasz dla faktów."
            },
            {
                question: "Czy dane są prywatne?",
                answer: "Pełna prywatność i RODO. Ty widzisz analizę zespołu, pracownik tylko swój profil. Szyfrowanie end-to-end."
            },
            {
                question: "Co jeśli nie będę zadowolony?",
                answer: "14-dniowy pełny zwrot pieniędzy. Jeśli analiza nie poprawi komunikacji, oddajemy kasę."
            }
        ]
    },

    cta: {
        headline: "Przestań walczyć z pracą zdalną",
        subheadline: "Zaprojektuj protokół komunikacji wokół osobowości Twojego zespołu, a nie przeciwko nim. Odzyskaj utraconą wydajność.",
        primaryCTA: {
            text: "Analizuj Zespół Zdalny",
            href: "#pricing-section"
        },
        secondaryCTA: {
            text: "Aplikuj do Founding Partners",
            href: "/pl#application"
        }
    }
};

export default config;
