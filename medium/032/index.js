/**
 * 32. Ход конём - 2
 */

function knightMove_v2(n, m) {
    const dp = [];
    const move = [
        [-1, 2],
        [1, 2],
        [2, 1],
        [2, -1],
    ];
    const countMove = move.length;

    // if ((n + m - 2) % 3 !== 0) {
    //     return 0;
    // }

    for (let i = 0; i < n; i++) {
        dp.push(Array(m).fill(0));
    }
    dp[0][0] = 1;

    const nextMove = [[0, 0]];

    let i, j;
    let nextPtr = 0;
    const hash = new Set();
    while (nextMove.length > nextPtr) {
        [i, j] = nextMove[nextPtr];
        nextPtr++;
        for (let k = 0; k < countMove; k++) {
            const di = i + move[k][0];
            const dj = j + move[k][1];
            const hashIJ = JSON.stringify([di, dj]);

            if (di >= 0 && di < n && di >= 0 && dj < m) {
                if (!hash.has(hashIJ)) {
                    hash.add(hashIJ);
                    nextMove.push([di, dj]);
                }
                dp[di][dj] += dp[i][j];
            }
        }
    }

    return dp[n - 1][m - 1];
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
    const n = params[0];
    const m = params[1];

    const result = knightMove_v2(n, m);

    console.log(result);
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

module.exports = knightMove_v2;
