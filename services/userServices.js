const {faker, FakerError} = require('@faker-js/faker')


class UserServices{

  findAll(){
    this.users;
  }

  findById(name){

    this.users.find(userName= users.name=name)
  }

  update(){

  }

  delete(){

  }

  generateData(){

    const limit = 5

    for (let index = 0; index < limit; index++) {
      this.users.push({
        name:faker.name.firstName(),
        lastName:faker.name.lastName(),

      })

    }
  }


  constructor(){
    this.users= [];
    this.generateData();
  }
}


module.exports = UserServices;
