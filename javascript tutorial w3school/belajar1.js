function belajar1() {
    /* JavaScript Print
JavaScript does not have any print object or print methods.
You cannot access output devices from JavaScript.
The only exception is that you can call the window.print() method in the browser to print the content of the current window.
 */

    // <---------------------VARIABEL TUTORIAL--------------------->

    var a = " ini var,"; //gunakan let ketika mengoding JavaScript untuk browser/interpreter lama di bawah <2015 dia global scope jadi bisa di gunakan di luar block
    let b = " ini let,"; //gunakan let ketika tidak bisa menggunakan const. let itu block scope jadi hanya bisa di panggil di dalam block nya
    const c = " ini const"; //gunakan const jika value bersifat konstan dan tidak akan berubah ubah. const itu block scope jadi hanya bisa di panggil di dalam block nya

    // one statement many variabels
    let person = "kevin",
      carName = "bmw",
      price = 500; //gunakan , untuk melanjutkan Gunakan ; untuk menghentikan
    // or
    let person1 = "kevin",
      carName1 = "bmw",
      price1 = 500;

    let carName2; //jika variabel tidak di deklarasikan value nya makan nilai pada variabel = undifined

    console.log(typeof person1); // typeof operator pengecekkan type variabel

    // <---------------------VARIABEL TUTORIAL--------------------->

    // <---------------------DATA TYPE TUTORIAL--------------------->

    /* JavaScript has 8 Datatypes
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object

The Object Datatype
The object data type can contain both built-in objects, and user defined objects:

Built-in object types can be:

objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
 */

    // Numbers:
    let length = 16;
    let weight = 7.5;

    // Strings:
    let color = "Yellow";
    let lastName = "Johnson";

    // Booleans
    let x = true;
    let y = false;

    // Object:
    const personn = { firstName: "John", lastName: "Doe" };

    // Array object:
    const cars = ["Saab", "Volvo", "BMW"];

    // Date object:
    const date = new Date("2022-03-25");

    // <---------------------DATA TYPE TUTORIAL--------------------->

    // <---------------------OBJECT TYPE TUTORIAL--------------------->

    /* Objects are containers for Properties and Methods.
Properties are named Values.
Methods are Functions stored as Properties.
Properties can be primitive values, functions, or even other objects. */

    // 3 cara mendefinisikan object
    /*  menggunakn Object Literal
    menggunakan New Keyword
    menggunakan Object Constructor */

    // menggunakan Object literal
    let orang = {
      Name: "kevin Apta",
      Kelas: "XD",
      Umur: 14,
      Jurusan: "RPL",
      Ekskul: "PMR dan SEA",
    };
    // atau
    const orang1 = {};

    orang1.Nama = "kevin apta";
    orang1.Kelas = "XD";
    orang1.Umur = 14;
    orang1.Jurusan = "RPL";
    orang1.Ekskul = "PMR dan SEA";

    // menggunakan New Keyword
    const orang2 = new Object();

    orang2.Nama = "kevin apta";
    orang2.Kelas = "XD";
    orang2.Umur = 14;
    orang2.Jurusan = "RPL";
    orang2.Ekskul = "PMR dan SEA";
    /* The examples above do exactly the same.
    But, there is no need to use new Object().
    For readability, simplicity and execution speed, use the object literal method. */

    // menggunakan Object Constructor

    function Orang3(first, last, age, eye) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eye;
    }

    const myFather = new Orang3("John", "Doe", 50, "blue");
    const myMother = new Orang3("Sally", "Rally", 48, "green");
    const mySister = new Orang3("Anna", "Rally", 18, "green");
    const mySelf = new Orang3("Johnny", "Rally", 22, "green");

    // 2 cara mengakses property pada object
    // ObjectName.PropertyName;
    // ObjectName["PropertyName"];

    // javascript object method
    // Methode adalah function yang ada di dalam sebuah object
    // contoh :
    orang.NamaJrusan = function () {
      const NamaJrusan = orang.Name + " " + orang.Kelas + " " + orang.Jurusan;
      return NamaJrusan;
    };
    // Accessing Object Methods
    // PropertiName.MethodName()
    // jika kamu mengakses MethodName tanpa () maka itu akan mengeluarkan function definiton

    // Deleting Properties

    let mobil = {
      Nama: "volvo",
      Warna: "merah",
      Kode: 1234,
      Pajak: true,
    };

    delete mobil.Pajak; //The delete keyword deletes both the value of the property and the property itself.

    // Object Bersarang
    // nilai properties pada object bisa bernilai objet juga conyoh :
    let siswa = {
      Nama: "Kevin Apta",
      Kelas: "XD",
      Jurusan: "RPL",
      Pendidikan: {
        Smk: "SMK Telkom",
        Smp: "SMPN 2 PLH",
        Sd: "SDN Atu-atu",
      },
    };

    console.log(siswa.Pendidikan.Sd); // Output: SDN Atu-atu *bentuknya string*

    // JavaScript Display Objects
    /* Some solutions to display JavaScript objects are:
    Displaying the Object Properties by name
    Displaying the Object Properties in a Loop
    Displaying the Object using Object.values()
    Displaying the Object using JSON.stringify() */

    // Displaying Properties in a Loop
    let text = "";
    for (let x in siswa.Pendidikan) {
      text += siswa.Pendidikan[x] + " ";
    }
    console.log(text); // Output: SMK Telkom SMPN 2 PLH SDN Atu-atu *bentuknya string*

    // Using Object.values()
    console.log(Object.values(orang1)); // Output: (5) ['kevin apta', 'XD', 14, 'RPL', 'PMR dan SEA'] *gak tau*

    // Using JSON.stringify()
    console.log(JSON.stringify(orang1)); // Output: {"Nama":"kevin apta","Kelas":"XD","Umur":14,"Jurusan":"RPL","Ekskul":"PMR dan SEA"} *bentuk nya string*

    // <---------------------OBJECT TYPE TUTORIAL--------------------->
}
