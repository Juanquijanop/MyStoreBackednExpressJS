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

  findAll(){

    return this.products;

  }

  findById(id){

    return this.products.find(item => item.id == id)

  }

  update(){


  }

  delete(){

  }

  constructor(){
    this.products=[];
    this.generateData();
  }

}


module.exports = ProductServices;
