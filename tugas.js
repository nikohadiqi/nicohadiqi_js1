// if else, nested if

let nilai = 80;
// seorang siswa yang mendapat nilai 80 
    if (nilai >= 85) {
        console.log("Nilai A");
} // jika nilai diatas 85 maka mendapat nilai A
    else if (nilai >= 75) {
        console.log("Nilai B");
} // jika nilai diatas 75 maka mendapat nilai B
    else {
        console.log("Nilai C");
} // jika dibawah 75 maka mendapat nilai C
    if (nilai >= 60) {
        console.log("Tidak remidi");
    } // jika nilai diatas 60 maka tidak remidi
            else {
                console.log("Remidi");
    } // jika nilai dibawah 60 maka remidi

// Switch case

let jadwal = "badminton";

switch (jadwal) {
    case "badminton":
        console.log("jadwal badminton");
        break;
    case "basket":
        console.log("jadwal basket");
        break;
    case "sepakbola":
        console.log("jadwal sepakbola");
        break;
    case "renang":
        console.log("jadwal renang");
        break;
    case "mainps":
        console.log("jadwal mainps");
        break;
    default:
        console.log("Input tidak valid.");
}

// Dalam contoh ini, program akan memeriksa nilai variabel 'jadwal' 
// dan akan mencetak pesan yang sesuai dengan nilai tersebut menggunakan pernyataan 'switch' 
// dan beberapa kondisi 'case'. Jika nilai 'jadwal' sesuai dengan salah satu kondisi 'case', program akan mencetak pesan yang sesuai. 
// Tetapi jika tidak ada kesesuaian, maka blok kode dalam pernyataan 'default' akan dijalankan.
// jika break badminton dihapus maka program akan mencetak jadwal basket setelah badminton. 

// for statement

for (
    let angka = 1; 
    angka <= 100; angka++
)
     {
    console.log("Perulangan ke-" + angka);
}

// pada program diatas yaitu perulangan hinggal 100, sesuai dengan kondisi 'i <= 100'.

// do

let poin = 1;

while (poin <= 100) {
    console.log("Nilai " + poin);
    poin++;
}


// do while

let angka = 0;
do {
    angka += 1;
    console.log(angka);
  }  while (angka < 10);

// kode dalam do akan selalu dijalankan , 
// setiap program akan terus mengulang  selama <10

// function

function nilai() {
    let nilai = 75;
    let nama = "nico";
    
    if (nilai > 85 && nilai <= 100) {
        console.log(`nama saya ${nama}, nilai saya ${nilai}, sebuah nilai yang bagus`);
    } else if (nilai > 60 && nilai <= 85) {
        console.log(`nama saya ${nama}, nilai saya ${nilai}, sebuah nilai yang lumayan`);
    } else {
        console.log(`nama saya ${nama}, nilai saya ${nilai}, sebuah nilai yang perlu ditingkatkan`);
    }
}

nilai();

// Hasil dari program ini tergantung pada nilai yang ada dalam variabel nilai. 
// Dalam contoh ini, karena nilai adalah 75, 
// maka pesan yang akan dicetak adalah "nama saya nico, nilai saya 75, sebuah nilai yang lumayan"