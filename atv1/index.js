


function transferir(){
    res1 =  document.getElementById("t1");
    res2 = document.getElementById("t2");
    res3 = document.getElementById("t3");
    let x1 = document.getElementById("x1").value;
    let x2 = document.getElementById("x2").value;
    let y1 = document.getElementById("y1").value;
    let y2 = document.getElementById("y2").value;
    let conta;

    conta = (x1*x2) + (y1*y2);




    res1.textContent = "LR: "+lr(conta);
    res2.textContent = "FR: "+fr(conta);
    res3.textContent = "SF: "+fs(conta);
} 

function lr(v1){

    if (v1 <=0 )
        v1=-1;
    if (v1 > 0)
        v1 = 1;
    return v1;
}

function fr(v1){

    if (v1 <0 )
        v1 = 0;
    if (v1 >= 0  && v1 <= 1)
        v1 = v1;
    if (v1 >1)
        v1 = 1;
    return v1;
}

function fs(v1){

    if (v1 >=0 )
        v1 = 1 -1/(1+v1);
    if (v1 < 0)
        v1 = -1 +1/(1-v1);
    return v1;
}