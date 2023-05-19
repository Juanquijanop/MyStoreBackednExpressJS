const { faker } = require('@faker-js/faker');


class ProductServices{

  generateData(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id:faker.datatype.number({ max: 100 }) ,
        name: faker.commerce.productName() ,
        price: faker.commerce.price()
      });
    }
  }

  save(data){
    const product={
      id:faker.datatype.number({ max: 100 }),
      ...data
    }

    this.products.push(product);
    return product;
  }

  async findAll(){

    return this.products;

  }

  async findById(id){

    return this.products.find(item => item.id == id)

  }

  async update(id, data){

    index = this.products.findIndex(item => item.id == id);
    if(user === -1){
      throw new Error("La operacion ha fallado")
    }
    const product = this.products[index]
    this.products[index] ={...product,...data}
    return this.products[index]


  }

  async delete(id){

    index = this.products.findIndex(item => item.id == id);
    if(user === -1){
      throw new Error("La operacion ha fallado")
    }
    this.products.splice(index,1);
    return {id}

}

  constructor(){
    this.products=[];
    this.generateData();
  }

}


module.exports = ProductServices;
