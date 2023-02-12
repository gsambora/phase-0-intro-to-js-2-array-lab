
var cats = ["Milo", "Otis", "Garfield"];
console.log(cats)

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name) {
    var newcats = [...cats, name];
    console.log(newcats);
    return newcats;
}

function prependCat(name) {
    var newcats = [name, ...cats];
    return newcats;
}

function removeLastCat(){
    var newcats = cats.slice(0,-1);
    console.log(newcats);
    return newcats;
}

function removeFirstCat(){
    var newcats = cats.slice(1);
    return newcats;
}