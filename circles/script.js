window.onload = function(){
    var container = $("#container");
    let circleWidth = $("#circleWidth");
    let growthSize = $("#growthSize");
    let interval = $("#growInterval");
    let numberOfCircle = $("#numberCircle")
    let start = $("#startBtn");
    let timer;
    let top = 25;
    let left = 50;
    let colors = ["red", "green", "black","cyan", "gray", "purple", "yellow"];

    function resizeCircle(intv, gsize){

        $(".circle").each(function(id, e){
            
            timer = setInterval(() => {
                $(e).css("height", (index, old) => {
                    return parseInt(old) + parseInt(gsize) + "px";
                });
        
                $(e).css("width", (index, old) => {
                    return parseInt(old) + parseInt(gsize) + "px";
                });
        
        
            }, parseInt(intv));
        });
    }

    start.click(() => {
        var pickedColor = '';

        for(let i = 0; i < 6; i++){
            pickedColor = colors[Math.floor(Math.random()*colors.length)];
            container.prepend($("<div>", {
                id: `${i}`,
                class: "circle",
                click: function(){
                    $("div").remove(`#${i}`);
                    clearInterval(timer);
                },
                css: {"position": "absolute",
                    "border": "black solid 1px",
                    "width": circleWidth.val() + "px",
                    "height": circleWidth.val() + "px",
                    "border-radius": 50 + "%",
                    "opacity": 1,
                    "background-color": pickedColor,
                    "top": (top) + "vh",
                    "left": (left - (i + 5)) + "%"
                },
               
            }));
        }

        
        resizeCircle(interval.val(),  growthSize.val());
        
    });
}