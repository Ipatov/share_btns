$(function(){
	// клик по кнопке шаринга
	$(".share_btn").click(function(){
		var social = $(this).data("social");
		// урл текущей страницы
		var url_share = location.href;
		// если задан атрибут data-url, то берем урл из него
		if (typeof $(this).attr("data-url") !== typeof undefined && $(this).attr("data-url") !== false) {
			url_share = $(this).data("url");		
		}
		// открываем окно для репоста
		share(social, url_share);
	});
});


/**
* Создание нового окна браузера для репоста в соц.сеть
*
* @param string social - социальная сеть, в которую будет сделан репост
* @param string url_share - url страницы, которая будет опубликована в соц.сети
*/
function share(social, url_share){
	// определяем ссылку для нужной соц.сети
	var url_soc = false;
	switch (social) {
		case "vk":
			url_soc = "https://vk.com/share.php?url="+url_share;
			break;
		case "fb":
			url_soc = "https://www.facebook.com/sharer/sharer.php?u="+url_share;
			break;
		case "ok":
			url_soc = "https://connect.ok.ru/offer?url="+url_share;
			break;
		case "tw":
			url_soc = "https://twitter.com/intent/tweet?url="+url_share;
			break;
		case "gp":
			url_soc = "https://plus.google.com/share?url="+url_share;
			break;
	}
	
	// открытие нового окна для шаринга
	if(url_soc){
		// размеры окна
		var width = 800, height = 500;
		// центруем окно
		var left = (window.screen.width - width) / 2;
		var top = (window.screen.height - height) / 2;
		// открываем окно
		social_window = window.open(url_soc, "share_window", "height=" + height + ",width=" + width + ",top=" + top + ",left=" + left);
		// устанавливаем на окно фокус
		social_window.focus();
	}
}
