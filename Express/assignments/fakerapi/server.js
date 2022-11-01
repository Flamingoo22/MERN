const express = require("express");
const app = express();
const port = 8000;
const fakerDb = require('@faker-js/faker');
const uuid = require("react-uuid")

const faker = fakerDb.faker;

const createUser =() =>{
    const user = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: uuid()
    };
    return user;
}
const createCompany =() =>{
    const company = {
        _id : uuid(),
        name : faker.company.companyName(),
        address : {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    };
    return company;
}
const user = createUser();
const company = createCompany();

console.log(user)
console.log(company)

app.get("/api/users/new", (req, res) => {
    res.json({user});
});

app.get("/api/companies/new", (req, res) => {
    res.json({company});
});

app.get("/api/user/company", (req, res) => {
    res.json({company, user});
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );

