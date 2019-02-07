const applicantJSON = window.localStorage.getItem('applicants');
const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const hoursNode = document.getElementById('hours');
const snoreTypeNode = document.getElementById('snore-types');
const salaryNode = document.getElementById('salary');
const messageNode = document.getElementById('message');

console.log(applicantJSON);
if(!applicantJSON) {
    window.location = './index.html';
}
const applicants = JSON.parse(applicantJSON);

let applicant = null;

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

for(let index = 0; index < applicants.length; index++) {
    const currentApplicant = applicants[index];
    if(currentApplicant.name === name) {
        applicant = currentApplicant;
        break;
    }
}
if(applicant === null) {
    window.location = './index.html';
}

nameNode.textContent = applicant.name;
cityNode.textContent = applicant.city;
hoursNode.textContent = applicant.hours;
if(applicant.snoreType.length === 0) {
    snoreTypeNode.textContent = 'none';
}
else { 
    for(let i = 0; i < applicant.snoreType.length - 1; i++) {
        snoreTypeNode.textContent += applicant.snoreType[i] + ', ';
    }
    snoreTypeNode.textContent += applicant.snoreType[applicant.snoreType.length - 1];
}
salaryNode.textContent = applicant.salary;

if(applicant.hours < 5) {
    messageNode.textContent = 'You do not sleep enough.';
}
else if(applicant.hours > 10) {
    messageNode.textContent = 'You sleep too much, what\'s wrong with you.';
}
else {
    messageNode.textContent = 'Thank you for your interest, you will be hearing from someone in HR shortly.';
}