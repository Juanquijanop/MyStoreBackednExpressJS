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

  update(id, data){

    index = this.categories.findIndex(item => item.id == id);
    if(user === -1){
      throw new Error("La operacion ha fallado")
    }
    const category = this.categories[index]
    this.categories[index] ={...category,...data}
    return this.categories[index]


  }

  delete(id){

    index = this.categories.findIndex(item => item.id == id);
    if(user === -1){
      throw new Error("La operacion ha fallado")
    }
    this.categories.splice(index,1);
    return {id}

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
