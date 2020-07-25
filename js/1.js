$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip(); 

	$('.item-login,.btnOpenLogin').click(function(){
		$('.form-login').addClass('show-form');
		$('.background-black').removeClass('hide-element');
		return false;
	})
	$('.item-regis').click(function(){
		$('.form-regis').addClass('show-form');
		$('.background-black').removeClass('hide-element');
		return false;
	})
	$('.background-black,.btnCloseForm').click(function(){
		$('.background-black').addClass('hide-element');
		$('.form-login,.form-regis').removeClass('show-form');
	})
	$('.to-regis').click(function(){
		$('.form-login').removeClass('show-form')
		$('.form-regis').addClass('show-form');
	})
	$('.to-login').click(function(){
		$('.form-login').addClass('show-form')
		$('.form-regis').removeClass('show-form');
	})
	// 01- OPEN & CLOSE FORM LOGIN AND REGIS

	var textTitle = "text1";
	function changeTitle(){
		if (textTitle == "text1") {
			textTitle = "text2";
			$('title').html("Nhiều khóa học HOT");
		} else if (textTitle == "text2") {
			textTitle = "text1";
			$('title').html("Siêu Thị Khóa Học Hàng Đầu Việt Nam");
		}
	}
	setInterval(function(){
		changeTitle();
	},3000)
	// 02- THAY ĐỔI NỘI DUNG THẺ TIÊU ĐỀ

	$('.btnOpenMenuMoblie').click(function(){
		$('.menu-mobile').addClass('show-menu');
		$('.background-black').removeClass('hide-element');
	})
	$('.btnCloseMenuMobile,.background-black').click(function(){
		$('.menu-mobile').removeClass('show-menu');
		$('.background-black').addClass('hide-element');
	})
	// 03- ĐÓNG MỞ MENU TRÁI KHI TRANG WEB HIỂN THỊ TRÊN MOBIE

	if(screen.width >= 768) {
		$(window).scroll(function(){
			offsetBody = $('html,body').scrollTop();
			if (offsetBody > 580) {
				$('.header').addClass('header-up');
				$('.header-footer').removeClass('hide-element');
				$('.banner-category').addClass('pos-fixed');
				$('i.fa.fa-caret-up').removeClass('hide-element');
				$('.banner-category').addClass('hide-element');
			}
			if (offsetBody <=580) {
				$('.header').removeClass('header-up');
				$('.header-footer').addClass('hide-element');
				$('.banner-category').removeClass('pos-fixed');
				$('i.fa.fa-caret-up').addClass('hide-element');
				$('.banner-category').removeClass('hide-element');
			}
		})
		$('#openMenuCategory').click(function(){
			$('.banner-category').toggleClass('hide-element');
			$('.dropdown-icon').toggleClass('iconRotate');
			return false;
		})
	}
	// 04- SCROLL THAY ĐỔI MENU HEADER VÀ BANNER CATEGORY

	$('#search-course').click(function(){
		$('.dropdown-search').removeClass('hide-element');
	})
	$('.item-search').mouseleave(function(){
		$('.dropdown-search').addClass('hide-element');
	})
	// 05- HIỆU ỨNG HIỂN THỊ HỘP THOẠI TÌM KIẾM

	$('i.fa.fa-heart').click(function(){
		$(this).toggleClass('heart-red');
		$('#toolCare').html($('.heart-red').length);
		if ($('.heart-red').length == 0) {
			$('#toolCare').removeClass('show-number');
		} else {
			$('#toolCare').addClass('show-number');
		}
	})
	// 06- ĐẾM SỐ KHÓA HỌC ĐƯỢC NGƯỜI DÙNG ĐÁNH DẤU VÀ HIỂN THỊ THÔNG BÁO

	$('.banner-slide .banner-slide_dots ul li').click(function(){
		clearInterval(autoSlideBanner);
		$('.banner-slide .banner-slide_dots ul li').removeClass('dot-active');
		$(this).addClass('dot-active');
		$('.banner-slide .banner-slide_images ul li.image-active').addClass('bounce-out').one('webkitAnimationEnd',function(){
			$('.banner-slide .banner-slide_images ul li.bounce-out').removeClass('bounce-out').removeClass('image-active');
		})
		$('.banner-slide .banner-slide_images ul li:nth-child('+ ($(this).index() +1 ) +')').addClass('bounce-in').one('webkitAnimationEnd',function(){
			$('.banner-slide .banner-slide_images ul li.bounce-in').removeClass('bounce-in').addClass('image-active');
		})
	})
	function NextBanner(){
		var nextSlide = $('.banner-slide .banner-slide_images ul li.image-active').next();
		// Xử lý cho phần nứt
		var dotPos = $('.banner-slide .banner-slide_dots ul li.dot-active').index() + 1;
		$('.banner-slide .banner-slide_dots ul li').removeClass('dot-active');
		if (dotPos == $('.banner-slide .banner-slide_dots ul li').length) {
			dotPos = 0;
		}
		$('.banner-slide .banner-slide_dots ul li:nth-child('+ (dotPos+1) +')').addClass('dot-active');
		// Xử lý cho phần slide
		if (nextSlide.length == 0) {
			$('.banner-slide .banner-slide_images ul li.image-active').addClass('fade-out').one('webkitAnimationEnd',function(){
				$('.banner-slide .banner-slide_images ul li.fade-out').removeClass('fade-out').removeClass('image-active');
			})
			$('.banner-slide .banner-slide_images ul li:first-child').addClass('fade-in').one('webkitAnimationEnd',function(){
				$('.banner-slide .banner-slide_images ul li.fade-in').removeClass('fade-in').addClass('image-active');
			})
		}
		else {
			$('.banner-slide .banner-slide_images ul li.image-active').addClass('fade-out').one('webkitAnimationEnd',function(){
				$('.banner-slide .banner-slide_images ul li.fade-out').removeClass('fade-out').removeClass('image-active');
			})
			nextSlide.addClass('fade-in').one('webkitAnimationEnd',function(){
				nextSlide.removeClass('fade-in').addClass('image-active');
			})
		}
	}
	var autoSlideBanner = setInterval(function(){
		NextBanner();
	},3000)
	// 07- AUTO SLIDE BANNER

	$('.btnDirec-right').click(function(){
		var nextWrap = $('.wrapper-sell.wrap-active').next();
		if (nextWrap.length == 0) {
			$('.wrapper-sell.wrap-active').addClass('wrap-OutRight').one('webkitAnimationEnd',function(){
				$('.wrapper-sell.wrap-OutRight').removeClass('wrap-OutRight').removeClass('wrap-active');
			})
			$('.wrapper-sell#item-first-child').addClass('wrap-InLeft').one('webkitAnimationEnd',function(){
				$('.wrapper-sell.wrap-InLeft').removeClass('wrap-InLeft').addClass('wrap-active');
			})
		}
		else {
			$('.wrapper-sell.wrap-active').addClass('wrap-OutRight').one('webkitAnimationEnd',function(){
				$('.wrapper-sell.wrap-OutRight').removeClass('wrap-OutRight').removeClass('wrap-active');
			})
			nextWrap.addClass('wrap-InLeft').one('webkitAnimationEnd',function(){
				nextWrap.removeClass('wrap-InLeft').addClass('wrap-active');
			})
		}
	})
	$('.btnDirec-left').click(function(){
		var prevWrap = $('.wrapper-sell.wrap-active').prev();
		if (prevWrap.length == 1) {
			$('.wrapper-sell.wrap-active').addClass('wrap-OutLeft').one('webkitAnimationEnd',function(){
				$('.wrapper-sell.wrap-OutLeft').removeClass('wrap-OutLeft').removeClass('wrap-active');
			})
			prevWrap.addClass('wrap-InRight').one('webkitAnimationEnd',function(){
				prevWrap.removeClass('wrap-InRight').addClass('wrap-active');
			})
		}
		else {
			$('.wrapper-sell.wrap-active').addClass('wrap-OutLeft').one('webkitAnimationEnd',function(){
				$('.wrapper-sell.wrap-OutLeft').removeClass('wrap-OutLeft').removeClass('wrap-active');
			})
			$('.wrapper-sell#item-last-child').addClass('wrap-InRight').one('webkitAnimationEnd',function(){
				$('.wrapper-sell.wrap-InRight').removeClass('wrap-InRight').addClass('wrap-active');
			})
		}
	})


	$('.grade-vote_dots ul li').click(function(){
		$('.grade-vote_dots ul li').removeClass('dot-active');
		$(this).addClass('dot-active');
		if ($(this).index()+1 == 1) { $('.grade-vote').css({ marginLeft: '-0%' }) }
		if ($(this).index()+1 == 2) { $('.grade-vote').css({ marginLeft: '-100%' }) }
		if ($(this).index()+1 == 3) { $('.grade-vote').css({ marginLeft: '-200%' }) }
	})
	$('.grade-new_dots ul li').click(function(){
		$('.grade-new_dots ul li').removeClass('dot-active');
		$(this).addClass('dot-active');
		if ($(this).index()+1 == 1) { $('.grade-new').css({ marginLeft: '-0%' }) }
		if ($(this).index()+1 == 2) { $('.grade-new').css({ marginLeft: '-100%' }) }
		if ($(this).index()+1 == 3) { $('.grade-new').css({ marginLeft: '-200%' }) }
	})
	// 09- THAY ĐỔI MARGIN LEFT KHỐI GRADE

	$('.grade-slide .grade-slide_dots ul li').click(function(){
		clearInterval(autoSlideGrade);
		$('.grade-slide .grade-slide_dots ul li').removeClass('dot-active');
		$(this).addClass('dot-active');
		$('.grade-slide .grade-slide_images ul li.image-active').addClass('bounce-out').one('webkitAnimationEnd',function(){
			$('.grade-slide .grade-slide_images ul li.bounce-out').removeClass('bounce-out').removeClass('image-active');
		})
		$('.grade-slide .grade-slide_images ul li:nth-child('+ ($(this).index() +1 ) +')').addClass('bounce-in').one('webkitAnimationEnd',function(){
			$('.grade-slide .grade-slide_images ul li.bounce-in').removeClass('bounce-in').addClass('image-active');
		})
	})
	function NextGrade(){
		var nextSlide = $('.grade-slide .grade-slide_images ul li.image-active').next();
		// Xử lý cho phần nứt
		var dotPos = $('.grade-slide .grade-slide_dots ul li.dot-active').index() + 1;
		$('.grade-slide .grade-slide_dots ul li').removeClass('dot-active');
		if (dotPos == $('.grade-slide .grade-slide_dots ul li').length) {
			dotPos = 0;
		}
		$('.grade-slide .grade-slide_dots ul li:nth-child('+ (dotPos+1) +')').addClass('dot-active');
		// Xử lý cho phần slide
		if (nextSlide.length == 0) {
			$('.grade-slide .grade-slide_images ul li.image-active').addClass('fade-out').one('webkitAnimationEnd',function(){
				$('.grade-slide .grade-slide_images ul li.fade-out').removeClass('fade-out').removeClass('image-active');
			})
			$('.grade-slide .grade-slide_images ul li:first-child').addClass('fade-in').one('webkitAnimationEnd',function(){
				$('.grade-slide .grade-slide_images ul li.fade-in').removeClass('fade-in').addClass('image-active');
			})
		}
		else {
			$('.grade-slide .grade-slide_images ul li.image-active').addClass('fade-out').one('webkitAnimationEnd',function(){
				$('.grade-slide .grade-slide_images ul li.fade-out').removeClass('fade-out').removeClass('image-active');
			})
			nextSlide.addClass('fade-in').one('webkitAnimationEnd',function(){
				nextSlide.removeClass('fade-in').addClass('image-active');
			})
		}
	}
	var autoSlideGrade = setInterval(function(){
		NextGrade();
	},3000)
	// AUTO SLIDE GRADE
});