window.onload = function(){
    const trigger = document.querySelectorAll(".btns button");
    
    // trigger.forEach(( e, idx )=>{
    //     e.onClick =() =>{
    //         console.log(this)
    //     }
    // })

    // trigger.forEach(( e, idx )=>{
    //     e.onClick = funtion(){
    //         console.log(this)
    //     }
    // })

    // 
    // trigger.forEach(( e, idx )=>{
    //     // e.innerHTML = idx+"번 버튼"
    //     //e.onClick  (X)
    //     e.addEventListener('click',function(){alert("c");})
    //     // 이벤트와 메서드를 연결해주는 함수/ 정적객체, 동적객체
    // })


    trigger.forEach(( e, idx )=>{
        
        e.addEventListener('click',
                           function(event){console.log(event.target)})
        
    })
    function fun(a){
        alert(a);
    }




} 

window.addEventListener('resize', function(){})    //스마트폰 돌릴때  화면 사이즈변경시
window.addEventListener('scroll click', function(){})  //이벤트를 이어서 쓸수 있다.   그대로 따온것 =제이쿼리 온메서드 