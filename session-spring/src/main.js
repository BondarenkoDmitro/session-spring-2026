/* ══════════════════════════════════════════
   НАЧАЛЬНЫЕ ДАННЫЕ ПЛАНА
   (из документа 07.04 - 04.06.2026)
══════════════════════════════════════════ */

window.INITIAL_DATA = [
    {
        id: 'w1',
        title: 'НЕДЕЛЯ 1',
        dates: '07.04 – 13.04.2026',
        badge: 'normal',
        days: [
            {
                id: 'w1d1', name: 'ВТ 07.04 (4–5 ч) ⭐ НАЧАЛО',
                date: '2026-04-07',
                tasks: [
                    { id: 't1', text: 'Архітектура комп\'ютера — Лаб 1 (підготовка) → 2.5 год', done: false },
                    { id: 't2', text: 'ООП — Лаб 1 (підготовка) → 2 год', done: false },
                    { id: 't3', text: 'Ознайомлення з матеріалом → 0.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 ДЕДЛАЙН АРХІТЕКТУРИ: 12.04 (пт)', type: 'yellow' }
                ]
            },
            {
                id: 'w1d2', name: 'СР 08.04 (4–5 ч)',
                date: '2026-04-08',
                tasks: [
                    { id: 't4', text: 'ООП — Лаб 1 (продолжение) → 2.5 год', done: false },
                    { id: 't5', text: 'Вища математика — Лаб 1 (підготовка) → 1.5 год', done: false },
                    { id: 't6', text: 'Вивчення матеріалу → 0.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 СДАЧА: ООП Лаб 1 (08.04, ср)', type: 'red' }
                ]
            },
            {
                id: 'w1d3', name: 'ЧТ 09.04 (4–5 ч)',
                date: '2026-04-09',
                tasks: [
                    { id: 't7', text: 'ООП — Лаб 1 (завершение) → 2 год', done: false },
                    { id: 't8', text: 'Дискретна математика — Лаб 1 (підготовка) → 2 год', done: false },
                ],
                deadlines: [
                    { text: '📍 СДАЧА: ООП Лаб 1 (альт. день — чт)', type: 'yellow' }
                ]
            },
            {
                id: 'w1d4', name: 'ПТ 10.04 (4–5 ч)',
                date: '2026-04-10',
                tasks: [
                    { id: 't9',  text: 'Дискретна математика — Лаб 1 (продолжение) → 2.5 год', done: false },
                    { id: 't10', text: 'Вища математика — Лаб 1 (продолжение) → 1.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 СДАЧА: Дискретна математика Лаб 1 (10.04, пт)', type: 'red' }
                ]
            },
            {
                id: 'w1d5', name: 'СБ 11.04 (4–5 ч)',
                date: '2026-04-11',
                tasks: [
                    { id: 't11', text: 'Архітектура — Лаб 1 (продолжение) → 2.5 год', done: false },
                    { id: 't12', text: 'Soft skills — Лаб 1 (підготовка) → 1.5 год', done: false },
                    { id: 't13', text: 'Вивчення матеріалу → 0.5 год', done: false },
                ],
                deadlines: []
            },
            {
                id: 'w1d6', name: 'ПН 12.04 (4–5 ч)',
                date: '2026-04-12',
                tasks: [
                    { id: 't14', text: 'Архітектура — Лаб 1 (завершение) → 2.5 год', done: false },
                    { id: 't15', text: 'Soft skills — Лаб 1 (продолжение) → 1.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 СДАЧА: Архітектура Лаб 1 (12.04, пн) ✅', type: 'green' }
                ]
            },
            {
                id: 'w1d7', name: 'НД 13.04 (4–5 ч)',
                date: '2026-04-13',
                tasks: [
                    { id: 't16', text: 'Вища математика — Лаб 1 (завершение) → 2.5 год', done: false },
                    { id: 't17', text: 'ООП — Лаб 2 (підготовка) → 1.5 год', done: false },
                    { id: 't18', text: 'Підготовка до тижня', done: false },
                ],
                deadlines: []
            },
        ]
    },

    {
        id: 'w2',
        title: 'НЕДЕЛЯ 2',
        dates: '14.04 – 20.04.2026',
        badge: 'normal',
        days: [
            {
                id: 'w2d1', name: 'ВТ 14.04 (4–5 ч)',
                date: '2026-04-14',
                tasks: [
                    { id: 't19', text: 'Архітектура — Лаб 2 (підготовка) → 2.5 год', done: false },
                    { id: 't20', text: 'Дискретна математика — Лаб 2 (підготовка) → 1.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 ДЕДЛАЙН АРХІТЕКТУРИ: 19.04 (пт)', type: 'yellow' }
                ]
            },
            {
                id: 'w2d2', name: 'СР 15.04 (4–5 ч)',
                date: '2026-04-15',
                tasks: [
                    { id: 't21', text: 'ООП — Лаб 2 (продолжение) → 2.5 год', done: false },
                    { id: 't22', text: 'Вища математика — Лаб 2 (підготовка) → 1.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 СДАЧА: ООП Лаб 2 (15.04, ср)', type: 'red' }
                ]
            },
            {
                id: 'w2d3', name: 'ЧТ 16.04 (4–5 ч)',
                date: '2026-04-16',
                tasks: [
                    { id: 't23', text: 'ООП — Лаб 2 (завершение) → 2 год', done: false },
                    { id: 't24', text: 'Soft skills — Лаб 1 (завершение) → 1.5 год', done: false },
                    { id: 't25', text: 'Вивчення матеріалу → 1 год', done: false },
                ],
                deadlines: [
                    { text: '📍 СДАЧА: ООП Лаб 2 (альт. день — чт)', type: 'yellow' }
                ]
            },
            {
                id: 'w2d4', name: 'ПТ 17.04 (4–5 ч)',
                date: '2026-04-17',
                tasks: [
                    { id: 't26', text: 'Дискретна математика — Лаб 2 (продолжение) → 2.5 год', done: false },
                    { id: 't27', text: 'Архітектура — Лаб 2 (продолжение) → 1.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 СДАЧА: Дискретна математика Лаб 2 (17.04, пт)', type: 'red' }
                ]
            },
            {
                id: 'w2d5', name: 'СБ 18.04 (4–5 ч)',
                date: '2026-04-18',
                tasks: [
                    { id: 't28', text: 'Архітектура — Лаб 2 (завершение) → 2.5 год', done: false },
                    { id: 't29', text: 'Вища математика — Лаб 2 (продолжение) → 1.5 год', done: false },
                    { id: 't30', text: 'Вивчення матеріалу → 0.5 год', done: false },
                ],
                deadlines: []
            },
            {
                id: 'w2d6', name: 'ПН 19.04 (4–5 ч)',
                date: '2026-04-19',
                tasks: [
                    { id: 't31', text: 'Архітектура — Лаб 2 (остаток) → 2.5 год', done: false },
                    { id: 't32', text: 'Soft skills — Лаб 2 (підготовка) → 1.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 СДАЧА: Архітектура Лаб 2 (19.04, пн) ✅', type: 'green' }
                ]
            },
            {
                id: 'w2d7', name: 'НД 20.04 (4–5 ч)',
                date: '2026-04-20',
                tasks: [
                    { id: 't33', text: 'Вища математика — Лаб 2 (завершение) → 2.5 год', done: false },
                    { id: 't34', text: 'ООП — Лаб 3 (підготовка) → 1.5 год', done: false },
                    { id: 't35', text: 'Підготовка до тижня', done: false },
                ],
                deadlines: []
            },
        ]
    },

    {
        id: 'w3',
        title: 'НЕДЕЛЯ 3 ⚠️ КРИТИЧНА',
        dates: '21.04 – 27.04.2026',
        badge: 'critical',
        days: [
            {
                id: 'w3d1', name: 'ВТ 21.04 (5 ч) ⭐ НАПРУЖЕНА',
                date: '2026-04-21',
                tasks: [
                    { id: 't36', text: '🔴 ВИЩА МАТЕМАТИКА — ДОПОВІДЬ (завершення) → 2.5 год', done: false },
                    { id: 't37', text: 'Архітектура — Лаб 3 (підготовка) → 1.5 год', done: false },
                    { id: 't38', text: 'Дискретна математика — Лаб 3 (підготовка) → 1 год', done: false },
                ],
                deadlines: [
                    { text: '📍 ДЕДЛАЙН АРХІТЕКТУРИ: 26.04 (пт)', type: 'yellow' }
                ]
            },
            {
                id: 'w3d2', name: 'СР 22.04 (4–5 ч)',
                date: '2026-04-22',
                tasks: [
                    { id: 't39', text: 'ООП — Лаб 3 (продолжение) → 2.5 год', done: false },
                    { id: 't40', text: 'Вища математика — Лаб 3 (підготовка) → 1.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 СДАЧА: ООП Лаб 3 (22.04, ср)', type: 'red' }
                ]
            },
            {
                id: 'w3d3', name: 'ЧТ 23.04 (4–5 ч)',
                date: '2026-04-23',
                tasks: [
                    { id: 't41', text: 'ООП — Лаб 3 (завершение) → 2 год', done: false },
                    { id: 't42', text: 'Soft skills — Лаб 2 (продолжение) → 1.5 год', done: false },
                    { id: 't43', text: 'Вивчення матеріалу → 1 год', done: false },
                ],
                deadlines: [
                    { text: '📍 СДАЧА: ООП Лаб 3 (альт. день — чт)', type: 'yellow' }
                ]
            },
            {
                id: 'w3d4', name: 'ПТ 24.04 (4–5 ч)',
                date: '2026-04-24',
                tasks: [
                    { id: 't44', text: 'Дискретна математика — Лаб 3 (продолжение) → 2.5 год', done: false },
                    { id: 't45', text: 'Архітектура — Лаб 3 (продолжение) → 1.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 СДАЧА: Дискретна математика Лаб 3 (24.04, пт)', type: 'red' }
                ]
            },
            {
                id: 'w3d5', name: 'СБ 25.04 (4–5 ч)',
                date: '2026-04-25',
                tasks: [
                    { id: 't46', text: 'Архітектура — Лаб 3 (продолжение) → 2.5 год', done: false },
                    { id: 't47', text: 'Вища математика — Лаб 3 (продолжение) → 1.5 год', done: false },
                    { id: 't48', text: 'Вивчення матеріалу → 0.5 год', done: false },
                ],
                deadlines: []
            },
            {
                id: 'w3d6', name: 'ПН 26.04 (4–5 ч)',
                date: '2026-04-26',
                tasks: [
                    { id: 't49', text: 'Архітектура — Лаб 3 (завершение) → 2.5 год', done: false },
                    { id: 't50', text: 'Soft skills — Лаб 2 (завершение) → 1.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 СДАЧА: Архітектура Лаб 3 (26.04, пн) ✅', type: 'green' }
                ]
            },
            {
                id: 'w3d7', name: 'НД 27.04 (4–5 ч)',
                date: '2026-04-27',
                tasks: [
                    { id: 't51', text: 'Вища математика — Лаб 3 (завершение) → 2.5 год', done: false },
                    { id: 't52', text: 'ООП — Лаб 4 (підготовка) → 1.5 год', done: false },
                    { id: 't53', text: 'Підготовка до тижня', done: false },
                ],
                deadlines: []
            },
        ]
    },

    {
        id: 'w4',
        title: 'НЕДЕЛЯ 4',
        dates: '28.04 – 04.05.2026',
        badge: 'normal',
        days: [
            {
                id: 'w4d1', name: 'ВТ 28.04 (4–5 ч)',
                date: '2026-04-28',
                tasks: [
                    { id: 't54', text: 'Архітектура — Лаб 4 (підготовка) → 2.5 год', done: false },
                    { id: 't55', text: 'Дискретна математика — закончилась ✅', done: true },
                    { id: 't56', text: 'Soft skills — Лаб 3 (підготовка) → 1 год', done: false },
                ],
                deadlines: [
                    { text: '📍 ДЕДЛАЙН АРХІТЕКТУРИ: 03.05 (пт)', type: 'yellow' }
                ]
            },
            {
                id: 'w4d2', name: 'СР 29.04 (4–5 ч)',
                date: '2026-04-29',
                tasks: [
                    { id: 't57', text: 'ООП — Лаб 4 (продолжение) → 2.5 год', done: false },
                    { id: 't58', text: 'Soft skills — Лаб 3 (продолжение) → 1.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 СДАЧА: ООП Лаб 4 (29.04, ср)', type: 'red' }
                ]
            },
            {
                id: 'w4d3', name: 'ЧТ 30.04 (4–5 ч)',
                date: '2026-04-30',
                tasks: [
                    { id: 't59', text: 'ООП — Лаб 4 (завершение) → 2 год', done: false },
                    { id: 't60', text: 'Soft skills — Лаб 3 (завершение) → 1.5 год', done: false },
                    { id: 't61', text: 'Вивчення матеріалу → 1 год', done: false },
                ],
                deadlines: [
                    { text: '📍 СДАЧА: ООП Лаб 4 (альт. день — чт)', type: 'yellow' }
                ]
            },
            {
                id: 'w4d4', name: 'ПТ 01.05 (4–5 ч) 🎉 СВЯТО',
                date: '2026-05-01',
                holiday: true,
                tasks: [
                    { id: 't62', text: 'Архітектура — Лаб 4 (продолжение) → 2.5 год', done: false },
                    { id: 't63', text: 'Soft skills — Самостійна 1 (підготовка) → 1.5 год', done: false },
                    { id: 't64', text: '✅ ДИСКРЕТНА МАТЕМАТИКА ГОТОВА', done: true },
                ],
                deadlines: []
            },
            {
                id: 'w4d5', name: 'СБ 02.05 (4–5 ч)',
                date: '2026-05-02',
                tasks: [
                    { id: 't65', text: 'Архітектура — Лаб 4 (продолжение) → 2.5 год', done: false },
                    { id: 't66', text: 'Вища математика — повторення перед сесією → 1.5 год', done: false },
                    { id: 't67', text: 'Вивчення матеріалу → 0.5 год', done: false },
                ],
                deadlines: []
            },
            {
                id: 'w4d6', name: 'ПН 03.05 (4–5 ч)',
                date: '2026-05-03',
                tasks: [
                    { id: 't68', text: 'Архітектура — Лаб 4 (завершение) → 2.5 год', done: false },
                    { id: 't69', text: 'Soft skills — Самостійна 1 (продолжение) → 1.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 СДАЧА: Архітектура Лаб 4 (03.05, пн) ✅', type: 'green' }
                ]
            },
            {
                id: 'w4d7', name: 'НД 04.05 (4–5 ч)',
                date: '2026-05-04',
                tasks: [
                    { id: 't70', text: 'ООП — Лаб 5 (підготовка) → 2.5 год', done: false },
                    { id: 't71', text: 'Soft skills — Самостійна 1 (завершение) → 1.5 год', done: false },
                    { id: 't72', text: 'Підготовка до тижня', done: false },
                ],
                deadlines: []
            },
        ]
    },

    {
        id: 'w5',
        title: 'НЕДЕЛЯ 5',
        dates: '05.05 – 11.05.2026',
        badge: 'normal',
        days: [
            {
                id: 'w5d1', name: 'ВТ 05.05 (4–5 ч)',
                date: '2026-05-05',
                tasks: [
                    { id: 't73', text: 'ООП — Лаб 5 (продолжение) → 2.5 год', done: false },
                    { id: 't74', text: 'Англійська — ДОПОВІДЬ (підготовка) → 1.5 год', done: false },
                    { id: 't75', text: '✅ АРХІТЕКТУРА ГОТОВА', done: true },
                ],
                deadlines: []
            },
            {
                id: 'w5d2', name: 'СР 06.05 (4–5 ч)',
                date: '2026-05-06',
                tasks: [
                    { id: 't76', text: 'ООП — Лаб 5 (продолжение) → 2.5 год', done: false },
                    { id: 't77', text: 'Англійська — ДОПОВІДЬ (продолжение) → 1.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 СДАЧА: ООП Лаб 5 (06.05, ср)', type: 'red' }
                ]
            },
            {
                id: 'w5d3', name: 'ЧТ 07.05 (4–5 ч)',
                date: '2026-05-07',
                tasks: [
                    { id: 't78', text: 'ООП — Лаб 5 (завершение) → 2 год', done: false },
                    { id: 't79', text: 'Англійська — ДОПОВІДЬ (продолжение) → 2 год', done: false },
                ],
                deadlines: [
                    { text: '📍 СДАЧА: ООП Лаб 5 (альт. день — чт)', type: 'yellow' }
                ]
            },
            {
                id: 'w5d4', name: 'ПТ 08.05 (4–5 ч)',
                date: '2026-05-08',
                tasks: [
                    { id: 't80', text: 'Вища математика — повторення → 2.5 год', done: false },
                    { id: 't81', text: 'Англійська — ДОПОВІДЬ (продолжение) → 1.5 год', done: false },
                    { id: 't82', text: '✅ ВСІ ООП ЛАБОРАТОРНІ ГОТОВІ', done: true },
                ],
                deadlines: []
            },
            {
                id: 'w5d5', name: 'СБ 09.05 (4–5 ч) 🎉 СВЯТО',
                date: '2026-05-09',
                holiday: true,
                tasks: [
                    { id: 't83', text: 'Англійська — ДОПОВІДЬ (продолжение) → 2 год', done: false },
                    { id: 't84', text: 'Soft skills — Самостійна 2 (підготовка) → 2 год', done: false },
                    { id: 't85', text: 'Відпочинок', done: false },
                ],
                deadlines: []
            },
            {
                id: 'w5d6', name: 'ПН 10.05 (4–5 ч)',
                date: '2026-05-10',
                tasks: [
                    { id: 't86', text: 'Англійська — остаточна підготовка → 2.5 год', done: false },
                    { id: 't87', text: 'Soft skills — Самостійна 2 (продолжение) → 1.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 ДЕДЛАЙН АНГЛІЙСЬКОЇ: 14.05', type: 'yellow' }
                ]
            },
            {
                id: 'w5d7', name: 'НД 11.05 (4–5 ч)',
                date: '2026-05-11',
                tasks: [
                    { id: 't88', text: 'Вища математика — інтенсивне повторення → 2.5 год', done: false },
                    { id: 't89', text: 'Англійська — репетиція доповіді → 1.5 год', done: false },
                    { id: 't90', text: 'Підготовка до тижня', done: false },
                ],
                deadlines: []
            },
        ]
    },

    {
        id: 'w6',
        title: 'НЕДЕЛЯ 6',
        dates: '12.05 – 18.05.2026',
        badge: 'normal',
        days: [
            {
                id: 'w6d1', name: 'ВТ 12.05 (4–5 ч)',
                date: '2026-05-12',
                tasks: [
                    { id: 't91', text: 'Вища математика — інтенсивне повторення → 2.5 год', done: false },
                    { id: 't92', text: 'Soft skills — Самостійна 2 (продолжение) → 1.5 год', done: false },
                    { id: 't93', text: '✅ ООП ГОТОВА', done: true },
                ],
                deadlines: []
            },
            {
                id: 'w6d2', name: 'СР 13.05 (4–5 ч)',
                date: '2026-05-13',
                tasks: [
                    { id: 't94', text: 'Англійська — ДОПОВІДЬ (остаточна підготовка) → 2.5 год', done: false },
                    { id: 't95', text: 'Вища математика — повторення → 1.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 ДЕДЛАЙН АНГЛІЙСЬКОЇ ЗАВТРА: 14.05', type: 'red' }
                ]
            },
            {
                id: 'w6d3', name: 'ЧТ 14.05 (4–5 ч) ⚠️ ВАЖЛИВО',
                date: '2026-05-14',
                tasks: [
                    { id: 't96', text: '🔴 АНГЛІЙСЬКА — ДОПОВІДЬ (здача) → 2 год', done: false },
                    { id: 't97', text: 'Вища математика — остаточне повторення → 2 год', done: false },
                ],
                deadlines: [
                    { text: '📍 ДЕДЛАЙН АНГЛІЙСЬКОЇ: 14.05 ✅', type: 'green' }
                ]
            },
            {
                id: 'w6d4', name: 'ПТ 15.05 (4–5 ч)',
                date: '2026-05-15',
                tasks: [
                    { id: 't98', text: 'Вища математика — готівка до сесії → 2.5 год', done: false },
                    { id: 't99', text: 'Soft skills — Самостійна 2 (завершение) → 1.5 год', done: false },
                    { id: 't100', text: '✅ АНГЛІЙСЬКА ГОТОВА', done: true },
                ],
                deadlines: []
            },
            {
                id: 'w6d5', name: 'СБ 16.05 (4–5 ч)',
                date: '2026-05-16',
                tasks: [
                    { id: 't101', text: 'Вища математика — інтенсив перед сесією → 3 год', done: false },
                    { id: 't102', text: 'Soft skills — перевірка завершених робіт → 1 год', done: false },
                    { id: 't103', text: 'Відпочинок', done: false },
                ],
                deadlines: []
            },
            {
                id: 'w6d6', name: 'ПН 17.05 (4–5 ч)',
                date: '2026-05-17',
                tasks: [
                    { id: 't104', text: 'Вища математика — остаточне повторення → 2.5 год', done: false },
                    { id: 't105', text: 'Soft skills — останні штрихи → 1.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 ДЕДЛАЙН МАТЕМАТИКИ ПЕРЕНЕСЕН НА 22.05!', type: 'yellow' }
                ]
            },
            {
                id: 'w6d7', name: 'НД 18.05 (4–5 ч)',
                date: '2026-05-18',
                tasks: [
                    { id: 't106', text: 'Вища математика — ІНТЕНСИВ → 3 год', done: false },
                    { id: 't107', text: 'Soft skills — перевірка перед сесією → 1 год', done: false },
                    { id: 't108', text: 'Відпочинок', done: false },
                ],
                deadlines: []
            },
        ]
    },

    {
        id: 'w7',
        title: 'НЕДЕЛЯ 7 ⚠️ КОНЦЕРТ 22.05',
        dates: '19.05 – 25.05.2026',
        badge: 'concert',
        days: [
            {
                id: 'w7d1', name: 'ВТ 19.05 (4–5 ч)',
                date: '2026-05-19',
                tasks: [
                    { id: 't109', text: 'Вища математика — остаточна подача всіх лаб (підготовка) → 3 год', done: false },
                    { id: 't110', text: 'Soft skills — перевірка → 1 год', done: false },
                ],
                deadlines: [
                    { text: '📍 ДЕДЛАЙН МАТЕМАТИКИ: 22.05 (перенесен з 23.05)', type: 'red' }
                ]
            },
            {
                id: 'w7d2', name: 'СР 20.05 (4–5 ч)',
                date: '2026-05-20',
                tasks: [
                    { id: 't111', text: 'Вища математика — остаточне повторення → 3 год', done: false },
                    { id: 't112', text: 'Soft skills — фіналізація → 1.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 БЕЗ 23.05 — є концерт!', type: 'yellow' }
                ]
            },
            {
                id: 'w7d3', name: 'ЧТ 21.05 (4–5 ч)',
                date: '2026-05-21',
                tasks: [
                    { id: 't113', text: 'Вища математика — інтенсивна підготовка → 3.5 год', done: false },
                    { id: 't114', text: 'Soft skills — остаточна перевірка → 0.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 ЗА ДЕНЬ ДО ДЕДЛАЙНУ', type: 'red' }
                ]
            },
            {
                id: 'w7d4', name: 'ПТ 22.05 (4–5 ч) 🔴 ДЕДЛАЙН',
                date: '2026-05-22',
                tasks: [
                    { id: 't115', text: '🔴 ВИЩА МАТЕМАТИКА — ОСТАТОЧНА ПОДАЧА ВСІХ ЛАБ → до кінця дня', done: false },
                    { id: 't116', text: 'Soft skills — завершення остатків → 1 год', done: false },
                    { id: 't117', text: '✅ МАТЕМАТИКА ГОТОВА', done: false },
                ],
                deadlines: [
                    { text: '📍 КОНЦЕРТ СЬОГОДНІ ВВЕЧЕРІ 🎵', type: 'yellow' }
                ]
            },
            {
                id: 'w7d5', name: 'НД 24.05 (4–5 ч) [без 23.05]',
                date: '2026-05-24',
                tasks: [
                    { id: 't118', text: 'ПОЧАТОК ПІДГОТОВКИ ДО СЕСІЇ → 3 год', done: false },
                    { id: 't119', text: 'Soft skills — остаточна перевірка → 1.5 год', done: false },
                ],
                deadlines: [
                    { text: '📍 ЗАЛИШИЛОСЬ 6 ДНІВ ДО СЕСІЇ (без 23.05)', type: 'yellow' }
                ]
            },
            {
                id: 'w7d6', name: 'ПН 25.05 (4–5 ч)',
                date: '2026-05-25',
                tasks: [
                    { id: 't120', text: 'ІНТЕНСИВНА ПІДГОТОВКА ДО СЕСІЇ → 4 год', done: false },
                    { id: 't121', text: 'Перегляд всіх матеріалів → 1 год', done: false },
                    { id: 't122', text: 'ОСТАТОЧНА ПЕРЕВІРКА ВСІХ РОБІТ', done: false },
                ],
                deadlines: []
            },
        ]
    },

    {
        id: 'w8',
        title: 'НЕДЕЛЯ 8 — ПІДГОТОВКА ДО СЕСІЇ',
        dates: '26.05 – 04.06.2026',
        badge: 'session',
        days: [
            {
                id: 'w8d1', name: 'ВТ 26.05',
                date: '2026-05-26',
                tasks: [
                    { id: 't123', text: 'Інтенсивне повторення всіх предметів → 4 год', done: false },
                    { id: 't124', text: 'Написання шпаргалок і конспектів', done: false },
                ],
                deadlines: []
            },
            {
                id: 'w8d2', name: 'СР 27.05',
                date: '2026-05-27',
                tasks: [
                    { id: 't125', text: 'Розв\'язання задач → 4 год', done: false },
                    { id: 't126', text: 'Репетиція екзаменів', done: false },
                ],
                deadlines: []
            },
            {
                id: 'w8d3', name: 'ЧТ 28.05',
                date: '2026-05-28',
                tasks: [
                    { id: 't127', text: 'Повторення слабких тем → 4 год', done: false },
                ],
                deadlines: []
            },
            {
                id: 'w8d4', name: 'ПТ 29.05',
                date: '2026-05-29',
                tasks: [
                    { id: 't128', text: 'Повторення → 4 год', done: false },
                ],
                deadlines: []
            },
            {
                id: 'w8d5', name: 'СБ 30.05',
                date: '2026-05-30',
                tasks: [
                    { id: 't129', text: 'Повторення → 4 год', done: false },
                ],
                deadlines: []
            },
            {
                id: 'w8d6', name: 'НД 31.05',
                date: '2026-05-31',
                tasks: [
                    { id: 't130', text: 'Повторення → 4 год', done: false },
                ],
                deadlines: []
            },
            {
                id: 'w8d7', name: 'ПН 01.06',
                date: '2026-06-01',
                tasks: [
                    { id: 't131', text: 'Фінальне повторення → 4 год', done: false },
                ],
                deadlines: []
            },
            {
                id: 'w8d8', name: 'ВТ 02.06',
                date: '2026-06-02',
                tasks: [
                    { id: 't132', text: 'Легка підготовка', done: false },
                ],
                deadlines: []
            },
            {
                id: 'w8d9', name: 'СР 03.06',
                date: '2026-06-03',
                tasks: [
                    { id: 't133', text: 'Легка підготовка', done: false },
                ],
                deadlines: []
            },
            {
                id: 'w8d10', name: 'ЧТ 04.06 🔴 ОСТАННІЙ ДЕДЛАЙН',
                date: '2026-06-04',
                tasks: [
                    { id: 't134', text: '🔴 ПЕРЕВІРКА Soft skills ДОПОВІДІ (до 04.06)', done: false },
                ],
                deadlines: [
                    { text: '📍 ОСТАННІЙ ДЕДЛАЙН ПЕРЕД СЕСІЄЮ ✅', type: 'red' }
                ]
            },
        ]
    },
];