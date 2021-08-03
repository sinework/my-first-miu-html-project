class Bank{
    constructor() {
        this._accounts=[];
    }
    static accountNumber = 1000;

    addAccount(){
        let account= new Account(Bank.accountNumber);
        this._accounts.push(account);
        Bank.accountNumber++;
        return account;
    }
    addSavingsAccount(interest){
        let savings= new SavingsAccount(Bank.accountNumber,interest);
        this._accounts.push(savings);
        Bank.accountNumber++;
        return account;
    }
    addCheckingAccount(overDraft){
       let checking= new CheckingAccount(Bank.accountNumber,overDraft);
       this._accounts.push(checking); 
       Bank.accountNumber++;
       return account;
    }
    closeAccount(number){
        this._accounts.forEach(acc => {
            if(acc.getNumber() === number){
                let index = this._accounts.indexOf(acc);
                this.getAccounts().splice(index, 1);
            }
        });
    }
    endOfMonth(){
        let interestAdded = this.getBalance() * (this.getInterest() / 100);
        
        let result = 'Interest added SavingAccount ' + this.getNumber() + ': balance: ' + this.getBalance() + ' interest: ' + interestAdded;

        this.addInterest();

        return result;
    }

    toString() {
        return "Saving Account " + this.getNumber() + ": balance " + this.getBalance();
    }
    endOfMonth(){
        let report = '';
        this.getAccounts().forEach((acc) => {
            report += acc.endOfMonth() + "\n";
        });

        return report;
    }
}