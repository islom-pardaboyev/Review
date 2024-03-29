const elForm = document.querySelector(".form");
const elInputName = document.querySelector('.inputName');
const elRelationship = document.querySelector(".inputRelationship");
const elInputPhone = document.querySelector(".inputPhone");

const elResultName = document.querySelector(".resultName");
const elResultRelationship = document.querySelector('.resultRelationship');
const elResultPhone = document.querySelector(".resultPhone");

window.onbeforeunload = () => {
    console.log('Page is refreshing');
}

elForm.addEventListener('submit', (e) => {
    e.preventDefault();

    function inputObj() {
        const infoObj = {
            name: elInputName.value,
            relationship: elRelationship.value,
            phone: elInputPhone.value
        }

        elResultName.textContent = infoObj.name;
        elResultRelationship.textContent = infoObj.relationship;
        elResultPhone.textContent = infoObj.phone;
    }

    inputObj();

    display();
    load();
});

function display() {
    const infoObj = {
        name: elInputName.value,
        relationship: elRelationship.value,
        phone: elInputPhone.value
    }

    localStorage.setItem('inputObj', JSON.stringify(infoObj));
}

function load() {
    const inputObj = localStorage.getItem('inputObj');
    if (inputObj) {
        const savedInfoObj = JSON.parse(inputObj);
        elResultName.textContent = savedInfoObj.name;
        elResultRelationship.textContent = savedInfoObj.relationship;
        elResultPhone.textContent = savedInfoObj.phone;
    }
}
