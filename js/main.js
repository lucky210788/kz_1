(function ($) {
    // slider-banner
    $(window).on("load", function () {
        if ($('.banners-slider')) {
            $('.banners-slider').slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 5000,
            });
        }

        const bannerTexts1 = document.querySelectorAll('.banner__text1');
        const bannerTexts2 = document.querySelectorAll('.banner__text2');
        const bannerTexts3 = document.querySelectorAll('.banner__text3');
        const bannerTexts4 = document.querySelectorAll('.banner__text4');
        const bannerBtns = document.querySelectorAll('.banner__btn');
        const animations = document.querySelectorAll('.banner__man');

        animations.forEach(animation => {
            animation.addEventListener('animationstart', () => {
                animation.classList.remove('hide-img');
            });

            animation.addEventListener('animationend', () => {
                animation.classList.remove('animated');
                animation.classList.remove('fadeInRotate');
            });
        });

        bannerTexts1.forEach(banner__text1 => {
            animationsEvents(banner__text1, 'banner__text1__animation');
        });
        bannerTexts2.forEach(banner__text2 => {
            animationsEvents(banner__text2, 'banner__text2__animation');
        });
        bannerTexts3.forEach(banner__text3 => {
            animationsEvents(banner__text3, 'banner__text3__animation');
        });
        bannerTexts4.forEach(banner__text4 => {
            animationsEvents(banner__text4, 'banner__text4__animation');
        });
        bannerBtns.forEach(banner__btn => {
            animationsEvents(banner__btn, 'banner__btn__animation');
        });

        $('.banners-slider').on('init', function () {
            animations.forEach(animation => {
                animation.classList.add('animated');
                animation.classList.add('fadeInRotate');
            });
            bannerTexts1.forEach(banner__text1 => {
                afterChangeAnimations(banner__text1, 'banner__text1__animation');
            });
            bannerTexts2.forEach(banner__text2 => {
                afterChangeAnimations(banner__text2, 'banner__text2__animation');
            });
            bannerTexts3.forEach(banner__text3 => {
                afterChangeAnimations(banner__text3, 'banner__text3__animation');
            });
            bannerTexts4.forEach(banner__text4 => {
                afterChangeAnimations(banner__text4, 'banner__text4__animation');
            });
            bannerBtns.forEach(banner__btn => {
                afterChangeAnimations(banner__btn, 'banner__btn__animation');
            });
        });

        $('.banners-slider').on('beforeChange', function (event, slick, direction) {
            animations.forEach(animation => {
                animation.classList.remove('animated');
                animation.classList.remove('fadeInRotate');
                animation.classList.add('hide-img');
            });
            bannerTexts1.forEach(banner__text1 => {
                beforeChangeAnimations(banner__text1, 'banner__text1__animation');
            });
            bannerTexts2.forEach(banner__text2 => {
                beforeChangeAnimations(banner__text2, 'banner__text2__animation');
            });
            bannerTexts3.forEach(banner__text3 => {
                beforeChangeAnimations(banner__text3, 'banner__text3__animation');
            });
            bannerTexts4.forEach(banner__text4 => {
                beforeChangeAnimations(banner__text4, 'banner__text4__animation');
            });
            bannerBtns.forEach(banner__btn => {
                beforeChangeAnimations(banner__btn, 'banner__btn__animation');
            });
        });

        $('.banners-slider').on('afterChange', function (event, slick, direction) {
            animations.forEach(animation => {
                animation.classList.add('animated');
                animation.classList.add('fadeInRotate');
            });
            bannerTexts1.forEach(banner__text1 => {
                afterChangeAnimations(banner__text1, 'banner__text1__animation');
            });
            bannerTexts2.forEach(banner__text2 => {
                afterChangeAnimations(banner__text2, 'banner__text2__animation');
            });
            bannerTexts3.forEach(banner__text3 => {
                afterChangeAnimations(banner__text3, 'banner__text3__animation');
            });
            bannerTexts4.forEach(banner__text4 => {
                afterChangeAnimations(banner__text4, 'banner__text4__animation');
            });
            bannerBtns.forEach(banner__btn => {
                afterChangeAnimations(banner__btn, 'banner__btn__animation');
            });
        });

        function animationsEvents(block, classes) {
            block.addEventListener('animationstart', () => {
                block.classList.remove('hide-img');
            });

            block.addEventListener('animationend', () => {
                block.classList.remove(classes);
            });
        }

        function beforeChangeAnimations(block, classes) {
            block.classList.remove(classes);
            block.classList.add('hide-img');
        }

        function afterChangeAnimations(block, classes) {
            block.classList.add(classes);
        }

        // scrollbar

        $('.js-scrollbar').mCustomScrollbar({
            axis: "y",
            scrollInertia: 0,
            scrollButtons: {
                enable: false
            },
            mouseWheel: {
                enable: true
            }
        });

        // filters buttons

        $('.filters-button .filter-btn').click(function () {
            $('.filters-button .filter-btn').removeClass('filter-active');
            $(this).addClass('filter-active');

            const selector = $(this).attr('data-filter');
            const blocks = document.querySelectorAll('.games-group');

            if (selector === '*') {
                blocks.forEach(block => {
                    block.classList.remove('d-none');
                });
            } else {
                blocks.forEach(block => {
                    block.classList.remove('d-none');
                    if (!block.classList.contains(selector)) {
                        block.classList.add('d-none');
                    }
                });
            }

            return false;
        });

        const btnFavorites = $('.btn-add-favorites');

        if (btnFavorites) {
            btnFavorites.click(function () {
                $('.filter-btn__favorites').trigger('click');
            })
        }

        $('.games-group-header__all').click(function () {
            const parentBlock = $(this).parent().parent();
            if (parentBlock.hasClass('show-all')) {
                parentBlock.removeClass('show-all');
            } else {
                parentBlock.addClass('show-all');
            }
        });

        $('.games-group__btn').click(function () {
            const parentBlock = $(this).parent();
            if (parentBlock.hasClass('show-all')) {
                parentBlock.removeClass('show-all');
            } else {
                parentBlock.addClass('show-all');
            }
        });

        $(document).on("click", ".game-hover-block__favorite", function (e) {
            e.preventDefault();
            const parent = $(e.target).parent()[0];
            const parentClasses = parent.classList;
            const gamesGrid = parent.parentNode.parentNode;
            const favoritesGames = $('.favorites-games .games-grid');

            if (parentClasses.contains('game-hover-block__favorite') && !parentClasses.contains('game-hover-block__favorite-active')) {
                gamesGrid.classList.add('games-grid__item__favorite');
                const clone = gamesGrid.cloneNode(true);
                clone.classList.remove('games-grid__item__hide');
                favoritesGames[0].appendChild(clone);
            } else if (parentClasses.contains('game-hover-block__favorite') && parentClasses.contains('game-hover-block__favorite-active')) {
                const attr = gamesGrid.getAttribute('data-grid-item-id');
                const gamesBlock = gamesGrid.parentNode.parentNode;
                if (gamesBlock.classList.contains('favorites-games')) {
                    favoritesGames.find("[data-grid-item-id='" + attr + "']")[0].remove();
                    $("[data-grid-item-id='" + attr + "']")[0].classList.remove('games-grid__item__favorite');
                } else {
                    gamesGrid.classList.remove('games-grid__item__favorite');
                    favoritesGames.find("[data-grid-item-id='" + attr + "']")[0].remove();
                }
            }
        })

        // form resize

        // window.addEventListener('resize', function (event) {
        //   setTimeout(function () {
        //     var viewheight = $(window).height();
        //     var viewwidth = $(window).width();
        //     var viewport = $("meta[name=viewport]");
        //     viewport.attr("content", "height=" + viewheight + "px, width=" +
        //       viewwidth + "px, initial-scale=1.0");
        //   }, 300);
        // });

        // select-lang

        const btnsOpenMenu = document.querySelectorAll('.select-lang');
        let flagOpenMenu = false;
        let langItems = document.querySelectorAll('.select-lang__item');

        if (btnsOpenMenu) {
            langItems.forEach(lang => {
                lang.addEventListener('click', () => {
                    const parent = lang.parentNode;
                    const siblings = parent.querySelectorAll('.select-lang__item');

                    if (flagOpenMenu) {
                        siblings.forEach(sibling => {
                            if (sibling !== lang) {
                                sibling.classList.add('select-lang__item__hide');
                                sibling.classList.remove('select-lang__item__selected');
                            } else {
                                sibling.classList.remove('select-lang__item__hide');
                                sibling.classList.add('select-lang__item__selected');
                            }
                        })
                        lang.parentNode.classList.remove('select-lang__is-open');
                    } else {
                        lang.parentNode.classList.add('select-lang__is-open');
                    }
                    flagOpenMenu = !flagOpenMenu;
                });
            })

            document.onclick = function (e) {
                flagOpenMenu && onClick(e, '.select-lang__mob', '.select-lang__desc', '.select-lang__reg');
            }
        }

        function onClick(e, block1, block2, block3) {
            e = e || window.event;
            const block_1 = document.querySelector(block1);
            const block_2 = document.querySelector(block2);
            const block_3 = document.querySelector(block3);
            let target = e.target || e.srcElement;

            while (target.parentNode && target.tagName.toLowerCase() !== 'body') {
                if (target === block_1 || target === block_2 || target === block_3) {
                    return false;
                }
                target = target.parentNode;
            }
            if (block_1) {
                block_1.classList.remove('select-lang__is-open');
            }
            if (block_2) {
                block_2.classList.remove('select-lang__is-open');
            }
            if (block_3) {
                block_3.classList.remove('select-lang__is-open');
            }
            flagOpenMenu = false;
        }

// close nav

        const btnCloseMenu = document.querySelector('.social-list__btn-close__img');
        const eventClick = new Event('click', {bubbles: true});
        if (btnCloseMenu) {
            btnCloseMenu.addEventListener('click', function () {
                const btnCloseMenuMain = document.querySelector('.navbar-toggler');
                btnCloseMenuMain.dispatchEvent(eventClick);
            });
        }

        // fixed nav

        const navbarPanel = document.querySelector('.main-header');
        let topMenuWrap = document.querySelector('.main-header .header-top');
        const upArrow = document.querySelector('.up-arrow');

        if (navbarPanel) {
            window.addEventListener('scroll', function () {
                if (pageYOffset > 45) {
                    topMenuWrap.classList.add('d-none');
                    navbarPanel.classList.add('fixed');
                } else if (pageYOffset < 46) {
                    topMenuWrap.classList.remove('d-none');
                    navbarPanel.classList.remove('fixed');
                }
                if (pageYOffset > 290) {
                    upArrow.classList.add('is-scroll');
                } else if (pageYOffset < 291) {
                    upArrow.classList.remove('is-scroll');
                }
            });
        }

        function scrollTo(element) {
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: element.offsetTop
            });
        }

        if (upArrow) {
            upArrow.addEventListener('click', function () {
                scrollTo(document.getElementById("mainHeader"));
            })
        }

        $('.js-selectize').selectize();

        // playerCabinet

        let sidebarBtn = document.querySelectorAll('[data-sidebar]');
        let contentBlocks = document.querySelectorAll('.player-cabinet-content');

        function triggerPopup(element, dataTeg, headerBlocks, contentBlocks, activeClass) {
            let id = element.getAttribute(dataTeg);

            contentBlocks.forEach((el, i) => {
                if (i !== parseInt(id)) {
                    el.classList.add('d-none');
                } else {
                    el.classList.remove('d-none');
                }
            });

            headerBlocks.forEach((el, i) => {
                // if (i !== parseInt(id)) {
                if (el.getAttribute(dataTeg) !== id) {
                    el.classList.remove(activeClass);
                } else {
                    el.classList.add(activeClass);
                }
            });

        }

        if (sidebarBtn) {
            sidebarBtn.forEach((b, i) => {
                b.addEventListener('click', function () {
                    const sidebarMobFlag = $('.bsnav-mobile').hasClass('in');
                    if (sidebarMobFlag) {
                        const btnCloseMenuMain = document.querySelector('.navbar-toggler');
                        btnCloseMenuMain.dispatchEvent(eventClick);
                    }
                    triggerPopup(b, 'data-sidebar', sidebarBtn, contentBlocks, 'player-cabinet-sidebar-list__btn__active');
                })
            });
        }

        window.addEventListener('resize', function (event) {
            $('.player-cabinet-sidebar-list__mob').addClass('player-cabinet-sidebar-list__active');
            sidebarMobFlag = true;
        });

