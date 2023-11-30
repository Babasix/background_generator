// console.log(document);

//  récupération de l'élément input par son id secondcolor 
const firstColorElt = document.getElementById('fisrtColor');
console.log(firstColorElt);

//  récupération de l'élément input par son id secondcolor 
const secondColorElt = document.getElementById('secondColor');

// récupération de l'élément body
const bodyElt = document.querySelector('body');
console.log(bodyElt);

firstColorElt.addEventListener('input', function(){
    //console.log(firstColorElt.value);
    bodyElt.style = "background : linear-gradient(to left, "+firstColorElt.value+", "+secondColorElt.value+")";
});

secondColorElt.addEventListener('input', function() {
    //console.log(secondColorElt.value);
    bodyElt.style = `background : linear-gradient(to left,${firstColorElt.value}, ${secondColorElt.value});`
});
