/*垂直柱状图组件-继承自水平柱状图*/
var H5ComponentBar_v= function(name,cfg){
	var component = new H5ComponentBar(name,cfg);
	$.each(cfg.data, function(index,item) {
		//获取元素
		var bar = $(component.children()[index]),
			name = bar.find(".bar_name"),
			pro = bar.find(".bar_pro"),
			bgPro = bar.find(".bar_proBg"),
			per = bar.find(".bar_per");
		//添加元素样式
		proHeight = cfg.height-cfg.nameHeight-cfg.perHeight;
		var bgColor = item[2] || "#99c0ff";
		pro.css("backgroundColor",bgColor);
		pro.width(cfg.proWidth/2);
		pro.height(item[1]*proHeight/2);
		bgPro.css("backgroundColor","#fff");
		per.css("bottom",pro.height()+cfg.nameHeight/2);
	});
	return component;
};
