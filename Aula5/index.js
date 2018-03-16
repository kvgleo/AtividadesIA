function f1(){
    var x11 = 0, x12=0;
    var x21 = 1, x22=1;
    var y1=0, y2 = 1;
    var w1=-1, w2=-1;
    var soma, soma2, soma3;
    var y;


        do{
            cont=0;

            soma = (x11*w1) + (x12*w2);
            y = fr(soma);
            if(y==y1){
                cont++;
            }else{
                w1 = w1 +1 *(y1-y) *x11;
                w2 = w2 +1 *(y1-y) *x12;
            }

            soma2 = (x21*w1) + (x22*w2);
            y = fr(soma2);
            if(y==y2){
                cont++;
            }else{
                w1 = w1 +1 *(y2-y) *x21;
                w2 = w2 +1 *(y2-y) *x22;
            }
        }while(cont!=2);

        alert("pesos novos: "+w1+" , "+w2);
        x31 = prompt("Informe a primeira entrada: ");
        x32 = prompt("Informe a segunda entrada: ");
        
        soma3 = (x31*w1) + (x32*w2);
        alert("Sáida FR: "+fr(soma3));
    

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





