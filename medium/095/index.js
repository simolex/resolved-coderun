/**
 * 95. Счет в гипершашках
 *
 * Андрей работает судьей на чемпионате по гипершашкам. В каждой игре в гипершашки участвует три игрока. По ходу
 * игры каждый из игроков набирает некоторое положительное целое число баллов. Если после окончания игры первый
 * игрок набрал a баллов, второй — b, а третий c, то говорят, что игра закончилась со счетом a:b:c.
 * Андрей знает, что правила игры гипершашек устроены таким образом, что в результате игры баллы любых двух игроков
 * различаются не более чем в k раз.
 * После матча Андрей показывает его результат, размещая три карточки с очками игроков на специальном табло.
 * Для этого у него есть набор из n карточек, на которых написаны числа x1, x2, …, xn. Чтобы выяснить, насколько
 * он готов к чемпионату, Андрей хочет понять, сколько различных вариантов счета он сможет показать на табло,
 * используя имеющиеся карточки.
 * Требуется написать программу, которая по числу k и значениям чисел на карточках, которые имеются у Андрея,
 * определяет количество различных вариантов счета, которые Андрей может показать на табло.
 *
 * Формат ввода:
 * Первая строка входного файла содержит два целых числа: n и k (3 ≤ n ≤ 100000, 1 ≤ k ≤ 10^9).
 * Вторая строка входного файла содержит n целых чисел x1, x2, …, xn (1 ≤ xi ≤ 10^9).
 *
 * Формат вывода:
 * Выходной файл должен содержать одно целое число — искомое количество различных вариантов счета.
 *
 * Примечания
 * В приведенном примере Андрей сможет показать следующие варианты счета:
 * 1:1:2, 1:2:1, 2:1:1, 1:2:2, 2:1:2, 2:2:1, 2:2:3, 2:3:2, 3:2:2.
 * Другие тройки чисел, которые можно составить с использованием имеющихся карточек, не удовлетворяют заданному условию,
 * что баллы любых двух игроков различаются не более чем в k = 2 раза.
 */

function hyperCheckers(n, k, cards) {
    let count = 0;
    const cardsCount = {};

    for (let card of cards) {
        if (cardsCount[card]) {
            cardsCount[card]++;
        } else {
            cardsCount[card] = 1;
        }
    }
    const cardsOrdered = Object.keys(cardsCount).sort((a, b) => a - b);

    const uniqLength = cardsOrdered.length;
    let right = 0;
    let notOnceCards = 0;
    for (let left = 0; left < cardsOrdered.length; left++) {
        while (cardsOrdered[right] / cardsOrdered[left] <= k && right < uniqLength) {
            if (cardsCount[cardsOrdered[right]] > 1) {
                notOnceCards++;
            }
            right++;
        }
        const selectedTypes = right - left;
        const leftCount = cardsCount[cardsOrdered[left]];
        if (selectedTypes > 2) {
            const differentType = ((selectedTypes - 2) * (selectedTypes - 1)) / 2;
            count += differentType * 6;
        }
        if (selectedTypes > 1) {
            if (leftCount > 1) {
                count += (selectedTypes - 1) * 3;
            }

            count += 3 * (notOnceCards - (leftCount > 1 ? 1 : 0));
        }
        if (leftCount > 2) {
            count++;
        }
        notOnceCards -= leftCount > 1 ? 1 : 0;
    }
    return count;
}

const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
    _inputLines.push(line);
});

process.stdin.on("end", solve);

function solve() {
    const params = readArray();
    const n = params[0];
    const k = params[1];
    const cards = readArray();

    const result = hyperCheckers(n, k, cards);

    console.log(result);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

function readEdges(n) {
    let grid = [];
    for (let i = 0; i < n; i++) {
        let vertex = readArray();
        grid.push(vertex);
    }
    return grid;
}

module.exports = hyperCheckers;
