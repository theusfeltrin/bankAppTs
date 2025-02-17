import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    this.deposit(value);
    console.log(`Emprestimo realizado com sucesso!`);
  };
}
