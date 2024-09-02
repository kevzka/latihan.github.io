function belajar3(){
    
// <---------------------ARRAY TUTORIAL--------------------->

// Creating an Array
// Using an array literal is the easiest way to create a JavaScript Array.
    const cars = ["Saab", "Volvo", "BMW"];
/* Spaces and line breaks are not important. A declaration can span multiple lines: */
    const cars2 = [
        "Saab",
        "Volvo",
        "BMW"
    ];
/* You can also create an array, and then provide the elements: */
    const cars3 = [];
    cars[0]= "Saab";
    cars[1]= "Volvo";
    cars[2]= "BMW";

// Accessing Array Elements
// You access an array element by referring to the index number:
/*      Note: Array indexes start with 0.
        [0] is the first element. [1] is the second element. */
    // Accessing the First Array Element
    let car = cars[0];
    console.log(car);
    // Accessing the Last Array Element
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits[fruits.length - 1];
    console.log(fruit);

// Changing an Array Element
// This statement changes the value of the first element in cars:
    cars[0] = "Opel";
    console.log(cars[0]);

// <---------------------ARRAY TUTORIAL--------------------->

// <---------------------ARRAY  METHODE TUTORIAL--------------------->
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// JavaScript Array length
//  The length property returns the length (size) of an array:
    console.warn('JavaScript Array length : ');
    console.log(fruits2.length);

// JavaScript Array toString()
//  The JavaScript method toString() converts an array to a string of (comma separated) array values.
    console.warn('JavaScript Array toString() : ');
    console.log(fruits2.toString());

// JavaScript Array join()
/*  The join() method also joins all array elements into a string.
    It behaves just like toString(), but in addition you can specify the separator: */
    console.warn('JavaScript Array join() : ');
    console.log(fruits2.join(' - '))

// JavaScript Array pop()
//  The pop() method removes the last element from an array:
    console.log(fruits2);
    console.log(fruits2.pop());
    console.log(fruits2);

// JavaScript Array push()
//  The push() method adds a new element to an array (at the end):
    fruits2.push("Kiwi");
    console.log(fruits2);

// JavaScript Array shift()
//  The shift() method removes the first array element and "shifts" all other elements to a lower index.
    console.log(fruits2);
    console.log(fruits2.shift());
    console.log(fruits2);

// JavaScript Array unshift()
//  The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
    console.log(fruits2);
    console.log(fruits2.unshift("Banana"));
    console.log(fruits2);

// Splicing and Slicing Arrays
//  The splice() method adds new items to an array.
//  JavaScript Array toSpliced() The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
/*  > The first parameter (2) defines the position where new elements should be added (spliced in).
    > The second parameter (0) defines how many elements should be removed.
    > The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added. */
    console.log(fruits2);
    console.log(fruits2.splice(2, 2, "Lemon", "Kiwi"));
    console.log(fruits2);

//  The slice() method slices out a piece of an array.
    console.log(fruits2);
    console.log(fruits2.slice(1, 3));
    console.log(fruits2.slice(3));
    console.log(fruits2);

// <---------------------ARRAY  METHODE TUTORIAL--------------------->

// <---------------------SWITCH TUTORIAL--------------------->
// The JavaScript Switch Statement
// Use the switch statement to select one of many code blocks to be executed.

switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default: //default berguna untuk jika tidak ada default yang di keluarkan ketika tidak ada kondisi yang memenuhi
      text = "Looking forward to the Weekend";
  }

// <---------------------SWITCH TUTORIAL--------------------->

// <---------------------LOOP FOR OF & IN TUTORIAL--------------------->
// loop for...in: Digunakan untuk iterasi properti enumerable pada objek. Sebaiknya digunakan hanya untuk objek, bukan array.
// loop for...of: Digunakan untuk iterasi nilai dari elemen dalam objek iterable. Sangat cocok digunakan untuk array, string, dan struktur data iterable lainnya.

