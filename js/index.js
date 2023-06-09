$(document).ready(function () {

    /*  메뉴 스크롤  */
    var $menu = $('.nav ul li'),
        $contents = $('.section'),
        $doc = $('html, body');
    $(function () {
        $menu.on('click', 'a', function (e) {
            var $target = $(this).parent(),
                idx = $target.index(),
                section = $contents.eq(idx),
                offsetTop = section.offset().top;

            var correctedOffsetTop = offsetTop - -10; // 보정값 조정
            $doc.stop()
                .animate({
                    scrollTop: correctedOffsetTop
                }, 500);
            return false;
        });
    });

    $(window).scroll(function () {
        var scltop = $(window).scrollTop();

        $.each($contents, function (idx, item) {
            var $target = $contents.eq(idx),
                i = $target.index(),
                targetTop = $target.offset().top;

            if (targetTop <= scltop) {
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }

            /*
            if (!(200 <= scltop)) {
                $menu.removeClass('on');
            }
            */
        })
    });


    /* to top 버튼 */
    var btnTop = $('.to_top_btn');
    btnTop.on('click', function () {
        $doc.stop()
            .animate({
                scrollTop: 0
            }, 500)
    });


    /* 상단 게이지 바 */
    $(window).scroll(function () {
        var wintop = $(window).scrollTop(),
            docheight = $('.wrapper').height(),
            winheight = $(window).height();
        var totalScroll = (wintop / (docheight - winheight)) * 100;
        $(".progress_bar").css("width", totalScroll + "%");
        $(".hodu_img").css("left", totalScroll + "%");
    });


    /* 이미지 슬라이드 */
    var imgs;
    var img_count;
    var img_position = 1;

    imgs = $(".gallery");
    img_count = imgs.children().length;

    //버튼을 클릭했을 때 함수 실행
    $('.prev_btn').click(function (e) {
        back();
    });

    $('.next_btn').click(function (e) {
        if (img_position < img_count - 2) {
            next();
        } else {
            e.preventDefault();
        }
    });

    function back() {
        if (1 < img_position) {
            imgs.animate({
                left: '+=210px'
            });
            img_position--;
        }
    }

    function next() {
        if (img_count > img_position) {
            imgs.animate({
                left: '-=210px'
            });
            img_position++;
        }
    }

});

// 로그인

document.addEventListener("DOMContentLoaded", function () {
    const login_li = document.getElementById("login_li");
    const logout_li = document.getElementById("logout_li");
    const join_li = document.getElementById("join_li");
    const admin_li = document.getElementById("admin_li");
    const login_userId = sessionStorage.getItem("login_userId");

    if (login_userId) {
        login_li.style.display = "none";
        logout_li.style.display = "block";
        join_li.style.display = "none";

        // 관리자 계정으로 로그인한 경우
        if (login_userId === "admin1") {
            admin_li.style.display = "block";
        }
    } else {
        login_li.style.display = "block";
        logout_li.style.display = "none";
    }

    logout_btn.addEventListener("click", function () {
        console.log(123);
        // 로그아웃 버튼 클릭 시 로그아웃
        sessionStorage.removeItem("login_userId");
        window.location.href = "../kh_front_project/index.html";
    });
})

