$(".smiley-button").click(function() {
  if ($(".smiley-picker").hasClass("hidden")) {
    $(".smiley-picker").fadeIn("fast");
    $(".smiley-picker").toggleClass("hidden");
  } else {
    $(".smiley-picker").fadeOut("fast");
    $(".smiley-picker").toggleClass("hidden");
  }
});
for (i = 128512; i < 128591; i++) {
    $(".smiley-picker").append("<button type='button' class='smiley'>&#"+i+"</button>");
}
$(document).ready(function() {
	$(document).on("click",".smiley",function(){
  	$(".smiley-input").val($('.smiley-input').val()+$(this).text());
  })
})
