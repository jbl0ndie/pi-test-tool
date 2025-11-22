/* 
 * PI COGNITIVE ASSESSMENT PRACTICE - QUESTION BANK
 * Target: 200+ questions for robust practice
 * Distribution: ~80 Numerical, ~80 Verbal, ~40 Abstract
 * 
 * PROGRESS TRACKER:
 * ==================
 * Numerical (Goal: 80):  [ 80/80 ] ✓ COMPLETE - IDs 1-80
 * Verbal (Goal: 80):     [ 80/80 ] ✓ COMPLETE - IDs 81-160
 * Abstract (Goal: 40):   [ 22/40 ] - IDs 161-200
 * ==================
 * TOTAL: 182/200 questions complete (91%)
 * 
 * BATCH PLAN (20 questions per batch):
 * Batch 1: ✓ Numerical 3-22   (20 questions) - COMPLETE
 * Batch 2: ✓ Numerical 23-42  (20 questions) - COMPLETE
 * Batch 3: ✓ Numerical 43-62  (20 questions) - COMPLETE
 * Batch 4: ✓ Numerical 63-80  (18 questions) - COMPLETE
 * Batch 5: ✓ Verbal 83-102    (20 questions) - COMPLETE
 * Batch 6: ✓ Verbal 103-122   (20 questions) - COMPLETE
 * Batch 7: ✓ Verbal 123-142   (20 questions) - COMPLETE
 * Batch 8: ✓ Verbal 143-160   (18 questions) - COMPLETE
 * Batch 9: ✓ Abstract 163-182 (20 questions) - COMPLETE
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
  {
    id: 63,
    type: 'Numerical',
    question: 'What is the next number? 6, 12, 24, 48, ?',
    options: ['72', '84', '96', '108'],
    answer: 2,
    explanation: 'Each number doubles. 48 × 2 = 96.'
  },
  {
    id: 64,
    type: 'Numerical',
    question: 'A recipe calls for 2 cups of flour for 12 cookies. How many cups for 30 cookies?',
    options: ['4', '5', '6', '7'],
    answer: 1,
    explanation: '2 cups ÷ 12 cookies = 1/6 cup per cookie. 30 × 1/6 = 5 cups.'
  },
  {
    id: 65,
    type: 'Numerical',
    question: 'What is the next number? 256, 128, 64, 32, ?',
    options: ['8', '12', '16', '20'],
    answer: 2,
    explanation: 'Each number is halved. 32 ÷ 2 = 16.'
  },
  {
    id: 66,
    type: 'Numerical',
    question: 'If a rectangle has area 72 and width 8, what is its length?',
    options: ['7', '8', '9', '10'],
    answer: 2,
    explanation: 'Area = length × width, so length = 72 ÷ 8 = 9.'
  },
  {
    id: 67,
    type: 'Numerical',
    question: 'What is 18% of 400?',
    options: ['60', '68', '72', '80'],
    answer: 2,
    explanation: '0.18 × 400 = 72.'
  },
  {
    id: 68,
    type: 'Numerical',
    question: 'What is the next number? 2, 5, 10, 17, 26, ?',
    options: ['35', '37', '39', '41'],
    answer: 1,
    explanation: 'Differences increase by 2: +3, +5, +7, +9, +11. So 26 + 11 = 37.'
  },
  {
    id: 69,
    type: 'Numerical',
    question: 'A store sells 80 items at $12 each. What is the total revenue?',
    options: ['$860', '$920', '$960', '$1,000'],
    answer: 2,
    explanation: '80 × $12 = $960.'
  },
  {
    id: 70,
    type: 'Numerical',
    question: 'What is the next number? 1, 5, 13, 25, 41, ?',
    options: ['57', '61', '65', '69'],
    answer: 1,
    explanation: 'Differences are 4, 8, 12, 16, 20. So 41 + 20 = 61.'
  },
  {
    id: 71,
    type: 'Numerical',
    question: 'If 9 workers complete a job in 12 days, how many days for 6 workers?',
    options: ['15', '16', '17', '18'],
    answer: 3,
    explanation: 'Total work = 9 × 12 = 108 worker-days. 108 ÷ 6 = 18 days.'
  },
  {
    id: 72,
    type: 'Numerical',
    question: 'What is the next number? 4, 8, 16, 32, 64, ?',
    options: ['96', '108', '128', '144'],
    answer: 2,
    explanation: 'Each number doubles. 64 × 2 = 128.'
  },
  {
    id: 73,
    type: 'Numerical',
    question: 'What is 85% of 200?',
    options: ['160', '165', '170', '175'],
    answer: 2,
    explanation: '0.85 × 200 = 170.'
  },
  {
    id: 74,
    type: 'Numerical',
    question: 'What is the next number? 10, 20, 30, 40, ?',
    options: ['45', '50', '55', '60'],
    answer: 1,
    explanation: 'Add 10 each time. 40 + 10 = 50.'
  },
  {
    id: 75,
    type: 'Numerical',
    question: 'If a car uses 8 gallons to travel 240 miles, what is the miles per gallon?',
    options: ['25', '28', '30', '32'],
    answer: 2,
    explanation: '240 miles ÷ 8 gallons = 30 mpg.'
  },
  {
    id: 76,
    type: 'Numerical',
    question: 'What is the next number? 3, 7, 15, 31, 63, ?',
    options: ['95', '111', '127', '143'],
    answer: 2,
    explanation: 'Pattern: double and add 1. 63 × 2 + 1 = 127.'
  },
  {
    id: 77,
    type: 'Numerical',
    question: 'A phone costs $600 and depreciates 25% in the first year. What is its value?',
    options: ['$400', '$425', '$450', '$475'],
    answer: 2,
    explanation: '25% of $600 = $150. Value = $600 - $150 = $450.'
  },
  {
    id: 78,
    type: 'Numerical',
    question: 'What is the next number? 1, 3, 6, 10, 15, ?',
    options: ['18', '19', '21', '24'],
    answer: 2,
    explanation: 'Triangular numbers: +2, +3, +4, +5, +6. So 15 + 6 = 21.'
  },
  {
    id: 79,
    type: 'Numerical',
    question: 'If 4x + 9 = 45, what is x?',
    options: ['7', '8', '9', '10'],
    answer: 2,
    explanation: '4x = 45 - 9 = 36, so x = 36 ÷ 4 = 9.'
  },
  {
    id: 80,
    type: 'Numerical',
    question: 'What is the next number? 5, 11, 23, 47, ?',
    options: ['71', '83', '95', '107'],
    answer: 2,
    explanation: 'Pattern: double and add 1. 47 × 2 + 1 = 95.'
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
  {
    id: 83,
    type: 'Verbal',
    question: 'Which word means the same as "brief"?',
    options: ['Long', 'Short', 'Detailed', 'Complex'],
    answer: 1,
    explanation: 'Brief means short in duration or length.'
  },
  {
    id: 84,
    type: 'Verbal',
    question: 'Complete the analogy: Pen is to Write as Scissors is to ...',
    options: ['Paste', 'Draw', 'Cut', 'Fold'],
    answer: 2,
    explanation: 'Scissors are used to cut, just as a pen is used to write.'
  },
  {
    id: 85,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "expand"?',
    options: ['Grow', 'Contract', 'Increase', 'Enlarge'],
    answer: 1,
    explanation: 'Contract is the antonym of expand.'
  },
  {
    id: 86,
    type: 'Verbal',
    question: 'Complete the analogy: Teacher is to School as Doctor is to ...',
    options: ['Medicine', 'Hospital', 'Patient', 'Nurse'],
    answer: 1,
    explanation: 'A doctor works in a hospital, just as a teacher works in a school.'
  },
  {
    id: 87,
    type: 'Verbal',
    question: 'Which word means the same as "rapid"?',
    options: ['Slow', 'Quick', 'Steady', 'Gradual'],
    answer: 1,
    explanation: 'Rapid means quick or fast.'
  },
  {
    id: 88,
    type: 'Verbal',
    question: 'Complete the analogy: Hot is to Cold as Light is to ...',
    options: ['Bright', 'Dark', 'Sun', 'Moon'],
    answer: 1,
    explanation: 'Dark is the opposite of light, just as cold is the opposite of hot.'
  },
  {
    id: 89,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "ancient"?',
    options: ['Old', 'Modern', 'Historic', 'Past'],
    answer: 1,
    explanation: 'Modern is the antonym of ancient.'
  },
  {
    id: 90,
    type: 'Verbal',
    question: 'Complete the analogy: Car is to Road as Boat is to ...',
    options: ['Harbor', 'Water', 'Dock', 'Sail'],
    answer: 1,
    explanation: 'A boat travels on water, just as a car travels on a road.'
  },
  {
    id: 91,
    type: 'Verbal',
    question: 'Which word means the same as "bizarre"?',
    options: ['Normal', 'Strange', 'Common', 'Usual'],
    answer: 1,
    explanation: 'Bizarre means strange or unusual.'
  },
  {
    id: 92,
    type: 'Verbal',
    question: 'Complete the analogy: Wing is to Bird as Fin is to ...',
    options: ['Water', 'Fish', 'Ocean', 'Shark'],
    answer: 1,
    explanation: 'A fin is a body part of a fish, just as a wing is a body part of a bird.'
  },
  {
    id: 93,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "confident"?',
    options: ['Sure', 'Doubtful', 'Certain', 'Bold'],
    answer: 1,
    explanation: 'Doubtful is the antonym of confident.'
  },
  {
    id: 94,
    type: 'Verbal',
    question: 'Complete the analogy: Flour is to Bread as Grapes are to ...',
    options: ['Fruit', 'Wine', 'Vineyard', 'Purple'],
    answer: 1,
    explanation: 'Grapes are made into wine, just as flour is made into bread.'
  },
  {
    id: 95,
    type: 'Verbal',
    question: 'Which word means the same as "eager"?',
    options: ['Reluctant', 'Enthusiastic', 'Bored', 'Tired'],
    answer: 1,
    explanation: 'Eager means enthusiastic or keen.'
  },
  {
    id: 96,
    type: 'Verbal',
    question: 'Complete the analogy: Eyes are to Seeing as Ears are to ...',
    options: ['Listening', 'Hearing', 'Speaking', 'Touching'],
    answer: 1,
    explanation: 'Ears are used for hearing, just as eyes are used for seeing.'
  },
  {
    id: 97,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "generous"?',
    options: ['Giving', 'Stingy', 'Kind', 'Charitable'],
    answer: 1,
    explanation: 'Stingy is the antonym of generous.'
  },
  {
    id: 98,
    type: 'Verbal',
    question: 'Complete the analogy: Wheel is to Car as Propeller is to ...',
    options: ['Engine', 'Airplane', 'Sky', 'Pilot'],
    answer: 1,
    explanation: 'A propeller is a key part of an airplane, just as a wheel is a key part of a car.'
  },
  {
    id: 99,
    type: 'Verbal',
    question: 'Which word means the same as "transparent"?',
    options: ['Opaque', 'Clear', 'Solid', 'Dark'],
    answer: 1,
    explanation: 'Transparent means clear or see-through.'
  },
  {
    id: 100,
    type: 'Verbal',
    question: 'Complete the analogy: Needle is to Sewing as Hammer is to ...',
    options: ['Tool', 'Building', 'Pounding', 'Nail'],
    answer: 2,
    explanation: 'A hammer is used for pounding, just as a needle is used for sewing.'
  },
  {
    id: 101,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "humble"?',
    options: ['Modest', 'Arrogant', 'Meek', 'Simple'],
    answer: 1,
    explanation: 'Arrogant is the antonym of humble.'
  },
  {
    id: 102,
    type: 'Verbal',
    question: 'Complete the analogy: Chapter is to Book as Scene is to ...',
    options: ['Movie', 'Play', 'Actor', 'Stage'],
    answer: 1,
    explanation: 'A scene is a part of a play, just as a chapter is a part of a book.'
  },
  {
    id: 103,
    type: 'Verbal',
    question: 'Which word means the same as "difficult"?',
    options: ['Easy', 'Hard', 'Simple', 'Clear'],
    answer: 1,
    explanation: 'Difficult means hard or challenging.'
  },
  {
    id: 104,
    type: 'Verbal',
    question: 'Complete the analogy: Painter is to Canvas as Sculptor is to ...',
    options: ['Stone', 'Museum', 'Art', 'Tool'],
    answer: 0,
    explanation: 'A sculptor works with stone, just as a painter works with canvas.'
  },
  {
    id: 105,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "lenient"?',
    options: ['Strict', 'Gentle', 'Easy', 'Kind'],
    answer: 0,
    explanation: 'Strict is the antonym of lenient.'
  },
  {
    id: 106,
    type: 'Verbal',
    question: 'Complete the analogy: Engine is to Car as Heart is to ...',
    options: ['Blood', 'Body', 'Pulse', 'Beat'],
    answer: 1,
    explanation: 'The heart is central to the body, just as an engine is central to a car.'
  },
  {
    id: 107,
    type: 'Verbal',
    question: 'Which word means the same as "prohibit"?',
    options: ['Allow', 'Forbid', 'Permit', 'Enable'],
    answer: 1,
    explanation: 'Prohibit means to forbid or ban.'
  },
  {
    id: 108,
    type: 'Verbal',
    question: 'Complete the analogy: Sun is to Day as Moon is to ...',
    options: ['Star', 'Night', 'Sky', 'Dark'],
    answer: 1,
    explanation: 'The moon is associated with night, just as the sun is with day.'
  },
  {
    id: 109,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "permanent"?',
    options: ['Lasting', 'Temporary', 'Forever', 'Eternal'],
    answer: 1,
    explanation: 'Temporary is the antonym of permanent.'
  },
  {
    id: 110,
    type: 'Verbal',
    question: 'Complete the analogy: Seed is to Plant as Egg is to ...',
    options: ['Nest', 'Bird', 'Shell', 'Feather'],
    answer: 1,
    explanation: 'An egg develops into a bird, just as a seed grows into a plant.'
  },
  {
    id: 111,
    type: 'Verbal',
    question: 'Which word means the same as "adjacent"?',
    options: ['Distant', 'Next to', 'Far', 'Remote'],
    answer: 1,
    explanation: 'Adjacent means next to or neighboring.'
  },
  {
    id: 112,
    type: 'Verbal',
    question: 'Complete the analogy: Composer is to Symphony as Author is to ...',
    options: ['Book', 'Novel', 'Library', 'Reader'],
    answer: 1,
    explanation: 'An author creates a novel, just as a composer creates a symphony.'
  },
  {
    id: 113,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "optimistic"?',
    options: ['Hopeful', 'Pessimistic', 'Positive', 'Cheerful'],
    answer: 1,
    explanation: 'Pessimistic is the antonym of optimistic.'
  },
  {
    id: 114,
    type: 'Verbal',
    question: 'Complete the analogy: Keyboard is to Computer as Steering Wheel is to ...',
    options: ['Car', 'Driver', 'Road', 'Tire'],
    answer: 0,
    explanation: 'A steering wheel controls a car, just as a keyboard controls a computer.'
  },
  {
    id: 115,
    type: 'Verbal',
    question: 'Which word means the same as "meticulous"?',
    options: ['Careless', 'Careful', 'Sloppy', 'Hasty'],
    answer: 1,
    explanation: 'Meticulous means very careful and precise.'
  },
  {
    id: 116,
    type: 'Verbal',
    question: 'Complete the analogy: Fuel is to Car as Food is to ...',
    options: ['Plate', 'Human', 'Restaurant', 'Kitchen'],
    answer: 1,
    explanation: 'Food provides energy for humans, just as fuel powers a car.'
  },
  {
    id: 117,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "trivial"?',
    options: ['Minor', 'Important', 'Small', 'Insignificant'],
    answer: 1,
    explanation: 'Important is the antonym of trivial.'
  },
  {
    id: 118,
    type: 'Verbal',
    question: 'Complete the analogy: Ink is to Pen as Paint is to ...',
    options: ['Canvas', 'Brush', 'Color', 'Artist'],
    answer: 1,
    explanation: 'Paint is applied with a brush, just as ink flows from a pen.'
  },
  {
    id: 119,
    type: 'Verbal',
    question: 'Which word means the same as "abundant"?',
    options: ['Scarce', 'Plentiful', 'Rare', 'Limited'],
    answer: 1,
    explanation: 'Abundant means plentiful or in large supply.'
  },
  {
    id: 120,
    type: 'Verbal',
    question: 'Complete the analogy: Branch is to Tree as Arm is to ...',
    options: ['Hand', 'Body', 'Shoulder', 'Finger'],
    answer: 1,
    explanation: 'An arm extends from the body, just as a branch extends from a tree.'
  },
  {
    id: 121,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "precise"?',
    options: ['Exact', 'Vague', 'Accurate', 'Specific'],
    answer: 1,
    explanation: 'Vague is the antonym of precise.'
  },
  {
    id: 122,
    type: 'Verbal',
    question: 'Complete the analogy: Lens is to Camera as Window is to ...',
    options: ['Glass', 'House', 'Door', 'Wall'],
    answer: 1,
    explanation: 'A window is part of a house, just as a lens is part of a camera.'
  },
  {
    id: 123,
    type: 'Verbal',
    question: 'Which word means the same as "diligent"?',
    options: ['Lazy', 'Hardworking', 'Careless', 'Idle'],
    answer: 1,
    explanation: 'Diligent means hardworking and careful.'
  },
  {
    id: 124,
    type: 'Verbal',
    question: 'Complete the analogy: Clock is to Time as Thermometer is to ...',
    options: ['Heat', 'Temperature', 'Cold', 'Weather'],
    answer: 1,
    explanation: 'A thermometer measures temperature, just as a clock measures time.'
  },
  {
    id: 125,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "shallow"?',
    options: ['Deep', 'Surface', 'Thin', 'Light'],
    answer: 0,
    explanation: 'Deep is the antonym of shallow.'
  },
  {
    id: 126,
    type: 'Verbal',
    question: 'Complete the analogy: Chef is to Kitchen as Pilot is to ...',
    options: ['Plane', 'Cockpit', 'Sky', 'Airport'],
    answer: 1,
    explanation: 'A pilot works in a cockpit, just as a chef works in a kitchen.'
  },
  {
    id: 127,
    type: 'Verbal',
    question: 'Which word means the same as "cordial"?',
    options: ['Rude', 'Friendly', 'Cold', 'Hostile'],
    answer: 1,
    explanation: 'Cordial means friendly and warm.'
  },
  {
    id: 128,
    type: 'Verbal',
    question: 'Complete the analogy: Roots are to Tree as Foundation is to ...',
    options: ['Building', 'Roof', 'Floor', 'Wall'],
    answer: 0,
    explanation: 'A foundation supports a building, just as roots support a tree.'
  },
  {
    id: 129,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "fragile"?',
    options: ['Delicate', 'Sturdy', 'Weak', 'Brittle'],
    answer: 1,
    explanation: 'Sturdy is the antonym of fragile.'
  },
  {
    id: 130,
    type: 'Verbal',
    question: 'Complete the analogy: Author is to Story as Architect is to ...',
    options: ['Building', 'Blueprint', 'Construction', 'Design'],
    answer: 1,
    explanation: 'An architect creates a blueprint, just as an author creates a story.'
  },
  {
    id: 131,
    type: 'Verbal',
    question: 'Which word means the same as "concise"?',
    options: ['Lengthy', 'Brief', 'Wordy', 'Elaborate'],
    answer: 1,
    explanation: 'Concise means brief and to the point.'
  },
  {
    id: 132,
    type: 'Verbal',
    question: 'Complete the analogy: Ship is to Captain as Orchestra is to ...',
    options: ['Music', 'Conductor', 'Instrument', 'Violin'],
    answer: 1,
    explanation: 'A conductor leads an orchestra, just as a captain leads a ship.'
  },
  {
    id: 133,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "domestic"?',
    options: ['Home', 'Foreign', 'Local', 'Native'],
    answer: 1,
    explanation: 'Foreign is the antonym of domestic.'
  },
  {
    id: 134,
    type: 'Verbal',
    question: 'Complete the analogy: Leaves are to Photosynthesis as Lungs are to ...',
    options: ['Air', 'Breathing', 'Oxygen', 'Chest'],
    answer: 1,
    explanation: 'Lungs perform breathing, just as leaves perform photosynthesis.'
  },
  {
    id: 135,
    type: 'Verbal',
    question: 'Which word means the same as "obsolete"?',
    options: ['Modern', 'Outdated', 'New', 'Current'],
    answer: 1,
    explanation: 'Obsolete means outdated or no longer in use.'
  },
  {
    id: 136,
    type: 'Verbal',
    question: 'Complete the analogy: Caterpillar is to Butterfly as Tadpole is to ...',
    options: ['Pond', 'Frog', 'Fish', 'Water'],
    answer: 1,
    explanation: 'A tadpole transforms into a frog, just as a caterpillar becomes a butterfly.'
  },
  {
    id: 137,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "artificial"?',
    options: ['Fake', 'Natural', 'Synthetic', 'Man-made'],
    answer: 1,
    explanation: 'Natural is the antonym of artificial.'
  },
  {
    id: 138,
    type: 'Verbal',
    question: 'Complete the analogy: Lawyer is to Court as Surgeon is to ...',
    options: ['Hospital', 'Operating Room', 'Medicine', 'Patient'],
    answer: 1,
    explanation: 'A surgeon works in an operating room, just as a lawyer works in a court.'
  },
  {
    id: 139,
    type: 'Verbal',
    question: 'Which word means the same as "frugal"?',
    options: ['Wasteful', 'Thrifty', 'Extravagant', 'Lavish'],
    answer: 1,
    explanation: 'Frugal means thrifty or economical.'
  },
  {
    id: 140,
    type: 'Verbal',
    question: 'Complete the analogy: Sail is to Boat as Wing is to ...',
    options: ['Plane', 'Sky', 'Feather', 'Flight'],
    answer: 0,
    explanation: 'A wing is a key part of a plane, just as a sail is a key part of a boat.'
  },
  {
    id: 141,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "voluntary"?',
    options: ['Willing', 'Forced', 'Optional', 'Free'],
    answer: 1,
    explanation: 'Forced is the antonym of voluntary.'
  },
  {
    id: 142,
    type: 'Verbal',
    question: 'Complete the analogy: Fire is to Smoke as Lightning is to ...',
    options: ['Rain', 'Thunder', 'Storm', 'Cloud'],
    answer: 1,
    explanation: 'Lightning produces thunder, just as fire produces smoke.'
  },
  {
    id: 143,
    type: 'Verbal',
    question: 'Which word means the same as "reluctant"?',
    options: ['Eager', 'Unwilling', 'Enthusiastic', 'Ready'],
    answer: 1,
    explanation: 'Reluctant means unwilling or hesitant.'
  },
  {
    id: 144,
    type: 'Verbal',
    question: 'Complete the analogy: Student is to Classroom as Patient is to ...',
    options: ['Doctor', 'Hospital', 'Medicine', 'Nurse'],
    answer: 1,
    explanation: 'A patient is treated in a hospital, just as a student learns in a classroom.'
  },
  {
    id: 145,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "complex"?',
    options: ['Complicated', 'Simple', 'Difficult', 'Intricate'],
    answer: 1,
    explanation: 'Simple is the antonym of complex.'
  },
  {
    id: 146,
    type: 'Verbal',
    question: 'Complete the analogy: Glove is to Hand as Shoe is to ...',
    options: ['Sock', 'Foot', 'Leg', 'Toe'],
    answer: 1,
    explanation: 'A shoe is worn on the foot, just as a glove is worn on the hand.'
  },
  {
    id: 147,
    type: 'Verbal',
    question: 'Which word means the same as "vivid"?',
    options: ['Dull', 'Bright', 'Faded', 'Pale'],
    answer: 1,
    explanation: 'Vivid means bright and intense.'
  },
  {
    id: 148,
    type: 'Verbal',
    question: 'Complete the analogy: Actor is to Stage as Athlete is to ...',
    options: ['Sport', 'Field', 'Team', 'Coach'],
    answer: 1,
    explanation: 'An athlete performs on a field, just as an actor performs on a stage.'
  },
  {
    id: 149,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "innocent"?',
    options: ['Pure', 'Guilty', 'Clean', 'Blameless'],
    answer: 1,
    explanation: 'Guilty is the antonym of innocent.'
  },
  {
    id: 150,
    type: 'Verbal',
    question: 'Complete the analogy: Ink is to Paper as Paint is to ...',
    options: ['Brush', 'Canvas', 'Artist', 'Color'],
    answer: 1,
    explanation: 'Paint is applied to canvas, just as ink is applied to paper.'
  },
  {
    id: 151,
    type: 'Verbal',
    question: 'Which word means the same as "trivial"?',
    options: ['Important', 'Minor', 'Significant', 'Major'],
    answer: 1,
    explanation: 'Trivial means minor or unimportant.'
  },
  {
    id: 152,
    type: 'Verbal',
    question: 'Complete the analogy: Battery is to Flashlight as Gasoline is to ...',
    options: ['Pump', 'Car', 'Tank', 'Station'],
    answer: 1,
    explanation: 'Gasoline powers a car, just as a battery powers a flashlight.'
  },
  {
    id: 153,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "exterior"?',
    options: ['Outside', 'Interior', 'Outer', 'Surface'],
    answer: 1,
    explanation: 'Interior is the antonym of exterior.'
  },
  {
    id: 154,
    type: 'Verbal',
    question: 'Complete the analogy: Key is to Lock as Password is to ...',
    options: ['Computer', 'Security', 'Account', 'Code'],
    answer: 2,
    explanation: 'A password unlocks an account, just as a key unlocks a lock.'
  },
  {
    id: 155,
    type: 'Verbal',
    question: 'Which word means the same as "genuine"?',
    options: ['Fake', 'Authentic', 'False', 'Artificial'],
    answer: 1,
    explanation: 'Genuine means authentic or real.'
  },
  {
    id: 156,
    type: 'Verbal',
    question: 'Complete the analogy: Question is to Answer as Problem is to ...',
    options: ['Issue', 'Solution', 'Difficulty', 'Challenge'],
    answer: 1,
    explanation: 'A solution resolves a problem, just as an answer addresses a question.'
  },
  {
    id: 157,
    type: 'Verbal',
    question: 'Which word is most opposite in meaning to "urban"?',
    options: ['City', 'Rural', 'Metropolitan', 'Downtown'],
    answer: 1,
    explanation: 'Rural is the antonym of urban.'
  },
  {
    id: 158,
    type: 'Verbal',
    question: 'Complete the analogy: Nucleus is to Cell as Yolk is to ...',
    options: ['Shell', 'Egg', 'Chicken', 'White'],
    answer: 1,
    explanation: 'The yolk is the center of an egg, just as the nucleus is the center of a cell.'
  },
  {
    id: 159,
    type: 'Verbal',
    question: 'Which word means the same as "immense"?',
    options: ['Tiny', 'Huge', 'Small', 'Miniature'],
    answer: 1,
    explanation: 'Immense means huge or very large.'
  },
  {
    id: 160,
    type: 'Verbal',
    question: 'Complete the analogy: Oven is to Baking as Refrigerator is to ...',
    options: ['Food', 'Cooling', 'Kitchen', 'Storage'],
    answer: 1,
    explanation: 'A refrigerator is used for cooling, just as an oven is used for baking.'
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
  },
  {
    id: 163,
    type: 'Abstract',
    question: 'What comes next? ●, ●●, ●●●, ●●●●, ?',
    options: ['●●●●', '●●●●●', '●●●●●●', '●●'],
    answer: 1,
    explanation: 'The pattern adds one dot each time.'
  },
  {
    id: 164,
    type: 'Abstract',
    question: 'Which shape is different? ▲, ▲, ▼, ▲',
    options: ['First', 'Second', 'Third', 'Fourth'],
    answer: 2,
    explanation: 'The third shape points downward while others point up.'
  },
  {
    id: 165,
    type: 'Abstract',
    question: 'What comes next? □, ■, □, ■, ?',
    options: ['□', '■', '▢', '▣'],
    answer: 0,
    explanation: 'The pattern alternates between empty and filled squares.'
  },
  {
    id: 166,
    type: 'Abstract',
    question: 'Which doesn\'t belong? ○, ◐, ◑, □',
    options: ['○', '◐', '◑', '□'],
    answer: 3,
    explanation: 'The square is the only non-circular shape.'
  },
  {
    id: 167,
    type: 'Abstract',
    question: 'What comes next? ▸, ▸▸, ▸▸▸, ?',
    options: ['▸', '▸▸', '▸▸▸▸', '▸▸▸'],
    answer: 2,
    explanation: 'Each step adds one more triangle.'
  },
  {
    id: 168,
    type: 'Abstract',
    question: 'Find the pattern: ★, ☆, ★, ☆, ?',
    options: ['★', '☆', '✦', '✧'],
    answer: 0,
    explanation: 'The pattern alternates between filled and empty stars.'
  },
  {
    id: 169,
    type: 'Abstract',
    question: 'Which is different? ◆, ◇, ◆, ◆',
    options: ['First', 'Second', 'Third', 'Fourth'],
    answer: 1,
    explanation: 'The second diamond is empty while others are filled.'
  },
  {
    id: 170,
    type: 'Abstract',
    question: 'What comes next? ◀, ▶, ◀, ▶, ?',
    options: ['◀', '▶', '▲', '▼'],
    answer: 0,
    explanation: 'The pattern alternates left and right arrows.'
  },
  {
    id: 171,
    type: 'Abstract',
    question: 'Find the odd one: ▓, ▓, ▒, ▓',
    options: ['First', 'Second', 'Third', 'Fourth'],
    answer: 2,
    explanation: 'The third block has a different shading pattern.'
  },
  {
    id: 172,
    type: 'Abstract',
    question: 'What comes next? ○, ○○, ○○○, ○○○○, ?',
    options: ['○○○○○', '○○○○', '○○○', '○○'],
    answer: 0,
    explanation: 'Each step adds one more circle.'
  },
  {
    id: 173,
    type: 'Abstract',
    question: 'Which is different? ▬, ▬, ▭, ▬',
    options: ['First', 'Second', 'Third', 'Fourth'],
    answer: 2,
    explanation: 'The third rectangle is oriented differently.'
  },
  {
    id: 174,
    type: 'Abstract',
    question: 'What comes next? ◢, ◣, ◢, ◣, ?',
    options: ['◢', '◣', '◤', '◥'],
    answer: 0,
    explanation: 'The pattern alternates between two triangle orientations.'
  },
  {
    id: 175,
    type: 'Abstract',
    question: 'Find the pattern: ⬟, ⬢, ⬟, ⬢, ?',
    options: ['⬟', '⬢', '⬡', '⬣'],
    answer: 0,
    explanation: 'The pattern alternates between two hexagon styles.'
  },
  {
    id: 176,
    type: 'Abstract',
    question: 'Which doesn\'t match? ◉, ◉, ◎, ◉',
    options: ['First', 'Second', 'Third', 'Fourth'],
    answer: 2,
    explanation: 'The third circle has a different interior pattern.'
  },
  {
    id: 177,
    type: 'Abstract',
    question: 'What comes next? ▲, ▲▲, ▲▲▲, ?',
    options: ['▲', '▲▲', '▲▲▲▲', '▲▲▲'],
    answer: 2,
    explanation: 'Each step adds one more triangle.'
  },
  {
    id: 178,
    type: 'Abstract',
    question: 'Find the odd one: ⬛, ⬜, ⬛, ⬛',
    options: ['First', 'Second', 'Third', 'Fourth'],
    answer: 1,
    explanation: 'The second square is white while others are black.'
  },
  {
    id: 179,
    type: 'Abstract',
    question: 'What comes next? ▼, ▼, ▲, ▼, ▼, ▲, ?',
    options: ['▼', '▲', '◄', '►'],
    answer: 0,
    explanation: 'Pattern: two down, one up, repeating.'
  },
  {
    id: 180,
    type: 'Abstract',
    question: 'Which is different? ◆, ◆, ◇, ◆',
    options: ['First', 'Second', 'Third', 'Fourth'],
    answer: 2,
    explanation: 'The third diamond is outlined while others are filled.'
  },
  {
    id: 181,
    type: 'Abstract',
    question: 'What comes next? ●, ○, ●, ○, ●, ?',
    options: ['●', '○', '◐', '◑'],
    answer: 1,
    explanation: 'The pattern alternates between filled and empty circles.'
  },
  {
    id: 182,
    type: 'Abstract',
    question: 'Find the pattern: ■, □, ■, □, ■, ?',
    options: ['■', '□', '▪', '▫'],
    answer: 1,
    explanation: 'The pattern alternates between filled and empty squares.'
  },

  // NOTE: More questions will be added in batches below
  // Ready for Batch 1: IDs 3-22 (Numerical)
];