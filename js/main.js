$(function(){
	$('.btn_menu').click(function(){
		$('.menu ul').slideToggle();
});
	$('.offer_slider').slick({

		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		speed: 300,
		dots: true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: true,
			dots: true
		}
		},
		{
			breakpoint: 992,
			settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		}
		},
		{
			breakpoint: 680,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2
			}
			},
			{
		breakpoint: 550,
		settings: {
		slidesToShow: 1,
		slidesToScroll: 1
			}
			}
		// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
		// instead of a settings object
		]
});
	$('.comment_slider').slick({

		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow: $('.prev_comment'),
		nextArrow: $('.next_comment'),
		speed: 300,
		responsive: [
		{
			breakpoint: 992,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			
		}
		}
	]
		
});
	$("#menu, #btn_top, #btn_order").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
});
	$('.call_form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
	
	new WOW().init();

});
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});