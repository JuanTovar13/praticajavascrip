let map = {
    key:"value",
    id: 0,
    name: "Juan Tovar",
    email: "juanstovarm@gmail.com",
    active: true,
    income: 10000,
    transport: {
        model: 2019,
        brand: "nissan",
        kms: 5000,
        forSale: false,
        type: "car"
    },
    pets: [
        {
            name: "dopamina",
            type: "cat"

        },
        { 
            name: "bourbon",
            type: "dog"
        }
    ]
}

let h1Element = document.getElementById("title")
let petContainer = document.getElementById("pets-container")

let pElement = document.getElementById("subtitle")
h1Element.innerHTML= map["name"]
pElement.innerHTML=map ["email"]

let pets  = map ["pets"]
for(let i = 0; i < pets.length; i++){
    let pet = pets[i]
    let petName = pet ["name"]
    petContainer.innerHTML += `
        <p>${petName}</p>
        `
}
