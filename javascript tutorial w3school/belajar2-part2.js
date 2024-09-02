/* const siswa = {
    cewe: [
        "Azkya : 14 Agustus 2009",
        "Riama : 1 Januari 2009",
        "Vina : 8 Desember 2008",
        "Hana : 30 September 2008",
        "Asa : 6 Mei 2009",
        "Nala : 13 November 2008",
        "Lia : 26 April 2009",
        "Najla : 17 Oktober 2008"
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
        "Sammy : 17 Agustus 2008",
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
        "Nazriel : 19 September 2009"
    ]
};

var bulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

var siswaBaru = {
    cewe : [],
    cowo : []
};

function urutTahun(gender) {
    let totalSiswa = 0
    for(var tahunKe = 8; tahunKe <= 9; tahunKe++){
        console.warn("lahir tahun 200" + tahunKe);
        for(var siswaKe = 0; siswaKe <= siswa[gender].length; siswaKe++){
            for(var bulanKe = 0; bulanKe < 12; bulanKe++){
                for(var tglKe = 0; tglKe <= 30; tglKe++) {
                    let urutan = tglKe + 1;
                    for(var siswaKe = 0; siswaKe < siswa[gender].length; siswaKe++){
                        let tahunSplit = siswa[gender][siswaKe].slice(siswa[gender][siswaKe].length - 4);
                            if (siswa[gender][siswaKe].slice(siswa[gender][siswaKe].length - 4).lastIndexOf(tahunKe) != -1) {
                                if (siswa[gender][siswaKe].lastIndexOf(bulan[bulanKe]) != -1) {
                                    if (siswa[gender][siswaKe].indexOf(" " + urutan + " ") != -1) {
                                        siswaBaru[gender].push(siswa[gender][siswaKe]);
                                        console.log(siswa[gender][siswaKe] + " umur = " + (24 - tahunKe));
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
    console.log(siswa[gender].length)

    
};

var teks = '';

    for(var i = 0; i < siswaBaru[gender].length; i++){
        teks += `<div class="siswa${i}">${siswaBaru[gender][i]}</div>`
        document.querySelector('.container-Siswa').innerHTML = teks;
    }

function cek(){
        // Membuat set dari siswaBaru.cowo untuk pencarian yang lebih cepat
    const siswaBaruSet = new Set(siswaBaru.cowo);

    // Menemukan siswa yang ada di siswa.cowo tapi tidak ada di siswaBaru.cowo
    const siswaTidakAdaDiBaru = siswa.cowo.filter(siswa => !siswaBaruSet.has(siswa));

    // Menampilkan hasil
    console.log("Siswa yang ada di siswa.cowo tapi tidak ada di siswaBaru.cowo:");
    siswaTidakAdaDiBaru.forEach(siswa => console.log(siswa));
}



function gender(){
    var gender = prompt('masukan gender');
    urutTahun(gender);
}

function urut(){
    urutTahun
} */

// const siswa = {
//     cewe: [
//         "Azkya : 14 Agustus 2009",
//         "Riama : 1 Januari 2009",
//         "Vina : 8 Desember 2008",
//         "Hana : 30 September 2008",
//         "Asa : 6 Mei 2009",
//         "Nala : 13 November 2008",
//         "Lia : 26 April 2009",
//         "Najla : 17 Oktober 2008"
//     ],
//     cowo: [
//         "Yusuf : 3 Januari 2009",
//         "Faiz : 8 Maret 2009",
//         "Dave : 26 Agustus 2008",
//         "Atha : 2 Juni 2009",
//         "Zacky :  7 Desember 2008",
//         "Kamil : 8 Januari 2009",
//         "Dava : 26 Maret 2009",
//         "Athar : 20 September 2008",
//         "Sammy : 17 Agustus 2008",
//         "Rafi : 25 Juni 2009",
//         "Daniel : 1 November 2009",
//         "Siddiq : 17 November 2008",
//         "Sajidan : 15 Desember 2008",
//         "Meraz : 17 November 2008",
//         "Ano : 10 Maret 2009",
//         "Febri : 7 Februari 2009",
//         "Stefan : 12 September 2008",
//         "Abid : 24 Oktober 2009",
//         "Javaren : 15 Juli 2009",
//         "Yefta : 26 April 2009",
//         "Kevin : 19 Oktober 2009",
//         "Rama : 22 Januari 2009",
//         "Haygar : 3 Februari 2009",
//         "Chio : 10 Januari 2009",
//         "Jojo : 28 Februari 2009",
//         "Ardhan : 22 Juni 2009",
//         "Stevan : 14 Mei 2009",
//         "Arsyha : 14 Desember 2008",
//         "Labib : 12 Agustus 2009",
//         "Nazriel : 19 September 2009"
//     ]
// };

// var bulan = [
//     "Januari", "Februari", "Maret", "April", "Mei", "Juni",
//     "Juli", "Agustus", "September", "Oktober", "November", "Desember"
// ];

// let cewe = {};
// for(var i = 0; i < siswa.cewe.length; i++){
//     let ceweArray = siswa.cewe[i].split(' ');
//     cewe[ceweArray[0]] = [ceweArray[2], ceweArray[3], ceweArray[4]];
//     console.log(ceweArray[0]);
// }
// console.log(cewe);