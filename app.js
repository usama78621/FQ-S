var que = document.getElementsByClassName("text");
var i;

for (i = 0; i<que.length;i++) {
    que[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var panel=this.nextElementSibling;

        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}