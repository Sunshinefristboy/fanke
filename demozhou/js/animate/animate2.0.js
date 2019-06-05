var timer = null;
function animate(ele,attr,target,speedTime){
	clearInterval(timer);
	timer = setInterval(function(){
		var speed = (target - parseInt(getStyle(ele,attr)))/10;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(parseInt(getStyle(ele,attr)) == target){
			clearInterval(timer);
		}else{
			ele.style[attr] = parseInt(getStyle(ele,attr)) + speed + "px";
		}	
	},speedTime);
}		
function getStyle(ele,attr){
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
}