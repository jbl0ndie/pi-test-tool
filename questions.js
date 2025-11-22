// Sample question bank for PI Cognitive Assessment Practice
// Each question: { id, type, question, options, answer, explanation }
const QUESTIONS = [
  // Numerical Reasoning
  {
    id: 1,
    type: 'Numerical',
    question: 'What is the next number in the sequence? 2, 4, 8, 16, ?',
    options: ['18', '20', '24', '32'],
    answer: 4,
    explanation: 'Each number is multiplied by 2. 16 x 2 = 32.'
  },
  {
    id: 2,
    type: 'Numerical',
    question: 'If a shirt costs $20 after a 20% discount, what was the original price?',
    options: ['$24', '$25', '$30', '$32'],
    answer: 1,
    explanation: 'Let x be the original price. x - 0.2x = 20 → 0.8x = 20 → x = 25.'
  },
  // Verbal Reasoning
  {
    id: 3,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "scarce"?',
    options: ['Rare', 'Abundant', 'Sparse', 'Few'],
    answer: 1,
    explanation: 'Abundant is the antonym of scarce.'
  },
  {
    id: 4,
    type: 'Verbal',
    question: 'Complete the analogy: Book is to Reading as Fork is to ...',
    options: ['Drawing', 'Writing', 'Stirring', 'Eating'],
    answer: 3,
    explanation: 'A fork is used for eating, just as a book is used for reading.'
  },
  // Abstract Reasoning
  {
    id: 5,
    type: 'Abstract',
    question: 'Which shape comes next in the sequence? ◼️, ◻️, ◼️, ◻️, ?',
    options: ['◼️', '◻️', '⬛', '⬜'],
    answer: 0,
    explanation: 'The pattern alternates between filled and empty squares.'
  },
  {
    id: 6,
    type: 'Abstract',
    question: 'Find the odd one out: △, ◯, □, ◻️',
    options: ['△', '◯', '□', '◻️'],
    answer: 0,
    explanation: '△ is a triangle, the others are circles or squares.'
  },
  // ...add more questions to reach 50
];