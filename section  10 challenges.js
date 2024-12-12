'use strict';
/*const poll = {
  question: 'What is your favourite programming language',
  options: ['0: Java script', '1: Python', '2: Rust', '3:C++'],
  answer: new Array(4).fill(0),
  registerNewNumber() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    typeof answer === 'number' &&
      answer < this.answer.length &&
      this.answer[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answer);
    } else if (type === 'string') {
      console.log(`Poll Results are ${this.answer.join(', ')}`);
    }
  },
};
//poll.registerNewNumber();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewNumber.bind(poll));

poll.displayResults.call({ answer: [5, 2, 3] }, 'string');*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
});
