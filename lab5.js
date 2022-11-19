const body = document.querySelector('body');
let Valid = 1;
let errorFields = [];
let answers = [];
const answerDiv = document.createElement('div');
const task1 = document.getElementById('task1');

function onSubmit() {
    clearInfo();
    checkFields('name', 'ПІБ', /^[a-zA-ZА-Яа-яґҐєЄіІїЇ]+ [A-ZА-ЯҐЄІЇ]\. [A-ZА-ЯҐЄІЇ]\.$/);
    checkFields('birthday', 'Дата народження', /^\d{2}.\d{2}.\d{4}$/);
    checkFields('e-mail', 'Електронна пошта', /^\w+@\w+\.com$/);
    checkFields('faculty', 'Факультет', /^[А-ЯІіЇї]{4}$/);
    checkFields('address', 'Адреса', /^м\. [a-zA-ZА-Яа-яґҐєЄіІїЇ]+$/);
    if (Valid) {
        answers.forEach(answer => answerDiv.appendChild(answer));
        task1.appendChild(answerDiv);
    } else {
        errorFields.forEach(errorField => {
            const field = document.getElementById(errorField);
            field.style.border = '2px red solid';
        });
    }
}

function checkFields(type, text, regex, additionalCheck = () => true) {
    const valueFromElement = document.getElementById(type).value;
    if (regex.test(valueFromElement) && additionalCheck(valueFromElement)) {
        const answer = document.createElement('h4');
        answer.innerHTML = `${text}: ` + valueFromElement;
        answers.push(answer);
    } else {
        Valid *= 0;
        errorFields.push(type);
    }

}

function clearInfo() {
    while (answerDiv.firstChild) answerDiv.removeChild(answerDiv.firstChild);
    if (task1.querySelector('.answerDiv')) task1.removeChild(answerDiv);
    errorFields.forEach(errorField => {
        const field = document.getElementById(errorField);
        field.style.border = '1px gray solid';
    });
    Valid = 1;
    errorFields = [];
    answers = [];
}
function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
};
const shownColor = document.getElementById('shown_color');
const cellColor = document.getElementById('cell_color');


cellColor.addEventListener('mouseover', () => cellColor.style.backgroundColor = getRandomColor());
cellColor.addEventListener('click', () => cellColor.style.backgroundColor = shownColor.value)
const trs = document.getElementsByTagName('tr');
for ( let tr of trs) {
    tr
        .addEventListener('dblclick', e => {
            const el = e. target;
            const trs = document.getElementsByTagName('tr');
            for ( let tr of trs) {
                if (tr != el) {
                    tr.style.backgroundColor="#16F5D9";
                }


            }
        });
}
