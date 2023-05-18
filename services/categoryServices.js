const {faker, FakerError} = require('@faker-js/faker')


class CategoryServices{

  findAll(){
    return this.categories;
  }

  findById(id){

  }

  save(data){
    const category={
      id:faker.datatype.number({ max: 100 }),
      ...data
    }

    this.categories.push(category);
    return category;
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
