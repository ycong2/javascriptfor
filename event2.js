window.onload = function(){
    const trigger = document.querySelectorAll(".action");
    //여러개이므로 아이템이나 어레이로 접근해야
    
    trigger[i].onclick = function(e){
        console.log(e.target);
        fun(e.target);   //이벤트를 일으킨 타겟을 출력
    }
   
    //매개인자
    function fun(a){
        console.log(this); //window
        alert(a);
    }
}
