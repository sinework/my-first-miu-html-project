class SavingsAccount extends Account{
    constructor(number, interest){
        super(number);
        this._interest=interest;
    }
 getInterest(){
     return this._interest;
 }   
 setInterest(interestRate){
     this._interest=interestRate;
 }
 addInterest(){
     let interestGotten=this.getBalance()*(this.getInterest()/100);
    this.deposit(interestGotten);
    }
    toString(){
        return "Account " + this._number + ": balance " + this._balance;
    }
    endOfMonth(){
        let interestAdded = this.getBalance() * (this.getInterest() / 100);
        
        let result = 'Interest added SavingAccount ' + this.getNumber() + ': balance: ' + this.getBalance() + ' interest: ' + interestAdded;

        this.addInterest();

        return result;
    }

   

}
