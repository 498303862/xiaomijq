window.onload=function(){

	// 购物车
	let youxiao=document.getElementsByClassName("youxiao")[0]
	console.log(youxiao)
	let xiahua=document.getElementsByClassName("xiahua")[0]
	console.log(xiahua)
	youxiao.onmouseenter=function(){
		xiahua.style.height="100px"
		xiahua.style.boxShadow="0 1px 5px 0px	rgba(0, 0, 0, 0.5)";
	}
	youxiao.onmouseleave=function(){
		xiahua.style.height="0"
	}
	// 测导航
	let cetu=document.getElementsByClassName("cetu")[0];
	console.log(cetu);
	let li=cetu.getElementsByTagName("li");
	console.log(li);
	let aside=document.getElementsByClassName("aside");
	console.log(aside)
	
		for(let i=0;i<li.length;i++){
			li[i].onmouseenter=function(){
				for(let j=0;j<li.length;j++){
					aside[j].style.display="none"
				}
				aside[i].style.display="block"
				aside[i].style.boxShadow="0 5px 10px 0px #a8b1c0"
		   }
		   li[i].onmouseleave=function(){
		   		aside[i].style.display="none"
		   }
	  }
	  // 商品切换开始
	  function xxk(jiadianhezi){
	  let jiadianyou=jiadianhezi.getElementsByClassName("jiadianyou")[0];
	  console.log(jiadianyou);
	  let a=jiadianyou.getElementsByTagName("a");
	  console.log(a);
	  let tupianyou=jiadianhezi.getElementsByClassName("tupianyou");
	  console.log(tupianyou)
	  tupianyou[0].style.display="block"
	  for(let i=0;i<a.length;i++){
	  	a[i].onmouseenter=function(){
	  		for(let j=0;j<a.length;j++){
	  			tupianyou[j].style.display="none"
	  			a[j].className=""
	  			a[j].style.color="#000"
	  			a[j].style.borderBottom="none"

	  		}
	  		tupianyou[i].style.display="block"
	  		a[i].style.color="#ff6700"
	  		a[i].style.borderBottom="2px solid #ff6700"
	  		a[i].className="fdsfdsf"

	  	}
	  }
	  }
	  let jiadianhezi=document.getElementsByClassName("jiadianhezi")[0];
	  console.log(jiadianhezi)
	  xxk(jiadianhezi)
	  let jiadianhezi1=document.getElementsByClassName("jiadianhezi")[1];
	  console.log(jiadianhezi1)
	  xxk(jiadianhezi1)
	  let jiadianhezi2=document.getElementsByClassName("jiadianhezi")[2];
	  console.log(jiadianhezi2)
	  xxk(jiadianhezi2)
	  let jiadianhezi3=document.getElementsByClassName("jiadianhezi")[3];
	  console.log(jiadianhezi3)
	  xxk(jiadianhezi3)
	  let jiadianhezi4=document.getElementsByClassName("jiadianhezi")[4];
	  console.log(jiadianhezi4)
	  xxk(jiadianhezi4)
	  // 下拉开始
	  let zhongjianzi=document.getElementsByClassName("zhongjianzi")[0]
	  console.log(zhongjianzi)
	  let aaa=zhongjianzi.getElementsByTagName("a")
	  console.log(aaa)
	  let xilas=document.getElementsByClassName("xilas")
	  console.log(xilas)
	  let neikh=document.getElementsByClassName("neikh")
	  console.log(neikh)
	  for(let i=0;i<aaa.length;i++){
	  	aaa[i].onmouseenter=function(){
				xilas[i].style.display="block"	
				// xilas[i].style.borderTop="1px solid #e0e0e0"
				xilas[i].style.boxShadow="0 2px 2px 0px #a8b1c0"
		}
		aaa[i].onmouseleave=function(){
	 		xilas[i].style.display="none"
	 		// xilas[i].style.borderTop="none"
	   		
	   	}  	
	 }


	 // 轮播图开始
	let banner=document.querySelector(".banner")
	console.log(banner)
	let bdaj=document.querySelector(".bdaj")
	console.log(bdaj)
	let bdzaj=document.querySelector(".bdzaj")
	console.log(bdzaj)
	let lis=document.querySelectorAll(".imgbox li")
	console.log(lis)
	let dian=document.querySelectorAll(".boxdian li")
	console.log(dian)


	let index=0;
	let t=setInterval(move,2000);
	lis[0].style.zIndex=10;
	dian[0].className="hot";

	// 移入
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}

	// 点击
	 bdaj.onclick=function(){
		move()
	}
	 bdzaj.onclick=function(){
		move1()
	}
	// 正着轮播
	function move(){
		index++;
		if(index==lis.length){
			index=0;
		}
		lis.forEach(function(meiyige){
			meiyige.style.zIndex=5;
		})
		
		dian.forEach(function(meiyige){
			meiyige.className="";
		})
		lis[index].style.zIndex=10;
		dian[index].className="hot"
	}
	// 倒着轮播
	function move1(){
		index--;
		if(index<0){
			index=lis.length-1;
		}
		lis.forEach(function(meiyige){
			meiyige.style.zIndex=5;
		})
		
		dian.forEach(function(meiyige){
			meiyige.className="";
		})
		lis[index].style.zIndex=10;
		dian[index].className="hot"
	}
	// 点击轮播点
	for(let i=0;i<dian.length;i++){
		dian[i].onclick=function(){
			lis.forEach(function(meiyige){
				meiyige.style.zIndex=5;
			})
			dian.forEach(function(meiyige){
				meiyige.className="";
			})
			lis[i].style.zIndex=10;
			dian[i].className="hot";
			index=i;
		}
	}
	 // 内容轮播图
	 function lai(nrtu){
	
	 
	 let baozhu=nrtu.querySelectorAll(".baozhu");
	 console.log(baozhu)
	 let nrdian=nrtu.querySelector(".nrdian");
	 console.log(nrdian);
	 let xdd=nrdian.querySelectorAll("a")
	 console.log(xdd);
	 let zanj=nrtu.querySelector(".laoda");
	 console.log(zanj);
	 let yanj=nrtu.querySelector(".laoer");
	 console.log(yanj);
	 let nrtuwidth=parseInt(getComputedStyle(nrtu,null).width)
	 console.log(nrtuwidth);
	 // 点击事件
	 zanj.onclick=function(){
		if(!flag){
			return
		}
		
		if(next==0){
			net=0;
			return;
		}
		flag=false;
		moveel();
	}
	yanj.onclick=function(){
		if(flag==false){
			return
		}
		if(next==baozhu.length-1){
			next=baozhu.length-1;
			return;
		}
		flag=false;
		movee();
	}
	 // 向右移动
	 let current=0, next=0;
	 let flag=true
	 function movee(){
      next++;
      if(next==baozhu.length){
      	next=0;
      }
      xdd[current].classList.remove("hogg");
      xdd[next].classList.add("hogg")
      baozhu[next].style.left=nrtuwidth+"px"
      animate(baozhu[current],{left:-nrtuwidth})
      animate(baozhu[next],{left:0},function(){
      	 flag=true
      })
      current=next;
	}
	function moveel(){
      next--;
      if(next<0){
      	next=baozhu.length-1;
      }
      xdd[current].classList.remove("hogg");
      xdd[next].classList.add("hogg")
      baozhu[next].style.left=-nrtuwidth+"px"
      animate(baozhu[current],{left:nrtuwidth})
      animate(baozhu[next],{left:0},function(){
      	 flag=true;
      })
      current=next;
	}

	xdd.forEach(function(element,index,obj){
            element.onclick=function(){
            	if(current==index){
            		return;
            	}
            	xdd[index].classList.add("hogg")
            	xdd[current].classList.remove("hogg")
               if(current<index){
               	baozhu[index].style.left=nrtuwidth+"px"
               	animate(baozhu[index],{left:0})
               	animate(baozhu[current],{left:-nrtuwidth})
               }
               if(current>index){
               	baozhu[index].style.left=-nrtuwidth+"px"
               	animate(baozhu[index],{left:0})
               	animate(baozhu[current],{left:nrtuwidth})
               }
               next=current=index
            }
	})
  }
  let nrtu=document.querySelector(".neirong");
    lai(nrtu); 
    let nrtu1=document.querySelector(".neirong1");
    lai(nrtu1); 
    let nrtu2=document.querySelector(".neirong2");
    lai(nrtu2); 
    let nrtu3=document.querySelector(".neirong3");
    lai(nrtu3); 
 
