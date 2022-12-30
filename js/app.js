$(document).ready(function(){

    $('.food-slider').slick({
        autoplay: true,
        slidesToShow:3,
        slidesToScroll: 1,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
        responsive:[
            {
                breakpoint:1100,
                settings:{
                    slidesToShow:2
                }
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow:1
                }
            }
        ]
    
    });

    $('.nav-trigger').click(function(){
        $('.site-content-wrapper').toggleClass('scaled');
    });

    
    
    }); 

    function Hide(){
        let btn=document.getElementById('btn');
        let para=document.getElementById('para');
        if(para.style.display!='none'){
            para.style.display='none';
            
         }
         else{
             para.style.display='block';
         }
     }


     


   