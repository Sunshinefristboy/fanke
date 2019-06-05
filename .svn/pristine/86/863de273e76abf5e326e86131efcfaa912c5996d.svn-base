function animate(ele,params,speedTime){
	//width height opacity left top
	/*
	 * var params = {
			width: 400,  //键值对：键作为attr 值target
			height:300,
			opacity:20,
			left:200
			top:100
			zIndex:4
		}
		for(var attr in params){
			attr params[attr] = target
			
		}
	 */
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		//问题：最快到达目标的属性会把其它属性的定时器一起清除，会使得只有一个属性到达目标值 
		//解决办法：定义一个控制器，控制所有的属性都到达目标值后，再清除定时器。
		var flag = true;//表示所有的属性都到达 目标值 了。//false,表示至少还有一个属性还没有到达目标值。
		//在属性还没有到达目标值 将flag设置为false.
		for(var attr in params){
			//attr params[attr] = target
		
			var current = 0;
			if(attr == "opacity"){
			//将透明度扩大100倍来操作
				current = getStyle(ele,attr) * 100;
			}else{
				current = parseInt(getStyle(ele,attr));
			}
			var speed = (params[attr] - current)/10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			console.log(current,params[attr],speed);
			if(current != params[attr]){
				//这里是属性没有到达目标值时执行
				//将flag设置为false
				flag = false;//表示有属性没有到达目标值
				//clearInterval(ele.timer);
			}
			if(attr == "opacity"){
				ele.style.opacity = (current + speed)/100;
			}else if(attr == "zIndex"){
				ele.style.zIndex = params[attr];
			}else{
				ele.style[attr] = current + speed + "px";
			}
		}
		if(flag){//所有的属性都到达目标值
			clearInterval(ele.timer);
		}
	},speedTime);
}
function getStyle(ele,attr){
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
}