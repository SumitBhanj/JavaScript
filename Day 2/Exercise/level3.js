// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let word = sentence.match(/love/gi)
let count = word.length
console.log(count);

// Use match() to count the number of all because in the following sentence:
let sentence2 = 'You cannot end a sentence with because because because is a conjunction'
let word2 = sentence2.match(/because/gi)
console.log(word2.length);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
    const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// Calculate the total annual income of the person by extracting the numbers from the following text.
let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const numbers = income.match(/\d+/g).map(Number)
const annualIncome = (numbers[0] * 12) + numbers[1] + (numbers[2] * 12)
console.log(`Total annual income: €${annualIncome}`)
