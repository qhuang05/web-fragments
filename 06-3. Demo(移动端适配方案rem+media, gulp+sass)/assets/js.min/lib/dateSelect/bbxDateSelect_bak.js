var bbxDatePicker={run:function(){var e=new Date;$("li.time input").val("现在出发 "+this.doubleNumber(e.getHours())+":"+this.doubleNumber(e.getMinutes())).data("value",this.formatDate(e,"yyyy-MM-dd HH:mm:ss"));var t=this;$("li.time input").off("click").on("click",function(){t._bbxDatePicker(e)})},_bbxDatePicker:function(t){var e=this.generateDateList(t);this.showTimePicker(e),this.showSlotsBySelectedValue(t);var a=this;$("#sw-wrapper").on("touchend",function(e){setTimeout(function(){a.showSlotsBySelectedValue(t),e.preventDefault()},100)})},generateDateList:function(e){for(var t={minutes:{0:{value:0,text:"00"},10:{value:10,text:"10"},20:{value:20,text:"20"},30:{value:30,text:"30"},40:{value:40,text:"40"},50:{value:50,text:"50"}},hours:{},dates:{}},a=0;a<24;a++)t.hours[a]={value:a,text:this.doubleNumber(a)};var n=[];n[0]={value:this.formatDate(e,"yyyy/MM/dd HH:mm"),text:"现在出发"};if(!(23==e.getHours()&&50<=e.getMinutes())){var i={value:this.formatDate(e,"yyyy/MM/dd"),text:this.formatDate(e,"MM月dd日")+" 今天"};n.push(i)}for(a=1;a<15;a++){var s=e.getTime(),l=new Date(s),r=new Date(l.setDate(l.getDate()+a)),u="";switch(a){case 1:u="明天";break;case 2:u="后天";break;default:u=this.toWeekString(r.getDay())}i={value:this.formatDate(r,"yyyy/MM/dd"),text:this.formatDate(r,"MM月dd日")+" "+u};n.push(i)}for(a=0;a<n.length;a++)t.dates[a]=n[a];return console.log("生成日期列表数据："+JSON.stringify(t)),t},showTimePicker:function(e){SpinningWheel.addSlot(e.dates,"date"),SpinningWheel.addSlot(e.hours,"hour"),SpinningWheel.addSlot(e.minutes,"minute"),SpinningWheel.open(),SpinningWheel.setCancelAction(this.cancel),SpinningWheel.setDoneAction(this.done)},showSlotsBySelectedValue:function(e){var t=SpinningWheel.getSelectedValues();if(console.log("当前选中的日期是："+JSON.stringify(t)),0==t.keys[0])$(".sw-hour, .sw-minute").hide();else if($(".sw-hour, .sw-minute").css({display:"table-cell"}),1==t.keys[0]&&-1!=t.values[0].text.indexOf("今天")){var a=e.getHours(),n=e.getMinutes();if(parseInt(t.values[1].value)<=a)if(SpinningWheel.scrollToValue(1,a),60<n+10)SpinningWheel.scrollToValue(1,a+1);else{var i=10*Math.floor(n/10)+10;t.values[2].value<i&&SpinningWheel.scrollToValue(2,i)}}},done:function(){var e=SpinningWheel.getSelectedValues(),t=e.values[0],a=e.values[1],n=e.values[2],i=t.text,s="",l="";-1!=i.indexOf("现在出发")?(s=t.value,l="现在出发 "+s.split(" ")[1]):-1!=i.indexOf("今天")?(s=t.value+" "+a.text+":"+n.text,l="今天 "+a.text+":"+n.text):-1!=i.indexOf("明天")?(s=t.value+" "+a.text+":"+n.text,l="明天 "+a.text+":"+n.text):-1!=i.indexOf("后天")?(s=t.value+" "+a.text+":"+n.text,l="后天 "+a.text+":"+n.text):(s=t.value+" "+a.text+":"+n.text,l=t.text.split(" ")[0]+a.text+":"+n.text),setTimeout(function(){$("li.time input").val(l).data("value",s)},500)},cancel:function(){},doubleNumber:function(e){return parseInt(e)<10&&(e="0"+e),e},toWeekString:function(e){var t="";switch(parseInt(e)){case 0:t="周日";break;case 1:t="周一";break;case 2:t="周二";break;case 3:t="周三";break;case 4:t="周四";break;case 5:t="周五";break;case 6:t="周六"}return t},formatDate:function(e,t){if("string"!=typeof e&&"object"==typeof e){var a=e.getFullYear(),n=e.getMonth()+1,i=e.getDate(),s=e.getHours(),l=e.getMinutes(),r=e.getSeconds(),u=e.getDay(),o=e.getMilliseconds(),c="";1==u?c="星期一":2==u?c="星期二":3==u?c="星期三":4==u?c="星期四":5==u?c="星期五":6==u?c="星期六":7==u&&(c="星期日");var g="0"+n,h="0"+i,d="0"+s,f="0"+l,v="0"+r;return t.replace(/yyyy/g,a).replace(/YYYY/g,a).replace(/yy/g,(a+"").substring(2,4)).replace(/YY/g,(a+"").substring(2,4)).replace(/MM/g,g.substring(g.length-2)).replace(/dd/g,h.substring(h.length-2)).replace(/HH/g,d.substring(d.length-2)).replace(/hh/g,d.substring(d.length-2)).replace(/mm/g,f.substring(f.length-2)).replace(/sss/g,o).replace(/SSS/g,o).replace(/ss/g,v.substring(v.length-2)).replace(/SS/g,v.substring(v.length-2)).replace(/E/g,c)}}};