    const a=20;
    const b= 30;
    const c=40;


 if (a>b && a>c) {
    if (b>c) {
        console.log(a ,b ,c);
    }else{
        console.log(a ,c , b);
    }
    
}else if(b>c && a>c){
    if (a>c) {
        console.log(b,a,c);
    }else{
        console.log(b ,c,a);
    }
}
else{
    if (a>b) {
        console.log(c ,a ,b);
    }else{
        console.log(c ,b ,a);
    }
}


 //smallest

 const d =20;
 const e =200;
 const f =250;
 if (d<e && d<f) {
     if (e<f) {
         console.log(d ,e ,f);
     }else{
        console.log(d ,f ,e); 
     }
 }else if(e<d && e<f){
     if(d<f){
         console.log(e , d ,f);
     }else{
         console.log(e , f , d);
     }
 }
 else{
     if (d<e) {
         console.log(f, d, e);
     }else{
         console.log(f , e , d);
     }
 }