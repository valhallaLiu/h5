//H5构造函数，elem属性是最外层div元素、pages属性是包含所有页面元素的数组
function H5(){
	
	this.id = ("h5_"+Math.random()).replace(".","");
	this.elem = $("<div id='"+this.id+"' class ='h5' ></div>");
	$("body").append(this.elem);
	this.pages = [];
	return this;
}
H5.prototype = {
	addPage:function(cfg){
		var cfg = cfg || {};
		var cls = "section h5_page h5_page_" + cfg.name || "";
		var page = $("<div class='"+cls+"'></div>");
		cfg.text && page.text(cfg.text);
		this.elem.append(page);
		//创建新页面后，将页面放入this.pages中
		this.pages.push(page);
		return this;
	},
	addComponent:function(name,cfg){
		$.extend({
			type:"base"
		},cfg);
		switch(cfg.type){
			case "base":
				var componet = new H5Componentbase(name,cfg);
				(this.pages).slice(-1)[0].append(componet);
				
			break;
		}
		return this;
	},
	loader:function(){
		this.elem.fullpage({
			onLeave:function(index,nextIndex,direction){
				this.find(".h5_Component").trigger("onLeave");
			},
			afterLoad:function(anchorLink,index){
				this.find(".h5_Component").trigger("onLoad");
			}
		});
		//第一页载入时候自动触发onload事件
		this.pages[0].find(".h5_Component").trigger("onLoad");
	}
};
