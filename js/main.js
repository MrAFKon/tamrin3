let calcSlary = document.querySelector("button.click");
calcSlary.addEventListener("click", function () {
  let fullname = document.querySelector("input[name=fullname]").value;
  let fname = document.querySelector("input[name=fname]").value;
  let age = document.querySelector("input[name=age]").value;
  let tax = Number(document.querySelector("input[name=tax]").value) / 100;
  let perhour = Number(document.querySelector("input[name=perhour]").value);
  let degree = document.querySelector("select[name=degree]").value;
  let salaryPure;
  let taxsalary;
  let salary;
  if (degree === "phd") {
     salaryPure = perhour * 100000;
     taxsalary = (perhour * 100000) * tax;
     salary = salaryPure - taxsalary;
  } else if (degree === "master") {
     salaryPure = perhour * 70000;
     taxsalary = (perhour * 70000) * tax;
     salary = salaryPure - taxsalary;
  } else if (degree === "bachelor") {
     salaryPure = perhour * 50000;
     taxsalary = (perhour * 50000) * tax;
     salary = salaryPure - taxsalary;
  } else if (degree === "hidimploma") {
     salaryPure = perhour * 40000;
     taxsalary = (perhour * 40000) * tax;
     salary = salaryPure - taxsalary;
  } else if (degree === "diploma") {
     salaryPure = perhour * 20000;
     taxsalary = (perhour * 20000) * tax;
     salary = salaryPure - taxsalary;
  } else {
     salaryPure = perhour * 10000;
     taxsalary = (perhour * 10000) * tax;
     salary = salaryPure - taxsalary;
  }
  let root = document.querySelector("div#root");
  root.innerHTML = `<h2>fullname:${fullname}|fathername:${fname}|age:${age}|salary:${salary}|tax:${taxsalary}|salaryPure:${salaryPure}</h2>`;
});
