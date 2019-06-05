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