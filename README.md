# smiley
 a simple emoticon picker using jquery
 
 To add the emoticon picker download the repository, upload `smiley.css` and `smiley.js` to your server, and add `<link rel="stylesheet" type="text/css" href="css/smiley.css">` in your `<head>`
 then either add `<script scr="scripts/smiley.js"></script>` or add 
 ```
 <script>
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
 </script>
 ```
 In your `<textarea>` or `<input>` add `class="smiley-input"` 
 below the `<textarea>` add 
 ```
 <div smiley>
  <button type="button" class="smiley-button">
    &#128512
  </button>
  <div class="smiley-picker hidden">
  </div>
</div>
```
add your own css and classes to make it look better.
Please report any issues.
