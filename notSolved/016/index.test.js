const getTransferCount = require(".");

describe("16. Metro", () => {
    test("test", () => {
        const result = getTransferCount(
            5,
            [
                [4, 1, 2, 3, 4],
                [2, 5, 3]
            ],
            [1, 3]
        );
        expect(result).toBe(0);
    });
    test("test", () => {
        const result = getTransferCount(
            5,
            [
                [4, 1, 2, 4],
                [2, 5],
                [5, 3]
            ],
            [5, 5]
        );
        expect(result).toBe(0);
    });
    test("test", () => {
        const result = getTransferCount(
            10,
            [
                [4, 1, 2, 3, 4],
                [7, 2, 5],
                [2, 8],
                [3, 9, 10, 6]
            ],
            [1, 6]
        );
        expect(result).toBe(1);
    });
    test("test", () => {
        const result = getTransferCount(2, [[1], [2], [1, 2]], [1, 3]);
        expect(result).toBe(0);
    });
});
