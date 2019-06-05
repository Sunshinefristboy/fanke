//由快到慢
var timer = null;
function animate(ele,target,speedTime){
	clearInterval(timer);
	timer = setInterval(function(){
		//缓冲运动的在于speed的变化 ，由快到慢
		//var speed = target - ele.offsetLeft > 0 ? 5 : -5;
		//因为offsetLeft会把小数直接去掉,所以永远达不到目标值
		var speed = (target - ele.offsetLeft)/10;
		//当speed为负数的小数时，会直接把小数去掉 -0
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		console.log(speed,target,ele.offsetLeft);
		//if(Math.abs(target - ele.offsetLeft) < 5){//解决目标值问题
		if(ele.offsetLeft == target){
			clearInterval(timer);
		}else{
			ele.style.left = ele.offsetLeft + speed + "px";
		}	
	},speedTime);
}



/* //匀速
var timer = null;
function animate(ele,target,speedTime){
	clearInterval(timer);
	timer = setInterval(function(){
		var speed = target - ele.offsetLeft;
		speed = speed > 0 ? 5 : -5;
		if(Math.abs(target-ele.offsetLeft) <= 5){
			ele.style.left = target + "px";
			clearInterval(timer);
		}else{
			ele.style.left = ele.offsetLeft + speed + "px";
		}
	},speedTime)
} */