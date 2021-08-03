class Account extends Account{
    constructor(number, balance, interest){
        super(number);
        this._interest=interest;
    }
 getInterest(){
     return this._interest;
 }   
 setInterest(interestRate){
     this._interest=interestRate;
 }
 addInterst(){
     let interstGotten=(this.getBalance*this._interest)/100;
    this.deposit(interstGotten);
    }
    toString(){
        return "Account " + this._number + ": balance " + this._balance;
    }

}