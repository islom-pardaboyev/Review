const elForm = document.querySelector(".form");
const elInputName = document.querySelector('.inputName');
const elRelationship = document.querySelector(".inputRelationship");
const elInputPhone = document.querySelector(".inputPhone");

const elResultName = document.querySelector(".resultName");
const elResultRelationship = document.querySelector('.resultRelationship');
const elResultPhone = document.querySelector(".resultPhone");

elForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const infoObj = {
        name: elInputName.value,
        relationship: elRelationship.value,
        phone: elInputPhone.value
    }

    elResultName.textContent = infoObj.name;
    elResultRelationship.textContent = infoObj.relationship;
    elResultPhone.textContent = infoObj.phone;

    
    elInputName.value = '';
    elRelationship.value = '';
    elInputPhone.value = '';
});