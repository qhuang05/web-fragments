function ajax(url,fnSucc,fnFail){
	//第一步：创建Ajax对象(IE6:ActiveXObject("MicrosoftXMLHTTP"); 非IE6:XMLHttpRequest())
	if(window.XMLHttpRequest) {
		var oAjax=new XMLHttpRequest();
	}
	else {
		var oAjax=new ActiveXObject('MicrosoftXMLHTTP');
	}

	//第二步：连接服务器, open(方法,文件名,异步传输)
	oAjax.open('GET',url,true);

	//第三步：发送请求
	oAjax.send();

	//第四步：接收返回,onreadystatechange事件
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4) {			//readyState属性：请求状态，表示浏览器和服务器进行到哪一步了,4表示完成
			if(oAjax.status==200) {			//请求成功
				fnSucc(oAjax.responseText);
			}
			else {
				if(fnFail) {
					fnFail(oAjax.status);
				}
			}
		}
	};	
}
