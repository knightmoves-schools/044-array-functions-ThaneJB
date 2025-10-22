var automobiles = ["car", "truck", "motorcycle"];
automobiles.push("airplane", "skateboard");
automobiles.unshift("bike", "helicopter");

var automobilesCopy = automobiles;
automobilesCopy.pop();
automobilesCopy.shift();

document.getElementById("result").innerHTML = automobiles;
