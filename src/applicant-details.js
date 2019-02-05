const applicantJSON = window.localStorage.getItem('applicant');
const applicant = JSON.parse(applicantJSON);
const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const hoursNode = document.getElementById('hours');
const snoreTypeNode = document.getElementById('snore-types');
const salaryNode = document.getElementById('salary');

console.log(applicant);

nameNode.textContent = applicant.name;
cityNode.textContent = applicant.city;
hoursNode.textContent = applicant.hours;
for(let i = 0; i < applicant.snoreType.length - 1; i++) {
    snoreTypeNode.textContent += applicant.snoreType[i] + ', ';
}
snoreTypeNode.textContent += applicant.snoreType[applicant.snoreType.length - 1];
salaryNode.textContent = applicant.salary;