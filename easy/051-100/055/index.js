/**
 * 55. Злые свинки
 *
 * Вы никогда не задумывались, почему в Angry Birds у птиц нет крыльев?
 * Тем же вопросом задались разработчики новой игры. В их версии смысл игры прямо
 * противоположен Angry Birds: зеленая свинка стреляет по злым птицам из лазерного ружья
 * (завязка явно не хуже исходной игры).Птицы в игре представляются точками на плоскости.
 * Выстрел сбивает только ближайшую птицу находящуюся на линии огня. При этом сбитая птица,
 * падая, сбивает всех птиц, находящихся ровно под ней. Две птицы не могут находиться в одной точке.
 * По заданному расположению птиц необходимо определить, какое минимальное количество выстрелов необходимо,
 * чтобы все птицы были сбиты.
 *
 * Формат ввода:
 * Первая строка входного файла содержит единственное целое число N (1 ≤ N ≤ 1000) — количество птиц.
 * Следующие N строк содержат по два натуральных числа каждая x[i]​, y[i]​  — координаты i-ой птицы
 * (0 < x, y ≤ 10^9 ). Свинка находится в точке с координатами (0, 0).
 *
 * Формат вывода:
 * Единственная строка выходного файла должна содержать одно целое число — минимальное количество выстрелов,
 * необходимое для того, чтобы сбить всех птиц.
 */

function getCountShot(coordinates) {
    const xSet = new Set();

    for (let i = 0; i < coordinates.length; i++) {
        xSet.add(coordinates[i][0]);
    }

    return xSet.size;
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
    const N = readNumber();
    const input = [];
    for (let i = 0; i < N; i++) {
        input.push(readArray());
    }

    const ans = getCountShot(input);
    console.log(ans);
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line.trim();
}

function readNumber() {
    return Number(_inputLines[_curLine++]);
}

// function readStations() {
//     const M = readNumber();
//     let stations = [];
//     for (let i = 0; i < M; i++) {
//         stations.push(readArray());
//     }
//     return stations;
// }

module.exports = getCountShot;
