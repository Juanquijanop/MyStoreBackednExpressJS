const {faker, FakerError} = require('@faker-js/faker')


class UserServices{

  findAll(){
    return this.users;
  }

  findById(name){

    return this.users.find(userName= users.name=name)
  }

  save(data){
    const user={
      id:faker.datatype.number({ max: 100 }),
      ...data
    }

    this.users.push(user);
    return user;
  }

  update(){

  }

  delete(){

  }

  generateData(){



    for (let index = 0; index < 10; index++) {
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
