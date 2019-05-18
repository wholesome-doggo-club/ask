let name = ['Victor', 'Jeff', 'Steven', 'Johnson', 'Wayne', 'Brandon', 'Tiffany', 'James', 'Holly', 'Andy', 'Robin', 'David', 'Barack'];
let sex = ['M', 'F'];
let location = ["Los Angeles, CA", "Maui, HI"];
let breed = ['Poodle', 'German Shepherd', 'Golden Retriever', 'Maltese', 'Unknown', 'Pitbull'];
let size = ['Huge', 'Big', 'Medium', 'Small', 'Tiny'];
let coatLength = ['Long', 'Short'];
let vaccinations = ['Vaccinated', 'Partially Vaccinated', 'Not Vaccinated'];
let goodInHomeWith = ['Loves babies!', 'Will eat your cats', 'Sharks'];
let health = ['Great', 'Needs attention'];
let adoptionFee = [-50, 20, 450, 600, 3000];
let ageInWeeks;
let description = ['super cute', 'sassy', 'kinda mean', 'handsome'];
let shelter = 'LA homeless shelter'

const puppyArray = [];
for (let i = 0; i < 100; i++) {
  let puppyObject = {
    name: name[Math.floor(Math.random() * name.length)],
    sex: sex[Math.floor(Math.random() * sex.length)],
    location: location[Math.floor(Math.random() * location.length)],
    breed: breed[Math.floor(Math.random() * breed.length)],
    size: size[Math.floor(Math.random() * size.length)],
    coatLength: coatLength[Math.floor(Math.random() * coatLength.length)],
    vaccinations: vaccinations[Math.floor(Math.random() * vaccinations.length)],
    goodInHomeWith: goodInHomeWith[Math.floor(Math.random() * goodInHomeWith.length)],
    health: health[Math.floor(Math.random() * health.length)],
    adoptionFee: adoptionFee[Math.floor(Math.random() * adoptionFee.length)],
    ageInWeeks: Math.floor(Math.random() * 520),
    description: description[Math.floor(Math.random() * description.length)],
    shelter: 'LA homeless shelter'
  }
}

//run this in repl.it