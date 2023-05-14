const {faker, FakerError} = require('@faker-js/faker')


class CategoryServices{

  findAll(){
    this.categories;
  }

  findById(id){

  }

  update(){

  }

  delete(){

  }

  generateData(){
  const limit = 10

  for (let index = 0; index < limit; index++) {
    this.categories.push({
      name:faker.commerce.productName(),
      material:faker.commerce.productMaterial()
    })

  }
  }


  constructor(){
    this.categories= [];
    this.generateData();
  }
}


module.exports = CategoryServices;
