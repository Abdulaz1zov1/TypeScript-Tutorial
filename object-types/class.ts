class account {
    name: string
    balance: number

    constructor(name: string, balance: number){
        this.name = name
        this.balance = balance
    }
}
let values = new account("oyatillo", 1000)
console.log(values.name)