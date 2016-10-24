$(function(){
  var sentences="";
  var words=[];
  $("form").submit(function(event){
    event.preventDefault();
    sentences=$("#sentence").val().split(" ");
    sentences.forEach(function(word){
      if(word.length>3){
        words.push(word);
      }
    });
    words.reverse();

    $(".results").append(words.join(" "));
  });
});