// add document file

        const $fileInput = $('.file-input');
        const $droparea = $('.file-drop-area');
        const fakeBtn = $('.fake-btn');

        $fileInput.on('dragenter focus click', function () {
            $droparea.addClass('is-active');
        });

        $fileInput.on('dragleave blur drop', function () {
            $droparea.removeClass('is-active');
        });

        $fileInput.on('change', function () {
            var filesCount = $(this)[0].files.length;
            var $textContainer = $(this).prev();

            if (filesCount === 1) {
                // if single file is selected, show file name
                var fileName = $(this).val().split('\\').pop();
                $textContainer.text(fileName);
            } else {
                // otherwise show number of files
                $textContainer.text(filesCount + ' files selected');
            }
        });

        fakeBtn.on('click', function () {
            $fileInput.trigger("click");
        });

        // cashbox-block

        let btnCashbox = document.querySelectorAll('[data-cashbox-tabs');
        let contentCashbox = document.querySelectorAll('.cashbox-tabs-content__item');

        if (btnCashbox) {
            btnCashbox.forEach((b, i) => {
                b.addEventListener('click', function () {
                    triggerPopup(b, 'data-cashbox-tabs', btnCashbox, contentCashbox, 'cashbox-tabs-header__item__active');
                })
            });
        }

// custom select

        $('.select').each(function () {
            var $this = $(this), numberOfOptions = $(this).children('option').length;

            $this.addClass('select-hidden');
            $this.wrap('<div class="select"></div>');
            $this.after('<div class="select-styled"></div>');

            var $styledSelect = $this.next('div.select-styled');
            $styledSelect.text($this.children('option').eq(0).text());

            var $list = $('<ul />', {
                'class': 'select-options'
            }).insertAfter($styledSelect);

            for (var i = 0; i < numberOfOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);
            }

            var $listItems = $list.children('li');

            $styledSelect.click(function (e) {
                e.stopPropagation();
                $('div.select-styled.active').not(this).each(function () {
                    $(this).removeClass('active').next('ul.select-options').hide();
                });
                $(this).toggleClass('active').next('ul.select-options').toggle();
            });

            $listItems.click(function (e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
                $list.hide();
            });

            $(document).click(function () {
                $styledSelect.removeClass('active');
                $list.hide();
            });
        });

        // show hide password

        if ($('.form-login__show-pass')) {
            $('.form-login__show-pass').click(function () {
                const field = $(this).parent().find('.form-login__input');
                if (field[0].type === "password") {
                    field[0].type = "text";
                } else {
                    field[0].type = "password";
                }
            });
        }

        // timer

        function makeCorrectDate(uncorrectDate) {
            let correctDate = uncorrectDate;
            if (uncorrectDate < 10) {
                correctDate = '0' + uncorrectDate;
            }
            return correctDate;
        }

        function getDateRemaining(timesup) {
            var total = Date.parse(timesup) - Date.now();
            var seconds = Math.floor((total / 1000) % 60);
            var minutes = Math.floor((total / 1000 / 60) % 60);
            var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
            var days = Math.floor(total / (1000 * 60 * 60 * 24));

            return {
                'total': total,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function setTime(id) {
            const time = $("#" + id).attr("data-finish");
            const timesup = new Date(time);
            let timer = document.getElementById(id);
            let days = timer.querySelector('.days');
            let hours = timer.querySelector('.hours');
            let minutes = timer.querySelector('.minutes');
            let seconds = timer.querySelector('.seconds');
            let timeInterval = setInterval(update, 1000);

            function update() {
                let total = getDateRemaining(timesup);
                var nowdate = Date.now();
                if (nowdate <= Date.parse(timesup)) {
                    var nowdate = Date.now();
                    days.textContent = makeCorrectDate(total.days);
                    hours.textContent = makeCorrectDate(total.hours);
                    minutes.textContent = makeCorrectDate(total.minutes);
                    seconds.textContent = makeCorrectDate(total.seconds);
                } else {
                    days.textContent = 0;
                    hours.textContent = 0;
                    minutes.textContent = 0;
                    seconds.textContent = 0;
                }
            }
        }

        const timer1 = document.querySelector('#timer1');
        const timer2 = document.querySelector('#timer2');
        const timer3 = document.querySelector('#timer3');
        if (timer1) {
            setTime('timer1');
        }
        if (timer2) {
            setTime('timer2');
        }
        if (timer3) {
            setTime('timer3');
        }

        // tournament-card-slider

        $('.tournament-card-slider').slick({
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            prevArrow: '<img src="images/slider-arrow.svg" class="slick-prev">',
            nextArrow: '<img src="images/slider-arrow1.svg" class="slick-next">',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: true,
                        slidesToShow: 2,
                    }
                }
            ]
        });

        // questions-answers

        $('.questions-item').click(function () {
            $(this).parent().toggleClass('questions-answers-item__active').find('.answers-item').toggleClass('d-none');
        });

        // tooltip

        $('[data-toggle="tooltip"]').tooltip();

        // close game block

        $('.game-block-btns__btn__close').click(function () {
            $(this).parent().parent().parent().parent().addClass('d-none');
        });

        // add mode full

        $('.game-block-btns__btn__full').click(function () {
            $('body').addClass('full-mode');
        });

        $('.full-mode__close').click(function () {
            $('body').removeClass('full-mode');
            $('.full-mode__close').removeClass('full-mode__close__show');
        });

        $(document).keydown(function (event) {
            if (event.keyCode == 27 && $('body').hasClass('full-mode')) {
                $('body').removeClass('full-mode');
                $('.full-mode__close').removeClass('full-mode__close__show');
            }
        });

        $(document).mousemove(function (event) {
            if (event.clientY < 50 && $('body').hasClass('full-mode')) {
                $('.full-mode__close').addClass('full-mode__close__show');
            } else {
                $('.full-mode__close').removeClass('full-mode__close__show');
            }
        });
    });
})(jQuery);