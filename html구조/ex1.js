// 아래 alert와 confirm 모두 알림창이며 두개 모두 동시에 적용 가능하다. 
// alert가 먼저 뜨고 confirm이 나중에 뜬다. 
// alert 알림창을 의미한다. 함수이기 때문에 ()필수이다. 
// 자바스크립트 함수로서 매개변수(인자값,파라메터,아큐먼트)를 string(문자열)타입을 가진다
 alert("자바스크립트 실습!!!");
 // confirm()함수는 매개변수로 String(문자열)타입을 가지고 리턴값이 bool(참true,거짓false,0) 
 // 값에 따라 프로그램 흐름을 제어할 수 있다. 
confirm("확인하셨습니까?");

// 함수를 만드는 방법
function add(x){
    alert(x);
}