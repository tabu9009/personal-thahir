$(document).ready(function () {
  $("#submit-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 4,
      },
      color: {
        required: true,
        minlength: 10,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
        minlength: 5,
      },
    },
  });
});

var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzdiyVeGXgv7fLBB653pS3Z1qnjV-wMpU42S8ZjyNxM_tuSGDHopHY6QMF0VwKxC23dng/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
