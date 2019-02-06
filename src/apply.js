const formNode = document.getElementById('sleep-form');
const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const hoursRequiredNode = document.getElementById('hours');
const yesSnoreNode = document.getElementById('yes-snore');
const noSnoreNode = document.getElementById('no-snore');
const apneaNode = document.getElementById('apnea');
const chainsawNode = document.getElementById('chainsaw');
const kittenNode = document.getElementById('kitten');
const mermaidNode = document.getElementById('mermaid');
const salaryNode = document.getElementById('salary');

let applicants = [];

const existingApplicantsJSON = window.localStorage.getItem('applicants');
if(existingApplicantsJSON) {
    applicants = JSON.parse(existingApplicantsJSON);
}

yesSnoreNode.addEventListener('change', function() {
    if(yesSnoreNode.checked) {
        const hidden = document.querySelectorAll('.snore-type');
        for(let index = 0; index < hidden.length; index++) {
            hidden[index].classList.remove('hidden');
        }
        apneaNode.disabled = false;
        chainsawNode.disabled = false;
        kittenNode.disabled = false;
        mermaidNode.disabled = false;
    }
});
noSnoreNode.addEventListener('change', function(){
    if(noSnoreNode.checked) {
        const hidden = document.querySelectorAll('.snore-type');
        for(let index = 0; index < hidden.length; index++) {
            hidden[index].classList.add('hidden');
        }
        apneaNode.checked = false;
        chainsawNode.checked = false;
        kittenNode.checked = false;
        mermaidNode.checked = false;

        apneaNode.disabled = true;
        chainsawNode.disabled = true;
        kittenNode.disabled = true;
        mermaidNode.disabled = true;
    }
});

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const snores = document.getElementsByName('snore-type[]');

    const snoreSelections = [];
    for(let index = 0; index < snores.length; index++) {
        if(snores[index].checked) {
            snoreSelections.push(snores[index].value);
        }
    }

    const applicant = {
        name: nameNode.value,
        city: cityNode.value,
        hours: hoursRequiredNode.value,
        snoreType: snoreSelections,
        salary: salaryNode.value
    };
    
    applicants.push(applicant);

    const applicantsJSON = JSON.stringify(applicants);

    window.localStorage.setItem('applicants', applicantsJSON);

    window.location = './applicant-details.html';

});