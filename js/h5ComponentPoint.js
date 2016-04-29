/*基本图文组件对象*/
var H5ComponentPoint= function(name,cfg){
	var component = new H5Componentbase(name,cfg);
	var data = cfg.data,
	    base = data[0][1],
		pointArr = [],
		zIndexNum = data.length;
	$(data).each(function(index,value){
		//添加文字内容
		var point = $("<div class='point point_"+index+"'></div>");
		var pointName = $("<div class='pointName'></div>");
		pointName.text(data[index][0]);
		var pointPer = $("<div class='pointPer'></div>");
		pointPer.text(data[index][1]*100 + "%");
		pointName.append(pointPer);
		point.append(pointName);
		//添加css属性
		var pro = data[index][1]/base;
		var width = cfg.width/2*pro + "px",
			color = data[index][2];
		if(data[index][3] !== undefined){
			var left = data[index][3];
			point.css("left",left);
		}
		if(data[index][4] !== undefined){
			var top = data[index][4];
			point.css("top",top);
		}
		point.css({
			"width":width,
			"height":width,
			"backgroundColor":color,
			"zIndex":zIndexNum
		});
		zIndexNum--;
		pointArr.push(point);
		if(index === 0){
			component.append(point);
		}else{
			pointArr[0].append(point);
		}
	});
	//添加动画效果
	component.on("onLoad",function(){
		$(this).addClass(name + "_load").removeClass(name + "_remove");
		$(".point").each(function(index){
			if(index !==0){
				$(this).css(cfg.animateIn[index-1]);
			}
		});
	});
	component.on("onLeave",function(){
		$(this).addClass(name + "_load").removeClass(name + "_remove");
		$(".point").each(function(index){
			if(index !==0){
				$(this).css(cfg.animateOut[index-1]);
			}
		});
	});
	return component;
};
