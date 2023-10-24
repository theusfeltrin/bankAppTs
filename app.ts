import { BonusAccount } from "./class/BonusAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(
  44499922277,
  "Matheus",
  128965
);
console.log(peopleAccount);
peopleAccount.getDoc();
peopleAccount.getName();
peopleAccount.deposit(10000);
peopleAccount.withdraw(500);
peopleAccount.getBalance();

const companyAccount: CompanyAccount = new CompanyAccount(
  "Tester Inc.",
  453278
);
console.log(companyAccount);
companyAccount.getName();
companyAccount.deposit(100000);
companyAccount.withdraw(95000);
companyAccount.getBalance();
companyAccount.getLoan(15000);

const bonusAccount: BonusAccount = new BonusAccount("Bonus Testes", 657812);
console.log(bonusAccount);
bonusAccount.getName();
bonusAccount.depositBonus(100);
bonusAccount.withdraw(95);
bonusAccount.getBalance();
