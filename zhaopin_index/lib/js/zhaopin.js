window.onload = function(){
	$(function(){
			//首页内容加载header、nav、footer以及首页内容部分模块
			// 由于下拉选项的样式问题，暂时先不加载。
			$("#nav").load("./html/navbar.html");

			$("#footer").load("./html/footer.html");

	});

	var _html_cv = $("#cdtfhr_view").html();

	if(_html_cv.length === 0){
		$("#cdtfhr_view").height("500px");
	}
}