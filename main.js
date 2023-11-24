let LoginButton = $("#LoginButton");
let body = document.body;


$(LoginButton).click(function(){
    body.classList.add("overflow-hidden");
    $("#TopDiv").addClass("blur-lg");
    $("#Main_Title").addClass("blur-lg");
    $("#Main_Images").addClass("blur-lg");
    $("#LoginSection").removeClass("hidden");
  });


  $("#RegisterBtn").click(function(){
    $("#LoginSection").addClass("hidden");
    $("#RegisterSection").removeClass("hidden");
  });


  $("#LoginBtn").click(function(){
    $("#LoginSection").removeClass("hidden");
    $("#RegisterSection").addClass("hidden");
  });