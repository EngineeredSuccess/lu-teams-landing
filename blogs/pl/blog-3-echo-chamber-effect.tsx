'use client';

import React from 'react';

export default function EchoChamberEffectPL() {
    return (
        <article className="min-h-screen bg-slate-950 text-slate-100">
            {/* Hero Section */}
            <header className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-slate-950 to-teal-950/30" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/30">
                            Wzorzec Dynamiki Zespołu
                        </span>
                        <span className="text-slate-500 text-sm">11 min czytania</span>
                    </div>

                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-slate-100 via-emerald-100 to-teal-100 bg-clip-text text-transparent">
                        Pułapka jednomyślności: Dlaczego Twój zespół gwiazd nie dowozi wyników
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
                        Zatrudniłeś wybitnych architektów. Zgadzają się we wszystkim. A jednak
                        nic nie posuwa się do przodu. Poznaj ukryte koszty jednolitości poznawczej.
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
                    <div className="bg-gradient-to-r from-emerald-950/50 to-slate-900/50 border-l-4 border-emerald-500 p-8 rounded-r-xl mb-10">
                        <p className="text-lg text-slate-300 leading-relaxed italic">
                            "Złożyliśmy zespół marzeń — pięciu senior architektów z najlepszych firm. Każdy wybitny.
                            Spędzili trzy miesiące debatując nad idealną architekturą mikroserwisów. Zanim skończyli
                            dokumentację projektową, nasza konkurencja weszła na rynek i przejęła klientów."
                        </p>
                        <p className="mt-4 text-slate-500">— Założyciel upadłego fintechowego startupu</p>
                    </div>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Najbardziej paradoksalnym błędem w inżynierii oprogramowania nie jest posiadanie słabych ludzi — to
                        posiadanie zbyt wielu podobnych do siebie dobrych ludzi. Kiedy wszyscy w zespole myślą w ten sam sposób, nie
                        zyskujesz synergii. Zyskujesz paraliż.
                    </p>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Nazywam to Efektem Komory Echa (Echo Chamber Effect): zjawisko, w którym jednolity poznawczo zespół
                        produkuje wyrafinowane intelektualnie idee, które jakimś cudem nigdy nie stają się produktami.
                        Wszyscy zgadzają się zbyt szybko. Nikt nie kwestionuje założeń. Debata skupia się na detalach,
                        ponieważ w kwestiach fundamentalnych nie ma o czym dyskutować.
                    </p>

                    <p className="text-lg text-slate-300 leading-relaxed">
                        I ostatecznie — nic nie zostaje wdrożone.
                    </p>
                </section>

                {/* The Paradox */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Paradoks idealnego zespołu
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        Oto co czyni Komorę Echa tak podstępną: wygląda ona jak doskonała praca zespołowa.
                        Spotkania są efektywne. Decyzje wydają się jednogłośne. Diagramy architektury są piękne.
                        Wszyscy są "zalignowani".
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-emerald-400 mb-3">Co widzi lider</h3>
                            <ul className="space-y-2 text-slate-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1">✓</span>
                                    <span>Szybki konsensus na spotkaniach</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1">✓</span>
                                    <span>Brak konfliktów</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1">✓</span>
                                    <span>Eleganckie rozwiązania techniczne</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1">✓</span>
                                    <span>Wyrafnowanie intelektualne</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1">✓</span>
                                    <span>Wspólne słownictwo i wartości</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-red-400 mb-3">Co dzieje się naprawdę</h3>
                            <ul className="space-y-2 text-slate-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">✗</span>
                                    <span>Myślenie grupowe tłumi alternatywy</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">✗</span>
                                    <span>Martwe punkty pozostają niezakwestionowane</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">✗</span>
                                    <span>Nadmierna inżynieria (over-engineering) zastępuje pragmatyzm</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">✗</span>
                                    <span>Perspektywa użytkownika znika z pola widzenia</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">✗</span>
                                    <span>Dowożenie wyników (egzekucja) traci priorytet</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-lg text-slate-300 leading-relaxed">
                        Badania są jasne: zespoły różnorodne poznawczo osiągają lepsze wyniki niż te jednolite — nawet
                        wtedy, gdy zespoły jednolite mają wyższy średni poziom indywidualnych kompetencji. Zespół pięciu
                        nieco różniących się osób osiągających "8" w skali zdolności pokona zespół pięciu identycznych "10".
                    </p>
                </section>

                {/* Case Study */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Case Study: Astronauci Architektury
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Opowiem Ci o zespole, z którym pracowałem — jednej z najzdolniejszych grup inżynierów,
                        jakich kiedykolwiek spotkałem, i jednocześnie jednej z najbardziej dysfunkcyjnych.
                    </p>

                    <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-8 mb-8">
                        <h3 className="text-xl font-semibold text-slate-100 mb-4">Skład zespołu</h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            Startup w fazie Series B zebrał to, co uważał za zespół marzeń. Pięciu seniorów,
                            każdy z ponad 10-letnim doświadczeniem, wszyscy z czołowych firm technologicznych
                            (Google, Meta, Netflix). Wszyscy mieli podobne pochodzenie: dyplomy CS z prestiżowych uczelni,
                            doświadczenie w systemach rozproszonych i wspólną filozofię "robienia rzeczy we właściwy sposób".
                        </p>
                        <p className="text-slate-400">
                            Na papierze to był dream team. W praktyce okazał się porażką.
                        </p>
                    </div>

                    <div className="border-l-2 border-slate-700 pl-6 space-y-6 mb-8">
                        <div>
                            <h4 className="text-lg font-semibold text-emerald-400 mb-2">Miesiące 1-2: Miesiąc miodowy</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Spotkania były stymulujące intelektualnie. Zespół zagłębiał się w projektowanie systemów,
                                debatując nad zaletami event sourcingu vs CQRS, omawiając optymalny sposób
                                obsługi transakcji rozproszonych. Każdy był pod wrażeniem wiedzy pozostałych.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-teal-400 mb-2">Miesiące 3-4: Przestój</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Dokument architektury urósł do 47 stron. Każda decyzja projektowa prowadziła do kolejnej.
                                Zespół nie mógł uzgodnić, której kolejki wiadomości użyć, nie dlatego, że się nie zgadzali,
                                ale dlatego, że ciągle znajdowali nowe przypadki brzegowe do rozważenia. Nie napisano ani linii kodu.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-amber-400 mb-2">Miesiące 5-6: Rozliczenie</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Zarząd zaczął zadawać pytania. Zespół spalił połowę budżetu, nie pokazując nic poza
                                dokumentami. Gdy zostali zmuszeni do wdrożenia czegokolwiek — czegokolwiek — polegli.
                                Zoptymalizowali system pod kątem perfekcji architektonicznej, a nie iteracji.
                                Ostatecznie MVP, które stworzyli, było przeładowane inżynieryjnie pod skalę, której jeszcze nie mieli.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Warning Signs */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Sygnały ostrzegawcze Komory Echa
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        Komorę Echa trudno zdiagnozować będąc wewnątrz niej. Oto wzorce, których nauczyłem się
                        szukać podczas coachingu zespołów.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">1</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Podejrzanie szybki konsensus</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Kiedy wszyscy zgadzają się w pierwszych 10 minutach, to nie jest dopasowanie — to
                                        jednolitość. Zdrowe zespoły charakteryzują się konstruktywnym tarciem. Jeśli Twoje przeglądy projektu
                                        nigdy nie generują sprzeciwu, tracisz inne perspektywy, a nie osiągasz doskonałość.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">2</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Debaty o trywia, cisza o strategii</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Komory Echa często generują intensywne dyskusje o detalach implementacji
                                        (tabulatory vs spacje, średniki, konwencje nazewnictwa), podczas gdy pytania strategiczne
                                        pozostają bez odpowiedzi. Dzieje się tak, bo wszyscy podzielają fundamentalne założenia —
                                        jedyne różnice to preferencje na poziomie powierzchni.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">3</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Brak Adwokata Diabła</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        W zdrowych zespołach ktoś naturalnie wchodzi w rolę adwokata diabła — kwestionując
                                        założenia i złożoność, opowiadając się za prostszymi rozwiązaniami. Jeśli
                                        to nie dzieje się organicznie, to znak, że wszyscy mają te same martwe punkty.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">4</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Uzależnienie od złożoności</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Gdy każde rozwiązanie obejmuje systemy rozproszone, mikroserwisy i event
                                        sourcing — nawet dla problemów, które mogłyby być rozwiązane bazą SQLite — zespół
                                        zbiegł się wokół wspólnych uprzedzeń na temat tego, jak wygląda "dobra inżynieria".
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HEXACO Analysis */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Perspektywa HEXACO: Homogeniczność "Otwartości"
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Z punktu widzenia modelu HEXACO, techniczne komory echa często wynikają ze skupienia wokół wymiaru Otwartości na Doświadczenie — a konkretnie podczynnika ciekawości intelektualnej.
                    </p>

                    <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8 mb-8">
                        <h3 className="text-xl font-semibold text-slate-100 mb-4">Wzorzec</h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            Inżynierowie o wysokiej Otwartości kochają eksplorować idee, budować eleganckie systemy i rozwiązywać
                            intelektualnie ciekawe problemy. To jest wartościowe. Ale gdy wszyscy w zespole
                            mają wysoką Otwartość, zyskujesz:
                        </p>
                        <ul className="space-y-2 text-slate-400">
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-400 mt-1">→</span>
                                <span>Niekończącą się eksplorację bez domykania tematów</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-400 mt-1">→</span>
                                <span>Preferowanie nowatorskich rozwiązań nad sprawdzonymi</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-400 mt-1">→</span>
                                <span>Niedocenianie "nudnych", ale praktycznych podejść</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-400 mt-1">→</span>
                                <span>Rozrastanie się zakresu prac (scope creep) pod płaszczykiem rzetelności</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                        <h3 className="text-xl font-semibold text-slate-100 mb-4">Czego brakuje</h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            Przeciwwagą dla wysokiej Otwartości jest często wysoka Sumienność z praktycznym
                            nastawieniem — ludzie, którzy pytają "tak, ale czy to wdrożymy?". To są głosy, które
                            zostają zagłuszone w zespołach optymalizujących pod kątem intelektualnego wyrafinowania.
                        </p>
                    </div>
                </section>

                {/* The Fix */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Rozbijanie Komory Echa: Celowa różnorodność poznawcza
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        Kiedy pracuję z zespołami utkniętymi w komorach echa, skupiamy się na trzech interwencjach: zmianach w składzie,
                        procesie i sposobie myślenia.
                    </p>

                    <div className="space-y-8">
                        <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-slate-100 mb-4">1. Zatrudniaj pod kątem różnorodności poznawczej</h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Przy zatrudnianiu szukaj stylów myślenia, które różnią się od Twojego obecnego zespołu.
                                Jeśli masz pięciu architektów, zatrudnij pragmatycznego "dowożącego". Jeśli wszyscy mają background z FAANG,
                                zatrudnij kogoś z dynamicznego startupu.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-slate-100 mb-4">2. Zinstytucjonalizuj rolę Adwokata Diabła</h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Jeśli sprzeciw nie pojawia się naturalnie, uczyn go elementem struktury. Przydzielaj komuś
                                rolę adwokata diabła w każdym przeglądzie projektu. Rotuj tę rolę, aby nie stała się
                                cechą charakteru jednej osoby.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-slate-100 mb-4">3. Wprowadź ograniczenia wymuszające kompromisy</h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Komory echa kwitną w środowiskach bez ograniczeń. Dodaj sztuczne limity, które
                                wymuszają praktyczne myślenie: ramy czasowe na fazy projektowe, obowiązkowe kamienie milowe MVP,
                                "pierwsza wersja musi być gotowa do wdrożenia w X tygodni".
                            </p>
                        </div>
                    </div>
                </section>

                {/* LU Teams Section */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Jak LU Teams identyfikuje homogeniczność poznawczą
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        LU Teams wykorzystuje profilowanie HEXACO, aby zmapować skład zespołu na wielu wymiarach
                        osobowości, identyfikując niebezpieczne skupiska zanim staną się problemem.
                    </p>

                    <div className="bg-gradient-to-br from-emerald-950/50 to-teal-950/30 border border-emerald-900/50 rounded-xl p-8 mb-8">
                        <h3 className="text-xl font-semibold text-emerald-200 mb-4">Analiza składu zespołu</h3>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1">→</span>
                                <span><strong className="text-slate-100">Mapowanie różnorodności:</strong> Wizualna reprezentacja rozkładu osobowości w zespole na wszystkich sześciu wymiarach HEXACO</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1">→</span>
                                <span><strong className="text-slate-100">Identyfikacja luk:</strong> Automatyczne wykrywanie brakujących perspektyw na podstawie wymagań roli</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1">→</span>
                                <span><strong className="text-slate-100">Rekomendacje rekrutacyjne:</strong> Konkretne profile osobowości, które dodałyby do zespołu zdrowe tarcie poznawcze</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1">→</span>
                                <span><strong className="text-slate-100">Alerty ryzyka:</strong> Wczesne ostrzeganie, gdy skład zespołu dryfuje w stronę jednolitości</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Actionable Steps */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Co zrobić w poniedziałek rano
                    </h2>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">1</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Zmapuj style myślenia w swoim zespole</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Dla każdego członka zespołu zadaj sobie pytanie: czy to odkrywca, czy wykonawca? Przekłada
                                    elegancję nad pragmatyzm? Naturalnie kwestionuje czy dostosowuje się? Jeśli wszyscy
                                    wpadają do tego samego koszyka, masz komorę echa.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">2</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Przejrzyj swoje ostatnie decyzje</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Spójrz na pięć ostatnich ważnych decyzji technicznych. Jak szybko
                                    pojawił się konsensus? Czy alternatywne podejścia były poważnie rozważane? Czy
                                    złożoność była kiedykolwiek zakwestionowana?
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">3</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Wyznacz "Rzecznika Prostoty"</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Na następnym przeglądzie projektu wyznacz kogoś, kto będzie jawnie opowiadał się za
                                    najprostszym możliwym rozwiązaniem. Zadaniem tej osoby jest hamowanie złożoności
                                    i pytanie "czy na pewno tego potrzebujemy?". Rotuj tę rolę na każdym spotkaniu.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                        <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
                            Przewaga konkurencyjna dzięki tarciu
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed mb-4">
                            Zespoły dowożące świetne produkty to nie te z najpłynniejszymi spotkaniami — to
                            te z produktywnym napięciem między różnymi sposobami myślenia. Mają w swoich szeregach
                            marzyciela i pragmatyka, perfekcjonistę i dowożącego, architekta i budowniczego.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Różnorodność poznawcza nie jest komfortowa. Generuje tarcie, debaty, a czasem
                            konflikty. Ale tworzy też produkty, które naprawdę działają.
                        </p>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center py-12 border-t border-slate-800">
                    <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
                        Zdiagnozuj różnorodność poznawczą swojego zespołu
                    </h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        LU Teams identyfikuje luki w stylach myślenia, które tworzą komory echa. Dołącz do bety, aby
                        zmapować kompozycję poznawczą Twojego zespołu.
                    </p>
                    <a
                        href="/pl/application"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg shadow-emerald-500/25"
                    >
                        Dołącz do programu Beta
                        <span>→</span>
                    </a>
                </section>

                {/* Related Content */}
                <section className="py-12 border-t border-slate-800">
                    <h3 className="text-lg font-semibold text-slate-400 mb-6">Czytaj dalej</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <a href="/pl/blog/gridlocked-squad-pattern" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                            <span className="text-sm text-amber-400 mb-2 block">Wzorzec Dynamiki Zespołu</span>
                            <h4 className="text-lg font-semibold text-slate-100 group-hover:text-amber-300 transition-colors">Zablokowany Oddział: Pięć gwiazdek, zero dowożenia</h4>
                            <p className="text-slate-500 mt-2 text-sm">Gdy wybitne jednostki nie potrafią stworzyć zespołu.</p>
                        </a>
                        <a href="/pl/blog/silent-architect-pattern" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                            <span className="text-sm text-indigo-400 mb-2 block">Wzorzec Dynamiki Zespołu</span>
                            <h4 className="text-lg font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">Cichy Architekt: Twój najlepszy inżynier planuje odejście</h4>
                            <p className="text-slate-500 mt-2 text-sm">Jak rozpoznać niedoceniany talent, zanim odejdzie z firmy.</p>
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
