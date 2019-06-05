function animate(ele,params,speedTime,callBack){
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		var flag = true;//表示所有的属性都到达 目标值 了。//false,表示至少还有一个属性还没有到达目标值。
		for(var attr in params){
			var current = 0;
			if(attr == "opacity"){
			//将透明度扩大100倍来操作
				current = getStyle(ele,attr) * 100;
			}else{
				current = Math.ceil(parseFloat(getStyle(ele,attr)));
				//console.log(getStyle(ele,attr))
			}
			//console.log(current);
			var speed = (params[attr] - current)/10;
			// 600 - 589 = 11 / 10 = 1.1  2;
			// 600 - 591 = 9 / 10 = 0.9  1;
			// 600 - 591 = 9 / 10 = 0.9  1;
			
			
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			//console.log(current,params[attr],speed);
			if(current != params[attr]){
				flag = false;//表示有属性没有到达目标值
			}
			if(attr == "opacity"){
				ele.style[attr] = (current + speed)/100;
			}else if(attr == "zIndex"){
				ele.style[attr] = params[attr];
			}else{
				ele.style[attr] = current + speed + "px";
				console.log(current,speed,ele.style[attr]);
			}
		}
		if(flag){//属性都到达目标值
			clearInterval(ele.timer);
			//在这里开启链式运动
			if(callBack){
				callBack();
			}
		}
	},speedTime);
}
function getStyle(ele,attr){
	//console.log(window.getComputedStyle(ele,null)[attr]);
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
}