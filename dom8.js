let div = document.querySelector("#SIvCob");
let target = div.getElementsByTagName("a");
for (let i = 0; i < target.length; i++) {
    if(i%2 == 0){
        target[i].remove();
    }
}