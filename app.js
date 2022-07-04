const form = document.querySelector("form");
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let a =parseInt(document.getElementById("a").value);
    let b =parseInt(document.getElementById("b").value);
    let test = document.getElementById("test");
    let c = 0
    if (isNaN(a) || isNaN(b)) {
        test.innerHTML = "Inputs not valid !"
    } else {
        c=a;
        a=b
        b=c
        test.innerHTML="le champs 1 est : " + a + '<br/>' + "le champs 2 : " + b
    }
})