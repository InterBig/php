
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('secondNameOutput').innerText = initPerson.secondName;
    document.getElementById('workOutput').innerText = initPerson.work;
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay;

};

const  button = document.querySelector('#ButtonInput');

//кнопка подтверждения 
button.addEventListener('click', (event) => {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('secondNameOutput').innerText = initPerson.secondName;
    document.getElementById('workOutput').innerText = initPerson.work;
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay;

})

const  buttonClear = document.querySelector('#ButtonClear');
buttonClear.addEventListener('click', (event) => {
    const initPerson = personGenerator.getPerson();
        delete initPerson.firstName;
        delete initPerson.surName;
        delete initPerson.birthYear;
        delete initPerson.gender;
        delete initPerson.secondName;
        delete initPerson.work;
        delete initPerson.birthDay;
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('secondNameOutput').innerText = '';
    document.getElementById('workOutput').innerText = '';
    document.getElementById('birthDayOutput').innerText = '';

})
