class CheckingAccount extends Account{
    constructor(number, overDraft) {
        super(number);
        this._overDraft=overDraft;
    }
    getOverDraft(){
        return this._overDraft;
    }
    setOverDraft(limit){
        this._overDraft=limit;
    }
    withdraw(amount){
        if(amount<(this.getOverDraft()+this.getBalance())){
            this._balance-=amount;
        }
        else throw Error("Insufficient funds");
    }
    toString() {
        return "Account " + this._number + ": balance " + this._balance;
    }
    endOfMonth(){
        let result = '';
        if(this.getBalance() < 0){
            result = "Warning, low balance CheckingAccount " + this.getNumber() + ": balance: " +
                        this.getBalance() + " overdraft limit: " + this.getOverdraft();
        }

        return result;
    }
}