/**
 * 143. Сортировка вагонов lite
 *
 * К тупику со стороны пути 1 (см. рисунок) подъехал поезд. Разрешается отцепить от поезда один или сразу
 * несколько первых вагонов и завезти их в тупик (при желании, можно даже завезти в тупик сразу весь поезд).
 * После этого часть из этих вагонов вывезти в сторону пути 2. После этого можно завезти в тупик еще
 * несколько вагонов и снова часть оказавшихся вагонов вывезти в сторону пути 2. И так далее (так, что каждый
 * вагон может лишь один раз заехать с пути 1 в тупик, а затем один раз выехать из тупика на путь 2).
 * Заезжать в тупик с пути 2 или выезжать из тупика на путь 1 запрещается. Нельзя с пути 1 попасть на путь 2,
 * не заезжая в тупик.
 *
 * [description.jpg]
 *
 * Известно, в каком порядке изначально идут вагоны поезда. Требуется с помощью указанных операций сделать
 * так, чтобы вагоны поезда шли по порядку (сначала первый, потом второй и т.д., считая от головы поезда,
 * едущего по пути 2 в сторону от тупика). Напишите программу, определяющую, можно ли это сделать.
 *
 * Формат ввода:
 * Вводится число N — количество вагонов в поезде (1 ≤ N ≤ 100). Дальше идут номера вагонов в порядке от
 * головы поезда, едущего по пути 1 в сторону тупика. Вагоны пронумерованы натуральными числами от 1 до N,
 * каждое из которых встречается ровно один раз.
 *
 * Формат вывода:
 * Если сделать так, чтобы вагоны шли в порядке от 1 до N, считая от головы поезда, когда поезд поедет
 * по пути 2 из тупика, можно, выведите сообщение YES, если это сделать нельзя, выведите NO.
 *
 * Примечания:
 */

function sortWagons(wagons) {
    const stack = [];
    const result = [];

    wagons.forEach((wNumber) => {
        while (stack.length > 0 && stack[stack.length - 1] <= wNumber) {
            result.push(stack.pop());
        }

        stack.push(wNumber);
    });

    while (stack.length > 0) {
        result.push(stack.pop());
    }

    let isSorted = true;
    for (let i = 1; i < result.length; i++) {
        isSorted = isSorted && result[i - 1] <= result[i];
    }
    return wagons.length === result.length && isSorted;
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
    const n = readInt();
    const wagons = readArray();

    const result = sortWagons(wagons);
    console.log(result ? "YES" : "NO");
}

function readAllString() {
    var arr = _inputLines.map((line) => line.trim());

    return arr;
}

function readString() {
    var str = _inputLines[_curLine].trim(" ");
    _curLine++;
    return str;
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}
function readBigInt() {
    const n = BigInt(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .filter((str) => str && str.length > 0)
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

function readBigIntArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => BigInt(num));
    _curLine++;
    return arr;
}

function readStringArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .filter((str) => str && str.length > 0);
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

module.exports = sortWagons;
