$(function(){
    var indexValue;
    
      $('#commentButton').click( function() {
        if($('#userComment').val().length == ''){
         alert('Please Enter Your Comment');
         return true;
        }
        var userComment = $('#userComment').val();
        if($('#submit').hasClass('')){
                   
          $('#CommentDelete>div.viewComment').eq(indexValue).children('p').html(userComment);
          
        }else{      
          $('#CommentDelete').append("<div class='viewComment'><p>"+ userComment + "</p><span class='delete'></span></div>");
        }

        $('#userComment').val('');
    });
      
    // Delete 
    $('#CommentDelete').on('click', '.delete', function(){   
      confirm("Delete Comment?");
      $(this).parent().remove();
    });
    
    });
  
  