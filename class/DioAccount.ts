export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  // with no need to change name this set becomes useless
  // setName = (name: string): void => {
  //   this.name = name;
  //   console.log("Nome alterado com sucesso!");
  // };

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
      console.log(`Deposito de R$${value} realizado com sucesso!`);
    }
  };

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance > value) {
      this.balance -= value;
      console.log(`Saque de R$${value} realizado com sucesso!`);
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
