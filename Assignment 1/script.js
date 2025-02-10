//Q1 print 

// *
// * *
// * * *
// * * * *
// * * * * *

let n=5;
for(i=1;i<=n;i++){
    let star=' ';
for(j=1;j<=i;j++){
    star+=('* ');
}
    console.log(star);
}

//print

// * * * * *
// * * * *
// * * *
// * *
// *
   
let m=1;
for(i=5;i>=m;i--){
    let star=' ';
for(j=1;j<=i;j++){
    star+=('* ');
}
    console.log(star);
}