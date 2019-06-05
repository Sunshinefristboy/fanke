//增加了专一性(ele.timer)，可以让对象本身发生变化
function animate(ele,attr,target,speedTime){
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		var speed = (target - parseInt(getStyle(ele,attr)))/10;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(parseInt(getStyle(ele,attr)) == target){
			clearInterval(ele.timer);
		}else{
			ele.style[attr] = parseInt(getStyle(ele,attr)) + speed + "px";
		}	
	},speedTime);
}
function getStyle(ele,attr){
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
}