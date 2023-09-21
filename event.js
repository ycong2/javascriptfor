window.onload = function(){
    const trigger = document.querySelector(".action");
    //클릭할때마다 실행하므로 콜백함수 사용
    // trigger.onclick = fun; 
    // // 매개인자 없는 함수
    // function fun(){
    //     alert("일반함수실행한거");
    // }

    document.getElementById("dan").focus();   //이벤트 아니고 메서드임
    //inout에 커서를 넣어라
    
    trigger.onclick = function(){
        fun("같은실행식에서 쓰기");
    }
    //매개인자
    function fun(a){
        alert(a);
    }
}
