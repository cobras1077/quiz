/* global $ */
var totalScore=0;
$(document).ready(function() {
var q1Result;
var q2Result;
   function Question1(response1){
    if(response1 === "coding"){
       totalScore= totalScore+ 10;
    }else if(response1==="sports"){
       totalScore= totalScore + 15;
    }else {
     totalScore = totalScore + 5;
    }
}
    function Question2(response2){
    if(response2 === "Summer"){
       totalScore= totalScore+ 10;
    }else if(response2==="Winter"){
       totalScore= totalScore + 15;
    }else {
     totalScore = totalScore + 5;
    }
}
   
   
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        q1Result = $("#question1").val();
        q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        //var totalScore;
        
         Question1(q1Result);
         Question2(q2Result);
    console.log(totalScore);
    });

});


