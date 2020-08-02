
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
            value: "$100", 
            answer: "This a thing",
            question: "What is a thing?",
          },
          {
            category: "Data Types",
            answered: false,
            value: "$100",
            answer: "This is another thing",
            question: "What is another thing?"
          },
          {
            category: "Control Flow",
            answered: false,
            value: "$100", 
            answer: "This a thing",
            question: "What is a thing?"
          },
          {
            category: "Functions",
            answered: false,
            value: "$100", 
            answer: "This a thing",
            question: "What is a thing?"
          },
          {
            category: "Objects & Arrays",
            answered: false,
            value: "$100", 
            answer: "This a thing",
            question: "What is a thing?"
          },
        ],
        [ 
          {
            category: "General",
            answered: false,
            value: "$200", 
            answer: "This a thing",
            question: "What is a thing?"
          },
          {
            category: "Data Types",
            answered: false,
            value: "$200",
            answer: "This is another thing",
            question: "What is another thing?"
          },
          {
            category: "Control Flow",
            answered: false,
            value: "$200", 
            answer: "This a thing",
            question: "What is a thing?"
          },
          {
            category: "Functions",
            answered: false,
            value: "$200", 
            answer: "This a thing",
            question: "What is a thing?"
          },
          {
            category: "Objects & Arrays",
            answered: false,
            value: "$200", 
            answer: "This a thing",
            question: "What is a thing?"
          },
        ],
        [ 
          {
            category: "General",
            answered: false,
            value: "$300", 
            answer: "This a thing",
            question: "What is a thing?"
          },
          {
            category: "Data Types",
            answered: false,
            value: "$300",
            answer: "This is another thing",
            question: "What is another thing?"
          },
          {
            category: "Control Flow",
            answered: false,
            value: "$300", 
            answer: "This a thing",
            question: "What is a thing?"
          },
          {
            category: "Functions",
            answered: false,
            value: "$300", 
            answer: "This a thing",
            question: "What is a thing?"
          },
          {
            category: "Objects & Arrays",
            answered: false,
            value: "$300", 
            answer: "This a thing",
            question: "What is a thing?"
          },
        ],
        [ 
          {
            category: "General",
            answered: false,
            value: "$400", 
            answer: "This a thing",
            question: "What is a thing?"
          },
          {
            category: "Data Types",
            answered: false,
            value: "$400",
            answer: "This is another thing",
            question: "What is another thing?"
          },
          {
            category: "Control Flow",
            answered: false,
            value: "$400", 
            answer: "This a thing",
            question: "What is a thing?"
          },
          {
            category: "Functions",
            answered: false,
            value: "$400", 
            answer: "This a thing",
            question: "What is a thing?"
          },
          {
            answered: false,
            value: "$400", 
            answer: "This a thing",
            question: "What is a thing?"
          },
        ],
        [ 
          {
            category: "General",
            answered: false,
            value: "$500", 
            answer: "This a thing",
            question: "What is a thing?"
          },
          {
            category: "Data Types",
            answered: false,
            value: "$500",
            answer: "This is another thing",
            question: "What is another thing?"
          },
          {
            category: "Control Flow",
            answered: false,
            value: "$500", 
            answer: "This a thing",
            question: "What is a thing?"
          },
          {
            category: "Functions",
            answered: false,
            value: "$500", 
            answer: "This a thing",
            question: "What is a thing?"
          },
          {
            category: "Objects & Arrays",
            answered: false,
            value: "$500", 
            answer: "This a thing",
            question: "What is a thing?"
          },
        ],
      ]
    }
  }
})
