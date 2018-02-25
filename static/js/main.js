(function(){

    $('.header__logo a').hover(function(){
        img_hide(page_img1);img_hide(page_img2);img_hide(page_img3);img_hide(page_img4);img_hide(page_img5);img_hide(page_img6);img_hide(page_img7);
        block_hide(page_img__descr_1);block_hide(page_img__descr_2);block_hide(page_img__descr_3);block_hide(page_img__descr_4);block_hide(page_img__descr_5);
        block_hide(page_img__descr_6);block_hide(page_img__descr_7);
        video_bg.animate({
            'opacity': '1',
            'z-index': '-1'
        }, 200);
    });

    function img_hide($param1){
        $param1.fadeOut(200, function(){
            $param1.css({
                'display': 'block',
                'opacity': '0',
                'z-index': '-3'
            });
        });
    }
    function img_show($param1){
        $param1.fadeIn(100, function(){
            $param1.css({
                'opacity': '1',
                'left': '0',
                'z-index': '-2'
            });
            video_bg.css({
                'opacity': '0',
                'z-index': '-4'
            });
        });
    }

    function block_show($block) {
        if ($block.css("left") < "140px") {
            //**********************//
            $block.hide();
            $block.css({'opacity': '0', 'left': '400px'});
            $block.fadeIn(100, function () {
                if ($block.css('left') >= "141px") {
                    $block.animate({"left": "-=260px"}, 100);
                }
                $block.animate({'opacity': '1'}, 100);
            });
        }
    }

    function block_hide($block) {
        //if ($block.css("left") >= "140px") {
        $block.animate({"left": "-=600px",'opacity': '0'}, 20);
        //}
    }

    //
    var page_img__descr_1 = $('.page_img__descr_1');
    var page_img__descr_2 = $('.page_img__descr_2');
    var page_img__descr_3 = $('.page_img__descr_3');
    var page_img__descr_4 = $('.page_img__descr_4');
    var page_img__descr_5 = $('.page_img__descr_5');
    var page_img__descr_6 = $('.page_img__descr_6');
    var page_img__descr_7 = $('.page_img__descr_7');

    // hover_img1
    var hover_img1 = $('#header__title_1');
    var hover_img2 = $('#header__title_2');
    var hover_img3 = $('#header__title_3');
    var hover_img4 = $('#header__title_4');
    var hover_img5 = $('#header__title_5');
    var hover_img6 = $('#header__title_6');
    var hover_img7 = $('#header__title_7');
    var video_bg = $('.video_bg');
    var page_img1 = $('.page_img1');
    var page_img2 = $('.page_img2');
    var page_img3 = $('.page_img3');
    var page_img4 = $('.page_img4');
    var page_img5 = $('.page_img5');
    var page_img6 = $('.page_img6');
    var page_img7 = $('.page_img7');
    var left_page = '9px';

    hover_img1.hover(function(){
            img_hide(page_img2);img_hide(page_img3);img_hide(page_img4);img_hide(page_img5);img_hide(page_img6);img_hide(page_img7);
            img_show(page_img1);
            block_hide(page_img__descr_2);block_hide(page_img__descr_3);block_hide(page_img__descr_4);block_hide(page_img__descr_5);
            block_hide(page_img__descr_6);block_hide(page_img__descr_7);
            block_show(page_img__descr_1);
        }, function(){
            $('.page_img2, .page_img3, .page_img4, .page_img5, .page_img6, .page_img7').css({
                'left': left_page
            });
        }

    );
    //**********************//
    hover_img2.hover(function(){
            img_hide(page_img1);img_hide(page_img3);img_hide(page_img4);img_hide(page_img5);img_hide(page_img6);img_hide(page_img7);
            img_show(page_img2);

            block_hide(page_img__descr_1);block_hide(page_img__descr_3);block_hide(page_img__descr_4);block_hide(page_img__descr_5);
            block_hide(page_img__descr_6);block_hide(page_img__descr_7);
            block_show(page_img__descr_2);

        }, function(){
            $('.page_img1, .page_img3, .page_img4, .page_img5, .page_img6, .page_img7').css({
                'left': left_page
            });
        }

    );
    //**********************//
    hover_img3.hover(function(){
            img_hide(page_img1);img_hide(page_img2);img_hide(page_img4);img_hide(page_img5);img_hide(page_img6);img_hide(page_img7);
            img_show(page_img3);
            block_hide(page_img__descr_1);block_hide(page_img__descr_2);block_hide(page_img__descr_4);block_hide(page_img__descr_5);
            block_hide(page_img__descr_6);block_hide(page_img__descr_7);
            block_show(page_img__descr_3);
        }, function(){
            $('.page_img2, .page_img1, .page_img4, .page_img5, .page_img6, .page_img7').css({
                'left': left_page
            });
        }

    );
    //**********************//
    hover_img4.hover(function(){
            img_hide(page_img1);img_hide(page_img2);img_hide(page_img3);img_hide(page_img5);img_hide(page_img6);img_hide(page_img7);
            img_show(page_img4);
            block_hide(page_img__descr_1);block_hide(page_img__descr_2);block_hide(page_img__descr_3);block_hide(page_img__descr_5);
            block_hide(page_img__descr_6);block_hide(page_img__descr_7);
            block_show(page_img__descr_4);
        }, function(){
            $('.page_img2, .page_img3, .page_img1, .page_img5, .page_img6, .page_img7').css({
                'left': left_page
            });
        }

    );
    //**********************//
    hover_img5.hover(function(){
            img_hide(page_img1);img_hide(page_img2);img_hide(page_img3);img_hide(page_img4);img_hide(page_img6);img_hide(page_img7);
            img_show(page_img5);
            block_hide(page_img__descr_1);block_hide(page_img__descr_3);block_hide(page_img__descr_4);block_hide(page_img__descr_2);
            block_hide(page_img__descr_6);block_hide(page_img__descr_7);
            block_show(page_img__descr_5);
        }, function(){
            $('.page_img2, .page_img3, .page_img4, .page_img1, .page_img6, .page_img7').css({
                'left': left_page
            });
        }

    );
    //**********************//
    hover_img6.hover(function(){
            img_hide(page_img1);img_hide(page_img2);img_hide(page_img3);img_hide(page_img4);img_hide(page_img5);img_hide(page_img7);
            img_show(page_img6);
            block_hide(page_img__descr_1);block_hide(page_img__descr_3);block_hide(page_img__descr_4);block_hide(page_img__descr_5);
            block_hide(page_img__descr_2);block_hide(page_img__descr_7);
            block_show(page_img__descr_6);
        }, function(){
            $('.page_img2, .page_img3, .page_img4, .page_img5, .page_img1, .page_img7').css({
                'left': left_page
            });
        }

    );
    //**********************//
    hover_img7.hover(function(){
            img_hide(page_img1);img_hide(page_img2);img_hide(page_img3);img_hide(page_img4);img_hide(page_img5);img_hide(page_img6);
            img_show(page_img7);
            block_hide(page_img__descr_1);block_hide(page_img__descr_3);block_hide(page_img__descr_4);block_hide(page_img__descr_5);
            block_hide(page_img__descr_6);block_hide(page_img__descr_2);
            block_show(page_img__descr_7);
        }, function(){
            $('.page_img2, .page_img3, .page_img4, .page_img5, .page_img6, .page_img1').css({
                'left': left_page
            });
        }

    );
}());