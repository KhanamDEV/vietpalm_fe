$(document).ready(function () {
    $(".item-menu").hover(function () {
        $(this).find(".sub-menu").fadeToggle(150);
    });
    $("#scroll").click(function(){
        $('html, body').animate({scrollTop:0}, '300');
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          $("#scroll").show();
        } else {
          $("#scroll").hide();
        }
      });
    function NextCarousel(){ 
        $(".carousel-control-prev").click(function(){
            let listCarousel = document.getElementsByClassName("carousel-item");
            for(let i = 0; i < listCarousel.length; i++){
                if(listCarousel[i].classList.contains("active")){
                    if(i == 0){
                        listCarousel[i].classList.remove("active");
                        listCarousel[listCarousel.length - 1].classList.add("active");
                        break;
                    }
                    else{
                        listCarousel[i].classList.remove("active");
                        listCarousel[i-1].classList.add("active");
                        break; 
                    }   
                }
                
            }
        });
    }
    function PrevCarousel(){
        $(".carousel-control-next").click(function(){
            let listCarousel = document.getElementsByClassName("carousel-item");
            for(let i = 0; i < listCarousel.length; i++){
                if(listCarousel[i].classList.contains("active")){
                    if(i == listCarousel.length - 1){
                        listCarousel[i].classList.remove("active");
                        listCarousel[0].classList.add("active");
                        break;
                    }
                    else{
                        listCarousel[i].classList.remove("active");
                        listCarousel[i+1].classList.add("active");
                        break;
                    }
                }
            }
        });
    }
    function SelectImage(){
        $(".item-select").click(function(){
            $(".carousel-item.active img").first().attr("src", $(this).find("img").first().attr("src"));
            $(".item-select").removeClass("active");
            $(this).addClass("active");
        });
    }
    function SelectZone(){
        $(".zone").click(function(){
            $(".zone").removeClass("active");
            $(this).addClass("active");
        })
    }
    SelectImage();
    SelectZone();
    PrevCarousel();
    NextCarousel();
    
});