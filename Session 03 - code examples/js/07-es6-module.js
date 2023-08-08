import { name, age } from "../person.js";

document.getElementById("per").innerHTML = "My name is " + name;
document.getElementById("per").innerHTML += ", I am " + age + ".";