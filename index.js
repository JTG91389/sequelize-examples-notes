const db = require('./models')
const createdAt = new Date().toISOString();
const updatedAt = new Date().toISOString();

// db.Person.create({
//     firstName: 'Doug 3',
//     lastName: "Roberts 3",
//     email: 'test@test.com',
//     test: 'something',
//     createdAt: createdAt,
//     updatedAt: updatedAt,
// }).then(createDino=>{
//     console.log(createDino)
// }).catch((err) => {
//     console.log(err);
// })

// db.user.findOne()
// .then(user=>{
//     console.log("adding pet to this user:", user.firstName)
//     user.createPet({
//       name: 'Spot',
//       species: 'Mutt Dog'
//     }).then(dog=>{
//       console.log(dog);
//     });
// });

// db.user.bulkCreate([
//     {
//         firstName: 'Larry',
//         lastName: 'Paige',
//         age: 64,
//         email: 'lary@email.com'
//     },
//     {
//         firstName: 'Joel',
//         lastName: 'Gear',
//         age: 31,
//         email: 'joel@email.com'
//     },
//     {
//         firstName: 'Doug',
//         lastName: 'Smith',
//         age: 41,
//         email: 'doug@email.com'
//     }
// ]);

// db.user.findOne({
//     where: { firstName: 'Doug' }
// })
// .then(user=>{
//     console.log("adding pet to this user:", user.firstName)
//     user.createPet({
//         name: "Dog B",
//         species: "Husky",
//         description: 'friendly'
//     }).then(dog=>{
//       console.log(dog);
//     });
// });

// db.pet.findOrCreate({
//     where: {
//         name: "Silly May",
//         species: "Mini Aussie"
//     },
//     defaults: {
//       description: 'Traumatised by a very jealous toy aussie, Simba is very cute but rarely comes out to play'
//     }
//   }).then(([pet, created])=>{
//     db.user.findOne( {
//         where: { firstName: 'Doug' }
//     })
//     .then(user=>{
//       //associate previously loaded pet instance
//       user.addPet(pet);
//       console.log('User ' + user.firstName + ' is the owner of ' + pet.name);
//     })
// })

// db.user.findOne().
// then(user=>{
//     //load pets for this user
//     user.getPets().then(pets=>{
//       //do something with pets here
//       pets.forEach(pet=>{
//           console.log(`${user.firstName}'s pets:`)
//           console.log(pet.name)
//       })
//     })
// })

// db.user.findAll({
//     include: [db.pet]
// }).then(users=>{
//     // users will have a .pets key with an array of pets
//     users.forEach(user=>{
//         console.log(`${user.firstName}'s pets:`)
//         user.pets.forEach(pet=>{
//             console.log(pet.name)
//         })
//     })
// })

// db.pet.findOrCreate({
//     where: {
//       name: "Dog A",
//       species: "Husky"
//     }
//   }).then(function([pet, created]) {
//     // Second, get a reference to a toy.
//     db.toy.findOrCreate({
//       where: {type: "ball", color: "brown"}
//     }).then(function([toy, created]) {
//       // Finally, use the "addModel" method to attach one model to another model.
//       pet.addToy(toy).then(function(relationInfo) {
//         console.log(toy.type, "added to", pet.name);
//       });
//     });
//   });

// db.toy.findOne({
//     where: {type: "ball"}
//   }).then(function(toy) {
//     toy.getPets().then(function(pets) {
//       console.log(pets.length, 'pet(s) love the', toy.color, toy.type)
//     });
//   });

// db.pet.findOne({
//     where: {name: "Dog A"}
//   }).then(function(pet) {
//     pet.getToys().then(function(toys) {
//       toys.forEach(function(toy) {
//         console.log(pet.name, 'loves their', toy.color, toy.type);
//       });
//     });
//   });

// db.pet.findOne({
//     where: {
//       name: "Dog A"
//     },
//     include: [db.user, db.toy]
//   }).then(function(pet) {
//     pet.toys.forEach(function(toy) {
//       console.log(pet.user.firstName + '\'s pet', pet.name, 'loves their', toy.color, toy.type)
//     })
//   })

db.user.findByPk(3, { include: [db.pet] })
.then(function(user) {
  user.pets.forEach(function(pet) {
    pet.getToys().then(function(toys) {
      toys.forEach(function(toy) {
        console.log(user.firstName + '\'s pet', pet.name, 'loves their', toy.color, toy.type)
      })
    })
  })
})