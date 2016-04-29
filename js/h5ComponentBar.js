/*柱状图组件-继承自基本组件*/
var H5ComponentBar= function(name,cfg){
	var component = new H5Componentbase(name,cfg);
	$.each(cfg.data, function(index,item) {
		//定义柱状图内的元素
		var bar = $("<div class='bar bar_"+item[0]+"'></div>"),
			name = $("<div class='bar_name'></div>"),
			pro = $("<div class='bar_pro'></div>"),
			proBg =$("<div class='bar_proBg'></div>"),
			per = $("<div class='bar_per'></div>");
		//填充柱状图元素
		name.text(item[0]);
		per.text(item[1]*100 + "%");
		//添加柱状图样式
		name.width(cfg.nameWidth/2 + "px");
		var proWidth = cfg.width-cfg.nameWidth-cfg.perWidht;
		pro.width(item[1]*proWidth/2);
		var bgColor = item[2] || "#99c0ff";
		proBg.css("backgroundColor",bgColor);
		per.css({"color":bgColor,"width":cfg.perWidht/2});
		//组织柱状图元素结构
		pro.append(proBg);
		bar.append(name).append(pro).append(per);
		component.append(bar);
	});
	//绑定入场出场事件
	component.on("onLoad",function(){
		$(".bar_proBg").css(cfg["animateIn"]["proBg"]);
		$(".bar_name").css(cfg["animateIn"]["name"]);
		$(".bar_per").css(cfg["animateIn"]["per"]);
	});
	component.on("onLeave",function(){
		$(".bar_proBg").css(cfg["animateOut"]["proBg"]);
		$(".bar_name").css(cfg["animateOut"]["name"]);
		$(".bar_per").css(cfg["animateOut"]["per"]);
	});
	return component;
};
