//example 1

let exa1_add, exa1_sub, exa1_mult, exa1_div;

exa1_add = 7 + 2;
exa1_sub = 7 - 3;
exa1_mult = 2 * 4;
exa1_div =  4 / 2;

console.log(`7 + 2 = ${exa1_add}, 7 - 3 = ${exa1_sub}, 2 * 4 = ${exa1_mult}, 4 / 2 = ${exa1_div}`);


//example 2

let exa2_height, exa2_width, exa2_s;

exa2_height = 23;
exa2_width = 10;
exa2_s = exa2_height * exa2_width;

console.log(`Площадь = ${exa2_s} см`)


//example 3

let exa3_remOfdiv_1, exa3_remOfdiv_2, exa3_numPlusString, exa3_strMinNum, exa3_numPlusWord;

exa3_remOfdiv_1 = 5 % 3;
exa3_remOfdiv_2 = 3 % 5;
exa3_numPlusString = 5 + '3';
exa3_strMinNum = '5' - 3;
exa3_numPlusWord = 75 + 'кг';

console.log(`5 % 3 = ${exa3_remOfdiv_1}, 3 % 5 = ${exa3_remOfdiv_2}, 5 + '3' = ${exa3_numPlusString}, '5' - 3 = ${exa3_strMinNum}, 75 + 'кг' = ${exa3_numPlusWord}`);


//example 4

let exa4_heightC, exa4_dC, exa4_v;

exa4_heightC = 10;
exa4_dC = 4;
exa4_v = Math.PI * Math.pow((exa4_dC / 2), 2) * exa4_heightC;

console.log(`Объём цилиндра = ${exa4_v}`);


//example 5

let exa5_numA = 10, exa5_numB = 2;
let exa5_sum, exa5_sub, exa5_mult, exa5_div;

exa5_sum = exa5_numA + exa5_numB;
exa5_sub = exa5_numA - exa5_numB;
exa5_mult = exa5_numA * exa5_numB;
exa5_div = exa5_numA / exa5_numB;

console.log(`10 + 2 = ${exa5_sum}, 10 - 2 = ${exa5_sub}, 10 * 2 = ${exa5_mult}, 10 / 2 = ${exa5_div}`);


//example 6

let exa6_numC = 15, exa6_numD = 2, exa6_result;

exa6_result = exa6_numC + exa6_numD;

console.log(`15 + 2 = ${exa6_result}`);


//example 7

let exa7_numA = 10, exa7_numB = 2, exa7_numC = 5, exa7_result;

exa7_result = exa7_numA + exa7_numB + exa7_numC;

console.log(`10 + 2 + 5 = ${exa7_result}`);


//example 8

let exa8_numA = 17, exa8_numB = 10, exa8_numC, exa8_numD = 7, exa8_result;

exa8_numC = exa8_numA - exa8_numB;
exa8_result = exa8_numC + exa8_numD;

console.log(`17 - 10 + 7 = ${exa8_result}`);


//example 9

let exa9_name = 'Zhoomart';

console.log(`Привет, ${exa9_name}!`);


//example 10

let exa10_age = 18;

console.log(`Мне ${exa10_age} лет`);


//example 11

let exa11_str = 'abcde';

console.log(`Символы из строки 'abcde': ${exa11_str[0]}, ${exa11_str[2]}, ${exa11_str[4]}`);


//example 12

let exa12_sec = 60, exa12_hour, exa12_day, exa12_month;

exa12_hour = exa12_sec * 60;
exa12_day = exa12_hour * 24;
exa12_month = exa12_day * 30;

console.log(`Кол-во секунд в часе = ${exa12_hour}, в сутках = ${exa12_day}, в месяце = ${exa12_month}`);


//example 13

let exa13_num = 47;

exa13_num += 7;
exa13_num -= 18;
exa13_num *= 10;
exa13_num /= 15; 

console.log(`Результат от 47 = ${exa13_num}`);


//example 14

let exa14_num = 10;

exa14_num++;
exa14_num++;
exa14_num--;

console.log(`Результат от 10 = ${exa14_num}`);