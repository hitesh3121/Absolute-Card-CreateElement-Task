let dataArray = [];

const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", myfunction);
function myfunction() {
  console.log("We ara inside add  function");
  // wrapper div
  let wrapper_div = document.createElement("div");
  wrapper_div.id = "wrapper-id";
  wrapper_div.className = "wrapper-class";

  //   header div
  let header_div = document.createElement("div");
  let header_label = document.createElement("label");
  let header_input = document.createElement('input');
  header_input.id = "headerinput-id";
  header_label.textContent = "Header";
  header_div.appendChild(header_label);
  header_div.appendChild(header_input);

  header_div.id = "header-id";
  header_div.className = "header-class";
  wrapper_div.appendChild(header_div);

  //   description div
  let description_div = document.createElement("div");
  let description_label = document.createElement("label");
  let descriptionb_input = document.createElement('input');

  descriptionb_input.id = "descriptioninput-id";
  description_label.textContent = "Description";
  description_div.appendChild(description_label);
  description_div.appendChild(descriptionb_input);

  description_div.id = "description-id";
  description_div.class = "description-class";
  wrapper_div.appendChild(description_div);

  //   button div
  let Btn_div = document.createElement("div");
  let Btn_button = document.createElement("button");
  Btn_button.id = "button-id";
  Btn_button.className = "btn btn-primary addDataBtn";
  Btn_button.innerHTML = "Add Data";
  Btn_div.appendChild(Btn_button);
  wrapper_div.appendChild(Btn_div);

  const container = document.querySelector(".container");

  container.append(wrapper_div);
  let addData = document.querySelector('.addDataBtn');
  addData.addEventListener('click', () => {
    console.log("Clicked Button");
    let head_input = document.getElementById('headerinput-id');
    let desc_input = document.getElementById('descriptioninput-id');

    let data = {
      header: head_input.value,
      description: desc_input.value,
    }
    dataArray.push(data);

    let HTMLcarddata = ``;

    dataArray.forEach(function (singleObjects) {

      HTMLcarddata = HTMLcarddata + `
      <div class="second-container">
          <div class="item1">
              <div >${singleObjects.header}</div>
          </div>
          <div class="item2">${singleObjects.description}</div>
      </div>`
    })

    head_input.value = '';
    desc_input.value = '';
    const show_card_data = document.querySelector('.show_card_data');
    show_card_data.innerHTML = HTMLcarddata;
  })
  addBtn.removeEventListener("click", myfunction);
}

