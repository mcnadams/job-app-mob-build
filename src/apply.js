const formNode = document.getElementById('sleep-form');
const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const hoursRequiredNode = document.getElementById('hours');
const yesSnoreNode = document.getElementById('yes-snore');
const noSnoreNode = document.getElementById('no-snore');
const snoreTypeNode = document.getElementById('snore-type');
const apnea
yesSnoreNode.addEventListener('change', function() {
    if(yesSnoreNode.checked) {
        const hidden = document.querySelectorAll('.snore-type');
        for(let index = 0; index < hidden.length; index++) {
            hidden[index].classList.remove('hidden');
        }
        console.log(hidden);
        
    }
});
noSnoreNode.addEventListener('change', function(){
    if(noSnoreNode.checked) {
        const hidden = document.querySelectorAll('.snore-type');
        for(let index = 0; index < hidden.length; index++) {
            hidden[index].classList.add('hidden');
        }
        console.log(hidden);
    }
});

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const applicant = {
        name: nameNode.value,
        city: cityNode.value,
        hours: hoursRequiredNode.value 
    };

    console.log(applicant);

});