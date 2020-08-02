
new Vue({
  el: "#app",
  methods: {
    clicky(square) {
      square.answered = true
      this.modal.category = square.category
      this.modal.value = square.value
      this.modal.answer = square.answer
      this.modal.question = square.question
      this.modal.state = 'ANSWER'
    },
  },
  data() { 
    return {
      modal: { 
        state: 'CLOSED',
        category: null,
        value: null,
        answer: null,
        quetion: null
      },
      categories: [ "General", "Data Types", "Control Flow", "Functions", "Objects & Arrays" ],
      board: [
        [ 
          {
            category: "General",
            answered: false,
            value: "$200", 
            answer: "A reference in code that holds a value.",
            question: "What is a variable?",
          },
          {
            category: "Data Types",
            answered: false,
            value: "$200",
            answer: "\"Meow\", \'Washington D.C.\' and \`Taco\` are examples of this type",
            question: "What is a string?"
          },
          {
            category: "Control Flow",
            answered: false,
            value: "$200", 
            answer: "This loop will run so long as a general condition is true",
            question: "What is a while loop?"
          },
          {
            category: "Functions",
            answered: false,
            value: "$200", 
            answer: "A value that is passed into a funciton",
            question: "What is an argument?"
          },
          {
            category: "Objects & Arrays",
            answered: false,
            value: "$200", 
            answer: "The position of an item in an array",
            question: "What is an index?"
          },
        ],
        [ 
          {
            category: "General",
            answered: false,
            value: "$400", 
            answer: "The language used to add behavior to a web page",
            question: "What is JavaScript?"
          },
          {
            category: "Data Types",
            answered: false,
            value: "$400",
            answer: "The result of the expression `'Woof' + 100`",
            question: "What is `Woof100`?"
          },
          {
            category: "Control Flow",
            answered: false,
            value: "$400", 
            answer: "This loop will run for a set number of iterations",
            question: "What is a for loop?"
          },
          {
            category: "Functions",
            answered: false,
            value: "$400", 
            answer: "This statement outputs a single value from a function",
            question: "What is a return statement?"
          },
          {
            category: "Objects & Arrays",
            answered: false,
            value: "$400", 
            answer: "The `pop()` function does this",
            question: "What removes the last value from an array?"
          },
        ],
        [ 
          {
            category: "General",
            answered: false,
            value: "$600", 
            answer: "The syntax for a single-line comment in JavaScript",
            question: "What are two slashes?"
          },
          {
            category: "Data Types",
            answered: false,
            value: "$600",
            answer: "When a variable is declared but not assigned a value, it is this type",
            question: "What is `undefined`?"
          },
          {
            category: "Control Flow",
            answered: false,
            value: "$600", 
            answer: "This performs a loose, not strict, equality comparison",
            question: "What are two equal signs?"
          },
          {
            category: "Functions",
            answered: false,
            value: "$600", 
            answer: "A variable that exists only within the body of a function",
            question: "What is a local variable?"
          },
          {
            category: "Objects & Arrays",
            answered: false,
            value: "$600", 
            answer: "The succinct notation for accessing a value stored in an object",
            question: "What is dot notation?"
          },
        ],
        [ 
          {
            category: "General",
            answered: false,
            value: "$800", 
            answer: "When a computer doesn't know how to proceed execution",
            question: "What is an error?"
          },
          {
            category: "Data Types",
            answered: false,
            value: "$800",
            answer: "When JavaScript converts a variable from one type to another",
            question: "What is coercion?"
          },
          {
            category: "Control Flow",
            answered: false,
            value: "$800", 
            answer: "This statement can take the place of a very large `if` statement",
            question: "What is a `switch` statement?"
          },
          {
            category: "Functions",
            answered: false,
            value: "$800", 
            answer: "The default return value of a function",
            question: "What is `undefined`?"
          },
          {
            category: "Objects & Arrays",
            answered: false,
            value: "$800", 
            answer: "Short for \"JavaScript Object Notation\"",
            question: "What does JSON stand for?"
          },
        ],
        [ 
          {
            category: "General",
            answered: false,
            value: "$1000", 
            answer: "When someone breaks down problems before writing code",
            question: "What is pseudocoding?"
          },
          {
            category: "Data Types",
            answered: false,
            value: "$1000", 
            answer: "This keyword prevents reassignment",
            question: "What is `const`?"
          },
          {
            category: "Control Flow",
            answered: false,
            value: "$1000", 
            answer: "An expression that branches, similar to the `if` statement",
            question: "What is a ternary?"
          },
          {
            category: "Functions",
            answered: false,
            value: "$1000", 
            answer: "What determines where in our code a variable can be accessed",
            question: "What is scope?"
          },
          {
            category: "Objects & Arrays",
            answered: false,
            value: "$1000", 
            answer: "The object where `pop`, `push`, `map` and more are located",
            question: "What is `Array.prototype`?"
          },
        ],
      ]
    }
  }
})
