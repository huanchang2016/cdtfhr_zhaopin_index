window.onload = function(){
	$(function(){
      //首页内容加载header、nav、footer以及首页内容部分模块
      // 由于下拉选项的样式问题，暂时先不加载。
      
      $("#header").load("./html/header.html");

      $("#nav").load("./html/navbar.html");

      $("#cdtfhr_view").load("./html/index_con.html")

      $("#footer").load("./html/footer.html");

  	});

	

	$(function(){
		
		// 个人、企业用户登录处切换内容
		$(".login_user_form li").eq(0).show()
		$(".login_user_tit li").click(function(){
			var l_tit = $(this).index();
			$(".login_user_form li").eq(l_tit).show().siblings().hide();
			$(this).addClass("login_active").siblings().removeClass("login_active");
		});


		// 高级搜索选项更多时，ul高度改变
		$(".moreChoese").click(function(){
			$(this).addClass("am-hide").siblings().removeClass("am-hide")
				   .parent().siblings("ul").toggleClass("moreInfo");
		});

		// 职位相关信息选择
		$(".choeseActive li").click(function(){
			$(this).addClass("choeseJob_active").siblings().removeClass("choeseJob_active");
		});

		// 十三街道选中时，类名改变
		$(".street_view").html($(".street_name li:not('.street_tit')").eq(0).text()+"欢迎您！");
		$(".street_name li:not('.street_tit')").click(function(){
			$(this).addClass("street_active").siblings().removeClass("street_active");

			//定义变量_html 储存获取的数据，通过字符串拼接或者模板调用的形式插入到div.street_view中去。
			$(this).parent().next(".street_view").html($(this).text());
		});

		/*var _streetName = $(".street_name").eq(0),
			_streetNameLis = $(".street_name li"),
			_streetLiWidth = _streetNameLis.eq(0).width(),
			_streetLis = _streetNameLis.length;
		// 动态设置十三街道，标题列表的高度
		$(window).resize(function(){
			let _dWidth = _streetName.width();

			// 每行可以放置_streetN个 li元素
			let _streetN = Math.floor(_dWidth / _streetLiWidth);
			// 一共需要 _streetColN 行放置li元素
			let _streetColN = Math.ceil(_streetLis / _streetN);
			
			console.log(_streetName);
			// 设置.street_name的高度
			_streetName.height = (40 * _streetColN) + "px";
			
		});*/
	});
}