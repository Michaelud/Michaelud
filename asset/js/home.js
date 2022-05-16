setTimeout(() => {
    var preloader = document.querySelector(".loader_bg");
function myFunction(){
    preloader.style.display = "none"
}
myFunction();
}, 1000);

window.addEventListener("scroll", function(){
    if((document.body.scrollTop >= 800) || (document.documentElement.scrollTop >= 800)){
        document.querySelector(".totop").style.display = "block";
    }else{
        document.querySelector(".totop").style.display = "none";
    }
});
window.addEventListener("scroll", function(){
    if((document.body.scrollTop >= 100) || (document.documentElement.scrollTop >= 100)){
        document.querySelector("#btn").style.display = "block";
    }else{
        document.querySelector("#btn").style.display = "none";
    }
});


document.querySelector(".totop").addEventListener("click", function(){

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});

 $("#biology .row .col-lg-3").slice(0, 4).show();
 $("#btn").on("click", function(){
    $("#biology .row .col-lg-3").toggle()
     $("#biology .row .col-lg-3:hidden").slice(0, 4).slideDown(1000);
     if($("#biology .row .col-lg-3:hidden").length = 0){
         $("#btn").fadeOut("slow")
     }
 })
 $("#chemistry .row .col-lg-3").slice(0, 4).show();
 $("#ctn").on("click", function(){
    $("#chemistry .row .col-lg-3").toggle()
     $("#chemistry .row .col-lg-3:hidden").slice(0, 4).slideDown(1000);
     if($("#chemistry .row .col-lg-3:hidden").length = 0){
         $("#ctn").fadeOut("slow")
     }
 })
 $("#math .row .col-lg-3").slice(0, 4).show();
 $("#mtn").on("click", function(){
    $("#math .row .col-lg-3").toggle()
     $("#math .row .col-lg-3:hidden").slice(0, 3).slideDown(1000);
     if($("#math .row .col-lg-3:hidden").length = 0){
         $("#mtn").fadeOut("slow")
     }
 })
 $("#computer .row .col-lg-3").slice(0, 4).show();
 $("#stn").on("click", function(){
    $("#computer .row .col-lg-3").toggle()
     $("#computer .row .col-lg-3:hidden").slice(0, 4).slideDown(1000);
     if($("#computer .row .col-lg-3:hidden").length = 0){
         $("#stn").fadeOut("slow")
     }
 })
 $(document).ready(function(){
 $("#physical .row .col-lg-3").slice(0, 4).show();
 $("#ptn").on("click", function(){
       $("#physical .row .col-lg-3").toggle()
     $("#physical .row .col-lg-3:hidden").slice(0, 4).slideDown(1000);
     if($("#physical .row .col-lg-3:hidden").length = 0){
         $("#ptn").fadeOut("slow")
         
     }
 })
})
 $(document).ready(function(){
 $("#physics .row .col-lg-3").slice(0, 4).show();
 $("#ytn").on("click", function(){
       $("#physics .row .col-lg-3").toggle()
     $("#physics .row .col-lg-3:hidden").slice(0, 4).slideDown(1000);
     if($("#physics .row .col-lg-3:hidden").length = 0){
         $("#ytn").fadeOut("slow")
         
     }
 })
})

