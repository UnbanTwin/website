$( document ).ready(function() {
    var clicked = 0
    $("#continueButton").click(function(){
        if(clicked == 0) {
            $("#changingText").addClass("animated wobble");
            $("#changingText").html("On January the 15th, 2018<br>everyone, all over the world, will strike.");
            clicked+=1;
        }
        else {
            $("#changingText").addClass("animated jello")
            $("#continueButton").addClass("animated jello")
            $("#changingText").html("It's time to");
            $("#continueButton").text("Act Now");
            clicked+=1;
        };


    });
});

function loadMainPage() {

};
