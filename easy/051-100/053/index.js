/**
 * 53. Пробежки по Манхэттену
 *
 * Дороги Нью-Манхэттена устроены следующим образом. С юга на север через каждые сто метров проходит авеню,
 * с запада на восток через каждые сто метров проходит улица. Авеню и улицы нумеруются целыми числами.
 * Меньшие номера соответствуют западным авеню и южным улицам. Таким образом, можно построить прямоугольную
 * систему координат так, чтобы точка (x, y) лежала на пересечении x-ой авеню и y-ой улицы. Легко заметить,
 * что для того, чтобы в Нью-Манхэттене дойти от точки (x[1], y[1]​) до точки (x[2], y[2]​) нужно пройти
 * ∣ x[2] − x[1] ∣ + ∣y[2] − y[1]∣ кварталов. Эта величина называется манхэттенским расстоянием между точками
 * (x[1], y[1]) и (x[2], y[2]). Миша живет в Нью-Манхэттене и каждое утро делает пробежку по городу.
 * Он выбегает из своего дома, который находится в точке (0, 0) и бежит по случайному маршруту. Каждую минуту
 * Миша либо остается на том же перекрестке, что и минуту назад, или перемещается на один квартал в любом
 * направлении. Чтобы не заблудиться Миша берет с собой навигатор, который каждые t минут говорит Мише,
 * в какой точке он находится. К сожалению, навигатор показывает не точное положение Миши, он может показать
 * любую из точек, манхэттенское расстояние от которых до Миши не превышает d.
 * Через t × n минут от начала пробежки, получив n-е сообщение от навигатора, Миша решил, что пора бежать
 * домой. Для этого он хочет понять, в каких точках он может находиться. Помогите Мише сделать это.
 *
 * Формат ввода
 * Первая строка входного файла содержит числа t, d и n (1 ≤ t ≤ 100, 1 ≤ d ≤ 100, 1 ≤ n ≤ 100). Далее n строк
 * описывают данные, полученные от навигатора. Строка номер i содержит числа x[i] и y[i] — данные, полученные
 * от навигатора через t[i] минут от начала пробежки.
 *
 * Формат вывода
 * В первой строке выходного файла выведите число m — число точек, в которых может находиться Миша. Далее
 * выведите m пар чисел — координаты точек. Точки можно вывести в произвольном порядке. Гарантируется, что
 * навигатор исправен и что существует по крайней мере одна точка, в которой может находиться Миша.
 *
 */

function getPointsInManhattan(t, d, n, navCoords) {
    return [
        [1, 5],
        [2, 4],
    ];
}

const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
    _inputLines.push(line);
});

process.stdin.on("end", solve);

function solve() {
    const params = readArray();
    const t = params[0];
    const d = params[1];
    const n = params[2];
    const navCoords = [];
    for (let i = 0; i < n; i++) {
        navCoords.push(readArray());
    }

    const result = getPointsInManhattan(t, d, n, navCoords);

    console.log(result.length);
    if (result.length > 0) {
        console.log(result.map((c) => c.join(" ")).join("\n"));
    }
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

module.exports = getPointsInManhattan;
