let inputok = [];
let jelenSorIndex = 0;

let utTabla = document.getElementById("uttabla");
for (const tablaTest of utTabla.children) {
    for (const sor of tablaTest.children) {
        inputok.append([])
        for (const mezo of sor.children) {
            for (const elem of mezo.children) {
                if (elem.tagName.toLowerCase() == "input") {
                    elem.addEventListener("change", szamolo)
                    inputok[jelenSorIndex].append(elem)
                }
            }
        }
        jelenSorIndex++;
    }
}

        
function szamolo() {
    let szazalek1 = document.getElementById("szazalek1").value;
    let szazalek2 = document.getElementById("szazalek2").value;
    let szazalek3 = document.getElementById("szazalek3").value;
    let szazalek4 = document.getElementById("szazalek4").value;

    let ar1 = document.getElementById("ar1").value;
    let ar2 = document.getElementById("ar2").value;
    let ar3 = document.getElementById("ar3").value;
    let ar4 = document.getElementById("ar4").value;
}