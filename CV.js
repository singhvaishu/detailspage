function addNewWEFeild() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
}
function generateCV() {
    let nameFeild = document.getElementById("nameFeild").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameFeild;

    document.getElementById("nameT2").innerHTML = nameFeild;
    document.getElementById("contactT").innerHTML = document.getElementById("contactFeild").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressFeild").value;
    document.getElementById("emT").innerHTML = document.getElementById("emailFeild").value;
    document.getElementById("gtT").innerHTML = document.getElementById("githubFeild").value;
    document.getElementById("lnT").innerHTML = document.getElementById("linkdinFeild").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    let wes = document.getElementsByClassName("weFeild");
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str;


    let aqs = document.getElementsByClassName("eqFeild");
    let str1 = "";
    for (let e of aqs) {
        str1 += `<li> ${e.value}</li>`
    }
    document.getElementById("aqT").innerHTML = str1;


    let file = document.getElementById('imgfield').files[0]
    console.log(file);

    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend = function () {
        document.getElementById("imgTemplate").src = reader.result;
    };

    document.getElementById('imgTemplate').src = reader.result;

    document.getElementById('cv-form').style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

function printCV() {
    window.print();
}