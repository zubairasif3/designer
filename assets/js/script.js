$(".panel-nav").click(function(){
    var data_target = $(this).attr("data-target");
    $("body").toggleClass("panel-show");
    $(data_target).toggleClass("show");
})
$("body .panel-close").click(function(){
    $(".cart-panel-item").removeClass("show");
    $("body").removeClass("panel-show");
    $("body").removeClass("sidebar-show");
})

// sidebar show
$("#sidebar-toggle").click(function(){
    $("body").toggleClass("sidebar-show");
})

$(".close-sidebar").click(function(){
    $("body").removeClass("sidebar-show");
})



// description line check
$(".product-section .product-card .description").each(function() {
    if ($(this).height() > 50) {
        foo(this);
    }
})

function foo(substringElement){
    var d = substringElement;
    var t = d.innerHTML;
    var w = t.split(' ');       
    d.innerHTML = w[0];
    var height = d.clientHeight;
    let lineCount = 0;
    for(var i = 1; i < w.length; i++){
        d.innerHTML = d.innerHTML + ' ' + w[i];
        if(d.clientHeight > height){
            height = d.clientHeight;
            lineCount++;
            if (lineCount == 2) {
                d.innerHTML = d.innerHTML.substring(0, d.innerHTML.lastIndexOf(" "));
                d.innerHTML = d.innerHTML.substring(0, d.innerHTML.lastIndexOf(" "));
                d.innerHTML += " ..."; 
                break;
            }
        }
    }
}