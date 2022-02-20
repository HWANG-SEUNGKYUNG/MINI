$(function(){

    //media menu
    $('.trigger').click(function(){
        $(this).toggleClass('open');
    
        if($(this).hasClass('open')){
            $('.side-gnb').animate({top:80},500);
            $('.navbar-wrap').animate({bottom:0},500);
        } else {
            $('.side-gnb').animate({top:-250},380);
            $('.navbar-wrap').animate({bottom:0},500);
        }
    });

    //menu 이동
    $('.home').click(function(){
        $('html').animate({scrollTop:0},1000);     
    });


    $('.navbar-gnb>ul>li>a').click(function(e){

        e.preventDefault();       

        $(this).addClass("click");
        $(this).parent().siblings().find("a").removeClass("click");

        var targ = this.hash;     
        var sectionH =($(targ).offset().top); 

        $('html,body').animate({scrollTop:sectionH},1000);

        winW = $(window).width();

        // header가 상단에 왔을때 
        if(winW <= 1024){
                var sectionH =($(targ).offset().top) - 60; 
        
                $('html,body').animate({scrollTop:sectionH},500);
        };

    });

    //space tab
    var btn =  $('.tab_nav a');  

    btn.click(function(event){
        event.preventDefault();        

        btn.removeClass('active');
        $(this).addClass('active');

        $(".tab-panel").hide();         
        var aaa= $(this).attr('href');  
        console.log(aaa);

        $(aaa).show();                
    }); 

    btn.eq(0).trigger('click');  
    
    

    $(window).on('raedy resize', function(){
        console.log("오케!!!!");
        winW = $(window).width();
        if($(window).width() <= 540) {
            tarFirst = $('.fade').slick({
                        dots: true,
                        infinite: true,
                        speed: 500,
                        fade: true,
                        cssEase: 'linear',
                    });
        }else {
            if (tarFirst != null) {
                tarFirst.slick('unslick');
                tarFirst = null;
            }
        }
    });
    
   winW = $(window).width();

    if($(window).width() <= 540) {
        tarFirst = $('.fade').slick({
                    dots: true,
                    infinite: true,
                    speed: 500,
                    fade: true,
                    cssEase: 'linear',
                });
    }else {
        if (tarFirst != null) {
            tarFirst.slick('unslick');
            tarFirst = null;
        }
    };
    

    




});

