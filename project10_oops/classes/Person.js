export default class Person {
    personality;
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
    askQuestion(answer) {
        if (answer === 1)
            this.personality = "Extrovert";
        else if (answer === 2)
            this.personality = "Introvert";
    }
    getPersonality() {
        return this.personality;
    }
}