// 小米明星单品开始
function yongni(xiangou){
	
	let bottom1=xiangou.querySelector(".xiahe");
	let zou=xiangou.querySelector(".dpzxh");
	let you=xiangou.querySelector(".dpyxh");
	let kuandu=parseInt(getComputedStyle(bottom1,null).width)/3;

	let times=0;
	you.onclick=function(){
		times++;
		if(times==3){
			times=2;
			
			zou.classList.add("xm")
			you.classList.remove("xm")

			// you.style.color="#e0e0e0"
		}
		bottom1.style.transform=`translateX(${-kuandu*times}px)`;
		
		

	}
	zou.onclick=function(){
		times--;
		if(times<0){
			times=0;
			zou.classList.remove("xm")
			you.classList.add("xm")
			// zou.style.color="#e0e0e0"

			// you.style.color="#b0b0b0"
		}
		bottom1.style.transform=`translateX(${-kuandu*times}px)`;
		
		
	}
}
	let xiangou=document.querySelector(".dahezi");
	yongni(xiangou)


	 //周边开始
	 function yongni2(xiangou1){
	
	let bottom2=xiangou1.querySelector(".xiaheg");
	let zou1=xiangou1.querySelector(".dpzxh");
	let you1=xiangou1.querySelector(".dpyxh");
	let kuandu=parseInt(getComputedStyle(bottom2,null).width)/3;

	let times=0;
	you1.onclick=function(){
		times++;
		if(times==3){
			times=2;
			zou1.classList.add("xm")
			you1.classList.remove("xm")
		}
		
		bottom2.style.transform=`translateX(${-kuandu*times}px)`;
		
	}
	zou1.onclick=function(){
		times--;
		if(times<0){
			times=0;
			zou1.classList.remove("xm")
			you1.classList.add("xm")
		}
		bottom2.style.transform=`translateX(${-kuandu*times}px)`;
		
	}
}
	let xiangou1=document.querySelector(".dahezig");
	yongni2(xiangou1)
 

	
	  
}  