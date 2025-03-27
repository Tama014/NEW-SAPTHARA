const nama = "Sapthara";
let age = 3;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (age > 1 && age < 3) {
        generasi = "Start"
    } else if (age > 2 && age < 5) {
        generasi = "Process"
    } else if (age > 4 && age <= 10) {
        generasi = "success"
    } else if (age > 0 && age < 2) {
        generasi = "Draft"
    } else {
        generasi = "have been finished"
    }

    return biodata.innerHTML = generasi;

}

console.log(nama);
console.log(age);

generateBiodata()