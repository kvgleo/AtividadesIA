
function verResp(){
    
    alert("1 entrada: \n LR: "+formulaLr(0,0)+" \n FR: "+formulaFr(0,0)+"\n FS: "+formulaFs(0,0));
    alert("2 entrada: \n LR: "+formulaLr(0,1)+" \n FR: "+formulaFr(0,1)+"\n FS: "+formulaFs(0,1));
    alert("3 entrada: \n LR: "+formulaLr(1,0)+" \n FR: "+formulaFr(1,0)+"\n FS: "+formulaFs(1,0));
    alert("4 entrada: \n LR: "+formulaLr(1,1)+" \n FR: "+formulaFr(1,1)+"\n FS: "+formulaFs(1,1));

} 

function formulaLr(x,y){

    let res1, res2, res3, res4, res5, res6;

    res1 = (x * 2) + (y*-2);
    res2 = lr(res1);

    res3 = (x * -2) + (y * 2);
    res4 = lr(res3);

    res5 = (res2 * 1) + (res4 * 1);
    res6 = lr(res5);

    return res6;
}

function formulaFr(x,y){
      let res1, res2, res3, res4, res5, res6;

    res1 = (x * 2) + (y*-2);
    res2 = fr(res1);

    res3 = (x * -2) + (y * 2);
    res4 = fr(res3);

    res5 = (res2 * 1) + (res4 * 1);
    res6 = fr(res5);

    return res6;

}

function formulaFs(x,y){
      let res1, res2, res3, res4, res5, res6;

    res1 = (x * 2) + (y*-2);
    res2 = fs(res1);

    res3 = (x * -2) + (y * 2);
    res4 = fs(res3);

    res5 = (res2 * 1) + (res4 * 1);
    res6 = fs(res5);

    return res6;

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