$(function(){
	// 下拉
	$(".youxiao").mouseenter(function(){
    $(".xiahua").stop(true);
		$(".xiahua").slideDown("200");

	})
	$(".youxiao").mouseleave(function(){
		$(".xiahua").slideUp("200");
	})
 	// 下拉
 	let xiala=$(".zhongjianzi a")
 	xiala.mouseenter(function(){
 		$(".xilas").css("display","none");
		$(this).children(".xilas").css("display","block");
		})
 	xiala.mouseleave(function(){
 		$(".xilas").css("display","none");
		})
 	// 测导航
 	let ce=$(".cetu li")
 	ce.mouseenter(function(){
 		$(".aside").css("display","none");
		$(this).children(".aside").css("display","block");
		})
 	ce.mouseleave(function(){
 		$(".aside").css("display","none");
		})

     // 商品切换
     let rm=$(".jiadianhezi:eq(0) .jiadianyou a")
     let tupian=$(".jiadianhezi:eq(0) .tupianyou")
     rm.mouseenter(function() {
		tupian.css({"display":"none"})
		let index=$(this).index()
		tupian.eq(index).css({"display":"block"})
		rm.removeClass('fdsfdsf')
		$(this).addClass('fdsfdsf')
	});

     let rm1=$(".jiadianhezi:eq(1) .jiadianyou a")
     let tupian1=$(".jiadianhezi:eq(1) .tupianyou")
     rm1.mouseenter(function() {
		tupian1.css({"display":"none"})
		let index=$(this).index()
		tupian1.eq(index).css({"display":"block"})
		rm1.removeClass('fdsfdsf')
		$(this).addClass('fdsfdsf')
	});

     let rm2=$(".jiadianhezi:eq(2) .jiadianyou a")
     let tupian2=$(".jiadianhezi:eq(2) .tupianyou")
     rm2.mouseenter(function() {
		tupian2.css({"display":"none"})
		let index=$(this).index()
		tupian2.eq(index).css({"display":"block"})
		rm2.removeClass('fdsfdsf')
		$(this).addClass('fdsfdsf')
	});


     let rm3=$(".jiadianhezi:eq(3) .jiadianyou a")
     let tupian3=$(".jiadianhezi:eq(3) .tupianyou")
     rm3.mouseenter(function() {
		tupian3.css({"display":"none"})
		let index=$(this).index()
		tupian3.eq(index).css({"display":"block"})
		rm3.removeClass('fdsfdsf')
		$(this).addClass('fdsfdsf')
	});


     let rm4=$(".jiadianhezi:eq(4) .jiadianyou a")
     let tupian4=$(".jiadianhezi:eq(4) .tupianyou")
     rm4.mouseenter(function() {
		tupian4.css({"display":"none"})
		let index=$(this).index()
		tupian4.eq(index).css({"display":"block"})
		rm4.removeClass('fdsfdsf')
		$(this).addClass('fdsfdsf')
	});
     // 轮播图开始
    let dian=$(".boxdian li")
    let img=$(".imgbox li")
    let t=setInterval(move,2000)
    let index=0
    dian.first().addClass('hot')
     img.first().css("zIndex","10")
    function move(){
    	index++
    	if(index==img.length){
    		index=0
    	}
    	dian.removeClass("hot")
    	img.css("zIndex","5")
    	dian.eq(index).addClass('hot')
    	img.eq(index).css("zIndex","10")
    }
    function move1(){
    	index--
    	if(index>0){
    		index=img.length-1
    	}
    	dian.removeClass("hot")
    	img.css("zIndex","5")
    	dian.eq(index).addClass('hot')
    	img.eq(index).css("zIndex","10")
    }
    $(".bdaj").click(function(){
    	move()
    })
    $(".bdzaj").click(function(){
    	move1()
    })
    $(".banner").mouseenter(function(){
    	clearInterval(t)
    })
    $(".banner").mouseleave(function(){
    	t=setInterval(move,2000)
    })
    dian.click(function(){
		let index1=dian.index(this);
		dian.removeClass('hot').eq(index1).addClass('hot');
		img.css({"zIndex":5}).eq(index1).css({"zIndex":10});
		index=index1
	})

    // 内容轮播图
   
    function lai(neirong){
    let tu=neirong.children(".baozhu")
    console.log(tu)
    let nrdian=neirong.children(".nrdian").children('a')
    let laoda=neirong.find(".laoda")
    let laoer=neirong.find(".laoer")
    console.log(laoda,laoer)
     let current=0, next=0;
	 let flog=true
	 let tuwidth=$(tu).width()
	 console.log(tuwidth)
	 function movee(){
      next++;
   	 if(next==tu.length){
      	next=0;
      }
      tu.eq(next).css({"left":+tuwidth+"px"})
      tu.eq(current).animate({"left":-tuwidth+"px"})
      tu.eq(next).animate({"left":0},function(){
      	flog=true
      })
      nrdian.eq(current).removeClass("hogg")
      nrdian.eq(next).addClass("hogg")
      current=next
	}
	function movee1(){
      next--;
   	 if(next<0){
      	next=tu.length-1;
      }
      tu.eq(next).css({"left":-tuwidth+"px"})
      tu.eq(current).animate({"left":+tuwidth+"px"})
      tu.eq(next).animate({"left":0},function(){
      	flog=true
      })
      nrdian.eq(current).removeClass("hogg")
      nrdian.eq(next).addClass("hogg")
      current=next
	}
    laoda.click(function(){
    	if(next<=0){
    		return
    	}
    	else if(!flog){
    		return
    	}
    	flog=false
    	movee1()

    })
    laoer.click(function(){
    	if(next>=tu.length-1){
    		return
    	}
    	else if(!flog){
    		return
    	}
    	flog=false
    	movee()
    })
    nrdian.click(function(){
    	let xdd=$(this).index()
    	if(xdd>current){
    		tu.eq(xdd).css({"left":+tuwidth+"px"})
     		tu.eq(current).animate({"left":-tuwidth+"px"})
      		tu.eq(xdd).animate({"left":0})
    	}
    	else if(xdd<current){
    		tu.eq(xdd).css({"left":-tuwidth+"px"})
      		tu.eq(current).animate({"left":+tuwidth+"px"})
     		tu.eq(xdd).animate({"left":0})
    	}
    	nrdian.eq(current).removeClass("hogg")
    	nrdian.eq(xdd).addClass('hogg')
    	current=next=xdd

    })
    }
    let neirong=$(".neirong")
    lai(neirong)
    let neirong1=$(".neirong1")
    lai(neirong1)
    let neirong2=$(".neirong2")
    lai(neirong2)
    let neirong3=$(".neirong3")
    lai(neirong3)
    // 小米明星单品
  let wd=$(".dahezi").width();
  let bottom2=$(".dahezi .xiahe");
  let times=0;
  $(".dahezi .youhe a").eq(1).click(function(){
    times++;
    if(times==3){
      times=2;
     $(".dahezi .dpyxh").removeClass('xm');
     $(".dahezi .dpzxh").addClass('xm');
    }
    bottom2.css({transform:`translateX(${-wd*times}px)`});
  })

  $(".dahezi .youhe a").eq(0).click(function(){
    times--;
    if(times<0){
      times=0;
       $(".dahezi .dpzxh").removeClass('xm');
     $(".dahezi .dpyxh").addClass('xm');
    }
    
    bottom2.css({transform:`translateX(${-wd*times}px)`});
  })  
  console.log(bottom2)
  console.log( $(".dahezi .youhe a"))
// 为你推荐开始
    let wdd=$(".dahezig").width();
  let bottom3=$(".dahezig .xiaheg");
  let times1=0;
  $(".dahezig .youhe a").eq(1).click(function(){
    times1++;
    if(times1==3){
      times1=2;
     $(".dahezig .dpyxh").removeClass('xm');
     $(".dahezig .dpzxh").addClass('xm');
    }
    bottom3.css({transform:`translateX(${-wdd*times1}px)`});
  })

  $(".dahezig .youhe a").eq(0).click(function(){
    times1--;
    if(times1<0){
      times1=0;
       $(".dahezig .dpzxh").removeClass('xm');
     $(".dahezig .dpyxh").addClass('xm');
    }
    
    bottom3.css({transform:`translateX(${-wdd*times1}px)`});
  })  
  console.log(bottom3)
  console.log( $(".dahezig .youhe a"))
})