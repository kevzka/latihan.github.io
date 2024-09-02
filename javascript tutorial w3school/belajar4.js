let tombol = document.createElement('button')
tombol.setAttribute('class', 'belajar4');
tombol.textContent = 'belajar4';
document.body.appendChild(tombol);
console.log(tombol);
tombol = document.querySelector('.belajar4')
tombol.addEventListener('click', function () {
    console.log('halo');
});


// -----------------------[ JAVASCRIPT SET ]-----------------------
/*  javascript set adalah sebuah koleksi yang berisi value unik
    tiap value hanya dapat muncul sekali, karena value nya yang unik */

// Cara membuat set
/*  kamu bisa buat javascript set dengan :
    > melewati array ke new set()
    > membuat sebuah set kosong dan mengisinya menggunakan add() */

let letter = new Set(['a', 'b', 'c']);
// sama saja dengan
let letter2 = new Set(['a', 'b', 'c', 'c']);
//karena yang di ambil adalah value unik pertama yang di masukan
console.log(letter)
console.log(letter2)

//membuat set dengan new set kosong
letter = new Set();
letter.add('a');
letter.add('b');
letter.add('c');
letter.add('d');
console.log(letter);

//tampilkan array set 
for(let x of letter){
    console.log(x);
}

// <[ SET METHODE ]>-----------------------

console.log(letter.has('d')); //mecek apakah di dalam array set terdapat value d?


//  -----------------------[ JAVASCRIPT DESCTRUCTING ]-----------------------
// Destructing assigment syntax berguna untuk meng-unpack object properties ke sebuah variabel
//  > let {firstName, lastName} = person;
// dan ia juga bisa meng-unpack array dan yang iterable
//  > let [firstName, lastName] = person;

//  <[ OBJECT DESCTRUCTING ]>-----------------------
let person = {              
    firstName : 'kevin',
    lastName : 'apta',
    age : 14                
};                          

//Destructing object
let {firstName, lastName : namaAkhir , age, country = 'Tanah laut'} = person; 
// >> jika country tidak ada pada object maka bisa di tulis default value nya 
// >>kamu bisa membuat alias yaitu mengunakan titik seperti ini. 
//      > let {lastName : namaAkhir} = person;
// urutan properties nya tidak menjadi masalah
// let {lastName, age, firsName} = person;       << begini tidak terjadi masalah 

console.log(`halo nama saya ${firstName} ${namaAkhir}, saya ber-umur ${age}tahun, saya lahir di ${country}`);

// -----------------------task 
const products = {
    product : ['laptop', 'handphone', 'television'],
    price : [10, 2, 5],
    stock : [30, 100, 15]
};

const {product, price, stock} = products;

for( let x in product) {
    console.log(x); // dia mengembalikan indeks array
    console.log(`Produk : ${product[x]}\nHarga : ${price[x]}jt\nKetersediaan : ${stock[x]}`);
}

for(let x of product) {
    console.log(x); // dia mengembalikan elemen array
}
