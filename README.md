# Smiley
 A simple emoticon picker using jquery [Demo](http://codepen.io/DrevanTonder/pen/MpEVZM)
 
 To add the emoticon picker download the repository, upload `smiley.css` and `smiley.js` to your server, and add `<link rel="stylesheet" type="text/css" href="css/smiley.css">` in your `<head>`
 then either add `<script scr="scripts/smiley.js"></script>` or add 
 ```javascript
 <script>
//http://character-code.com/emoticons-html-codes.php
var s_name = ["grinning face", "grinning face with smiling eyes", "face with tears of joy", "smiling face with open mouth", "smiling face with open mouth and smiling eyes", "smiling face with open mouth and cold sweat", "smiling face with open mouth and tightly-closed eyes", "smiling face with halo", "smiling face with horns", "winking face", "smiling face with smiling eyes", "face savouring delicious food", "relieved face", "smiling face with heart-shaped eyes", "smiling face with sunglasses", "smirking face", "neutral face", "expressionless face", "unamused face", "face with cold sweat", "pensive face", "confused face", "confounded face", "kissing face", "face throwing a kiss", "kissing face with smiling eyes", "kissing face with closed eyes", "face with stuck-out tongue", "face with stuck-out tongue and winking eye", "face with stuck-out tongue and tightly-closed eyes", "disappointed face", "worried face", "angry face", "pouting face", "crying face", "persevering face", "face with look of triumph", "disappointed but relieved face", "frowning face with open mouth", "anguished face", "fearful face", "weary face", "sleepy face", "tired face", "grimacing face", "loudly crying face", "face with open mouth", "hushed face", "face with open mouth and cold sweat", "face screaming in fear", "astonished face", "flushed face", "sleeping face", "dizzy face", "face without mouth", "face with medical mask", "grinning cat face with smiling eyes", "cat face with tears of joy", "smiling cat face with open mouth", "smiling cat face with heart-shaped eyes", "cat face with wry smile", "kissing cat face with closed eyes", "pouting cat face", "crying cat face", "weary cat face", "face with no good gesture", "face with ok gesture", "person bowing deeply", "see-no-evil monkey", "hear-no-evil monkey", "speak-no-evil monkey", "happy person raising one hand", "person raising both hands in celebration", "person frowning", "person with pouting face", "person with folded hands"];


$(".smiley-button").click(function() {
  if ($(".smiley-picker").hasClass("hidden")) {
    $(".smiley-picker").fadeIn("fast");
    $(".smiley-picker").toggleClass("hidden");
  } else {
    $(".smiley-picker").fadeOut("fast");
    $(".smiley-picker").toggleClass("hidden");
  }
});
var sm = 0*1;

for (i = 128512; i < 128577; i++) {
    $(".smiley-picker").append("<button type='button' title='"+s_name[sm]+"'  value='&#"+i+"' class='smiley'>&#"+i+"</button>");
	sm = (sm + 1)*1;
}
for (i = 128581; i < 128591; i++) {
    $(".smiley-picker").append("<button type='button' title='"+s_name[sm]+"'  value='&#"+i+"' class='smiley'>&#"+i+"</button>");
	sm = (sm + 1)*1;
}
$(document).ready(function() {
	$(document).on("click",".smiley",function(){
  	$(".smiley-input").val($('.smiley-input').val()+$(this).text());
  })
})
 </script>
 ```
 In your `<textarea>` or `<input>` add `class="smiley-input"` 
 and below the `<textarea>` add 
 ```html
<button type="button" class="smiley-button">
  &#128512
</button>
<div class="smiley-picker hidden">
</div>
```
add your own css and classes to make it look better.
Please report any issues.
