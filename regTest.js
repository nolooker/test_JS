let str = 'Study공부하기';

let regkor = /[^가-힣]/g;

regkor.lastIndex = 0;

let kor = str.replace(regkor, '');

console.log(kor);

console.log(typeof(kor));

if(typeof kor === 'string'){
    console.log(true);
} else {
    console.log(false);
}

let naver = 'www.google.com';

let result = naver.split('.');

result[1] = result[1].replace('google', 'naver');

console.log(result);

let resultString = result.toString();

console.log(resultString);

let resultStr = result.join('.');

console.log(resultStr);