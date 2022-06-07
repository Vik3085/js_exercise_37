class BankAccount {
value = 0;
constructor (result) {
    this.value = result;
}
deposit (result) {
    this.value += result;
}
withdraw (result) {
    this.value -= result;
}
view () {
    console.log(this.value);
}
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();

