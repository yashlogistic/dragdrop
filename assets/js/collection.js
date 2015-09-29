
jQuery(function(){


 
});
jQuery(document).ready(function(){
                var mainDiv;
		$('#img_div .ars_popClose').on('click',function ()
		{
		    if(confirm('Are you sure you want to delete?')){
			$(this).parent('#img_div').children('input[type="hidden"]').val("");
			$(this).parent('#img_div').removeClass('draggedimage');
			$(this).parent('#img_div').find('img.dragimg,.ars_popClose').remove();
			
			}
		});
	    /* Image swaping */
		$('.ars_CollMainbox div').draggable({revert:'invalid',helper:'clone', opacity: 0.50,start:function(event, ui){			
			drag_img=$(this).html();
			top_pos=$(this).css('top');
			left_pos=$(this).css('left');
			img_width=$(this).css('width');
			img_height=$(this).css('height');			
			drag_obj=$(this);
		}});
		$('.header').droppable({drop:function(ev,ui){
                    console.log("In drop");
                    drag_obj.addClass('draggedimage');
                    drop_img=$(this).html();
                    dimg_width=$(this).css('width');
                    dimg_height=$(this).css('height');
                    $(this).find(".logoArea").html(drag_img);
                    $(this).find(".logoArea").find('img').css({'width':'200px','height':'75px','display':'none'}).fadeIn(500);
//			drop_replace(drop_img);
		}	
		});
		$('.backGround').droppable({drop:function(ev,ui){
			drag_obj.addClass('draggedimage');
			drop_img=$(this).html();
			dimg_width=$(this).css('width');
			dimg_height=$(this).css('height');
			$(this).html(drag_img);
			$(this).find('img').css({'width':dimg_width,'height':dimg_height,'display':'none'}).fadeIn(500);
//			drop_replace(drop_img);
		}	
		})
		function drop_replace(htm){
			$('.draggedimage img').remove();
			$('.draggedimage').html(htm);
			$('.draggedimage').css({'top':top_pos,'left':left_pos});
			$('.draggedimage').find('img').css({'top':top_pos,'left':left_pos,'width':img_width,'height':img_height,'display':'none'}).fadeIn();
			$('.ars_CollMainbox div').removeClass('draggedimage');
		}
		 /* Image swaping End*/
                 
               $(".demoTitle").hover(function(){
                   $(this).append('<div class="sim-row-edit-hover"><i class="fa launchPopup fa-pencil" style="line-height:30px;"></i></div>');
                   mainDiv = $(this);
               }, function() {
                $(this).children(".sim-row-edit-hover").remove();
              });  
              
              $(document).on("click",".launchPopup",function(){
                  console.log("In click");
                  $("#editTitleText").val($(this).parent().parent().find("span").html());
                  $(".modal").modal();
              });
              
              $(document).on("click",".saveChanges",function(){
                  mainDiv.find("span").html($(".modal #editTitleText").val());
                  $(".modal").modal("hide");
              });
              
              $(".exportHtml").click(function (){
                  var export_content = $(".sec_col").html();
//                  export_content.find(".header").removeClass("ui-droppable");
//                  export_content.find(".backGround").removeClass("ui-droppable");
//                  
                  $("#export-textarea").val(export_content)
                  $( "#export-form" ).submit();
                  $("#export-textarea").val(' ');
              });
	});
	



 


 


	
