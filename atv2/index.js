function gerar(){

    let txt = document.getElementById("t1").value;
    let div1 = document.getElementById("div1");
    let i;
    let v = []; 
    let soma =0;
    v[1] = 0;

    for( i=1; i<=txt; i++){
        let x = prompt("Informe o X da entrada: " +i);
        let w = prompt ("Informe o W da entrada: "+i);
        soma += (x*w);
    }

    alert("LR: "+lr(soma)+"\nFR: "+fr(soma)+"\nFS: "+fs(soma))

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