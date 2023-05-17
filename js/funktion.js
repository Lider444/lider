$(document).ready(function() {
	
	$('.all-days__final').bind('click', function(event) {
		var text = 'Финальный тест и его проверка доступны только в Web-версии курса\n';
		text += 'Адрес: https://srs.myrusakov.ru/webmakeup2\n';
		text += 'Логин и пароль находятся на странице с информацией о Вашем заказе ';
		text += '(ссылка на него приходила на Ваш e-mail).\n\n Перейти на сайт?'
		if (confirm(text)) location.href = 'https://srs.myrusakov.ru/webmakeup2';
		return false;
	});
});
