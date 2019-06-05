//判断一数是否是素数
function isPrimery(num){
	for (var i = 2; i < num; i++) {
		if(num % i == 0){
			//只要执行了这里就表示 num不是素数
			return false;
		}
	}
	return true;
}
//通过id名称获取元素
function $id(idName){
	return document.getElementById(idName);
}
//获取随机整数 
function getRand(minNum,maxNum){
	return parseInt(Math.random()*(maxNum-minNum+1)) + minNum;
};
//随机获取验证码
function getYZM(num){
	//由数字，字母（分大小写）
	//以上字符由ASCII码表来
	//随机而来
	var yzm = "";
	for (var i = 0; i < num; i++) {
		//获取数字或字母（分大小写）的字符
		//随机获取ASCII码
		var rand = getRand(48,122);
		if((rand >= 58 && rand <= 64) || (rand >= 91 && rand <= 96)){
			i--;
		}else{
			yzm += String.fromCharCode(rand);
		}
	}
	return yzm;
}
function dateToString(date){//date接收一个时间对象
	//2019年04月24日 15:40:30 星期三
	var dateStr = "";
	var y = date.getFullYear();
	var m = date.getMonth()+1;
	var d = date.getDate();
	var h = date.getHours();
	var min = date.getMinutes();
	var s = date.getSeconds();
	var w = date.getDay();
	var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
	
	dateStr += y + "年" + db(m) + "月" + db(d) + "日";
	dateStr += " "+ db(h) + ":" + db(min) + ":" + db(s);
	dateStr += week[w];
	
	return dateStr;
}
function db(num){
	return num < 10 ? 0 + "" + num : num; 
}
//获取两个时间的时间差的秒数。
function diffTime(startTime,endTime){//startTime/endTime是时间对象
	return (endTime.getTime() - startTime.getTime())/1000;
}
		