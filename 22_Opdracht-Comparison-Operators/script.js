const age = 45;
const isFemale = true;
const driverStatus = "bob";
const name = "Bram";
const totalAmount = 23;

if (age >= 18) {
    console.log("Je mag naar binnen.");
} else {
    console.log("Nope, je mag niet naar binnen.");
}
if (age >= 18 && age <= 25) {
    console.log("En je krijgt 50% korting!");
} else {
    console.log("Maar krijgt geen korting.");
}

if (isFemale) {
    console.log("En je ticket zegt dat je een vrouw bent!");
} else {
    console.log(
        "Maar je hebt aangegeven op je ticket dat je een man bent, dus je mag toch niet naar binnen"
    );
}

if (driverStatus === "bob") {
    console.log("Je bent de bob, je mag autorijden");
} else {
    console.log("Je bent geen bob, hier met die autosleutels");
}

if (name == "Bram" || name == "Sarah") {
    console.log("Je krijgt een gratis biertje");
} else {
    console.log("Je krijgt geen gratis biertje");
}

if (totalAmount > 99) {
    console.log("Je krijgt een gratis flesje champagne.");
} else if (totalAmount > 49) {
    console.log("Je krijgt een gratis portie nachos.");
} else if (totalAmount > 24) {
    console.log("Je krijgt gratis (vega)bitterballen.");
} else {
    console.log("Bij meer dan 24 biertjes krijg je gratis (vega)bitterballen!");
}



