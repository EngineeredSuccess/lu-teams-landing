'use client';

import React from 'react';

export default function GridlockedSquadPatternPL() {
    return (
        <article className="min-h-screen bg-slate-950 text-slate-100">
            {/* Hero Section */}
            <header className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-slate-950 to-orange-950/30" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-medium rounded-full border border-amber-500/30">
                            Wzorzec Dynamiki Zespołu
                        </span>
                        <span className="text-slate-500 text-sm">10 min czytania</span>
                    </div>

                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                        Zablokowany Oddział: Pięciu wybitnych inżynierów, zero wdrożonych funkcjonalności
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-3xl">
                        Każdy jest gwiazdą. Debaty są merytoryczne i rygorystyczne.
                        A backlog wciąż rośnie. Dlaczego zagęszczenie talentów może prowadzić do paraliżu.
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
                    <div className="bg-gradient-to-r from-amber-950/50 to-slate-900/50 border-l-4 border-amber-500 p-8 rounded-r-xl mb-10">
                        <p className="text-lg text-slate-300 leading-relaxed italic">
                            "Zatrudniłem pięciu wyjątkowych inżynierów — każdy z nich mógłby przewodzić własnemu zespołowi w większości firm.
                            Sześć miesięcy później mieliśmy 47 otwartych PR-ów, trzy rywalizujące propozycje architektury i dokładnie
                            zero funkcjonalności wdrożonych na produkcję. Każdy standup był negocjacją. Każde code review
                            debatą. Tonęliśmy w doskonałości."
                        </p>
                        <p className="mt-4 text-slate-500">— Dyrektor inżynierii w szybko rosnącym startupie</p>
                    </div>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Zablokowany Oddział (Gridlocked Squad) to jeden z najbardziej frustrujących wzorców dynamiki zespołu,
                        ponieważ wygląda na to, że robisz wszystko dobrze. Zatrudniłeś topowe talenty. Dałeś zespołowi
                        autonomię. Stworzyłeś bezpieczeństwo psychologiczne dla debat. A mimo to nic się nie rusza.
                    </p>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Problem nie leży w jednostkach — każda z nich świetnie poradziłaby sobie w innym kontekście.
                        Problemem jest ich kombinacja. Kiedy zbierzesz wiele osób o wysokich ambicjach i silnych przekonaniach
                        bez jasnych granic ról i protokołów decyzyjnych, nie zyskujesz synergii. Zyskujesz blokadę.
                    </p>

                    <p className="text-lg text-slate-300 leading-relaxed">
                        To paradoks zagęszczenia talentów: powyżej pewnego punktu dodawanie kolejnych gwiazd nie
                        zwiększa wydajności — tworzy tarcie, które spowalnia wszystko.
                    </p>
                </section>

                {/* The Mechanics */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Mechanizm blokady
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-amber-400 mb-3">Cechy wybitnych specjalistów</h3>
                            <ul className="space-y-2 text-slate-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-400 mt-1">•</span>
                                    <span>Silne przekonania techniczne</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-400 mt-1">•</span>
                                    <span>Wysokie standardy jakości kodu</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-400 mt-1">•</span>
                                    <span>Pewność co do swojego podejścia</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-400 mt-1">•</span>
                                    <span>Zdolność do wyłapywania suboptymalnych rozwiązań</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-orange-400 mb-3">Symptomy blokady</h3>
                            <ul className="space-y-2 text-slate-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400 mt-1">•</span>
                                    <span>Każdy PR staje się debatą filozoficzną</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400 mt-1">•</span>
                                    <span>Rywalizacja wielu "właściwych" podejść</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400 mt-1">•</span>
                                    <span>Brak woli kompromisu w swojej wizji</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400 mt-1">•</span>
                                    <span>Decyzje są wielokrotnie podważane</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Case Study */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Case Study: Zespół Platformowy, który nie mógł dowieźć projektu
                    </h2>

                    <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-8 mb-8">
                        <h3 className="text-xl font-semibold text-slate-100 mb-4">Kontekst</h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            Pięciu seniorów budujących nową, wewnętrzną platformę. Każdy z ponad 8-letnim doświadczeniem.
                            Dwaj byli tech leadzi. Jeden napisał książkę o systemach rozproszonych. Kolejny budował
                            podobne platformy w dwóch poprzednich firmach.
                        </p>
                        <p className="text-slate-400">
                            Kierownictwo oczekiwało, że będą nie do zatrzymania. Zamiast tego, utknęli.
                        </p>
                    </div>

                    <div className="border-l-2 border-slate-700 pl-6 space-y-6 mb-8">
                        <div>
                            <h4 className="text-lg font-semibold text-amber-400 mb-2">Symptom: Wieczna faza projektowania</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Po trzech miesiącach zespół stworzył siedemnaście dokumentów projektowych i dokładnie zero
                                kodu na produkcji. Każdy dokument reprezentował wizję innego inżyniera. Każdy był
                                technicznie doskonały. Żaden nie doczekał się konsensusu.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-orange-400 mb-2">Przyczyna: Niejasność ról</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Nikt nie był oficjalnym decydentem. Założenie było takie, że seniorzy "sami się dogadają".
                                Ale kiedy wszyscy są seniorami, nikt nie ustępuje. Każdy wybór techniczny stawał się debatą
                                między równymi sobie, bez osoby podejmującej ostateczną decyzję.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Warning Signs */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Sygnały ostrzegawcze, że zbliża się blokada
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">1</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Decyzje są otwieran ponownie</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        We wtorek zespół decyduje się na PostgreSQL. W czwartek ktoś zgłasza obawy co do CockroachDB.
                                        W kolejny wtorek wracacie do dyskusji o bazach danych. Jeśli raz podjęte decyzje nie zostają w mocy,
                                        masz problem z blokadą.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">2</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Code review staje się negocjacjami</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        PR-y wiszą dniami, gromadząc komentarze. Dyskusje dryfują od "czy to działa"
                                        do "byłoby lepiej, gdyby...". Mergowanie wymaga kapitulacji, a nie akceptacji.
                                        Proces optymalizuje pod perfekcję, nie pod postęp.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold">3</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Standupy stają się listą blokad</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Zamiast "oto co wdrożyłem", słyszysz "czekam na dogadanie kwestii X". Wszyscy są zajęci,
                                        nikt nie posuwa się naprzód. Duża aktywność przy braku postępów to znak rozpoznawczy blokady.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HEXACO Analysis */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Profil HEXACO Zablokowanego Oddziału
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-amber-400 mb-3">Starcie wysokiej Sumienności</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Bardzo sumienne osoby mają silne poglądy na to, co jest "właściwym sposobem" robienia rzeczy.
                                Są rzetelne i nienawidzą dowozić suboptymalnej pracy. Zestaw pięciu takich osób, a otrzymasz
                                pięć różnych definicji "właściwego sposobu" — każda broniona z równym przekonaniem.
                            </p>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-orange-400 mb-3">Brak naturalnych Integratorów</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Gwiazdy często mają niższą Ugodowość — są gotowi rzucać wyzwania. Jest to cenne, ale
                                blokuje grupę, gdy nikomu nie zależy na roli osoby, która szuka kompromisu i pozwala
                                przejść dalej.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Fix */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Rozbijanie blokady: Protokoły i Role
                    </h2>

                    <div className="space-y-8">
                        <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-slate-100 mb-4">1. Jasna własność decyzji</h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Dla każdej kategorii decyzji wyznacz jedną osobę odpowiedzialną. Nie "zespół decyduje razem"
                                — konkretna osoba ma ostateczne zdanie. Inni mogą wpływać na decyzję, ale to właściciel
                                kończy debatę.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-slate-100 mb-4">2. Decyzje ograniczone czasowo</h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Ustal sztywne ramy czasowe na każdą decyzję techniczna. "Decydujemy o strategii cache'owania
                                do czwartku wieczorem". Jeśli zespół nie wypracuje konsensusu, właściciel podejmuje decyzję jednoosobowo.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-slate-100 mb-4">3. Protokół "Disagree and Commit"</h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Wprowadź zasadę Amazona: gdy decyzja zostanie podjęta, wszyscy z pełnym zaangażowaniem
                                przystępują do jej realizacji — nawet jeśli mieli inne zdanie. Powrót do debaty wymaga
                                nowych, istotnych informacji, a nie tylko dalszego niezadowolenia.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Actionable Steps */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Działania na już dla zablokowanych zespołów
                    </h2>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">1</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Audyt otwartych debat</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Wypisz każdą decyzję techniczna, o której dyskutujecie dłużej niż tydzień. Przypisz
                                    im właściciela i deadline. Zobowiąż się do zamknięcia ich wszystkich w ciągu pięciu dni.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">2</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Stwórz macierz DACI</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Dla każdej kategorii (architektura, testy, narzędzia) udokumentuj: kto prowadzi (Driver),
                                    kto zatwierdza (Approver), z kim się konsultujemy (Consulted), kogo informujemy (Informed).
                                    Usuń niepewność co do kompetencji decyzyjnych.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">3</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Dowieź cokolwiek małego</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Wybierz najmniejszą funkcjonalność i wdroż ją na produkcję w ciągu tygodnia.
                                    Celem nie jest funkcja, ale pokazanie zespołowi, że znowu "płynie". Nic tak
                                    nie rozbija blokady jak impet prawdziwego dowożenia wyników.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                        <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
                            Prawda o zespołach wysokiej wydajności
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed mb-4">
                            Najskuteczniejsze zespoły inżynierskie nie są złożone z "najlepszych" jednostek — są złożone
                            z osób, które potrafią podporządkować swoje ego misji zespołu. Nie oznacza to zatrudniania
                            mniej zdolnych osób. Oznacza tworzenie struktur kierujących talent na wyniki, a nie na debaty.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Celem nie jest konsensus — jest nim postęp. A czasem postęp oznacza, że ktoś mówi
                            "Twoje podejście jest wystarczająco dobre, wdrażajmy je", nawet jeśli on sam zrobiłby to inaczej.
                        </p>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center py-12 border-t border-slate-800">
                    <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
                        Przewiduj tarcie w zespole, zanim Cię sparaliżuje
                    </h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        LU Teams identyfikuje konfliktowe błędy kompozycji osobowości i sugeruje struktury ról,
                        które pozwalają talentom dowozić wyniki. Dołącz do bety.
                    </p>
                    <a
                        href="/pl/application"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl hover:from-amber-500 hover:to-orange-500 transition-all shadow-lg shadow-amber-500/25"
                    >
                        Dołącz do programu Beta
                        <span>→</span>
                    </a>
                </section>

                {/* Related Content */}
                <section className="py-12 border-t border-slate-800">
                    <h3 className="text-lg font-semibold text-slate-400 mb-6">Czytaj dalej</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <a href="/pl/blog/echo-chamber-effect" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                            <span className="text-sm text-emerald-400 mb-2 block">Wzorzec Dynamiki Zespołu</span>
                            <h4 className="text-lg font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">Efekt Komory Echa: Gdy znika różnorodność poznawcza</h4>
                            <p className="text-slate-500 mt-2 text-sm">Dlaczego zespoły wybitnych ludzi czasem dają mierne wyniki.</p>
                        </a>
                        <a href="/pl/blog/overwhelmed-delegate-pattern" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                            <span className="text-sm text-rose-400 mb-2 block">Wzorzec Dynamiki Zespołu</span>
                            <h4 className="text-lg font-semibold text-slate-100 group-hover:text-rose-300 transition-colors">Przytłoczony Delegat: Gdy liderzy nie potrafią odpuścić</h4>
                            <p className="text-slate-500 mt-2 text-sm">Dlaczego wybitni specjaliści mają trudności z delegowaniem i jak im pomóc.</p>
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
