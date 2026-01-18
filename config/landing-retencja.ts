import { LandingPageConfig } from "@/types/landing-page";

const config: LandingPageConfig = {
    meta: {
        title: "Dlaczego Senior Developerzy Odchodzą? | HEXACO Synergy Radar",
        description: "Zatrzymaj rotację w zespole IT. HEXACO Synergy Radar przewiduje tarcia osobowości i odejścia pracowników na 3-6 miesięcy przed faktem.",
        keywords: ["retencja pracowników IT", "dlaczego programiści odchodzą", "rotacja w IT", "HEXACO", "zarządzanie talentami"]
    },
    hero: {
        eyebrow: "Od lidera tech, który stracił dwóch seniorów, zanim zrozumiał dlaczego",
        headline: "Dlaczego Twoi najlepsi deweloperzy odchodzą",
        subheadline: "Ankiety wyjściowe mówią „Kultura” — HEXACO pokazuje prawdziwy wzorzec. Zobacz wczesne sygnały ostrzegawcze na 3-6 miesięcy przed odejściem.",
        primaryCTA: {
            text: "Rozpocznij analizę ryzyka",
            href: "#pricing-section",
        },
        secondaryCTA: {
            text: "Poznaj Founding Partner Program",
            href: "/pl#application",
        },
        trustBadges: [
            "27+ Liderów Tech",
            "Redukcja Rotacji",
            "Naukowo Zweryfikowane"
        ],
        imageSrc: "/synergy-radar-mockup.png",
        imageAlt: "Prognoza ryzyka rotacji HEXACO",
    },

    problem: {
        title: "Wzorzec, którego nie widzisz (dopóki nie jest za późno)",
        subtitle: "Seniorzy nie odchodzą przez jeden zły dzień. Odchodzą przez skumulowane tarcie osobowości.",
        problemCards: [
            {
                emoji: "🤫",
                title: "Początek cichego tarcia",
                description: "Ania (Innowator) proponuje zmianę. Tomek (Tradycjonalista) ją odrzuca. Ania bierze to do siebie, ale milczy. Tarcie: 87%."
            },
            {
                emoji: "😒",
                title: "Ciche wycofanie",
                description: "Ania przestaje sugerować usprawnienia. Dowozi zadania mechanicznie. Profil na LinkedIn zaktualizowany na 'otwarta na propozycje'."
            },
            {
                emoji: "👋",
                title: "Uprzejme odejście",
                description: "Składa wypowiedzenie. 'Lepsza oferta'. Prawdziwy powód: jej wkład był systematycznie tłamszony przez 3 miesiące."
            }
        ],
        costTitle: "Prawdziwy koszt odejścia seniora:",
        costItems: [
            {
                value: "25,000+ zł",
                description: "Rekrutacja (agencje, czas, ogłoszenia)"
            },
            {
                value: "25,000+ zł",
                description: "Onboarding (6 miesięcy do pełnej produktywności)"
            },
            {
                value: "Efekt Domina",
                description: "Gdy odchodzi jeden senior, inni zaczynają pytać: 'Może ja też powinienem?'"
            }
        ]
    },

    solution: {
        title: "Jak dostrzec ryzyko rotacji 3-6 miesięcy wcześniej",
        subtitle: "HEXACO Synergy Radar identyfikuje wskaźniki wyprzedzające, zanim spadnie zaangażowanie",
        steps: [
            {
                title: "Stłamszony Innowator",
                description: "Wysokie O (Otwartość) + Wysokie E (Emocjonalność) w zespole konserwatywnym. Ryzyko: 78%. Interwencja: Daj im przestrzeń na innowacje."
            },
            {
                title: "Wypalony Perfekcjonista",
                description: "Wysokie C (Sumienność) w chaotycznym zespole (niskie C). Ryzyko: 82%. Interwencja: Chroń ich czas pracy głębokiej."
            },
            {
                title: "Ignorowany Architekt",
                description: "Wysokie O + Niskie Ekstrawersja. Są przegadywani przez głośnych kolegów. Ryzyko: 72%. Interwencja: Pytaj ich o zdanie jako ostatnich."
            }
        ],
        imageSrc: "/synergy-radar-actual.png",
        imageAlt: "Wzorce ryzyka rotacji w Synergy Radar",
        imageCaption: "Synergy Radar pokazuje, kogo parowanie z kim prowadzi do cichego wycofania."
    },

    socialProof: {
        title: "Zatrzymany Exodus Seniorów",
        metrics: [
            {
                value: "Zero",
                label: "Odejść seniorów (6 msc)"
            },
            {
                value: "+40%",
                label: "Wkład strategiczny"
            },
            {
                value: "100%",
                label: "Zatrzymanych talentów"
            }
        ],
        testimonials: [
            {
                quote: "Traciliśmy seniorów masowo. Każde odejście wywoływało kolejne. Nie mogłem znaleźć przyczyny. Synergy Radar pokazał wspólny wzorzec: wszyscy byli tłamszeni przez jednego 'genialnego' inżyniera. Rozdzieliliśmy ich - rotacja ustała.",
                authorName: "Michał R.",
                authorTitle: "Senior Engineering Manager",
                authorCompany: "SaaS Scale-up"
            },
            {
                quote: "Teraz widzę, kto jest zagrożony odejściem, zanim w ogóle pomyśli o zmianie pracy. To daje mi czas na naprawę relacji, zanim będzie za późno.",
                authorName: "Krzysztof B.",
                authorTitle: "CTO",
                authorCompany: "Software House"
            }
        ]
    },

    pricing: {
        title: "Inwestycja w Retencję",
        subtitle: "Mniej niż koszt jednego dnia rekrutacji na zastępstwo"
    },

    faq: {
        title: "Pytania o Przewidywanie Rotacji",
        items: [
            {
                question: "Jaka jest różnica między Standard Access a Founding Partner Program?",
                answer: "<strong>Standard Access:</strong> Stabilne funkcje, natychmiastowy dostęp, samodzielna nauka. <br/><br/><strong>Founding Partner Program:</strong> Eksperymentalne funkcje, kontakt z założycielem, dożywotnia zniżka 50%, wymagana aplikacja."
            },
            {
                question: "Czy HEXACO naprawdę może przewidzieć, kto odejdzie?",
                answer: "Przewidujemy wzorce tarć, które prowadzą do odejść. Ania + Tomek = 87% ryzyka starcia -> wycofanie -> odejście. Interweniuj na etapie starcia."
            },
            {
                question: "Co jeśli ktoś odejdzie z powodów życiowych?",
                answer: "Tego nie przewidzimy (przeprowadzka, rodzina). Ale HEXACO eliminuje zgadywanie - wiesz, że zrobiłeś wszystko, by środowisko było zdrowe."
            },
            {
                question: "Czy to nie samospełniająca się przepowiednia?",
                answer: "Nie, bo nie mówisz pracownikowi o fladze ryzyka. Po prostu poprawiasz jego środowisko pracy (np. dając więcej autonomii Innowatorowi). On czuje się lepiej i zostaje."
            },
            {
                question: "Czy dane są bezpieczne?",
                answer: "Tak, pełne RODO i prywatność. Ty widzisz analizę zespołu, pracownik tylko swój profil. Szyfrowanie end-to-end."
            }
        ]
    },

    cta: {
        headline: "Przestań dawać się zaskakiwać wypowiedzeniom",
        subheadline: "Synergy Radar identyfikuje tarcia prowadzące do rotacji na 3-6 miesięcy przed mentalnym odejściem.",
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
