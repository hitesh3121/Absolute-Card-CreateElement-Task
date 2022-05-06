
let header = document.getElementById('headerinput');
let email = document.getElementById('exampleInputEmail1');
let description = document.getElementById('descriptioninput');
const second_container = document.querySelector('.second-container');
const delete_Btn = document.querySelector('.deleteBtn');
const update_Btn = document.querySelector('.updateBtn');
const button = document.querySelector('.submitBtn');
let card_details = {};
let cardcode = ``;
let counter = 0;

button.addEventListener('click', e => {
    e.preventDefault();

    card_details = {
        header: header.value,
        email: email.value,
        description: description.value,
    };
    header.value='';
    email.value='';
    description.value='';

    cardcode = cardcode + `
    <div class="second-card" id="cardid${counter + 1}">
        <img src="../asset/img.jpg" alt="">
        <div style="margin: 10px;">
            <label class="h6" for="header">${card_details.header}</label>
        </div>
        <div>
            <div class="h6" for="emailinput">${card_details.email}</div>
        </div>
        <div>
            <div class="mb-3" for="description">${card_details.description}</div>
        </div>
        <a class='deleteBtn btn btn-warning' onclick="remove(this)" href="#">delete...</a>
        <a class='updateBtn btn btn-primary' onclick="update(this)" href="#">Update...</a>
    </div>`
    second_container.innerHTML = cardcode;
    counter++;
});

function remove(e){
    let confirmation = confirm("Are You Sure!!");
    console.log(confirmation)
    if(confirmation) e.parentNode.remove();
};

function update(e){
    console.log(e);
    
};