/* --------------------------------------------------------------------------------- */
// 3 contoh penggunaa loop for in yang benar dan salah : 
//  -------------< yang benar >: 
    // Contoh 1: Mengiterasi properti dari objek.
        const person = { name: 'Alice', age: 25, city: 'New York' };

        for (const key in person) {
            console.log(key, person[key]);
        }
    //  output :
    /*      name Alice
            age 25
            city New York */

    // Contoh 2: Iterasi properti yang ditambahkan secara dinamis ke objek.
        const carr = {};
        carr.make = 'Toyota';
        carr.model = 'Corolla';
        
        for (const key in carr) {
            console.log(key, carr[key]);
        }
    //  output : 
    /*      make Toyota
            model Corolla */

    // Contoh 3: Mengiterasi properti dari objek nested.
        const student = {
            name: 'Charlie',
            grades: { math: 90, science: 85 }
        };

        for (const key in student.grades) {
            console.log(key, student.grades[key]);
        }
    //  output :
    /*      math 90
            science 85 */

//  -------------< yang salah >: 
    // Contoh 1: Menggunakan for...in untuk mengiterasi elemen array.
        const numbers = [1, 2, 3, 4];

        for (const number in numbers) {
            console.log(number); // Hanya mengakses indeks, bukan nilai.
        }
    //  output :
    /*      0
            1
            2
            3 */

    // Contoh 2: Mengiterasi instance array-like object (seperti arguments) dengan for...in.
        function test() {
            for (const index in arguments) {
                console.log(index); // Menghasilkan indeks, bukan nilai.
            }
        }
        test(1, 2, 3);
    //  output :
    /*      0
            1
            2 */

    // Contoh 3: Mengiterasi string dengan for...in.
        const greeting = 'hello';

        for (const char in greeting) {
            console.log(greeting[char]); // Bisa berfungsi, tetapi bukan penggunaan yang tepat.
        }
    //  output :
    /*      h
            e
            l
            l
            o */

/* --------------------------------------------------------------------------------- */
// 3 contoh penggunaa loop for of yang benar dan salah : 
    //  -------------< yang benar >: 
    // Contoh 1: Mengiterasi elemen dari array.
        const fruitts = ['apple', 'banana', 'cherry'];

        for (const fruit of fruitts) {
            console.log(fruit);
        }
    //  output : 
    /*      apple
            banana
            cherry */

    // Contoh 2: Mengiterasi karakter dalam string.
        const word = 'hello';

        for (const letter of word) {
            console.log(letter);
        }
    //  ouput : 
    /*      h
            e
            l
            l
            o */

    // Contoh 3: Menggunakan for...of dengan NodeList dari DOM.
        const items = document.querySelectorAll('li');

        for (const item of items) {
            console.log(item.textContent);
        }
    //  output : 
    /*      (Bergantung pada isi elemen <li> dalam HTML) */

//  -------------< yang salah >: 
    // Contoh 1: Menggunakan for...of pada objek biasa (non-iterable).
        const personn = { name: 'Alice', age: 25 };

        for (const value of personn) {
            console.log(value); // Error: personn is not iterable
        }
    //  output : 
    /*      (Error: person is not iterable) */

    // Contoh 4: Mengiterasi string yang tidak diinginkan sebagai iterable (seperti objek dengan karakter khusus).
        const string = '\uD800'; // Karakter yang tidak lengkap

        for (const char of string) {
            console.log(char); // Tidak akan menghasilkan nilai yang diinginkan
        }
    //  output : 
    /*      (Karakter tidak akan diinterpretasikan dengan benar) */

    // Contoh 5: Menggunakan for...of pada objek DOM yang bukan NodeList.
        const div = document.getElementById('myDiv');

        for (const element of div) {
            console.log(element); // Error: div is not iterable
        }
    //  output : 
    /*      (Error: div is not iterable) */

    const buah = ['Apel', 'Jeruk', 'Pisang', 'Nanas', 'Alpukat'];

}
