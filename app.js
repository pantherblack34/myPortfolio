let part1 = document.querySelector('.part1');
let part2 = document.querySelector('.part2');
let part3 = document.querySelector('.part3');
let part4 = document.querySelector('.part4');
let part5 = document.querySelector('.part5');

let prevP0 = document.querySelector('.prev');
let prevP1 = document.querySelector('.prev1');
let prevP2 = document.querySelector('.prev2');
let prevP3 = document.querySelector('.prev3');
let prevP4 = document.querySelector('.prev4');

let nextN0 = document.querySelector('.next');
let nextN1 = document.querySelector('.next1');
let nextN2 = document.querySelector('.next2');
let nextN3 = document.querySelector('.next3');
let nextN4 = document.querySelector('.next4');



function next(){
 let i=0;
    if(i==0){
        part1.style.display = 'none';
        part2.style.display = 'block';
        prevP0.style.display = 'none';
        nextN0.style.display = 'none';    
        prevP1.style.display = 'inline';
        nextN1.style.display = 'inline';
    }

}

function next1(){
    let i=0;
    if(i==0){
        part2.style.display = 'none';
        part3.style.display = 'block';
        prevP1.style.display = 'none';    
        nextN1.style.display = 'none';    
        prevP2.style.display = 'inline';
        nextN2.style.display = 'inline';
    }
}

function next2(){
    let i=0;
    if(i==0){
        part3.style.display = 'none';
        part4.style.display = 'block';
        prevP2.style.display = 'none';    
        nextN2.style.display = 'none';    
        prevP3.style.display = 'inline';
        nextN3.style.display = 'inline';
    }
}

function next3(){
    let i=0;
    if(i==0){
        part4.style.display = 'none';
        part5.style.display = 'block';
        prevP3.style.display = 'none';    
        nextN3.style.display = 'none';    
        prevP4.style.display = 'inline';
        nextN4.style.display = 'inline';
    }
}

function prev1(){
    let i=0;
    if(i==0){
        part1.style.display ='block';
        part2.style.display = 'none';
        prevP1.style.display = 'none';
        nextN1.style.display = 'none';
        prevP0.style.display = 'inline';
        nextN0.style.display = 'inline';

    }
}

function prev2(){
    let i=0;
    if(i==0){
        part2.style.display ='block';
        part3.style.display = 'none';
        prevP2.style.display = 'none';
        nextN2.style.display = 'none';
        prevP1.style.display = 'inline';
        nextN1.style.display = 'inline';

    }
}

function prev3(){
    let i=0;
    if(i==0){
        part3.style.display ='block';
        part4.style.display = 'none';
        prevP3.style.display = 'none';
        nextN3.style.display = 'none';
        prevP2.style.display = 'inline';
        nextN2.style.display = 'inline';

    }
}

function prev4(){
    let i=0;
    if(i==0){
        part4.style.display ='block';
        part5.style.display = 'none';
        prevP4.style.display = 'none';
        nextN4.style.display = 'none';
        prevP3.style.display = 'inline';
        nextN3.style.display = 'inline';
    }
}