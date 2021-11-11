var customerNum = prompt("입장객은 몇 명인가요?");  //입장객
var columnNum = prompt("한 줄에 몇명 앉나요?");     //열
var rowNum = 0;        //줄(행)

        //처리 : 좌석 줄(행)수 = 입장객 / 좌석 열수
if(customerNum == null || columnNum == null){
    document.write("입력이 취소되었습니다.");
    }
else{
    if(customerNum % columnNum == 0){//나누어떨어지면
    rowNum = customerNum / columnNum;
    }
    else{
        rowNum = parseInt(customerNum / columnNum) + 1;
    }
    //parseInt() - 정수로 변환하는 함수

    //출력
    // document.write(rowNum + "개의 줄이 필요합니다.");
}

//중첩 for 로 자리배치
document.write("<table>");
for(var i= 0; i < rowNum; i++){
    document.write("<tr>");
    for(var j=1; j <= columnNum; j++){
        var seatNum = i * columnNum + j;
        if(seatNum > customerNum) break;
        document.write("<td>좌석 " + seatNum + " </td>");
    }
    document.write("</tr>");
}
document.write("</table>");