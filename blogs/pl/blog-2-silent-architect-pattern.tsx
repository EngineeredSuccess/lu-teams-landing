'use client';

import React from 'react';

export default function SilentArchitectPatternPL() {
    return (
        <article className="min-h-screen bg-slate-950 text-slate-100">
            {/* Hero Section */}
            <header className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-slate-950 to-violet-950/30" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-sm font-medium rounded-full border border-indigo-500/30">
                            Wzorzec Dynamiki Zespołu
                        </span>
                        <span className="text-slate-500 text-sm">10 min czytania</span>
                    </div>

                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-slate-100 via-indigo-100 to-violet-100 bg-clip-text text-transparent">
                        Cichy Architekt: Twój najlepszy inżynier właśnie planuje odejście
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
                        Introwertyczny talent, który na standupach wygląda na "zadowolonego", właśnie aktualizuje profil na LinkedIn.
                        Oto jak rozpoznać niedoceniany potencjał, zanim zniknie z Twojej firmy.
                    </p>

                    <div className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-800">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white">
                            PR
                        </div>
                        <div>
                            <p className="font-medium text-slate-200">Paweł Rzepecki</p>
                            <p className="text-sm text-slate-500">Remote Team Leadership Coach · LU Teams</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-16">

                {/* The Hook */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-indigo-950/50 to-slate-900/50 border-l-4 border-indigo-500 p-8 rounded-r-xl mb-10">
                        <p className="text-lg text-slate-300 leading-relaxed italic">
                            "Myślałem, że jest szczęśliwa. Nigdy nie narzekała. Jej kod był zawsze doskonały. Potem w pewien
                            piątek poprosiła o krótką rozmowę i złożyła wypowiedzenie. Powiedziała, że od dwóch lat czuła się niewidzialna.
                            Właśnie pominęliśmy ją przy awansie na tech leada — daliśmy go facetowi, który więcej mówił na spotkaniach."
                        </p>
                        <p className="mt-4 text-slate-500">— Dyrektor inżynierii w firmie technologicznej z listy Fortune 500</p>
                    </div>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        W każdej organizacji inżynierskiej, z którą pracowałem, jest przynajmniej jeden Cichy Architekt.
                        To programista, który po cichu refaktoryzuje system uwierzytelniania w weekend,
                        zapobiegając katastrofie bezpieczeństwa, której nikt inny nie przewidział. To on wyłapuje
                        w code review błąd brzegowy (edge case), który położyłby produkcję.
                    </p>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Nie przerywają innym na spotkaniach. Nie promują się na Slacku. Nie wysyłają do kierownictwa
                        maili typu "zobacz, co zbudowałem". I z tego powodu są systematycznie
                        pomijani przy awansach, zarabiają mniej niż powinni i ostatecznie — nieuchronnie — odchodzą.
                    </p>

                    <p className="text-lg text-slate-300 leading-relaxed">
                        Strata Cichego Architekta jest często bardziej bolesna niż odejście gwiazdy, która jest na świeczniku.
                        Ponieważ zanim zdasz sobie sprawę z ogromu ich pracy, ich już dawno nie ma w firmie.
                    </p>
                </section>

                {/* The Visibility Problem */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Luka widoczności, która kosztuje Cię najlepsze talenty
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        Decyzje o awansach w większości firm technologicznych są silnie obarczone błędem widoczności.
                        Mówimy, że cenimy "wpływ" (impact), ale w rzeczywistości mierzymy "wpływ, który zauważyliśmy".
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-red-400 mb-3">Co jest nagradzane</h3>
                            <ul className="space-y-2 text-slate-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Zabieranie głosu na spotkaniach</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Prowadzenie medialnych projektów</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Wysyłanie ogólnofirmowych aktualizacji</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Aktywne promowanie siebie w ocenach pracowniczych</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Budowanie relacji z kierownictwem</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-green-400 mb-3">Co naprawdę ma znaczenie</h3>
                            <ul className="space-y-2 text-slate-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Jakość kodu i trafne decyzje architektoniczne</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Zapobieganie problemom przed ich wystąpieniem</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Mentoring poprzez code review</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Głębokie rozwiązywanie problemów technicznych</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Dokumentacja i dzielenie się wiedzą</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Badania konsekwentnie pokazują, że introwertycy stanowią około 25-40% populacji,
                        ale role przywódcze są zdominowane przez ekstrawertyków — nie dlatego, że są lepszymi
                        liderami, ale dlatego, że nasze systemy awansów promują ekstrawertyczne zachowania.
                    </p>
                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        W Polsce ten problem jest często jeszcze głębszy. Nasza kultura inżynierska jest historycznie bardziej
                        introwertyczna i technokratyczna, a mimo to coraz częściej importujemy zachodnie wzorce
                        zarządzania oparte na głośnej autopromocji. Tworzy to potężny dysonans poznawczy u
                        najlepszych specjalistów.
                    </p>

                    <div className="bg-gradient-to-r from-amber-950/30 to-slate-900/30 border border-amber-900/30 rounded-xl p-6">
                        <p className="text-amber-300 font-medium mb-2">Badania:</p>
                        <p className="text-slate-400 leading-relaxed">
                            Analizy Harvard Business Review wskazują, że introwertyczni liderzy często osiągają lepsze wyniki
                            niż ekstrawertyczni przy prowadzeniu proaktywnych zespołów — dokładnie takich, jakie spotykamy
                            w inżynierii oprogramowania. Mimo to ekstrawertycy awansują na stanowiska liderów prawie 3 razy częściej.
                        </p>
                    </div>
                </section>

                {/* Case Study */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Case Study: Programistka, która prawie odeszła
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Pracowałem z "Mei" (imię zmienione) w jednej z najbardziej frustrujących sytuacji, z jakimi się spotkałem — i
                        jednocześnie najbardziej pouczającej.
                    </p>

                    <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-8 mb-8">
                        <h3 className="text-xl font-semibold text-slate-100 mb-4">Sytuacja</h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            Mei była starszą programistką backendową w średniej wielkości firmie SaaS. Jej kod był bezbłędny.
                            Projekty systemów — eleganckie. Inni inżynierowie wymieniali ją jako najbardziej
                            pomocną osobę przy sprawdzaniu kodu. Ale na spotkaniach rzadko zabierała głos, chyba że została wywołana.
                            Nie chodziła na opcjonalne eventy integracyjne. Ocena menedżera: "solidny pracownik,
                            ale chyba nie materiał na lidera".
                        </p>
                        <p className="text-slate-400">
                            Brzmi znajomo?
                        </p>
                    </div>

                    <div className="border-l-2 border-slate-700 pl-6 space-y-6 mb-8">
                        <div>
                            <h4 className="text-lg font-semibold text-indigo-400 mb-2">Punkt zwrotny</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Gdy zwolniło się stanowisko tech leada, Mei została pominięta na rzecz bardziej widocznego (choć mniej
                                sprawnego technicznie) kolegi. Nigdy wcześniej nie wyraziła wprost chęci objęcia tej
                                roli — bo zakładała, że jej praca obroni się sama. Nie obroniła się.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-violet-400 mb-2">Co odkryliśmy</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Podczas naszych sesji coachingowych zrobiliśmy mapę jej rzeczywistych osiągnięć z ostatniego roku.
                                Zapobiegła trzem poważnym awariom dzięki wyłapanym błędom w code review. Zaprojektowała
                                system, który bez problemu obsłużył ruch podczas Black Friday. Przeszkoliła
                                dwóch młodszych programistów na solidnych seniorów. Nic z tego nie było widoczne
                                dla kierownictwa, bo działo się bez fanfar.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-green-400 mb-2">Interwencja</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Pracowaliśmy na dwóch polach: po pierwsze, tworząc systemy czyniące jej wkład widocznym
                                bez konieczności autopromocji (co było dla niej skrajnie niekomfortowe). Po drugie,
                                pracując z jej menedżerem nad zmianą sposobu oceny i doceniania pracy.
                                Sześć miesięcy później awansowała na Staff Engineera.
                            </p>
                        </div>
                    </div>

                    <p className="text-lg text-slate-300 leading-relaxed">
                        Lekcja: to nie Mei była problemem. Problemem był system widoczności zasług. I większość
                        organizacji ma ten sam wadliwy system.
                    </p>
                </section>

                {/* Warning Signs */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Sygnały ostrzegawcze, że tracisz Cichego Architekta
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        Cichy Architekt nie ogłasza swojej frustracji. Dusi ją w sobie. Oto
                        subtelne sygnały, że Twój milczący as planuje odejście.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">1</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Spadek jakości komentarzy w Code Review</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Kiedyś pisali szczegółowe, edukacyjne uwagi. Teraz ich recenzje ograniczają się
                                        do lakonicznego "LGTM". To nie lenistwo — to brak zaangażowania.
                                        Przestali inwestować w zespół, który zamierzają opuścić.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold">2</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Koniec z wolontariatem</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Kiedyś po cichu brali na siebie mało prestiżowe prace — dokumentację, dług techniczny,
                                        wdrażanie nowych pracowników. Teraz robią tylko to, co mają przypisane i nic więcej.
                                        Przestali dawać od siebie to "ekstra" organizacji, która ich nie zauważa.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">3</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Nagła aktywność na LinkedIn</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Nowe zdjęcie profilowe. Dodane umiejętności. Nowe kontakty z rekruterami. Cichy
                                        Architekt nie powie Ci, że szuka pracy — ale LinkedIn pokazuje to każdemu,
                                        kto umie patrzeć.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">4</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Skracanie rozmów 1-on-1</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Kiedyś angażowali się w dyskusje o wyzwaniach czy celach zawodowych.
                                        Teraz wszystko jest "w porządku". Przestali się dzielić, bo przestali
                                        wierzyć, że to cokolwiek zmieni.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-950/30 to-slate-900/30 border border-red-900/30 rounded-xl p-6 mt-8">
                        <p className="text-red-300 font-medium mb-2">Kluczowe spostrzeżenie:</p>
                        <p className="text-slate-400 leading-relaxed">
                            Błędem jest interpretowanie ciszy jako zadowolenia. Introwertyczni specjaliści
                            nie narzekają głośno — oni po prostu głosują nogami. Kiedy zorientujesz się, że coś jest nie tak,
                            zazwyczaj podjęli już decyzję o odejściu.
                        </p>
                    </div>
                </section>

                {/* HEXACO Analysis */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Profil HEXACO Cichego Architekta
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Zrozumienie wymiarów osobowości pomaga menedżerom lepiej wspierać — i
                        zatrzymywać — swoich introwertycznych asów.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-indigo-400 mb-3">Wysoka Sumienność</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Cisi Architekci zazwyczaj mają wysoki poziom Sumienności — są rzetelni,
                                dokładni i zorientowani na szczegóły. Dlatego ich praca jest doskonała. Oznacza to jednak również,
                                że oczekują uczciwości i uznania za jakość — i czują głęboką
                                frustrację, gdy "showman" wygrywa z merytoryką.
                            </p>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-violet-400 mb-3">Niższa Ekstrawersja</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Niska Ekstrawersja nie oznacza braku ambicji czy zaangażowania. Oznacza, że
                                ładują baterie poprzez pracę w samotności, preferują komunikację pisemną i
                                czują dyskomfort przy autopromocji. To nie są słabości — to preferencje,
                                które wymagają innego podejścia zarządczego.
                            </p>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-purple-400 mb-3">Wyższa Uczciwość-Pokora</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Współczynnik H jest często wysoki u Cichych Architektów. Nie manipulują,
                                nie uprawiają polityki gier i nie wyolbrzymiają zasług. Ta integralność jest cenna — ale w
                                firmach nagradzających "krzykaczy", staje się obciążeniem zawodowym.
                            </p>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-blue-400 mb-3">Zmienna Emocjonalność</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Niektórzy Cisi Architekci mają niską emocjonalność — są spokojni pod presją, ale
                                też nie wyrażają frustracji na zewnątrz. Inni mają ją wysoką, ale ją tłumią.
                                W obu przypadkach ich uczucia są niewidoczne, co utrudnia
                                menedżerom odczytanie poziomu ich zaangażowania.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Coaching Approach */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Jak wydobyć cichy blask
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        Kiedy szkolę menedżerów mających w zespołach Cichych Architektów, skupiamy się na trzech
                        strategiach: tworzeniu systemów widoczności, restrukturyzacji rozmów 1-on-1 i wbudowaniu
                        doceniania merytoryki w kulturę zespołu.
                    </p>

                    <div className="space-y-8">
                        <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-slate-100 mb-4">1. Dokumentowanie wkładu</h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Stwórz systemy, w których osiągnięcia są widoczne automatycznie — nie zależą od
                                samoraportowania. Może to być: wpływ na code review, śledzenie zapobiegania incydentom,
                                logi wkładu w dokumentację czy systemy podziękowań za mentoring.
                            </p>
                            <p className="text-slate-400 text-sm">
                                Cel: uczynić niewidzialną pracę widoczną bez zmuszania pracownika do promowania samego siebie.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-slate-100 mb-4">2. Lepsza struktura 1-on-1</h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Standardowe rozmowy 1-on-1 sprzyjają ekstrawertykom: dyskusja ustna, myślenie w czasie rzeczywistym,
                                small talk budujący relacje. Dla introwertycznych asów spróbuj: wysyłania pytań z wyprzedzeniem,
                                korzystania z form pisemnych, skupienia na pracy a nie na relacji oraz tworzenia przestrzeni na
                                wyrażenie obaw bez bezpośredniej konfrontacji.
                            </p>
                            <p className="text-slate-400 text-sm">
                                Zadawaj konkretne pytania: "Co Cię najbardziej sfrustrowało w tym tygodniu?" działa lepiej niż
                                "Jak leci?"
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-slate-100 mb-4">3. Alternatywne ścieżki prezentacji</h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Nie każdy musi występować na forum całej firmy, by zostać docenionym. Stwórz ścieżki
                                pasujące do różnych typów osobowości: techniczne posty na blogu, wkład w dokumentację,
                                nagrywanie demo (walkthrough), zapisywanie decyzji architektonicznych (ADR) i wkład
                                w retrospektywy zespołowe.
                            </p>
                            <p className="text-slate-400 text-sm">
                                Zasada: widoczność powinna być dostępna dla każdego, a nie być konkursem, który wygrywają tylko głośni.
                            </p>
                        </div>
                    </div>
                </section>

                {/* LU Teams Section */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Jak LU Teams identyfikuje ukryte talenty
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Jedną z kluczowych możliwości LU Teams jest wskazywanie talentów, które umykają
                        tradycyjnemu podejściu do zarządzania. Platforma wykorzystuje profilowanie HEXACO połączone z
                        analizą dynamiki zespołu, aby wydobyć Cichych Architektów, zanim stracą zaangażowanie.
                    </p>

                    <div className="bg-gradient-to-br from-indigo-950/50 to-violet-950/30 border border-indigo-900/50 rounded-xl p-8 mb-8">
                        <h3 className="text-xl font-semibold text-indigo-200 mb-4">Co identyfikuje platforma</h3>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-400 mt-1">→</span>
                                <span><strong className="text-slate-100">Introwertycy o wysokim potencjale:</strong> Członkowie zespołu, których profile sugerują ogromne możliwości przy niskiej skłonności do manifestowania ich na zewnątrz</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-400 mt-1">→</span>
                                <span><strong className="text-slate-100">Czynniki ryzyka spadku zaangażowania:</strong> Połączenie wysokiej Sumienności z brakiem uznania, co zwiastuje frustrację i odejście</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-400 mt-1">→</span>
                                <span><strong className="text-slate-100">Niedopasowanie stylów zarządzania:</strong> Sytuacje, gdy podejście menedżera systematycznie faworyzuje tylko wybrany typ osobowości</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-400 mt-1">→</span>
                                <span><strong className="text-slate-100">Potencjał przywódczy:</strong> Cisi Architekci, którzy mają zdolności do bycia liderami technicznymi przy odpowiednim wsparciu</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Actionable Steps */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Co możesz zrobić w tym tygodniu
                    </h2>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">1</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Audyt rozkładu widoczności</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Spójrz na to, kto jest wymieniany w aktualizacjach, kto prezentuje na spotkaniach,
                                    kogo docenia się przy wdrażaniu nowości. Czy widzisz wzorzec? Czy są osoby
                                    systematycznie pomijane mimo silnego merytorycznego wkładu?
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">2</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Zmień strukturę rozmów 1-on-1</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Dla cichszych członków zespołu wyślij agendę 24 godziny wcześniej. Zadaj konkretne
                                    pytania: "Co ułatwiłoby Twoją pracę?" oraz "Z czego jesteś szczególnie dumny, a czujesz, że nie zostało to zauważone?"
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">3</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Stwórz kanały wkładu pisemnego</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Uruchom techniczny blog zespołu lub system ADR, gdzie
                                    wkład jest widoczny bez mówienia. Spraw, by wkład pisemny liczył się
                                    do oceny rocznej.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">4</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Aktywnie wskazuj zasługi</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Na spotkaniach i w raportach wprost przypisuj sukcesy cichym osobom.
                                    "To wdrożenie zakończyło się sukcesem, bo Mei wyłapała krytyczny błąd w fazie testów"
                                    — budujesz dla nich widoczność, której sami sobie nie stworzą.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                        <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
                            Liderzy, których nie widzi Twoja firma
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed mb-4">
                            Gdzieś w Twoim zespole jest teraz Cichy Architekt. Pisze kod, który trzyma Twój produkt
                            przy życiu. Wyłapuje błędy, które kosztowałyby Cię utratę klientów. Po cichu sprawia,
                            że wszyscy wokół są lepsi.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Zastanawia się też, czy ktokolwiek to widzi. I prawdopodobnie jest o jakieś sześć miesięcy
                            od aktualizacji swojego profilu na LinkedIn.
                        </p>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center py-12 border-t border-slate-800">
                    <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
                        Zidentyfikuj ukryte talenty w swoim zespole
                    </h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        LU Teams wykorzystuje psychometrię, by wydobyć niedoceniany potencjał, zanim
                        ludzie stracą zaangażowanie. Dołącz do bety, by zyskać wgląd w dynamikę Twojego zespołu.
                    </p>
                    <a
                        href="/pl/application"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25"
                    >
                        Dołącz do programu Beta
                        <span>→</span>
                    </a>
                </section>

                {/* Related Content */}
                <section className="py-12 border-t border-slate-800">
                    <h3 className="text-lg font-semibold text-slate-400 mb-6">Czytaj dalej</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <a href="/pl/blog/toxic-genius-pattern" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                            <span className="text-sm text-red-400 mb-2 block">Wzorzec Dynamiki Zespołu</span>
                            <h4 className="text-lg font-semibold text-slate-100 group-hover:text-red-300 transition-colors">Toksyczny Geniusz: Jak jeden wybitny inżynier kosztował nas 10 milionów dolarów</h4>
                            <p className="text-slate-500 mt-2 text-sm">Gdy techniczna błyskotliwość staje się destrukcją zespołu.</p>
                        </a>
                        <a href="/pl/blog/echo-chamber-effect" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                            <span className="text-sm text-emerald-400 mb-2 block">Wzorzec Dynamiki Zespołu</span>
                            <h4 className="text-lg font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">Efekt Komory Echa: Gdy znika różnorodność poznawcza</h4>
                            <p className="text-slate-500 mt-2 text-sm">Dlaczego zespoły wybitnych ludzi czasem dają mierne wyniki.</p>
                        </a>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                <p>© 2025 LU Teams. Budujemy lepszą kulturę inżynierską dzięki psychometrii osobowości.</p>
            </footer>
        </article>
    );
}
