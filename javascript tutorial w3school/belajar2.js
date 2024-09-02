function belajar2() {
    function ubahNama() {
  const tagnya = document.getElementById("test");
  tagnya.innerHTML = "halo";
}
function ubahNama2() {
  const tagnya2 = document.getElementById("test2");
  tagnya2.innerHTML = "halo";
}
function ubahNama3() {
  const tagnya3 = document.getElementById("test3");
  tagnya3.innerHTML = "halo";
}

let kondisi = true;

function belajar2() {}

// <---------------------STRING METHODE TUTORIAL--------------------->

let text = "halo";
let text2 = "Apple, Banana, Kiwi";

// JavaScript String Length
console.log("karakter berjumlah " + text.length);

// JavaScript String charAt()
for (let i = 0; i < text.length; i++) {
  console.log(text.charAt(i) + " teks ke-" + i);
}

// Extracting String Parts
// There are 3 methods for extracting a part of a string:
/*  slice(start, end)
    substring(start, end)
    substr(start, length) */

// JavaScript String slice()
/*      slice() extracts a part of a string and returns the extracted part in a new string.
        the method takes 2 parameters: start position, and end position (end not included). 
        > If you omit the second parameter, the method will slice out the rest of the string:
        > If a parameter is negative, the position is counted from the end of the string:
        */
let part = text2.slice(7, 13);
console.log(part);

// JavaScript String substr()
/*      substr() is similar to slice().
        The difference is that the second parameter specifies the length of the extracted part. 
        > If you omit the second parameter, substr() will slice out the rest of the string.
        > If the first parameter is negative, the position counts from the end of the string.
        */
let part2 = text2.substr(7, 6);
console.log(part2);

// JavaScript String trim()
/*  > The trim() method removes whitespace from both sides of a string:
    > The trimStart() method works like trim(), but removes whitespace only from the start of a string.
    > The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
*/
let text3 = "      Hello World!      ";
console.log(text3.trim());
console.log(text3.trimStart());
console.log(text3.trimEnd());

// JavaScript String Padding
/*  he padStart() method pads a string from the start.
    It pads a string with another string (multiple times) until it reaches a given length. */
let numb = 5;
let textNumb = numb.toString(); //The padStart() method is a string method. To pad a number, convert the number to a string first.
console.log(textNumb.padStart(4, "0"));

/*  The padEnd() method pads a string from the end.
    It pads a string with another string (multiple times) until it reaches a given length. */
console.log(textNumb.padEnd(4, "0"));

// JavaScript String repeat()
// The repeat() method returns a string with a number of copies of a string.
console.log(textNumb.repeat(4));

// Replacing String Content
//  The replace() method replaces a specified value with another value in a string:
let text4 = "Please visit MICROSOFT, Microsoft and Microsoft!";
console.log(text4);
console.log(text4.replace("Microsoft", "W3Schools")); //By default, the replace() method replaces only the first match:
/*  Regular expressions are written without quotes. */
console.log(text4.replace(/Microsoft/i, "W3Schools")); //To replace case insensitive, use a regular expression with an /i flag (insensitive):
console.log(text4.replace(/Microsoft/g, "W3Schools")); //To replace all matches, use a regular expression with a /g flag (global match):

// Converting a String to an Array
console.log(text4.split(" "));
console.log(text4.split(","));
console.log(text.split(""));

// <---------------------STRING METHODE TUTORIAL--------------------->

// <---------------------STRING SEARCH TUTORIAL--------------------->
/* there are several string search methode, for example:
> string.indexOf();     > string.search();
> string.lastIndexOf(); > string.includes();
> string.match();       > string.startsWith();
> string.matchAll();    > string.endsWith();
*/
const text5 = "hello WORLD! HELLO world!";
// string.indexOf();
//   The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
console.log(text5.indexOf("world"));
console.log(text5.indexOf("world", 7)); //The methods accept a second parameter as the starting position for the search:

// string.lastIndexOf();
//   The indexOf() method returns the index (position) of the last occurrence of a string in a string, or it returns -1 if the string is not found:
console.log(text5.lastIndexOf("world"));
console.log(text5.lastIndexOf("world", 7)); //The methods accept a second parameter as the starting position for the search:

// string.match();
// The match() method returnsan array containing the results of matching a string against a string (or a regular expression).
console.log(text5.match("worl"));
console.log(text5.match(/worl/g));
console.log(text5.match(/worl/i));
console.log(text5.match(/worl/gi));

// string.matchAll();
// its same like methode match(); but with /teks/g

// string.search();
// its same like indexOf but not equal!
/*  The two methods, indexOf() and search(), are equal?
    They accept the same arguments (parameters), and return the same value?
    The two methods are NOT equal. These are the differences:
    The search() method cannot take a second start position argument.
    The indexOf() method cannot take powerful search values (regular expressions).
*/

// string.includes();

// string.startsWith();

// string.endsWith();

/*---------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------*/

const siswa = {
  cewe: [
    "Azkya : 14 Agustus 2009",
    "Riama : 1 Januari 2009",
    "Vina : 8 Desember 2008",
    "Hana : 30 September 2008",
    "Asa : 6 Mei 2009",
    "Nala : 13 November 2008",
    "Lia : 26 April 2009",
    "Najla : 17 Oktober 2008",
  ],
  cowo: [
    "Yusuf : 3 Januari 2009",
    "Faiz : 8 Maret 2009",
    "Dave : 26 Agustus 2008",
    "Atha : 2 Juni 2009",
    "Zacky :  7 Desember 2008",
    "Kamil : 8 Januari 2009",
    "Dava : 26 Maret 2009",
    "Athar : 20 September 2008",
    "Sammy : 17 agustus 2008",
    "Rafi : 25 Juni 2009",
    "Daniel : 1 November 2009",
    "Siddiq : 17 November 2008",
    "Sajidan : 15 Desember 2008",
    "Meraz : 17 November 2008",
    "Ano : 10 Maret 2009",
    "Febri : 7 Februari 2009",
    "Stefan : 12 September 2008",
    "Abid : 24 Oktober 2009",
    "Javaren : 15 Juli 2009",
    "Yefta : 26 April 2009",
    "Kevin : 19 Oktober 2009",
    "Rama : 22 Januari 2009",
    "Haygar : 3 Februari 2009",
    "Chio : 10 Januari 2009",
    "Jojo : 28 Februari 2009",
    "Ardhan : 22 Juni 2009",
    "Stevan : 14 Mei 2009",
    "Arsyha : 14 Desember 2008",
    "Labib : 12 Agustus 2009",
    "Nazriel : 19 September 2009",
  ],
};

var bulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

var siswaBaru = [];

function urutTahun() {
    let totalSiswa = 0
    for(var tahunKe = 8; tahunKe <= 9; tahunKe++){
        console.warn("lahir tahun 200" + tahunKe);
        for(var siswaKe = 0; siswaKe <= siswa.cowo.length; siswaKe++){
            for(var bulanKe = 0; bulanKe < 12; bulanKe++){
                for(var tglKe = 0; tglKe <= 30; tglKe++) {
                    let urutan = tglKe + 1;
                    for(var siswaKe = 0; siswaKe < siswa.cowo.length; siswaKe++){
                        let tahunSplit = siswa.cowo[siswaKe].slice(siswa.cowo[siswaKe].length - 4);
                            if (siswa.cowo[siswaKe].slice(siswa.cowo[siswaKe].length - 4).lastIndexOf(tahunKe) != -1) {
                                if (siswa.cowo[siswaKe].lastIndexOf(bulan[bulanKe]) != -1) {
                                    if (siswa.cowo[siswaKe].indexOf(" " + urutan + " ") != -1) {
                                        console.log(siswa.cowo[siswaKe] + " umur = " + (24 - tahunKe));
                                        totalSiswa++
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(totalSiswa);
    console.log(siswa.cowo.length)
}

function prompt1(){
    console.log(siswaBaru.cowo);
}

}

