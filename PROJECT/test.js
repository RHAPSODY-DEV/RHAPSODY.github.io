let counter = 0;
 function startCounting() {
    counter++;
    document.querySelector('h1').innerHTML = counter;
 }
 document.querySelector('button').onclick = startCounting;