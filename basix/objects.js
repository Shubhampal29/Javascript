const symb = Symbol("namedob")
const human = {
    name:"Shubham" ,
    [symb]:"shubham29",
    age:22,
    height:"5'9",
    degree:"engineering"
}
console.log(human["name"])
console.log(human.name)
console.log(human[symb]) /*symbols can be accesed by this method only*/


