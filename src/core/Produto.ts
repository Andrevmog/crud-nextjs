export default class Produto{
    #id: number
    #image: string
    #name: string
    #categories: string
    #price: number
    #brand: string

    constructor(id: number,image: string,name: string,categories: string,price: number,brand: string){
        this.#id = id
        this.#image = image
        this.#name = name
        this.#categories = categories 
        this.#price = price 
        this.#brand = brand
    }

    static vazio(){
        return new Produto(0,'','','',0,'')
    }

    get id(){
        return this.#id
    }

    get image(){
        return this.#image
    }

    get name(){
        return this.#name
    }

    get categories(){
        return this.#categories
    }

    get price(){
        return this.#price
    }

    get brand(){
        return this.#brand
    }
}

