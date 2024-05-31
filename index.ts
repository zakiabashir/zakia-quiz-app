#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";



console.log(chalk.bold.blueBright("\n\t\t\t\t<<<<<<<<<<<<<<<<<  ZAKIA-QUIZ-APP <<<<<<<<<<<<<<<<<<<<"));

console.log(chalk.bold.cyanBright("\n\t\t\t\t<<<<<<<<<<<<<<<<< REGISTRATION <<<<<<<<<<<<<<<<<<<<"));

let loop = true;
let storeData = [];   //Student all data stored
let score: number = 0
let selectRollNo = 4001;
let storeResult: number;
let pushScore = []    //Number of result store in this array

while (loop) {

    score = 0  //Yaha score 0 is liya likha ha q ka jub doobara loop start hoga to score ma jitne value store hoge wo reset hojaige


    let choices = await inquirer.prompt([
        {
            type: "list",
            name: "select",
            message: "Select one",
            choices: ["1: => Registration", "2: => Admit Card", "3: => Search Result", "4: => List Of Result", "5: => Exit"]
        }
    ])

    class Result {
        name: string;
        email: string;
        password: number;
        course: string[];
        timing: number;
        totalScore: number;
        rollNo: number;

        constructor(name: string, email: string, password: number, course: string[], timing: number, totalScore: number) {
            this.name = name;
            this.email = email;
            this.password = password;
            this.course = course;
            this.timing = timing;
            this.totalScore = score;
            this.rollNo = selectRollNo++
        }
    }

    //=============================================== Registration =====================================================
    if (choices.select === "1: => Registration") {

        const enter = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Name",
                validate: function (value) {
                    if (!value.trim()) {
                        return (chalk.bold.redBright(("Please enter your name.")));
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "email",
                message: "Email",
                validate: function (value) {
                    if (!value.trim()) {
                        return (chalk.bold.redBright(("Please enter your email.")));
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "passsword",
                message: "Password",
                validate: function (value) {
                    if (!value.trim()) {
                        return (chalk.bold.redBright(("Please enter your password.")));
                    }
                    return true;

                }
            },
            {
                type: "list",
                name: "course",
                message: "Choose Your Course",
                choices: ["WordPress", "Web Developnment", "Artifical Intelligence", "Machine Learning"]
            },

            {
                type: "list",
                name: "timing",
                message: "Select Time",
                choices: ["Monday 9:00am to 12:00pm", "Monday 2:00pm to 5:00pm",
                    "Thursday 9:00am to 12:00pm", "Thursday 2:00pm to 5:00pm",
                    "Saturday 9:00am to 12:00pm", "Saturday 2:00pm to 5:00pm"]
            }
        ])


        let p1 = new Result(enter.name, enter.email, enter.passsword, enter.course, enter.timing, enter.totalScore);
        storeData.push(p1)


        console.log(chalk.bold.cyanBright("\n<<<<<<<<<<<<<<<<< Registration Complete <<<<<<<<<<<<<<<<<<<<"));

        //========================================= Quiz ==============================================================

        console.log(chalk.bold.redBright("\n\n<<<<<<<<<<<<<<<<<<<<< Start Quiz <<<<<<<<<<<<<<<<<<<<<<<<<"));

        console.log(chalk.bold.yellowBright("\n\n<<<<<<<<<<<<<<<<< You have 3 categories quiz test <<<<<<<<<<<<<<<<<<<"));


        console.log(chalk.bold.greenBright("\n1:=> English \n2: => General Knowledge \n3: => typescript \n\n"));


        console.log(chalk.bold.yellowBright("<<<<<<<<<<<<<<<<<<<<<< First Categorie English <<<<<<<<<<<<<<<<<<<<<<<<"));


        const English = await inquirer.prompt([
            {
                type: "list",
                name: "question1",
                message: '\nWhat is the plural of "child"?',
                choices: ["a)Childs", "b)Childen", "c)Children", "d)Childers"]   //children
            },
            {
                type: "list",
                name: "question2",
                message: 'Which of the following is a synonym for "happy"?',
                choices: ["a)Sad", "b)Joyful", "c)Angry", "d)Gloomy"]           //joyful
            },
            {
                type: "list",
                name: "question3",
                message: 'What is the past tense of "go"?',
                choices: ["a)Went", "b)Gone", "c)Goed", "d)Going"]      //went
            },
            {
                type: "list",
                name: "question4",
                message: 'Which of the following is an example of conjuction?',
                choices: ["a)And", "b)Run", "c)Quickly", "d)Happy"]         //and
            },
            {
                type: "list",
                name: "question5",
                message: 'What is the comparative form of the adjective "good"?',
                choices: ["a)Well", "b)Best", "c)Better", "d)Gooder"]            //better
            }
        ])

        console.log(chalk.bold.yellowBright("\n<<<<<<<<<<<<<<<<<<<<<< Second Categorie G.K <<<<<<<<<<<<<<<<<<<<<<<<"));

        const GeneralKnowledge = await inquirer.prompt([
            {
                type: "list",
                name: "question6",
                message: '\nWhat is the capital of Australia?',
                choices: ["a)Sydney", "b)Melbourne", "c)Canberra", "d)Brisbane"]    //Canberra
            },
            {
                type: "list",
                name: "question7",
                message: 'What is the longest river in the world?',
                choices: ["a)Amazon River", "b)Nile River", "c)Mississippi River", "d)Yangtze River"]    //Nile
            },
            {
                type: "list",
                name: "question8",
                message: 'What is the chemical symbol for water?',
                choices: ["a)C2O", "b)NaCl", "c)O2", "d)H2O"]    //H2O
            },
            {
                type: "list",
                name: "question9",
                message: 'What is the largest planet in our solar system?',
                choices: ["a)Earth", "b)Jupiter", "c)Saturn", "d)Mars"]   //Jupiter
            },
            {
                type: "list",
                name: "question10",
                message: 'Is cucumber?',
                choices: ["a)Fruit", "b)Vegetable", "c)Dry Fruit", "d)Berry"]   //Fruit
            },
            
        ])
        console.log(chalk.bold.yellowBright("\n<<<<<<<<<<<<<<<<<<<<<< Third Categorie Typescript <<<<<<<<<<<<<<<<<<<<<<<<"));
        // MCQS INQUIRER PROMPTS
  const typescript = await inquirer.prompt([
    // MCQS = 1
    {
      name: "ques1",
      type: "list",
      choices: ["Java Style", "Just Script", "JavaScript", "TypeScript"],
      message: "WHAT DOES JS STAND FOR ?",
    },
    // MCQS = 2
    {
      name: "ques2",
      type: "list",
      choices: ["push()", "add()", "append()", "insert()"],
      message:
        "Which method is used to add an element to the end of an array in JavaScript?",
    },
    // MCQS = 3
    {
      name: "ques3",
      type: "list",
      choices: [
        "It's a superset of JavaScript",
        "It's a subset of JavaScript",
        "It's a completely different language from JavaScript",
        "It's an extension of Java",
      ],
      message: "Which of the following is true about TypeScript?",
    },
    // MCQS = 4
    {
      name: "ques4",
      type: "list",
      choices: ["No type", "Any type", "Null type", "Undefined type"],
      message: 'In TypeScript, what does the "any" type represent?',
    },
    // MCQS = 5
    {
      name: "ques5",
      type: "list",
      choices: ["func", "function", "def", "fn"],
      message: "Which keyword is used to define a function in JavaScript?",
    },
    // MCQS = 6
    {
      name: "ques6",
      type: "list",
      choices: ["==", "===", "=", "!=="],
      message: "Which operator is used for strict equality in JavaScript?",
    },
    // MCQS = 7
    {
      name: "ques7",
      type: "list",
      choices: ["//", "#", "/*", "////"],
      message: "Which symbol is used for single-line comments in JavaScript?",
    },
    // MCQS = 8
    {
      name: "ques8",
      type: "list",
      choices: ["Interfaces", "Classes", "Generics", "Arrow functions"],
      message:
        "Which of the following is a feature of TypeScript but not JavaScript?",
    },
    // MCQS = 9
    {
      name: "ques9",
      type: "list",
      choices: ["TypeSecure", "TypeScript", "Python", "Javascript"],
      message: "What does TS stand for?",
    },
    // MCQS = 10
    {
      name: "ques10",
      type: "list",
      choices: ["var", "let", "const", "All of the above"],
      message: "Which keyword is used to declare variables in JavaScript?",
    },
  ]);


        //Quiz English Answers condition

        if (English.question1 === "c)Children") {
            console.log(chalk.yellow.bold.italic("\n\t\t   MCQS 1:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score ++;
          } else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 1"));
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
            console.log(
              chalk.red.bold.italic(`\t        YOU CHOOSE: ${English.ques1}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "Children"`)
            );
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
          }
        if (English.question2 === "b)Joyful") {
            console.log(chalk.yellow.bold.italic("\n\t\t   MCQS 2:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score ++;
          } else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 2"));
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
            console.log(
              chalk.red.bold.italic(`\t        YOU CHOOSE: ${English.question2}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "Joyfull"`)
            );
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
          }
        if (English.question3 === "a)Went") {
            console.log(chalk.yellow.bold.italic("\n\t\t   MCQS 3:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score ++;
          } else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 3"));
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
            console.log(
              chalk.red.bold.italic(`\t        YOU CHOOSE: ${English.question3}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "Went"`)
            );
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
          }
        if (English.question4 === "a)And") {
            console.log(chalk.yellow.bold.italic("\n\t\t   MCQS 4:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score ++;
          } else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 4"));
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
            console.log(
              chalk.red.bold.italic(`\t        YOU CHOOSE: ${English.question4}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "And"`)
            );
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
          }
        if (English.question5 === "c)Better") {
            console.log(chalk.yellow.bold.italic("\n\t\t   MCQS 5:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score ++;
          } else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 5"));
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
            console.log(
              chalk.red.bold.italic(`\t        YOU CHOOSE: ${English.question5}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "Better"`)
            );
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
          }
        //   G.N Answer Condition
        if (GeneralKnowledge.question6 === "c)Canberra") {
            console.log(chalk.yellow.bold.italic("\n\t\t   MCQS 6:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score ++;
          } else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 6"));
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
            console.log(
              chalk.red.bold.italic(`\t        YOU CHOOSE: ${GeneralKnowledge.question6}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "Canberra"`)
            );
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
          }
        if (GeneralKnowledge.question7 === "b)Nile River") {
            console.log(chalk.yellow.bold.italic("\n\t\t   MCQS 7:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score ++;
          } else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 7"));
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
            console.log(
              chalk.red.bold.italic(`\t        YOU CHOOSE: ${GeneralKnowledge.question7}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "Nile River"`)
            );
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
          }
        if (GeneralKnowledge.question8 === "d)H2O") {
            console.log(chalk.yellow.bold.italic("\n\t\t   MCQS 8:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score ++;
          } else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 8"));
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
            console.log(
              chalk.red.bold.italic(`\t        YOU CHOOSE: ${GeneralKnowledge.question8}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "H2O"`)
            );
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
          }
        if (GeneralKnowledge.question9 === "b)Jupiter") {
            console.log(chalk.yellow.bold.italic("\n\t\t   MCQS 9:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score ++;
          } else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 9"));
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
            console.log(
              chalk.red.bold.italic(`\t        YOU CHOOSE: ${GeneralKnowledge.question9}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "Jupiter"`)
            );
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
          }
        if (GeneralKnowledge.question10 === "a)Fruit") {
            console.log(chalk.yellow.bold.italic("\n\t\t   MCQS 10:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score ++;
          } else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 10"));
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
            console.log(
              chalk.red.bold.italic(`\t        YOU CHOOSE: ${GeneralKnowledge.question10}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "Fruit"`)
            );
            console.log(
              chalk.yellow.bold(`\t===========================================`)
            );
          }
        // MCQS typescript ANSWERS CONDITIONS
    //===================================(MCQS NUM 1 CONDITION)=====================================
    if (typescript.ques1 === "JavaScript") {
        console.log(chalk.yellow.bold.italic("\n\t\t   MCQS 1:"));
        console.log(chalk.red.bold(`\t===========================`));
        console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
        console.log(chalk.red.bold(`\t===========================\n`));
        score = score ++;
      } else {
        console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 1"));
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
        console.log(
          chalk.red.bold.italic(`\t        YOU CHOOSE: ${typescript.ques1}`) +
            chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "JavaScript"`)
        );
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
      }
      //===================================(MCQS NUM 2 CONDITION)=====================================
      if (typescript.ques2 === "push()") {
        console.log(chalk.yellow.bold.italic("\t\t   MCQS 2:"));
        console.log(chalk.red.bold(`\t===========================`));
        console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
        console.log(chalk.red.bold(`\t===========================\n`));
        score = score + 1;
      } else {
        console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 2"));
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
        console.log(
          chalk.red.bold.italic(`\t        YOU CHOOSE: ${typescript.ques2}`) +
            chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "push()"`)
        );
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
      }
      //===================================(MCQS NUM 3 CONDITION)=====================================
      if (typescript.ques3 === "It's a superset of JavaScript") {
        console.log(chalk.yellow.bold.italic("\t\t   MCQS 3:"));
        console.log(chalk.red.bold(`\t===========================`));
        console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
        console.log(chalk.red.bold(`\t===========================\n`));
        score = score + 1;
      } else {
        console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 3"));
        console.log(
          chalk.yellow.bold(
            `\t=======================================================`
          )
        );
        console.log(
          chalk.red.bold.italic(`\t   YOU CHOOSE: ${typescript.ques3}`) +
            chalk.green.bold.italic(
              `\n\tBUT CORRECT ANSWER IS: "It's a superset of JavaScript"`
            )
        );
        console.log(
          chalk.yellow.bold(
            `\t=======================================================`
          )
        );
      }
      //===================================(MCQS NUM 4 CONDITION)=====================================
      if (typescript.ques4 === "Any type") {
        console.log(chalk.yellow.bold.italic("\t\t   MCQS 4:"));
        console.log(chalk.red.bold(`\t===========================`));
        console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
        console.log(chalk.red.bold(`\t===========================\n`));
        score = score + 1;
      } else {
        console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 4"));
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
        console.log(
          chalk.red.bold.italic(`\t        YOU CHOOSE: ${typescript.ques4}`) +
            chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "Any type"`)
        );
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
      }
      //===================================(MCQS NUM 5 CONDITION)=====================================
      if (typescript.ques5 === "function") {
        console.log(chalk.yellow.bold.italic("\t\t   MCQS 5:"));
        console.log(chalk.red.bold(`\t===========================`));
        console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
        console.log(chalk.red.bold(`\t===========================\n`));
        score = score + 1;
      } else {
        console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 5"));
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
        console.log(
          chalk.red.bold.italic(`\t        YOU CHOOSE: ${typescript.ques5}`) +
            chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "function"`)
        );
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
      }
      //===================================(MCQS NUM 6 CONDITION)=====================================
      if (typescript.ques6 === "===") {
        console.log(chalk.yellow.bold.italic("\t\t   MCQS 6:"));
        console.log(chalk.red.bold(`\t===========================`));
        console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
        console.log(chalk.red.bold(`\t===========================\n`));
        score = score + 1;
      } else {
        console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 6"));
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
        console.log(
          chalk.red.bold.italic(`\t        YOU CHOOSE: ${typescript.ques6}`) +
            chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "==="`)
        );
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
      }
      //===================================(MCQS NUM 7 CONDITION)=====================================
      if (typescript.ques7 === "//") {
        console.log(chalk.yellow.bold.italic("\t\t   MCQS 7:"));
        console.log(chalk.red.bold(`\t===========================`));
        console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
        console.log(chalk.red.bold(`\t===========================\n`));
        score = score + 1;
      } else {
        console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 7"));
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
        console.log(
          chalk.red.bold.italic(`\t        YOU CHOOSE: ${typescript.ques7}`) +
            chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "//"`)
        );
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
      }
      //===================================(MCQS NUM 8 CONDITION)=====================================
      if (typescript.ques8 === "Interfaces") {
        console.log(chalk.yellow.bold.italic("\t\t   MCQS 8:"));
        console.log(chalk.red.bold(`\t===========================`));
        console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
        console.log(chalk.red.bold(`\t===========================\n`));
        score = score + 1;
      } else {
        console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 8"));
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
        console.log(
          chalk.red.bold.italic(`\t        YOU CHOOSE: ${typescript.ques8}`) +
            chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "Interfaces"`)
        );
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
      }
      //===================================(MCQS NUM 9 CONDITION)=====================================
      if (typescript.ques9 === "TypeScript") {
        console.log(chalk.yellow.bold.italic("\t\t   MCQS 9:"));
        console.log(chalk.red.bold(`\t===========================`));
        console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
        console.log(chalk.red.bold(`\t===========================\n`));
        score = score + 1;
      } else {
        console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 9"));
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
        console.log(
          chalk.red.bold.italic(`\t        YOU CHOOSE: ${typescript.ques9}`) +
            chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "TypeScript"`)
        );
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
      }
      //===================================(MCQS NUM 10 CONDITION)=====================================
      if (typescript.ques10 === "All of the above") {
        console.log(chalk.yellow.bold.italic("\t\t   MCQS 10:"));
        console.log(chalk.red.bold(`\t===========================`));
        console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
        console.log(chalk.red.bold(`\t===========================\n`));
        score = score + 1;
      } else {
        console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 10"));
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
        console.log(
          chalk.red.bold.italic(`\t        YOU CHOOSE: ${typescript.ques10}`) +
            chalk.green.bold.italic(
              `\n\t    BUT CORRECT ANSWER IS: "All of the above"`
            )
        );
        console.log(
          chalk.yellow.bold(`\t===========================================`)
        );
      }
        console.log(chalk.bold.magentaBright("\n==================================Quiz Complete================================\n"));

        storeResult = score    //score ko baki jaga access karnay ka liya (storeResult) ka variable banaya ha jisay pehlay bahar declare kiya ha or ander reassign kiya ha.
        pushScore.push(storeResult) //phir is (storeResult) ma jo score hoga usay bahar walay array jis ka name (pushScore) ha us ma push kardangay or phir (pushScore) ko hum kahe bhe use kar saktay han 


        //=========================================== Admit Card =====================================

    } else if (choices.select === "2: => Admit Card") {


        for (let admitCard of storeData) {

            console.log(chalk.bold.cyanBright("\n=======================================================================\n"));
            console.log(chalk.bold.greenBright("                             Admit Card                               \n"));
            console.log(chalk.bold.cyanBright("======================================================================="));
            console.log((chalk.bold.greenBright("Name: ")) + (chalk.bold.yellowBright(admitCard.name)));
            console.log((chalk.bold.greenBright("Roll No: ")) + (chalk.bold.yellowBright(admitCard.rollNo)));
            console.log((chalk.bold.greenBright("Course: ")) + (chalk.bold.yellowBright(admitCard.course)))
            console.log((chalk.bold.greenBright("Timing: ")) + (chalk.bold.yellowBright(admitCard.timing)))
        }



        //======================================List Of Result ====================================================


    } else if (choices.select === "4: => List Of Result ") {
        console.log(chalk.bold.cyanBright("\n>>>>>>>>>>>>>>>>> Candidates Result >>>>>>>>>>>>>>>>>>>>>>>>>>>>"));

        for (let i = 0; i < storeData.length; i++) {
            console.log((chalk.bold.greenBright("\nName: ")) + (chalk.bold.yellowBright(storeData[i].name)) + (chalk.bold.greenBright(" Scores: ")) + (chalk.bold.yellowBright(pushScore[i])));
        }

        console.log(chalk.bold.cyanBright("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"));



        //====================================== Search Result =======================================================

    } else if (choices.select === "3: => Search Result") {
        const searchResult = await inquirer.prompt([
            {
                type: 'input',
                name: "student",
                message: "Enter your Roll NO",
            }
        ]);

        let found = false;

        for (let student of storeData) {
            if (searchResult.student == student.rollNo) {
                found = true;
                console.log(chalk.bold.magentaBright("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Student Result >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"));
                console.log((chalk.bold.greenBright("Name: ")) + (chalk.bold.yellowBright(student.name)));
                console.log((chalk.bold.greenBright("Roll No: ")) + (chalk.bold.yellowBright(student.rollNo)));
                console.log((chalk.bold.greenBright("Course: ")) + (chalk.bold.yellowBright(student.course)))
                console.log((chalk.bold.greenBright("Timing: ")) + (chalk.bold.yellowBright(student.timing)))



                // Print the result for this student
                if (pushScore[storeData.indexOf(student)] < 5) {
                    console.log(chalk.bold.redBright("\n>>>>>>>>>>>>>>>>>>>> 😞 Sorry, You are Fail.Better Luck Next Time ⏳. >>>>>>>>>>>>>>>>>>>>>>>>>"));
                    console.log(chalk.bold.redBright(`                            Your Total Score is ${pushScore[storeData.indexOf(student)]}/10`));
                } else {
                    console.log(chalk.bold.greenBright("\n>>>>>>>>>>>>>>>>>>>>  🎉🎊 Congratulations You are Passed 💫✨ >>>>>>>>>>>>>>>>>>>>>>>>>"));
                    console.log(chalk.bold.greenBright(`                            Your Total Score is ${pushScore[storeData.indexOf(student)]}/10`));
                }

                break; // Exit loop once student is found
            }
        }

        if (!found) {
            console.log(chalk.bold.redBright("Not Found"));
        }


        //========================================== Exit ==============================================================
    } else {
        console.log(
            chalk.green(
              `\t<===========================================================================>`
            ) + chalk.yellow(`\t<===============>`)
          );
          console.log(
            chalk.yellow(
              `\t THANKS FOR USING THIS ZAKIA-QUIZ-APP-PROJECT PROGRAM CREATOR BY: =>`
            ) + chalk.blue(`\t "ZAKIA BASHIR"`)
          );
          console.log(
            chalk.green(
              `\t<==========================================================================>`
            ) + chalk.yellow(`\t<===============>`)
          );
        break;
    }

}