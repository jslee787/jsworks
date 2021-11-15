//나이 계산 프로그램
function calcAge(){
    //현재, 출생년도 입력
    const CURRENT_YEAR = 2021;
    var birthYear = prompt("태어난 해를 입력하세요.");
    var age;
    //계산
    age = CURRENT_YEAR - birthYear + 1;

    //출력
    document.getElementById("result").innerHTML = "나이는 " + age + "세 입니다.";
}