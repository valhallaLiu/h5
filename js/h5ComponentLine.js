/*垂直柱状图组件-继承自水平柱状图*/
var H5ComponentLine= function(name,cfg){
	var component = new H5Componentbase(name,cfg);
	var	w = cfg.width,
		h = cfg.height;
	//绘制网格
	var canvas = document.createElement("canvas"),
		ctx = canvas.getContext("2d");
	//为了保持精度，canvas使用2倍宽高
	canvas.width = ctx.width = w;
	canvas.height = ctx.height = h;
	//绘制点线
	//绘制背景
	for(var i=0;i<6;i++){
		ctx.beginPath();
		ctx.moveTo(30,i*42);
		ctx.lineTo(498,i*42);
		ctx.strokeStyle = "#d7d7d7";
		ctx.stroke();
		ctx.closePath();
	}
	for(var j=0;j<5;j++){
		ctx.beginPath();
		ctx.moveTo(30+i*117,0);
		ctx.lineTo(30+i*117,210);
		ctx.strokeStyle = "#d7d7d7";
		ctx.stroke();
		ctx.closePath();
	}
	component.append(canvas);
	return component;
};
