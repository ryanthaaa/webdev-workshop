const likeBtn = document.getElementById("like-btn")
const countLike = document.getElementById("like-count")

let currentLikes = 0
let isLiked = false;

likeBtn.addEventListener("click", () => {
    isLiked =! isLiked;

    if (isLiked) {
        currentLikes++
        likeBtn.classList.add("liked")
    } else {
        currentLikes--
        likeBtn.classList.remove("liked")
    }

    countLike.textContent = currentLikes

})

// Macam-macam tipe data
// string
const string = "ryan gosling";

// integer for number
let number = 100;

// boolean for true or false
const boolean = false;

// array, menyimpan banytak data dan diurutkan berdasarkan index
const array = ["Bayu Coconut", "Super Dede", "Dandi Raja Prompt", "Gus Indra Krisna", "Dika Rektor", "Ryan Gosling"];
// console.log(array[2]);
// console.log(array);

// object, menyimpan banyak data berserta key-nya
const mahasiswa = [
    {
        nama: "Dika Paracetamol",
        umur: 18,
        job: "Blow Job"
    },
    {
        nama: "Zachki Strom",
        umur: 18,
        job: "Pirates"
    }
];

// console.log(mahasiswa[0]);
// console.log(mahasiswa[1]);

const mhs = {
    nama: "Ryan Es Dogler",
    umur: 19,
    ips: [
        3.00,
        4.00,
        5.00
    ],
    alamat: {
        kota: "Ngawi",
        provinsi: "Jawa",
        jalan: "Jl. Kudus"
    }
};

// console.log(mhs);

// if else
const nilai = 87;

// if (nilai > 90) {
//     console.log("Nilai Kamu A");
// }else if (nilai > 80) {
//     console.log("Nilai Kamu B");
// }else if (nilai > 70) {
//     console.log("Nilai Kamu C");
// }else {
//     console.log("Nilai Kamu D");
// }

// forloop
// for (let i = 0; i <= 10; i++) {
//     console.log("Ahhh");
// }

// while
let nialiAwal = 1;
// while (nialiAwal <= 10) { // kondisi terminasi
//     console.log("Nice");
//     nialiAwal++;
// }

// ------------------------------ PERKONDISIAN DAN PERULANGAN -------------------------------
// let jumlahAngkot = 10;
// let angkotBeroperasi = 6;

// for (let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
//     if (noAngkot <= 6) {
//         console.log("Angkot No. " + noAngkot + " Beroperasi dengan baik");
//     }else {
//         console.log("Angkot No. " + noAngkot + " Tidak dapat beroperasi");
//     }
// }

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

