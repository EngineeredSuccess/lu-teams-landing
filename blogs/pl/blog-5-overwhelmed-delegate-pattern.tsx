'use client';

import React from 'react';

export default function OverwhelmedDelegatePatternPL() {
    return (
        <article className="min-h-screen bg-slate-950 text-slate-100">
            {/* Hero Section */}
            <header className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-950/40 via-slate-950 to-pink-950/30" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-rose-500/20 text-rose-400 text-sm font-medium rounded-full border border-rose-500/30">
                            Wzorzec Dynamiki Zespołu
                        </span>
                        <span className="text-slate-500 text-sm">11 min czytania</span>
                    </div>

                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-slate-100 via-rose-100 to-pink-100 bg-clip-text text-transparent">
                        Przytłoczony Delegat: Dlaczego Twój najlepszy inżynier stał się Twoim najgorszym menedżerem
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
                        Byli genialni w pisaniu kodu. Teraz toną w spotkaniach 1-on-1, pracują po nocach,
                        a zespół jest sparaliżowany. Poznaj ukryty kryzys technicznych liderów, którzy nie potrafią odpuścić.
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
                    <div className="bg-gradient-to-r from-rose-950/50 to-slate-900/50 border-l-4 border-rose-500 p-8 rounded-r-xl mb-10">
                        <p className="text-lg text-slate-300 leading-relaxed italic">
                            "Awansowałem naszą najlepszą programistkę na liderkę techniczną (tech lead) sześć miesięcy temu. Teraz pracuje
                            po 70 godzin tygodniowo, jej zespół jest sfrustrowany, bo niczego nie mogą zatwierdzić bez
                            jej udziału, a ona sama powiedziała mi w zeszłym tygodniu, że tęskni za 'zwyczajnym pisaniem kodu'.
                            Awans miał być nagrodą. Zamiast tego — zniszczyłem świetnego pracownika."
                        </p>
                        <p className="mt-4 text-slate-500">— VP of Engineering w startupie w fazie wzrostu</p>
                    </div>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Przytłoczony Delegat to jeden z najczęstszych — i najbardziej bolesnych — wzorców
                        porażki w przywództwie inżynieryjnym. Dzieje się tak, gdy wybitni specjaliści zostają
                        awansowani na role zarządcze, a potem odkrywają, że umiejętności, które czyniły ich
                        wyjątkowymi inżynierami, aktywnie sabotują ich zdolność do przewodzenia.
                    </p>

                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Chcą wykonywać dobrą robotę. Pracują ciężej niż kiedykolwiek. Ale zamiast zwielokrotniać
                        wyniki zespołu, stają się wąskim gardłem. Każda decyzja przepływa przez nich.
                        Każde code review wymaga ich zatwierdzenia. Nie potrafią odpuścić — bo odpuszczenie
                        kojarzy im się z akceptacją niższych standardów.
                    </p>

                    <p className="text-lg text-slate-300 leading-relaxed">
                        Efekt: wypalony lider, uzależniony od niego zespół i organizacja, której lepiej
                        służyłoby pozostawienie tej osoby na stanowisku eksperckim.
                    </p>
                </section>

                {/* The Root Cause */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Dlaczego świetni inżynierowie z oporem delegują zadania
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-rose-400 mb-3">Co czyniło ich świetnymi ekspertami</h3>
                            <ul className="space-y-2 text-slate-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-400 mt-1">•</span>
                                    <span>Obsesyjna dbałość o szczegóły</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-400 mt-1">•</span>
                                    <span>"Jeśli chcesz, żeby coś było zrobione dobrze, zrób to sam"</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-400 mt-1">•</span>
                                    <span>Głębokie poczucie własności swojej pracy</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-400 mt-1">•</span>
                                    <span>Sztywne, wysokie standardy</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-pink-400 mb-3">Jak to wygląda w przywództwie</h3>
                            <ul className="space-y-2 text-slate-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-pink-400 mt-1">•</span>
                                    <span>Osobiste sprawdzanie każdego PR-a</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-pink-400 mt-1">•</span>
                                    <span>Przepisywanie delegowanej pracy "żeby ją wyczyścić"</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-pink-400 mt-1">•</span>
                                    <span>Bycie decydentem w każdej sprawie</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-pink-400 mt-1">•</span>
                                    <span>Niemożność zaakceptowania czegoś, co jest "tylko dobre"</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Case Study */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Case Study: Tech Lead, który nie mógł przestać kodować
                    </h2>

                    <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-8 mb-8">
                        <h3 className="text-xl font-semibold text-slate-100 mb-4">Kontekst</h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            "Raj" był jednym z najzdolniejszych inżynierów, jakich coachowałem — i jednym z najbardziej
                            utkniętych. Po trzech latach pracy jako staff engineer został awansowany na Tech Leada
                            sześcioosobowego zespołu. Zarząd zakładał, że naturalnie rozniesie swój ogromny wpływ na cały zespół.
                        </p>
                        <p className="text-slate-400">
                            Zamiast tego, stał się pojedynczym punktem awarii całego procesu.
                        </p>
                    </div>

                    <div className="border-l-2 border-slate-700 pl-6 space-y-6 mb-8">
                        <div>
                            <h4 className="text-lg font-semibold text-rose-400 mb-2">Miesiące 1-2: Sygnały ostrzegawcze</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Kalendarz Raja wypełnił się spotkaniami, ale on wciąż chciał być w każdym code review.
                                Zaczął pracować wieczorami, "żeby nadrobić prawdziwą pracę". Zespół nauczył się, że
                                zatwierdzenie PR-a wymaga osobistej zgody Raja — co oznaczało czekanie aż ten znajdzie chwilę.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-pink-400 mb-2">Miesiące 3-4: Załamanie</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Velocity sprintu spadło o 40%. Dwóch programistów poprosiło o przeniesienie, motywując to
                                frustracją, że nic nie mogą zrobić bez zgody lidera. Raj był wycieńczony — sypiał po
                                cztery godziny, opuszczał kolacje z rodziną, żył w ciągłym lęku przed nawracającymi zadaniami.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Warning Signs */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Sygnały ostrzegawcze, że Twój lider jest "Przytłoczonym Delegatem"
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">1</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Zawsze są wąskim gardłem</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        PR-y czekają na ich recenzję. Decyzje czekają na ich opinię. Postęp zespołu
                                        jest bezpośrednio skorelowany z dostępnością tej jednej osoby. Kiedy lider
                                        bierze urlop, praca staje.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold">2</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Praca nocami i w weekendy</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Są online o 6 rano i o 23 wieczorem. Weekendy stają się czasem na "nadrobienie zaległości".
                                        Kalendarz jest wypełniony spotkaniami, więc prawdziwa praca dzieje się na marginesach doby.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center font-bold">3</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Zespół przestaje rosnąć</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Gdy lider zawsze podaje gotową odpowiedź, zespół przestaje rozwijać umiejętności
                                        rozwiązywania problemów. Młodsi inżynierowie stoją w miejscu, bo lider "pomaga"
                                        im, rozwiązując trudne kwestie za nich.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Fix */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Podejście coachingowe: Stopniowe budowanie zaufania
                    </h2>

                    <div className="space-y-8">
                        <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-slate-100 mb-4">1. Drabina delegowania</h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Tworzymy sekwencję coraz ważniejszych zadań do oddelegowania, zaczynając od
                                obszarów o niskim ryzyku. Każde udane oddelegowanie buduje dowód na to, że jakość
                                może być utrzymana bez ich bezpośredniego udziału.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-slate-100 mb-4">2. Jawne kryteria jakości</h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Częścią lęku lidera jest to, że jego standardy są intuicyjne — tylko on wie, co
                                znaczy "wystarczająco dobrze". Spisujemy te standardy w formie checklist i rubryk ocen,
                                które inni mogą samodzielnie stosować.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-slate-100 mb-4">3. Rekonstrukcja tożsamości</h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Najgłębsza praca polega na zmianie postrzegania swojej wartości: to nie kod, ale
                                rozwój zespołu jest teraz Twoim głównym wkładem. Mierzymy sukces takimi wskaźnikami
                                jak wzrost kompetencji podwładnych czy brak zależności od lidera.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Actionable Steps */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
                        Działania dla (lub osób zarządzających) Przytłoczonym Delegatem
                    </h2>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">1</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Audyt Twoich akceptacji</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Wypisz wszystko, co wymaga Twojego podpisu/zgody. Zadaj sobie pytanie: "Co by się
                                    stało, gdyby ktoś inny to zatwierdził?". Jeśli odpowiedź brzmi "pewnie byłoby okej",
                                    to idealny kandydat do oddelegowania.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">2</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Udokumentuj swoje standardy</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Weź wszystko, co wiesz intuicyjnie o "dobrej robocie" i to zapisz. Stwórz checklisty.
                                    Jeśli Twoje standardy istnieją tylko w Twojej głowie, jesteś jedyną osobą, która
                                    może je wyegzekwować.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">3</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Śledź wskaźniki przywództwa</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Zacznij mierzyć swój sukces jako lidera: velocity zespołu, rozwój jednostek,
                                    redukcja zależności od Ciebie, dzielenie się wiedzą. Niech to będą Twoje nowe KPI.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">4</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">Zaakceptuj, że "inaczej" nie znaczy "źle"</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Inni będą rozwiązywać problemy inaczej niż Ty. To nie porażka — to różnorodność
                                    podejść. Twoim zadaniem jest dbać o to, by wyniki były dobre, a nie by ścieżka do
                                    nich była identyczna z Twoją.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
                        <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
                            Paradoks przywództwa
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed mb-4">
                            Najtrudniejszą rzeczą w byciu liderem jest zaakceptowanie, że Twoja wartość pochodzi
                            z tego, co osiągają inni, a nie Ty sam osobiście. Dla genialnych ekspertów może to
                            brzmieć jak utrata tożsamości.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Ale najlepsi liderzy techniczni, jakich znam, przeszli tę zmianę całkowicie. Zrozumieli,
                            że zbudowanie zespołu, który dowozi świetny software bez ich ciągłej ingerencji, jest
                            najwyższą formą inżynierskiej doskonałości. To po prostu inny rodzaj budowania.
                        </p>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center py-12 border-t border-slate-800">
                    <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
                        Buduj zespoły gotowe na skuteczne przywództwo
                    </h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        LU Teams identyfikuje czynniki ryzyka związane z delegowaniem jeszcze przed decyzją o awansie
                        i dostarcza rekomendacje coachingowe dla nowych liderów. Dołącz do bety.
                    </p>
                    <a
                        href="/pl/application"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-xl hover:from-rose-500 hover:to-pink-500 transition-all shadow-lg shadow-rose-500/25"
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
                            <p className="text-slate-500 mt-2 text-sm">Gdy wybitne jednostki nie potrafią uformować zespołu.</p>
                        </a>
                        <a href="/pl/blog/toxic-genius-pattern" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                            <span className="text-sm text-red-400 mb-2 block">Wzorzec Dynamiki Zespołu</span>
                            <h4 className="text-lg font-semibold text-slate-100 group-hover:text-red-300 transition-colors">Toksyczny Geniusz: Jak jeden wybitny inżynier kosztował nas 10 milionów dolarów</h4>
                            <p className="text-slate-500 mt-2 text-sm">Gdy techniczna błyskotliwość staje się destrukcyjna dla zespołu.</p>
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
