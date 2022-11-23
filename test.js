/*
Hitunglah jumlah pasang kaos kaki yang dapat dijual oleh sales.
Contoh:
Input: [5, 7, 7, 9, 10, 4, 5, 10, 6, 5]
Output: 3
Keterangan: Hanya 3 pasang kaos kaki yang dapat dijual (5, 7, 10)
Soal:
a. Input: [10 20 20 10 10 30 50 10 20]
Output yang diharapkan: 3
b. Input: [6 5 2 3 5 2 2 1 1 5 1 3 3 3 5]
Output yang diharapkan: 6
c. Input: [1 1 3 1 2 1 3 3 3 3]
Output yang diharapkan: 4
*/

function sellSock(n, ar) {
    let result = 0;
    let obj = [];
    for (let i = 0; i < n; i++){
      if (obj[ar[i]] === undefined) {
        obj[ar[i]] = 1;
      } else {
        obj[ar[i]]++
      }
    }
    for (let key in obj) {
      result += Math.floor(obj[key] / 2);
    }
    return result;
  }
  
  console.log("menhitung jumlah pasang kaos kaki yang dapat dijual oleh sales.")
  console.log(sellSock(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
  console.log(sellSock(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3,3,5]));
  console.log(sellSock(10, [1 ,1 ,3 ,1 ,2 ,1 ,3 ,3 ,3 ,3]));
  
  /*
  Contoh:
  Input: Kemarin Shopia per[gi ke mall.
  Output: 4 (Karena kata pergi memiliki special karakter)
  Soal:
  a. Input: Saat meng*ecat tembok, Agung dib_antu oleh Raihan.
  Output: 5
  b. Input: Berapa u(mur minimal[ untuk !mengurus ktp?
  Output: 3
  c. Input: Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.
  Output: 4
  */
  
  function countWord(kata){
    let result = 0;
    let arr = kata.split(" ")
    for (let i = 0; i < arr.length; i++){
      if(arr[i].includes("*") || arr[i].includes("_") || arr[i].includes("(") || arr[i].includes("?") || arr[i].includes("!") || arr[i].includes("=") || arr[i].includes("&")) {
        result++
      }
    }
    return arr.length - result
  }
  
  console.log("---------------------------------------")
  console.log("menghitung jumlah kata pada sebuah kalimat.")
  console.log(countWord("Saat meng*ecat tembok, Agung dib_antu oleh Raihan."))
  console.log(countWord("Berapa u(mur minimal[ untuk !mengurus ktp?"))
  console.log(countWord("Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda."))