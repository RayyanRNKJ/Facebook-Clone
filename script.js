$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4,
                maxlength:8
            },
            email:{
                required:true,
                email:true
            },
            password:{
                minlength:8
            },
            
        }
        
    })
})