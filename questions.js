/* 
 * PI COGNITIVE ASSESSMENT PRACTICE - QUESTION BANK
 * Target: 200+ questions for robust practice
 * Distribution: ~80 Numerical, ~80 Verbal, ~40 Abstract
 * 
 * PROGRESS TRACKER:
 * ==================
 * Numerical (Goal: 80):  [ 2/80 ] - IDs 1-80
 * Verbal (Goal: 80):     [ 2/80 ] - IDs 81-160  
 * Abstract (Goal: 40):   [ 2/40 ] - IDs 161-200
 * ==================
 * TOTAL: 6/200 questions complete
 * 
 * BATCH PLAN (20 questions per batch):
 * Batch 1: ✗ Numerical 3-22   (20 questions)
 * Batch 2: ✗ Numerical 23-42  (20 questions)
 * Batch 3: ✗ Numerical 43-62  (20 questions)
 * Batch 4: ✗ Numerical 63-80  (18 questions)
 * Batch 5: ✗ Verbal 81-100    (20 questions)
 * Batch 6: ✗ Verbal 101-120   (20 questions)
 * Batch 7: ✗ Verbal 121-140   (20 questions)
 * Batch 8: ✗ Verbal 141-160   (20 questions)
 * Batch 9: ✗ Abstract 161-180 (20 questions)
 * Batch 10: ✗ Abstract 181-200 (20 questions)
 */

const QUESTIONS = [
  // ========================================
  // NUMERICAL REASONING (IDs 1-80)
  // ========================================
  {
    id: 1,
    type: 'Numerical',
    question: 'What is the next number in the sequence? 2, 4, 8, 16, ?',
    options: ['18', '20', '24', '32'],
    answer: 3,
    explanation: 'Each number is multiplied by 2. 16 × 2 = 32.'
  },
  {
    id: 2,
    type: 'Numerical',
    question: 'If a shirt costs $20 after a 20% discount, what was the original price?',
    options: ['$24', '$25', '$30', '$32'],
    answer: 1,
    explanation: 'Let x be the original price. x - 0.2x = 20 → 0.8x = 20 → x = 25.'
  },

  // ========================================
  // VERBAL REASONING (IDs 81-160)
  // ========================================
  {
    id: 81,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "scarce"?',
    options: ['Rare', 'Abundant', 'Sparse', 'Few'],
    answer: 1,
    explanation: 'Abundant is the antonym of scarce.'
  },
  {
    id: 82,
    type: 'Verbal',
    question: 'Complete the analogy: Book is to Reading as Fork is to ...',
    options: ['Drawing', 'Writing', 'Stirring', 'Eating'],
    answer: 3,
    explanation: 'A fork is used for eating, just as a book is used for reading.'
  },

  // ========================================
  // ABSTRACT REASONING (IDs 161-200)
  // ========================================
  {
    id: 161,
    type: 'Abstract',
    question: 'Which shape comes next in the sequence? ◼️, ◻️, ◼️, ◻️, ?',
    options: ['◼️', '◻️', '⬛', '⬜'],
    answer: 0,
    explanation: 'The pattern alternates between filled and empty squares.'
  },
  {
    id: 162,
    type: 'Abstract',
    question: 'Find the odd one out: △, ◯, □, ◻️',
    options: ['△', '◯', '□', '◻️'],
    answer: 0,
    explanation: '△ is a triangle, the others are circles or squares.'
  }

  // NOTE: More questions will be added in batches below
  // Ready for Batch 1: IDs 3-22 (Numerical)
];