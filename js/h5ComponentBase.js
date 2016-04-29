/*基本图文组件对象*/
var H5Componentbase= function(name,cfg){
	var cfg = cfg || {};
	//每个元素带有唯一id标示
	var id = ("h5_c_" + Math.random()).replace(".","");
	//元素的通用class和独立class
	var cls = "h5_Component h5_Component_"+cfg.type+" h5_Component_name_"+name;
	var component = $("<div id='"+ id +"' class='"+cls+"'></div>");
	cfg.text && component.text(cfg.text);
	cfg.width && component.width(cfg.width/2);
	cfg.height && component.height(cfg.height/2);
	cfg.css && component.css(cfg.css);
	//设置是否居中
	if(cfg.hCenter === true){
		component.css({
			"left":"50%",
			"marginLeft":-cfg.width/4,
			
		});
	}
	if(cfg.vCenter === true){
		component.css({
			"top":"50%",
			"marginTop":-cfg.height/4
			
		});
	}
	component.on("onLoad",function(){
		$(this).addClass(name + "_load").removeClass(name + "_remove");
		cfg.animateIn && component.animate(cfg.animateIn);
		//判断cfg.relativeTo
		if(cfg.relativeTo){
			var targetCls = "h5_Component_name_"+cfg.relativeTo.name,
			targetElem = $("."+targetCls);
			targetElem.append(component);
			if(cfg.hCenter !== true){
				component.css({"transform":"translate("+cfg.relativeTo.x+"px,"+cfg.relativeTo.y+"px)"});
			}else{
				component.css({"transform":"translateY("+cfg.relativeTo.y+"px)"});
			}
		}
	});
	component.on("onLeave",function(){
		$(this).addClass(name + "_remove").removeClass(name + "_load");
		cfg.animateOut && component.animate(cfg.animateOut);
	});
	return component;
};
