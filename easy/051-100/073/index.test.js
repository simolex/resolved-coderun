const solution = require(".");

describe("73. Система линейных уравнений - 2", () => {
    test("test-1", () => {
        const result = solution(1, 0, 0, 1, 3, 3);
        expect(result).toEqual([2, 3, 3]);
    });
    test("test-2", () => {
        const result = solution(1, 1, 2, 2, 1, 2);
        expect(result).toEqual([1, -1, 1]);
    });
    test("test-3", () => {
        const result = solution([0, 2, 0, 4, 1, 2]);
        expect(result).toEqual([4, 0.5]);
    });
});
