
let zoo = {
  name: "Snake",
  Location: "Pune",
  animals: [
    {species: "Lion",
      Meal: "Meat"
    },
    {
      species: "Panda",
      Meal: "Grass"
    }
  ]
}

// let newobj = Object.assign(zoo)
let newobj = {...zoo}
newobj.animals[0].species = "Tiger"
console.log(zoo)
console.log(newobj)