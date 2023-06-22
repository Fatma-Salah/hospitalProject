let deptName = document.querySelectorAll('[name="speciality"]');
let form = document.getElementById("form1");
let span = document.querySelectorAll(".deptName");
var nameOfDept;

deptName.forEach(function (dept) {
  dept.addEventListener("change", function () {
    let label = dept.nextElementSibling;
    nameOfDept = label.textContent;
    localStorage.setItem("deptName", nameOfDept);
  });
});

let text = JSON.stringify(localStorage.getItem("deptName"));

span.forEach(function (s) {
  s.innerHTML = text.split("|")[0];
  console.log(s);
});
console.log(JSON.stringify(localStorage.getItem("deptName")));
