const solution = require(".");

describe("91. Sum of numbers", () => {
    test("test-1", () => {
        const result = solution(5, 17, [17, 7, 10, 7, 10]);
        expect(result).toBe(4);
    });
    test("test-2", () => {
        const result = solution(5, 10, [1, 2, 3, 4, 1]);
        expect(result).toBe(2);
    });
    test("test-7", () => {
        const result = solution(
            100,
            98,
            [
                1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1,
                1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1, 1, 2, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1,
                1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2
            ]
        );
        expect(result).toBe(25);
    });
});
