import inquirer from "inquirer";
import Student from "./classes/Student.js";

class Program {
  constructor() {
    (async () => {
      try {
        console.log(
          "Select 1 if you talk to like others or 2 if your rather keep to your self."
        );

        const answer: number = await this.getPersonalityPrompt();

        const student: Student = new Student();
        student.askQuestion(answer);

        console.log(`You are: ${student.getPersonality()}`);
        console.log(`*********************`);
        console.log(`You is your name?`);

        student.name = await this.getStudentName();

        console.log(
          `Your name is: ${
            student.name
          } and you are ${student.getPersonality()} personality.`
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }

  async getPersonalityPrompt(): Promise<number> {
    const answers = await inquirer.prompt({
      name: "answer",
      type: "list",
      message: "Select one Option",
      choices: [0, 1, 2],
      default() {
        return 2;
      },
    });
    return answers.answer;
  }
  async getStudentName(): Promise<string> {
    const answers = await inquirer.prompt({
      name: "answer",
      type: "input",
      message: "Enter your name",
      default() {
        return "Ameen Ilyas";
      },
    });
    return answers.answer;
  }
}
const program = new Program();
