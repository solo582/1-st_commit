let object = {
    sun: "yellow",
    moon: "white",
    space: "black",
    rose: "red",
};

object.orange = "orange";

object.trees  = {
    stvol: "brown",
    listva: "green"
};

console.log(object);

for(let key in object) {
    console.log("Свойство массива " + key + " содержит " + object[key]);
}

console.log(Object.keys(object).length)

