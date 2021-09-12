var faker = require('faker');

var database = { superheroes: [] };

for (var i = 1; i <= 50; i++) {
    database.superheroes.push({
        id: i,
        name: faker.lorem.word(),
        short_name: faker.lorem.word(),
        alt_name: faker.lorem.word(),
        role: faker.lorem.word(),
        new_role: faker.lorem.word(),
        type: faker.lorem.word(),
        release_date: faker.datatype.datetime(),
        rework_date: faker.datatype.datetime(),
        attribute_id: faker.datatype.number(),
        translations:[
          translation1=faker.lorem.word(),
          translation2=faker.lorem.word(),
          translation3=faker.lorem.word(),
          translation4=faker.lorem.word(),
          translation5=faker.lorem.word()
        ]
    });
}

console.log(JSON.stringify(database));
