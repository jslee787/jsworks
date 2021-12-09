//유효성 검사
function checkMember(){
    var form = document.regForm;
    var id = form.mid.value;
    var pwd = form.passwd.value;
    var name = form.name.value;

    if(id.length != 5){
        alert("아이디는 5자까지 가능합니다.");
        form.mid.select(); //범위 선택
        return false;
    }
    else if(pwd.length < 4 || pwd.length > 8){
        alert("비밀번호는 4~8자까지 가능합니다.");
        form.pwd.select();
        return false;
    }
    else if(name == ""){
        alert("이름은 필수 항목입니다.")
        form.name.focus();
        return false;
    }
    else{
        form.submit();  //폼이 전송됨
    }
}