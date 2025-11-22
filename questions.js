/* 
 * PI COGNITIVE ASSESSMENT PRACTICE - QUESTION BANK
 * Target: 200+ questions for robust practice
 * Distribution: ~80 Numerical, ~80 Verbal, ~40 Abstract
 * 
 * PROGRESS TRACKER:
 * ==================
 * Numerical (Goal: 80):  [ 62/80 ] - IDs 1-80
 * Verbal (Goal: 80):     [ 2/80 ] - IDs 81-160  
 * Abstract (Goal: 40):   [ 2/40 ] - IDs 161-200
 * ==================
 * TOTAL: 66/200 questions complete (33%)
 * 
 * BATCH PLAN (20 questions per batch):
 * Batch 1: ✓ Numerical 3-22   (20 questions) - COMPLETE
 * Batch 2: ✓ Numerical 23-42  (20 questions) - COMPLETE
 * Batch 3: ✓ Numerical 43-62  (20 questions) - COMPLETE
 * Batch 4: ✗ Numerical 63-80  (18 questions)
 * Batch 5: ✗ Verbal 83-102    (20 questions)
 * Batch 6: ✗ Verbal 103-122   (20 questions)
 * Batch 7: ✗ Verbal 123-142   (20 questions)
 * Batch 8: ✗ Verbal 143-160   (18 questions)
 * Batch 9: ✗ Abstract 163-182 (20 questions)
 * Batch 10: ✗ Abstract 183-200 (18 questions)
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
  {
    id: 3,
    type: 'Numerical',
    question: 'What is the next number in the sequence? 3, 6, 12, 24, ?',
    options: ['36', '48', '40', '30'],
    answer: 1,
    explanation: 'Each number is doubled. 24 × 2 = 48.'
  },
  {
    id: 4,
    type: 'Numerical',
    question: 'If 5x + 3 = 28, what is x?',
    options: ['4', '5', '6', '7'],
    answer: 1,
    explanation: '5x = 28 - 3 = 25, so x = 25 ÷ 5 = 5.'
  },
  {
    id: 5,
    type: 'Numerical',
    question: 'What is 15% of 200?',
    options: ['25', '30', '35', '40'],
    answer: 1,
    explanation: '0.15 × 200 = 30.'
  },
  {
    id: 6,
    type: 'Numerical',
    question: 'What is the next number? 1, 1, 2, 3, 5, 8, ?',
    options: ['11', '13', '15', '16'],
    answer: 1,
    explanation: 'Fibonacci sequence: each number is the sum of the previous two. 5 + 8 = 13.'
  },
  {
    id: 7,
    type: 'Numerical',
    question: 'A car travels 240 miles in 4 hours. What is its average speed in mph?',
    options: ['50', '55', '60', '65'],
    answer: 2,
    explanation: 'Speed = Distance ÷ Time = 240 ÷ 4 = 60 mph.'
  },
  {
    id: 8,
    type: 'Numerical',
    question: 'What is the next number? 100, 50, 25, 12.5, ?',
    options: ['6.25', '6', '7', '5'],
    answer: 0,
    explanation: 'Each number is divided by 2. 12.5 ÷ 2 = 6.25.'
  },
  {
    id: 9,
    type: 'Numerical',
    question: 'If a book costs $15 and is increased by 20%, what is the new price?',
    options: ['$17', '$18', '$19', '$20'],
    answer: 1,
    explanation: '20% of $15 = $3. New price = $15 + $3 = $18.'
  },
  {
    id: 10,
    type: 'Numerical',
    question: 'What is the next number? 7, 14, 28, 56, ?',
    options: ['84', '96', '112', '120'],
    answer: 2,
    explanation: 'Each number is doubled. 56 × 2 = 112.'
  },
  {
    id: 11,
    type: 'Numerical',
    question: 'If 3 apples cost $2.10, how much do 7 apples cost?',
    options: ['$4.20', '$4.50', '$4.90', '$5.10'],
    answer: 2,
    explanation: 'One apple costs $2.10 ÷ 3 = $0.70. Seven apples cost 7 × $0.70 = $4.90.'
  },
  {
    id: 12,
    type: 'Numerical',
    question: 'What is the next number? 5, 10, 20, 40, ?',
    options: ['60', '70', '80', '90'],
    answer: 2,
    explanation: 'Each number is doubled. 40 × 2 = 80.'
  },
  {
    id: 13,
    type: 'Numerical',
    question: 'What is 30% of 150?',
    options: ['40', '45', '50', '55'],
    answer: 1,
    explanation: '0.30 × 150 = 45.'
  },
  {
    id: 14,
    type: 'Numerical',
    question: 'What is the next number? 2, 5, 11, 23, ?',
    options: ['35', '41', '47', '53'],
    answer: 2,
    explanation: 'Pattern: double and add 1. 23 × 2 + 1 = 47.'
  },
  {
    id: 15,
    type: 'Numerical',
    question: 'If a product costs $80 after a 20% discount, what was the original price?',
    options: ['$96', '$100', '$104', '$110'],
    answer: 1,
    explanation: 'If 80% = $80, then 100% = $80 ÷ 0.8 = $100.'
  },
  {
    id: 16,
    type: 'Numerical',
    question: 'What is the next number? 81, 27, 9, 3, ?',
    options: ['0', '1', '2', '3'],
    answer: 1,
    explanation: 'Each number is divided by 3. 3 ÷ 3 = 1.'
  },
  {
    id: 17,
    type: 'Numerical',
    question: 'If 2x - 7 = 15, what is x?',
    options: ['9', '10', '11', '12'],
    answer: 2,
    explanation: '2x = 15 + 7 = 22, so x = 22 ÷ 2 = 11.'
  },
  {
    id: 18,
    type: 'Numerical',
    question: 'What is the next number? 1, 4, 9, 16, 25, ?',
    options: ['30', '32', '34', '36'],
    answer: 3,
    explanation: 'Perfect squares: 1², 2², 3², 4², 5², 6² = 36.'
  },
  {
    id: 19,
    type: 'Numerical',
    question: 'A store sells 120 items and 30% are returned. How many items were kept?',
    options: ['72', '78', '84', '90'],
    answer: 2,
    explanation: '30% of 120 = 36 returned. 120 - 36 = 84 kept.'
  },
  {
    id: 20,
    type: 'Numerical',
    question: 'What is the next number? 3, 9, 27, 81, ?',
    options: ['162', '216', '243', '324'],
    answer: 2,
    explanation: 'Each number is multiplied by 3. 81 × 3 = 243.'
  },
  {
    id: 21,
    type: 'Numerical',
    question: 'If a train travels 180 miles in 3 hours, what is its speed?',
    options: ['50 mph', '55 mph', '60 mph', '65 mph'],
    answer: 2,
    explanation: 'Speed = 180 ÷ 3 = 60 mph.'
  },
  {
    id: 22,
    type: 'Numerical',
    question: 'What is 25% of 80?',
    options: ['15', '18', '20', '22'],
    answer: 2,
    explanation: '0.25 × 80 = 20.'
  },
  {
    id: 23,
    type: 'Numerical',
    question: 'A shirt originally costs $60 and is on sale for 25% off. What is the sale price?',
    options: ['$40', '$45', '$50', '$55'],
    answer: 1,
    explanation: '25% of $60 = $15 discount. $60 - $15 = $45.'
  },
  {
    id: 24,
    type: 'Numerical',
    question: 'What is the next number? 10, 13, 19, 28, ?',
    options: ['37', '40', '43', '46'],
    answer: 1,
    explanation: 'Differences increase by 3: +3, +6, +9, +12. So 28 + 12 = 40.'
  },
  {
    id: 25,
    type: 'Numerical',
    question: 'If 4y + 8 = 32, what is y?',
    options: ['4', '5', '6', '7'],
    answer: 2,
    explanation: '4y = 32 - 8 = 24, so y = 24 ÷ 4 = 6.'
  },
  {
    id: 26,
    type: 'Numerical',
    question: 'A baker makes 144 cookies and packs them into boxes of 12. How many boxes?',
    options: ['10', '11', '12', '13'],
    answer: 2,
    explanation: '144 ÷ 12 = 12 boxes.'
  },
  {
    id: 27,
    type: 'Numerical',
    question: 'What is the next number? 64, 32, 16, 8, ?',
    options: ['2', '3', '4', '6'],
    answer: 2,
    explanation: 'Each number is halved. 8 ÷ 2 = 4.'
  },
  {
    id: 28,
    type: 'Numerical',
    question: 'If a rectangle has length 15 and width 8, what is its perimeter?',
    options: ['38', '42', '46', '50'],
    answer: 2,
    explanation: 'Perimeter = 2(length + width) = 2(15 + 8) = 2(23) = 46.'
  },
  {
    id: 29,
    type: 'Numerical',
    question: 'What is 40% of 250?',
    options: ['80', '90', '100', '110'],
    answer: 2,
    explanation: '0.40 × 250 = 100.'
  },
  {
    id: 30,
    type: 'Numerical',
    question: 'What is the next number? 1, 3, 7, 15, 31, ?',
    options: ['47', '55', '63', '71'],
    answer: 2,
    explanation: 'Pattern: double and add 1. 31 × 2 + 1 = 63.'
  },
  {
    id: 31,
    type: 'Numerical',
    question: 'A store marks up items by 50%. If the cost is $20, what is the selling price?',
    options: ['$25', '$28', '$30', '$35'],
    answer: 2,
    explanation: '50% of $20 = $10. Selling price = $20 + $10 = $30.'
  },
  {
    id: 32,
    type: 'Numerical',
    question: 'What is the next number? 2, 6, 18, 54, ?',
    options: ['108', '144', '162', '180'],
    answer: 2,
    explanation: 'Each number is multiplied by 3. 54 × 3 = 162.'
  },
  {
    id: 33,
    type: 'Numerical',
    question: 'If 6 pencils cost $3.60, how much do 10 pencils cost?',
    options: ['$5.00', '$5.50', '$6.00', '$6.50'],
    answer: 2,
    explanation: 'One pencil costs $3.60 ÷ 6 = $0.60. Ten pencils cost 10 × $0.60 = $6.00.'
  },
  {
    id: 34,
    type: 'Numerical',
    question: 'What is the next number? 1, 2, 4, 7, 11, 16, ?',
    options: ['20', '21', '22', '23'],
    answer: 2,
    explanation: 'Differences increase by 1: +1, +2, +3, +4, +5, +6. So 16 + 6 = 22.'
  },
  {
    id: 35,
    type: 'Numerical',
    question: 'A car depreciates 15% per year. If it costs $20,000, what is it worth after 1 year?',
    options: ['$16,000', '$17,000', '$18,000', '$19,000'],
    answer: 1,
    explanation: '15% of $20,000 = $3,000. Value = $20,000 - $3,000 = $17,000.'
  },
  {
    id: 36,
    type: 'Numerical',
    question: 'What is the next number? 4, 9, 16, 25, 36, ?',
    options: ['42', '45', '49', '54'],
    answer: 2,
    explanation: 'Perfect squares: 2², 3², 4², 5², 6², 7² = 49.'
  },
  {
    id: 37,
    type: 'Numerical',
    question: 'If 3x - 5 = 16, what is x?',
    options: ['5', '6', '7', '8'],
    answer: 2,
    explanation: '3x = 16 + 5 = 21, so x = 21 ÷ 3 = 7.'
  },
  {
    id: 38,
    type: 'Numerical',
    question: 'A worker earns $15/hour and works 40 hours. What are their total earnings?',
    options: ['$550', '$575', '$600', '$625'],
    answer: 2,
    explanation: '$15 × 40 = $600.'
  },
  {
    id: 39,
    type: 'Numerical',
    question: 'What is the next number? 5, 8, 14, 26, 50, ?',
    options: ['74', '86', '98', '102'],
    answer: 2,
    explanation: 'Pattern: double and subtract 2. 50 × 2 - 2 = 98.'
  },
  {
    id: 40,
    type: 'Numerical',
    question: 'What is 75% of 120?',
    options: ['80', '85', '90', '95'],
    answer: 2,
    explanation: '0.75 × 120 = 90.'
  },
  {
    id: 41,
    type: 'Numerical',
    question: 'If a square has a side of 9, what is its area?',
    options: ['72', '81', '90', '99'],
    answer: 1,
    explanation: 'Area = side² = 9² = 81.'
  },
  {
    id: 42,
    type: 'Numerical',
    question: 'What is the next number? 128, 64, 32, 16, ?',
    options: ['4', '6', '8', '10'],
    answer: 2,
    explanation: 'Each number is halved. 16 ÷ 2 = 8.'
  },
  {
    id: 43,
    type: 'Numerical',
    question: 'What is the next number? 2, 3, 5, 8, 13, ?',
    options: ['18', '19', '20', '21'],
    answer: 3,
    explanation: 'Add previous two numbers: 8 + 13 = 21.'
  },
  {
    id: 44,
    type: 'Numerical',
    question: 'If a pizza is cut into 8 slices and you eat 3, what percentage did you eat?',
    options: ['30%', '35%', '37.5%', '40%'],
    answer: 2,
    explanation: '3/8 = 0.375 = 37.5%.'
  },
  {
    id: 45,
    type: 'Numerical',
    question: 'What is the next number? 11, 22, 33, 44, ?',
    options: ['50', '55', '60', '65'],
    answer: 1,
    explanation: 'Add 11 each time. 44 + 11 = 55.'
  },
  {
    id: 46,
    type: 'Numerical',
    question: 'If 7x + 4 = 39, what is x?',
    options: ['3', '4', '5', '6'],
    answer: 2,
    explanation: '7x = 39 - 4 = 35, so x = 35 ÷ 7 = 5.'
  },
  {
    id: 47,
    type: 'Numerical',
    question: 'A class has 24 students. If 1/3 are absent, how many are present?',
    options: ['12', '14', '16', '18'],
    answer: 2,
    explanation: '1/3 of 24 = 8 absent. 24 - 8 = 16 present.'
  },
  {
    id: 48,
    type: 'Numerical',
    question: 'What is the next number? 7, 11, 15, 19, ?',
    options: ['21', '23', '25', '27'],
    answer: 1,
    explanation: 'Add 4 each time. 19 + 4 = 23.'
  },
  {
    id: 49,
    type: 'Numerical',
    question: 'If an item costs $45 after a 10% discount, what was the original price?',
    options: ['$48', '$49', '$50', '$52'],
    answer: 2,
    explanation: 'If 90% = $45, then 100% = $45 ÷ 0.9 = $50.'
  },
  {
    id: 50,
    type: 'Numerical',
    question: 'What is the next number? 1, 8, 27, 64, ?',
    options: ['100', '125', '144', '216'],
    answer: 1,
    explanation: 'Perfect cubes: 1³, 2³, 3³, 4³, 5³ = 125.'
  },
  {
    id: 51,
    type: 'Numerical',
    question: 'A tank holds 500 liters and is 60% full. How many liters are in it?',
    options: ['250', '280', '300', '320'],
    answer: 2,
    explanation: '0.60 × 500 = 300 liters.'
  },
  {
    id: 52,
    type: 'Numerical',
    question: 'What is the next number? 100, 91, 82, 73, ?',
    options: ['60', '62', '64', '66'],
    answer: 2,
    explanation: 'Subtract 9 each time. 73 - 9 = 64.'
  },
  {
    id: 53,
    type: 'Numerical',
    question: 'If 5 books cost $75, how much do 8 books cost?',
    options: ['$100', '$110', '$120', '$130'],
    answer: 2,
    explanation: 'One book costs $75 ÷ 5 = $15. Eight books cost 8 × $15 = $120.'
  },
  {
    id: 54,
    type: 'Numerical',
    question: 'What is the next number? 3, 6, 12, 24, 48, ?',
    options: ['72', '84', '96', '108'],
    answer: 2,
    explanation: 'Each number doubles. 48 × 2 = 96.'
  },
  {
    id: 55,
    type: 'Numerical',
    question: 'A shirt costs $30. With a 30% discount, what do you pay?',
    options: ['$18', '$21', '$24', '$27'],
    answer: 1,
    explanation: '30% of $30 = $9 discount. $30 - $9 = $21.'
  },
  {
    id: 56,
    type: 'Numerical',
    question: 'What is the next number? 5, 15, 45, 135, ?',
    options: ['270', '315', '405', '450'],
    answer: 2,
    explanation: 'Each number is multiplied by 3. 135 × 3 = 405.'
  },
  {
    id: 57,
    type: 'Numerical',
    question: 'If a triangle has sides 3, 4, and 5, what is its perimeter?',
    options: ['10', '11', '12', '13'],
    answer: 2,
    explanation: 'Perimeter = 3 + 4 + 5 = 12.'
  },
  {
    id: 58,
    type: 'Numerical',
    question: 'What is 12% of 300?',
    options: ['30', '33', '36', '39'],
    answer: 2,
    explanation: '0.12 × 300 = 36.'
  },
  {
    id: 59,
    type: 'Numerical',
    question: 'What is the next number? 1, 4, 10, 19, 31, ?',
    options: ['43', '46', '49', '52'],
    answer: 1,
    explanation: 'Differences increase by 3: +3, +6, +9, +12, +15. So 31 + 15 = 46.'
  },
  {
    id: 60,
    type: 'Numerical',
    question: 'A bicycle costs $200 and increases in price by 15%. What is the new price?',
    options: ['$220', '$225', '$230', '$235'],
    answer: 2,
    explanation: '15% of $200 = $30. New price = $200 + $30 = $230.'
  },
  {
    id: 61,
    type: 'Numerical',
    question: 'What is the next number? 9, 18, 36, 72, ?',
    options: ['108', '120', '144', '156'],
    answer: 2,
    explanation: 'Each number doubles. 72 × 2 = 144.'
  },
  {
    id: 62,
    type: 'Numerical',
    question: 'If 8x - 12 = 36, what is x?',
    options: ['4', '5', '6', '7'],
    answer: 2,
    explanation: '8x = 36 + 12 = 48, so x = 48 ÷ 8 = 6.'
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