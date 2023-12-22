const solution = require(".");
const slowSolution = require("./index.slow");

describe("109. Median union v2", () => {
    test("test-1", () => {
        const result = solution(3, 6, [
            [1, 3, 1, 0, 5],
            [0, 2, 1, 1, 100],
            [1, 6, 8, 5, 11]
        ]);
        expect(result).toEqual([7, 10, 9]);
    });
    test("test-1", () => {
        const result = solution(4, 20, [
            [-1128, 259, 350, 243, 397],
            [-1492, 78, 167, 276, 277],
            [67, 38, 72, 56, 107],
            [-1434, 77, 175, 215, 271]
        ]);
        expect(result).toEqual([272, 572, 278, 272, -376, 278]);
    });
    const testData_5 = [
        [3, 5, 0, 3, 6],
        [1, 0, 0, 1, 2],
        [4, 1, 1, 1, 5],
        [1, 3, 6, 6, 9],
        [6, 3, 7, 0, 8],
        [7, 0, 3, 2, 6],
        [3, 2, 4, 5, 9],
        [9, 0, 1, 1, 3],
        [9, 0, 0, 0, 1],
        [3, 5, 5, 4, 8],
        [3, 5, 5, 4, 8],
        [9, 0, 0, 0, 1],
        [9, 0, 1, 1, 3],
        [3, 2, 4, 5, 9],
        [7, 0, 3, 2, 6],
        [6, 3, 7, 0, 8],
        [1, 3, 6, 6, 9],
        [4, 1, 1, 1, 5],
        [1, 0, 0, 1, 2],
        [3, 5, 0, 3, 6]
    ];
    test("test-5", () => {
        const result = solution(20, 2, testData_5);
        const slowResult = slowSolution(20, 2, testData_5);

        expect(result).toEqual(slowResult);
    });
    const testData_29 = [
        [-1000000000, 39999, 1, 0, 40000],
        [-999910001, 39999, 1, 0, 40000],
        [-1000000000, 123, 1944, 0, 32749],
        [-200000000, 321, 1944, 0, 32749],
        [181968460, 111, 1944, 0, 32749],
        [-469298159, 20883, 22661, 0, 32749],
        [-974610658, 403, 22661, 0, 32749],
        [-80406459, 15975, 22661, 0, 32749],
        [-676381857, 14278, 22661, 0, 32749],
        [-789963257, 9469, 22661, 0, 32749],
        [-793578593, 29774, 22661, 0, 32749],
        [-56360712, 25727, 22661, 0, 32749],
        [-732158759, 15249, 22661, 0, 32749],
        [-694600428, 29345, 22661, 0, 32749],
        [-990608230, 5196, 22661, 0, 32749],
        [-314279223, 7968, 22661, 0, 32749],
        [-424115220, 20505, 22661, 0, 32749],
        [-173414326, 10647, 22661, 0, 32749],
        [-316165912, 25071, 22661, 0, 32749],
        [-817286168, 13157, 22661, 0, 32749],
        [-690366199, 31814, 22661, 0, 32749],
        [-748792237, 11457, 22661, 0, 32749],
        [-63645909, 28006, 22661, 0, 32749],
        [-768455757, 9653, 22661, 0, 32749],
        [-729057686, 19957, 22661, 0, 32749],
        [-810236034, 26220, 22661, 0, 32749],
        [-663354553, 32145, 22661, 0, 32749],
        [-987886794, 2398, 22661, 0, 32749],
        [-903654170, 14931, 22661, 0, 32749],
        [-735597918, 5607, 22661, 0, 32749],
        [-583723170, 23828, 22661, 0, 32749],
        [-127007608, 8872, 22661, 0, 32749],
        [-903175159, 7191, 22661, 0, 32749],
        [-24876269, 21061, 22661, 0, 32749],
        [-175649988, 30301, 22661, 0, 32749],
        [-839632251, 5231, 22661, 0, 32749],
        [-276230412, 2038, 22661, 0, 32749],
        [-973443988, 28114, 22661, 0, 32749],
        [-712590480, 11371, 22661, 0, 32749],
        [-227387735, 5387, 22661, 0, 32749],
        [-300318757, 23418, 22661, 0, 32749],
        [-111768093, 14117, 22661, 0, 32749],
        [-51704163, 17334, 22661, 0, 32749],
        [-506670270, 3989, 22661, 0, 32749],
        [-224593052, 14065, 22661, 0, 32749],
        [-849620733, 18199, 22661, 0, 32749],
        [-292145328, 21729, 22661, 0, 32749],
        [-963638260, 16006, 22661, 0, 32749],
        [-719501219, 13120, 22661, 0, 32749],
        [-562145205, 26990, 22661, 0, 32749],
        [-125644262, 5065, 22661, 0, 32749],
        [-56134690, 5846, 22661, 0, 32749],
        [-137685592, 15438, 22661, 0, 32749],
        [-889234643, 2954, 22661, 0, 32749],
        [-771478422, 4785, 22661, 0, 32749],
        [-439407886, 23944, 22661, 0, 32749],
        [-301729795, 7199, 22661, 0, 32749],
        [-182954137, 16825, 22661, 0, 32749],
        [-945798161, 20383, 22661, 0, 32749],
        [-456275939, 22605, 22661, 0, 32749],
        [-931892594, 28967, 22661, 0, 32749],
        [-273674731, 6121, 22661, 0, 32749],
        [-577492309, 1656, 22661, 0, 32749],
        [-714325704, 13397, 22661, 0, 32749],
        [-668278463, 25723, 22661, 0, 32749],
        [-339628383, 23283, 22661, 0, 32749],
        [-973215660, 5667, 22661, 0, 32749],
        [-490764694, 2976, 22661, 0, 32749],
        [-572825398, 28897, 22661, 0, 32749],
        [-961177323, 14444, 22661, 0, 32749],
        [-791589010, 13550, 22661, 0, 32749],
        [-711068294, 27693, 22661, 0, 32749],
        [-246728482, 10230, 22661, 0, 32749],
        [-741720058, 11090, 22661, 0, 32749],
        [-731130485, 31861, 22661, 0, 32749],
        [-657885151, 31591, 22661, 0, 32749],
        [-798859964, 7559, 22661, 0, 32749],
        [-182028297, 13278, 22661, 0, 32749],
        [-463840168, 26369, 22661, 0, 32749],
        [-968313096, 22548, 22661, 0, 32749],
        [-467792204, 121, 22661, 0, 32749],
        [-73525002, 15939, 22661, 0, 32749],
        [-998671847, 8740, 22661, 0, 32749],
        [-699392763, 26893, 22661, 0, 32749],
        [-91772680, 24124, 22661, 0, 32749],
        [-63284712, 4378, 22661, 0, 32749],
        [-356122589, 13506, 22661, 0, 32749],
        [-271647789, 24232, 22661, 0, 32749],
        [-815859085, 11091, 22661, 0, 32749],
        [-942861362, 20878, 22661, 0, 32749],
        [-506331139, 2798, 22661, 0, 32749],
        [-357496297, 4812, 22661, 0, 32749],
        [-827273690, 23962, 22661, 0, 32749],
        [-976510670, 18851, 22661, 0, 32749],
        [-878329537, 10573, 22661, 0, 32749],
        [-570716136, 3454, 22661, 0, 32749],
        [-400248892, 21010, 22661, 0, 32749],
        [-934613253, 15760, 22661, 0, 32749],
        [-356014481, 4116, 22661, 0, 32749],
        [-970417983, 446, 22661, 0, 32749],
        [-442059748, 17049, 22661, 0, 32749],
        [-626116146, 32444, 22661, 0, 32749],
        [-103022997, 3424, 22661, 0, 32749],
        [-548517056, 20820, 22661, 0, 32749],
        [-206099077, 25779, 22661, 0, 32749],
        [-760838947, 23996, 22661, 0, 32749],
        [-534575874, 27948, 22661, 0, 32749],
        [-312588614, 5464, 22661, 0, 32749],
        [-952827132, 12707, 22661, 0, 32749],
        [-800447070, 3272, 22661, 0, 32749],
        [-381406697, 31521, 22661, 0, 32749],
        [-324762058, 32531, 22661, 0, 32749],
        [-162887991, 24676, 22661, 0, 32749],
        [-328059975, 15339, 22661, 0, 32749],
        [-40864974, 24003, 22661, 0, 32749],
        [-114173280, 23562, 22661, 0, 32749],
        [-774631596, 19165, 22661, 0, 32749],
        [-576074355, 5388, 22661, 0, 32749],
        [-933020656, 13714, 22661, 0, 32749],
        [-91503969, 4355, 22661, 0, 32749],
        [-910937124, 1688, 22661, 0, 32749],
        [-294000893, 1128, 22661, 0, 32749],
        [-118161807, 22968, 22661, 0, 32749],
        [-954846210, 14605, 22661, 0, 32749],
        [-190656086, 29463, 22661, 0, 32749],
        [-49629256, 24040, 22661, 0, 32749],
        [-273940133, 23882, 22661, 0, 32749],
        [-648685667, 13824, 22661, 0, 32749],
        [-781250272, 5172, 22661, 0, 32749],
        [-103214243, 11853, 22661, 0, 32749],
        [-422707247, 10034, 22661, 0, 32749],
        [-600007263, 4008, 22661, 0, 32749],
        [-400127892, 25202, 22661, 0, 32749],
        [-222477082, 19040, 22661, 0, 32749],
        [-448156676, 1413, 22661, 0, 32749],
        [-914719225, 10745, 22661, 0, 32749],
        [-313807615, 17555, 22661, 0, 32749],
        [-952090446, 31293, 22661, 0, 32749],
        [-962793272, 17022, 22661, 0, 32749],
        [-797925656, 9256, 22661, 0, 32749],
        [-957197232, 31027, 22661, 0, 32749],
        [-872995788, 7779, 22661, 0, 32749],
        [-369429873, 23648, 22661, 0, 32749],
        [-962932783, 4499, 22661, 0, 32749],
        [-645910744, 16574, 22661, 0, 32749],
        [-120279038, 24524, 22661, 0, 32749],
        [-578501844, 18297, 22661, 0, 32749],
        [-560924129, 22338, 22661, 0, 32749],
        [-43851567, 3737, 22661, 0, 32749],
        [-606745580, 14751, 22661, 0, 32749],
        [-392349558, 31303, 22661, 0, 32749],
        [-998585691, 6807, 22661, 0, 32749],
        [-730184923, 3899, 22661, 0, 32749],
        [-433093889, 22439, 22661, 0, 32749],
        [-5096441, 17779, 22661, 0, 32749],
        [-993911199, 1186, 22661, 0, 32749],
        [-78574456, 30799, 22661, 0, 32749],
        [-340914684, 4746, 22661, 0, 32749],
        [-831039385, 29125, 22661, 0, 32749],
        [-893651769, 16325, 22661, 0, 32749],
        [-517478141, 24877, 22661, 0, 32749],
        [-840535416, 6088, 22661, 0, 32749],
        [-881700756, 1718, 22661, 0, 32749],
        [-369577017, 19732, 22661, 0, 32749],
        [-332344403, 3585, 22661, 0, 32749],
        [-712527861, 9161, 22661, 0, 32749],
        [-497787402, 27231, 22661, 0, 32749],
        [-578334780, 16805, 22661, 0, 32749],
        [-809273336, 20598, 22661, 0, 32749],
        [-215917814, 19302, 22661, 0, 32749],
        [-389931862, 3276, 22661, 0, 32749],
        [-71630744, 20963, 22661, 0, 32749],
        [-519186944, 28010, 22661, 0, 32749],
        [-211477941, 20858, 22661, 0, 32749],
        [-863876543, 762, 22661, 0, 32749],
        [-974660106, 3865, 22661, 0, 32749],
        [-266544164, 11090, 22661, 0, 32749],
        [-919785612, 1872, 22661, 0, 32749],
        [-216655065, 4187, 22661, 0, 32749],
        [-368764538, 16820, 22661, 0, 32749],
        [-265685225, 23338, 22661, 0, 32749],
        [-421177076, 9190, 22661, 0, 32749],
        [-939889597, 8479, 22661, 0, 32749],
        [-286412247, 15479, 22661, 0, 32749],
        [-158424173, 30324, 22661, 0, 32749],
        [-858500005, 1234, 22661, 0, 32749],
        [-7126370, 20355, 22661, 0, 32749],
        [-311829647, 1455, 22661, 0, 32749],
        [-637643473, 14436, 22661, 0, 32749],
        [-876539642, 7253, 22661, 0, 32749],
        [-775920946, 25303, 22661, 0, 32749],
        [-177841995, 6645, 22661, 0, 32749],
        [-813878916, 19628, 22661, 0, 32749],
        [-338193677, 15732, 22661, 0, 32749],
        [-534473884, 30121, 22661, 0, 32749],
        [-727017097, 30866, 22661, 0, 32749],
        [-83217909, 24341, 22661, 0, 32749],
        [-858599031, 4338, 22661, 0, 32749],
        [-1000000000, 39999, 1, 0, 40000],
        [-999910001, 39999, 1, 0, 40000]
    ];
    test("test-29", () => {
        const result = solution(200, 50000, testData_29);
        const slowResult = slowSolution(200, 50000, testData_29);

        expect(result).toEqual(slowResult);
    });
});
