let applicants = [];

const jsonApplicants = window.localStorage.getItem('applicants');
if(jsonApplicants) {
    applicants = JSON.parse(jsonApplicants);
}
else {
    window.location = './index.html';
}

const applicantsNode = document.getElementById('applicants');



for(let index = 0; index < applicants.length; index++) {
    const applicant = applicants[index];

    const row = document.createElement('tr');
    const name = document.createElement('td');
    const city = document.createElement('td');
    const link = document.createElement('a');
    link.href = 'applicant-details.html?name=' + encodeURIComponent(applicant.name);

    link.textContent = applicant.name;
    city.textContent = applicant.city;
    name.appendChild(link);
    row.appendChild(name);
    row.appendChild(city);
    
    applicantsNode.appendChild(row);
}