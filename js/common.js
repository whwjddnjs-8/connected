$(function () {
	/* Nice Select */
	$(".custom-select").niceSelect();

	/* 헤더의 높이에 따라 main padding-top 조절 */
	controlMainPadding();

	/* 띠 배너 btn_close 클릭이벤트 */
	$('.band-banner .btn_close').click(function () {
		$(this).parents('.banner').remove()
		controlMainPadding();
	})

	/* 전체 카테고리 호버 이벤트 */
	$('.hd_category_gnb .category, #hd_category').mouseover(function () {
		$('.category_icon').addClass('active')
		$('#hd_category').stop().slideDown()
	}).mouseout(function () {
		$('#hd_category').stop().slideUp()
	})
	$('#hd_category').mouseout(function () {
		$('.category_icon').removeClass('active')
	})

	/* 전체 카테고리 : 카테고리 클릭시 해당 다음 뎁스 노출 */
	/* 임시로 액션이 보이기 위해 추가한것으로 개발시, 코드 삭제 하셔도 무방합니다. */
	let categorySrc = `
		<ul class="category">
			<li>학교</li>
			<li>온라인학교</li>
			<li>단기활동</li>
			<li>온라인 단기활동</li>
			<li>매거진</li>
		</ul>`;

	$(document).on('click','#hd_category ul.category li',function(){
		$(this).siblings().removeClass('active')
		$(this).addClass('active')
		if (!$(this).parent('ul.category').hasClass('selected')) {
			$('#hd_category .category__inner').append(categorySrc)
			$(this).parent('ul.category').addClass('selected')
		}
	}) 

	/* 헤더 마이페이지 버튼 호버 이벤트 */
	$('.hd_mypage').mouseover(function () {
		$('ul.mypage_list').stop().slideDown()
	}).mouseout(function () {
		$('ul.mypage_list').stop().slideUp()
	})

	/* 헤더 언어 선택 버튼 호버 이벤트 */
	$('.setting-lang').mouseover(function () {
		$(this).children('ul.lang_list').stop().slideDown()
	}).mouseout(function () {
		$(this).children('ul.lang_list').stop().slideUp()
	})
})

function controlMainPadding() {
	var headerHeight = $('header').outerHeight(true);
	$('main').css('paddingTop', headerHeight)
}

function openModal(id) {
	$('#' + id).show()
	$('html').css('overflow-y', 'hidden')
}

function closeModal(id) {
	$('#' + id).hide()
	$("html").css("overflow-y", "scroll");
}

function closeAllModal() {
	$('.modal').hide()
}
