//切换
			 $("#zi2").bind({
            	mouseover:function(){
            		$("#lu2").show();
            		$("#lu1").hide();
                    $("#zi2").css("background-color","#ADFF2F")
                     $("#zi1").css("background-color","white")
            	},mouseout:function(){
   $("#zi1").css("background-color","white")
            	}
            })
			$("#zi1").bind({
				mouseover:function(){
					$("#lu1").show();
            		$("#lu2").hide();
            		$("#zi1").css("background-color","#ADFF2F")
            		 $("#zi2").css("background-color","white")
				}
			})
		
			//轮播
			var c=0 ;
			var stop = true;
			
			var image =["adver01.jpg","adver02.jpg","adver03.jpg","adver04.jpg"]
			var beijing =["#7CCFFE","#D9C394","#CC62FF","#0075CD"]
			$(".top3-m-down ul li").mouseover(function(){
				 c =$(this).index();
				
				var b = $(".top3-m-down").css("background","url(img/"+image[c]+")")
				b.css("backgroundSize","800px 536px")
				$(this).siblings().css("background-color","black");
				$(this).css("background","#EFEFEF")

				
                $(".top3-l-xia1,.top3-l-xia2").css("background-color",beijing[c]);
				$(".top3-l-xia2 ul li").css("background-color",beijing[c]);
				

			})
 	
			$(".top3-m-down").mouseover(function(){
				stop=false;
				
			}).mouseout(function(){
				stop =true;
			})
			
			function zj(){
				if(c>2){
					c=0;
			        var d = $(".top3-m-down").css("background","url(img/"+image[c]+")");
			        d.css("backgroundSize","800px 536px")
			        $(".top3-m-down ul li").eq(0).css("background-color","white")
			         $(".top3-m-down ul li").eq(3).css("background-color","black")
			         $(".top3-l-xia1,.top3-l-xia2").css("background-color","#7CCFFE");
			         $(".top3-l-xia2 ul li").css("background-color","#7CCFFE")
			         	
				
				   
				}else{
				    c=c+1;
				    var d = $(".top3-m-down").css("background","url(img/"+image[c]+")");
				     d.css("backgroundSize","800px 536px");
				    $(".top3-m-down ul li").eq(c).css("background-color","white")
			        $(".top3-m-down ul li").eq(c).prev().css("background-color","black")
			         $(".top3-l-xia1,.top3-l-xia2").css("background-color",beijing[c]);  
			          $(".top3-l-xia2 ul li").css("background-color",beijing[c])

				
				    
				}
			}
			
			setInterval(function(){
				if(stop){
					zj();

				}
				
			},3000)

	
 		 //二级菜单

 
         $(".top3-l-xia2 ul li,.top3-m-down img").hover(function(){
         	$(".top3-m-down img").css("display","block")
         	
         	$(".top3-m-down  ul li").css("display","none");
         	

         	
         },function(){
         	$(".top3-m-down img").css("display","none")
         	$(".top3-m-down  ul li").css("display","block");


         })
        //绑定事件    
            $(".top3-l-mingcheng a:first-of-type").bind({
            	mouseover:function(){
            		$(".top3-l-xia1").show();
            		$(".top3-l-xia2").hide();
                    $(this).css("color","greenyellow")
            	},mouseout:function(){
            		 $(this).css("color","white")
            	}
            })
            $(".top3-l-mingcheng a:last-of-type").bind({
            	mouseover:function(){
            		$(".top3-l-xia1").hide();
            		$(".top3-l-xia2").show();
            		$(this).css("color","red")
            		$(this).css("background-color","white")
            		$(".top3-l-mingcheng a:first").css("background-color","black")
            	},mouseout:function(){
            		$(this).css("background-color","black")
            		
            		$(".top3-l-mingcheng a:first").css("background-color","red")
            	}
            })
         //显示隐藏
         $(".top1-r ul li").eq(0).mouseover(function(){
         	$(".xiala1").show()
         	$(this).css("color","red")
         }).mouseout(function(){
         	$(".xiala1").hide()
         	$(this).css("color","white")
         })
          $(".top1-r ul li").eq(2).mouseover(function(){
         	$(".xiala2").show()
         	$(this).css("color","red")
         }).mouseout(function(){
         	$(".xiala2").hide()
         	$(this).css("color","white")
         })
          $(".top1-r ul li").eq(5).mouseover(function(){
          	$(this).css("color","red")
          	$(".xiala3").css("color","black")
          	$(".xiala3").show()
         }).mouseout(function(){
         	$(".xiala3").hide()
         	$(this).css("color","white")
         })
        //导航
       $(window).scroll(function(){
       	var a =$(this).scrollTop();
       	if(a<1660){
       		$(".daohang").css("display","none")
       	}
       	if(a>1660){
       		$(".daohang").css("display","block")
       	}
       	if(a>1860&& a<2500){
       		$(".daohang li").eq(1).css("background-color","red")
       		$(".daohang li").eq(1).siblings().css("background-color","black")
       	}
       	if(a>2500 && a<3300){
       		$(".daohang li").eq(2).css("background-color","red")
       		$(".daohang li").eq(2).siblings().css("background-color","black")
       	}
       	if(a>3300 && a<4050){
       		$(".daohang li").eq(3).css("background-color","red")
       		$(".daohang li").eq(3).siblings().css("background-color","black")
       	}
       	if(a>4050 && a<4800){
       		$(".daohang li").eq(4).css("background-color","red")
       		$(".daohang li").eq(4).siblings().css("background-color","black")
       	}
       	if(a>4800){
       		$(".daohang li").css("background-color","black")
       		
       	}
       })
       $(".daohang li:eq(1)").click(function(){
       	   	$(window).scrollTop(1900);
       	   	$(this).css("background-color","red");
       	   	$(this).siblings().css("background-color","black");
       })
       $(".daohang li:eq(2)").click(function(){
       	   	$(window).scrollTop(2600);
       	   	$(this).css("background-color","red");
       	   	$(this).siblings().css("background-color","black");
       })
       $(".daohang li:eq(3)").click(function(){
       	   	$(window).scrollTop(3400);
       	   	$(this).css("background-color","red");
       	   	$(this).siblings().css("background-color","black");
       })
       $(".daohang li:eq(4)").click(function(){
       	   	$(window).scrollTop(4100);
       	   	$(this).css("background-color","red");
       	   	$(this).siblings().css("background-color","black");
       })
 $(".daohang li:eq(5)").click(function(){
       	   	$(window).scrollTop(0);
       	   	$(this).css("background-color","black");
       	   	$(this).siblings().css("background-color","black");
       })



  $(".fanzhuan").toggle(
                   function(){
                       $(".top7-m div:not(.fanzhuan) img:nth-child(2)").css("display","block") ;

                       $(".top7-m div:not(.fanzhuan) img:nth-child(1)").css({"display":"none"}) ;
                       $(".top7-m div:not(.fanzhuan) span").css("transform","rotateY(180deg)");
                   } ,
                   function(){
                       $(".top7-m div:not(.fanzhuan) img:nth-child(1)").css("display","block") ;
                       $(".top7-m div:not(.fanzhuan) img:nth-child(2)").css("display","none") ;
                       $(".top7-m div:not(.fanzhuan) span").css("transform","rotateY(0deg)");
                   }
           )
  