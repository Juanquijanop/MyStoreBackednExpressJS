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

  update(id, data){

    index = this.users.findIndex(item => item.id == id);
    if(user === -1){
      throw new Error("La operacion ha fallado")
    }
    const user = this.users[index]
    this.users[index] ={...user,...data}
    return this.users[index]


  }

  delete(id){

      index = this.users.findIndex(item => item.id == id);
      if(user === -1){
        throw new Error("La operacion ha fallado")
      }
      this.users.splice(index,1);
      return {id}

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
