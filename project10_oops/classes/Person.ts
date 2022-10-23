interface PersonInterface {
  //   askQuestion: number;
  // getPersonality: string;
  askQuestion(answer: number): void;
  getPersonality(): string;
}

export default class Person implements PersonInterface {
  private personality: string;

  constructor() {
    this.personality = "Mystery";
  }

  /**
   * askQuestion
   */

  //   Getter and Setter

  //   public set askQuestion(answer: number) {
  //     if (answer === 1) this.personality = "Extrovert";
  //     else this.personality = "Introvert";
  //   }
  //   public get getPersonality(): string {
  //     return this.personality;
  //   }

  public askQuestion(answer: number): void {
    if (answer === 1) this.personality = "Extrovert";
    else if (answer === 2) this.personality = "Introvert";
  }

  public getPersonality(): string {
    return this.personality;
  }
}
