const express = require('express');
const app = express()
const faker = require('faker')

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
    }
}

class Company {
    constructor() {
        this.name = faker.company.companyName();
    }
}

app.use(express.urlencoded({extended:true}))
app.use(express.json());
//
app.get("/api/users/new", (req, res) => {
    res.json(new User())
})
app.get("/api/companies/new", (req, res) => {
    res.json(new Company())
})
app.get("/api/user/company", (req, res) => {
    res.json({
        user: new User(),
        company: new Company()
    })
})
app.listen(8000);