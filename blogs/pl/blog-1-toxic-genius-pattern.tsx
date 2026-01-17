'use client';

import React from 'react';

export default function ToxicGeniusPatternPL() {
    return (
        <article className="min-h-screen bg-slate-950 text-slate-100">
            {/* Hero Section */}
            <header className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-slate-950 to-orange-950/30" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full border border-red-500/30">
                            Wzorzec Dynamiki Zespołu
                        </span>
                        <span className="text-slate-500 text-sm">12 min czytania</span>
                    </div>

                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-slate-100 via-red-100 to-orange-100 bg-clip-text text-transparent">
                        Toksyczny Geniusz: Jak jeden wybitny inżynier kosztował nas 10 milionów dolarów
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
                        Wzorzec, który niszczy więcej zespołów inżynierskich niż jakikolwiek dług techniczny.
                        Naucz się go wykrywać, zanim wyrządzi nieodwracalne szkody.
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

                {/* The Hook - $10M Case Study */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-red-950/50 to-slate-900/50 border-l-4 border-red-500 p-8 rounded-r-xl mb-10">
                        <p className="text-lg text-slate-300 leading-relaxed italic">
                            "Był najlepszym architektem, jakiego kiedykolwiek zatrudniliśmy. Sześć miesięcy później ośmiu inżynierów odeszło z pracy,
                            dwa główne produkty zostały opóźnione, a całkowite straty przekroczyły 10 milionów dolarów.
                            Najgorsze? Widzieliśmy znaki i nic nie zrobiliśmy."
                        </p>
                        <p className="mt-4 text-slate-500">— CTO startupu Series B, wspominając swojego Toksycznego Geniusza</p>
                    </div>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Ta historia powtarza się w branży technologicznej z niszczycielską przewidywalnością. Wybitny
                        programista (individual contributor) dołącza do zespołu. Jego kod jest nieskazitelny. Rozwiązania techniczne
                        są eleganckie. Decyzje architektoniczne są trafne. Na papierze jest dokładnie tym, o kogo zatrudnieniu marzy każda
                        organizacja inżynierska.
                    </p>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Potem pojawiają się pęknięcia. przeglądy kodu (code reviews) zamieniają się w przesłuchania. Młodsi programiści przestają zadawać
                        pytania. Współpraca zamiera. Zbiorowa inteligencja zespołu — magia, która tworzy
                        świetne oprogramowanie — paruje.
                    </p>

                    <p className="text-lg text-slate-300 leading-relaxed">
                        Prowadziłem coaching dla ponad 200 liderów technicznych przechodzących przez dokładnie ten wzorzec. To, czego się nauczyłem,
                        to fakt, że Toksyczny Geniusz nie jest problemem personalnym — to katastrofa biznesowa ukryta za
                        imponującymi wkładami w GitHubie.
                    </p>
                </section>

                {/* The Real Cost Section */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Matematyka destrukcji
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        Porozmawiajmy o liczbach, ponieważ to tutaj zespoły zarządzające konsekwentnie niedoceniają strat.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
                            <p className="text-4xl font-bold text-red-400 mb-2">40-60%</p>
                            <p className="text-slate-400">Rotacja zespołu w ciągu 24 miesięcy, gdy Toksyczny Geniusz pozostaje bez kontroli</p>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
                            <p className="text-4xl font-bold text-orange-400 mb-2">35%</p>
                            <p className="text-slate-400">Średni spadek produktywności (velocity) w zespołach dotkniętych toksycznymi liderami</p>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
                            <p className="text-4xl font-bold text-amber-400 mb-2">$150K+</p>
                            <p className="text-slate-400">Koszt zastąpienia jednego odchodzącego starszego inżyniera (pensja + rekrutacja + wdrożenie)</p>
                        </div>
                    </div>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Ale widoczne koszty to tylko wierzchołek góry lodowej. Ukryte szkody sięgają głębiej: funkcjonalności, które
                        nigdy nie zostały zaproponowane, ponieważ młodsi programiści bali się kpiny. Innowacyjne rozwiązania, które
                        umarły w ciszy, ponieważ współpraca stała się wojną psychologiczną. Obiecujący członkowie zespołu,
                        którzy nauczyli się pozostawać niewidzialnymi, zamiast ryzykować upokorzenie.
                    </p>

                    <p className="text-lg text-slate-300 leading-relaxed">
                        Każda interakcja z Toksycznym Geniuszem kosztuje zespół kalorie emocjonalne. Zanim inżynierowie
                        otworzą swoje IDE, są już wyczerpani. Nie da się budować niezwykłych produktów z wyczerpanymi ludźmi.
                    </p>
                </section>

                {/* Early Warning Signs */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Cztery sygnały ostrzegawcze, które prawdopodobnie ignorujesz
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        Podczas setek sesji coachingowych zidentyfikowałem powtarzające się wczesne wskaźniki, które
                        odróżniają Toksycznego Geniusza od lidera o wysokich standardach. Różnica nie leży w ich
                        oczekiwaniach — leży w kierunku ich energii.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold">1</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Efekt Uciszenia</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Spotkania (standupy) stają się cichsze. Liczba komentarzy w code review maleje. Pytania na kanałach Slack rzadziej padają.
                                        To nie jest efektywność — to strach. Kiedy członkowie zespołu przestają dzielić się pomysłami, tracisz
                                        zbiorową inteligencję, która stanowi o wartości zespołów inżynierskich.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">2</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Asymetria Informacji Zwrotnej</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Liderzy o wysokich standardach dają feedback, który podnosi na duchu, jednocześnie stawiając wyzwania. Toksyczni Geniusze dają
                                        feedback, który niszczy, by ustanowić wyższość. Obserwuj wzorzec: czy ich feedback
                                        czyni ludzi lepszymi, czy sprawia, że czują się mniejsi?
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">3</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Kompleks Bohatera</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Przepisują całe bazy kodu o 3 rano, a potem spędzają poranek tłumacząc, dlaczego wszyscy
                                        inni są idiotami, bo tego nie rozumieją. Tworzą złożoność, w której tylko oni potrafią
                                        się poruszać, czyniąc się niezbędnymi i uzależniając od siebie zespół.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold">4</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Próżnia Zasług</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Sukcesy stają się ich osiągnięciami. Porażki stają się porażkami zespołu — lub co gorsza,
                                        porażkami konkretnych osób. Obserwuj, jak zasługi i wina przepływają wokół tej osoby.
                                        Zdrowe zespoły dzielą się obydwoma. Toksyczne środowiska kumulują zasługi i rozpraszają winę.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pattern Psychology */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Psychologia stojąca za wzorcem
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Zrozumienie, dlaczego ten wzorzec istnieje, jest kluczowe dla skutecznego radzenia sobie z nim. Toksyczny
                        Geniusz nie jest zły — operuje w ramach specyficznego profilu psychologicznego, który produkuje
                        przewidywalne zachowania.
                    </p>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        W badaniach osobowości, szczególnie w modelu HEXACO, ten wzorzec mapuje się na specyficzną
                        kombinację: wyjątkowe zdolności poznawcze połączone z niską Uczciwością-Pokorą (czynnik H-Factor).
                        Czynnik H mierzy szczerość, sprawiedliwość, unikanie chciwości i skromność. Kiedy jest niski,
                        mamy do czynienia z kimś, kto wierzy, że jego inteligencja uprawnia go do innych zasad.
                    </p>

                    <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8 mb-8">
                        <h3 className="text-xl font-semibold text-slate-100 mb-4">Dlaczego DiSC i MBTI to pomijają</h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            Większość organizacji polega na ocenach DiSC lub MBTI przy budowaniu zespołów. Narzędzia te mają
                            swoją wartość, ale nie zostały zaprojektowane do wykrywania charakteru — mierzą preferencje behawioralne
                            i style poznawcze.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            Toksyczny Geniusz może pojawić się jako "D" w DiSC (bezpośredni, zorientowany na wyniki) lub INTJ w
                            MBTI (strategiczny, niezależny). Żaden z tych profili nie sugeruje niczego problematycznego. Czynnik H
                            w HEXACO specyficznie mierzy cechę, która odróżnia zdrowych, ambitnych ludzi
                            od tych destrukcyjnych.
                        </p>
                    </div>

                    <p className="text-lg text-slate-300 leading-relaxed">
                        To dlatego tradycyjne oceny osobowości nie potrafią przewidzieć wzorca Toksycznego Geniusza.
                        Mierzą one zupełnie inne wymiary.
                    </p>
                </section>

                {/* Real Case Study */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Case Study: Rozpad
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Pozwól, że przeprowadzę Cię przez prawdziwy przypadek z mojej praktyki coachingowej (szczegóły zanonimizowane).
                    </p>

                    <div className="border-l-2 border-slate-700 pl-6 space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold text-blue-400 mb-2">Początek: Miesiące 1-3</h3>
                            <p className="text-slate-400 leading-relaxed">
                                "Marcus" dołączył jako Staff Engineer do firmy z branży fintech. Jego rozmowy kwalifikacyjne były rewelacyjne — głęboka
                                wiedza techniczna, błyskotliwa komunikacja, imponujące portfolio. W ciągu kilku tygodni zidentyfikował i naprawił
                                trzy krytyczne problemy architektoniczne, które trapiły platformę
                                od miesięcy. Kierownictwo było zachwycone.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-amber-400 mb-2">Eskalacja: Miesiące 4-8</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Małe incydenty się kumulowały. Młodszy programista płakał po code review. Inżynier na średnim szczeblu
                                poprosił o przeniesienie do innego zespołu bez podania przyczyny. PR-y Marcusa zaczęły pojawiać się
                                z wyłączonymi komentarzami — przekonał swojego menedżera, że "asynchroniczny feedback jest bardziej efektywny".
                                Retrospektywy zespołu stawały się coraz krótsze, bo ludzie przestali zgłaszać uwagi.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-orange-400 mb-2">Punkt Krytyczny: Miesiące 9-11</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Trzech inżynierów zrezygnowało w ciągu sześciu tygodni. Wywiady końcowe (exit interviews) ujawniły spójny wzorzec:
                                publiczne upokarzanie pod przykrywką feedbacku technicznego, przypisywanie sobie zasług za pracę zespołową
                                i atmosfera braku bezpieczeństwa psychologicznego. VP of Engineering w końcu zlecił
                                kompleksową ocenę 360 stopni. Wyniki były druzgocące.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-red-400 mb-2">Następstwa: Miesiąc 12+</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Marcus został objęty planem naprawczym (PIP) skoncentrowanym na zachowaniach interpersonalnych.
                                Zrezygnował w ciągu dwóch tygodni. Strata: ośmiu inżynierów, którzy odeszli, dwa opóźnione wdrożenia
                                produktów, szacowane koszty przekraczające 2,8 miliona dolarów samych kosztów bezpośrednich. Odbudowa
                                zaufania w zespole zajęła kolejne osiemnaście miesięcy.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Coaching Approach */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Podejście coachingowe: Co naprawdę działa
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Kiedy pracuję z organizacjami zmagającymi się ze wzorcem Toksycznego Geniusza, interwencja
                        zależy całkowicie od wczesnego wykrycia. Im wcześniej zidentyfikujesz wzorzec, tym więcej
                        masz opcji.
                    </p>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-8">
                        <h3 className="text-xl font-semibold text-slate-100 mb-4">Faza 1: Potwierdzenie wzorca</h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            Przed jakąkolwiek interwencją musimy odróżnić lidera o wysokich standardach, który
                            stawia ludziom wyzwania (wartościowe), od toksycznej jednostki, która ich niszczy (destrukcyjne).
                            Używam strukturalnego feedbacku 360 stopni połączonego z profilowaniem HEXACO, by zbudować
                            obiektywny obraz.
                        </p>
                        <p className="text-slate-400 text-sm">
                            Kluczowe pytanie: Czy ich obecność czyni zespół zbiorowo mądrzejszym, czy sprawia, że
                            poszczególni członkowie czują się mniejsi?
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-8">
                        <h3 className="text-xl font-semibold text-slate-100 mb-4">Faza 2: Bezpośrednia interwencja</h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            W przypadku osób z umiarkowaną samoświadomością, bezpośredni coaching może zadziałać. Obejmuje on
                            konkretny feedback powiązany z wynikami biznesowymi (a nie tylko "bądź milszy"), modelowanie zachowań
                            zdrowego przywództwa o wysokich standardach oraz struktury odpowiedzialności z jasnymi konsekwencjami.
                        </p>
                        <p className="text-slate-400 text-sm">
                            Wskaźnik sukcesu w tej fazie: około 30% wykazuje znaczącą, trwałą poprawę.
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h3 className="text-xl font-semibold text-slate-100 mb-4">Faza 3: Decyzje strukturalne</h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            Gdy coaching zawodzi, kierownictwo musi podjąć decyzje strukturalne. Może to oznaczać zmiany roli
                            minimalizujące interakcje z zespołem, plany naprawcze z metrykami behawioralnymi lub rozstanie.
                            Kluczowe spostrzeżenie: koszt utrzymania Toksycznego Geniusza prawie
                            zawsze przekracza koszt jego odejścia.
                        </p>
                        <p className="text-slate-400 text-sm">
                            Matematyka jest jednoznaczna: jeden wybitny pracownik nie jest w stanie zrekompensować odejścia
                            trzech kompetentnych graczy zespołowych.
                        </p>
                    </div>
                </section>

                {/* LU Teams Detection */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Automatyzacja wczesnego wykrywania z LU Teams
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Wyzwanie polegające na radzeniu sobie z Toksycznym Geniuszem polega na tym, że gdy wzorzec jest już oczywisty, szkody
                        są wyrządzone. Potrzebujesz systemów, które wydobędą sygnały ostrzegawcze, zanim staną się kryzysami.
                    </p>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        To jest dokładnie powód, dla którego zbudowałem LU Teams. Platforma używa ocen opartych na HEXACO, by
                        identyfikować niepokojące kombinacje osobowości podczas zatrudniania i formowania zespołu — zanim
                        wzorzec zdąży się utrwalić.
                    </p>

                    <div className="bg-gradient-to-br from-blue-950/50 to-indigo-950/30 border border-blue-900/50 rounded-xl p-8 mb-8">
                        <h3 className="text-xl font-semibold text-blue-200 mb-4">Jak LU Teams wykrywa wzorzec</h3>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span><strong className="text-slate-100">Analiza czynnika H (H-Factor):</strong> Bezpośredni pomiar Uczciwości-Pokory, by zidentyfikować niepokojące profile przed zatrudnieniem</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span><strong className="text-slate-100">Mapowanie kompatybilności zespołu:</strong> Przewidywanie interakcji specyficznych kombinacji osobowości</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span><strong className="text-slate-100">Punktacja ryzyka (Risk Scoring):</strong> Automatyczna identyfikacja wysokiego talentu przy niskiej pokorze, co zwiastuje wzorzec Toksycznego Geniusza</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span><strong className="text-slate-100">Ciągłe monitorowanie zdrowia zespołu:</strong> Okresowe oceny, które wyciągają na wierzch rodzącą się dynamikę, zanim się skrystalizuje</span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-lg text-slate-300 leading-relaxed">
                        Celem nie jest wykluczenie każdego pewnego siebie, ambitnego kandydata. Chodzi o zidentyfikowanie
                        konkretnej kombinacji cech, która przewiduje destrukcyjne zachowania, byś mógł podejmować
                        świadome decyzje zamiast popełniać kosztowne błędy.
                    </p>
                </section>

                {/* Actionable Steps */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Co możesz zrobić w poniedziałek rano
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        Niezależnie od tego, czy masz dostęp do zaawansowanych narzędzi oceny, oto konkretne
                        kroki, które możesz podjąć natychmiast, by zmierzyć się z tym wzorcem w swojej organizacji.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">1</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Audyt procesu zatrudniania</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Dodaj pytania behawioralne specyficznie zaprojektowane do oceny pokory. Poproś kandydatów
                                    o opisanie czasu, gdy mylili się w kwestii decyzji technicznej. Obserwuj, jak mówią o
                                    byłych współpracownikach. Czy przypisują zasługi innym, czy pozycjonują się jako bohaterowie każdej historii?
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">2</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Wdrożenie strukturalnych ocen 360</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Wyjdź poza coroczne oceny wyników. Kwartalny feedback 360 stopni ze specyficznymi
                                    pytaniami behawioralnymi może wcześnie wykryć niepokojące wzorce. Uwzględnij pytania o
                                    bezpieczeństwo psychologiczne i dynamikę współpracy, nie tylko kompetencje techniczne.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">3</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Obserwacja cichych sygnałów</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Naucz swoich menedżerów zauważać spadek współpracy. Mniej pytań na standupach,
                                    krótsze retrospektywy, mniej komentarzy w PR — to wskaźniki wyprzedzające. Zanim
                                    ktoś złoży formalną skargę, straciłeś już miesiące na szkodach.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">4</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Jasne standardy behawioralne</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Doskonałość techniczna to za mało. Zdefiniuj jasne oczekiwania behawioralne
                                    i uczyń je częścią oceny wyników. Gdy ktoś zapyta: "ale przecież są tacy produktywni",
                                    musisz mieć udokumentowane standardy, które pokazują, dlaczego współpraca ma znaczenie.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">5</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Działaj szybciej, niż podpowiada komfort</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Najczęstszy żal ze strony CTO i VPE, których prowadzę: "Czekaliśmy za długo".
                                    Gdy wzorzec staje się jasny, działaj zdecydowanie. Koszt opóźnionego działania kumuluje się
                                    wykładniczo. Każdy miesiąc bezczynności to kolejna potencjalna rezygnacja.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                        <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
                            Podsumowanie
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed mb-4">
                            Wzorzec Toksycznego Geniusza jest przewidywalny, wykrywalny i możliwy do uniknięcia. Organizacje,
                            które budują świetną kulturę inżynierską, nie robią tego poprzez tolerowanie błyskotliwych agresorów — robią
                            to poprzez systematyczną selekcję pod kątem zarówno doskonałości, jak i charakteru.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Kultura nie jest tym, co mówisz. Jest tym, co tolerujesz. A tolerowanie Toksycznego Geniusza
                            wysyła jasny sygnał wszystkim innym w zespole o tym, co naprawdę cenisz.
                        </p>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center py-12 border-t border-slate-800">
                    <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
                        Zatrzymaj wzorzec, zanim się zacznie
                    </h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        LU Teams wykorzystuje oceny oparte na HEXACO, by zidentyfikować niepokojące kombinacje osobowości,
                        zanim zaszkodzą Twojemu zespołowi. Dołącz do bety, by zyskać dostęp do predykcyjnej analityki zespołu.
                    </p>
                    <a
                        href="/pl/application"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-500/25"
                    >
                        Dołącz do programu Beta
                        <span>→</span>
                    </a>
                </section>

                {/* Related Content */}
                <section className="py-12 border-t border-slate-800">
                    <h3 className="text-lg font-semibold text-slate-400 mb-6">Czytaj dalej</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <a href="/pl/blog/silent-architect-pattern" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                            <span className="text-sm text-blue-400 mb-2 block">Wzorzec Dynamiki Zespołu</span>
                            <h4 className="text-lg font-semibold text-slate-100 group-hover:text-blue-300 transition-colors">Cichy Architekt: Gdy Twój najlepszy inżynier ma zamiar odejść</h4>
                            <p className="text-slate-500 mt-2 text-sm">Dlaczego introwertyczni specjaliści są pomijani i jak ich zatrzymać.</p>
                        </a>
                        <a href="/pl/application" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                            <span className="text-sm text-green-400 mb-2 block">Usługi</span>
                            <h4 className="text-lg font-semibold text-slate-100 group-hover:text-green-300 transition-colors">Coaching Przywództwa 1-on-1</h4>
                            <p className="text-slate-500 mt-2 text-sm">Pracuj bezpośrednio ze mną, aby rozwiązać wyzwania związane z dynamiką zespołu w Twojej organizacji.</p>
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
