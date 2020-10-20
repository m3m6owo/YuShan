// jQuery 版本：DOM 載入完成之後執行
$(function(){
  // 按鈕狀態的切換
  $("button.hamburger_icon").on("click", function(){
    
    $(this).toggleClass("-on");
    
  });
});

$(function(){
  
  // 點擊按鈕，選單縮放
  $("button.btn_switch").on("click", function(){
    $("nav.main_nav").slideToggle();
  });
  
});



// JavaScript 版本：DOM 載入完成之後執行
/*
document.addEventListener('DOMContentLoaded', function(){
  
  var hamburger_icon = document.getElementsByClassName("hamburger_icon")[0];
  hamburger_icon.addEventListener("click", function(){
    if( hamburger_icon.classList.contains("-on") ){
      hamburger_icon.classList.remove("-on");
    }else{
      hamburger_icon.classList.add("-on");
    }
  });
  
});
*/