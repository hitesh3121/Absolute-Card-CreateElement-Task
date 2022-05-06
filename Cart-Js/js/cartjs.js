const addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", () => {
  console.log("We ara inside add  funbction");
  // wrapper div
  let wrapper_div = document.createElement("div");
  wrapper_div.id = "wrapper-id";
  wrapper_div.className = "wrapper-class";

  //   header div
  let header_div = document.createElement("div");
  let header_label = document.createElement("label");
  header_label.textContent = "Header";
  header_div.appendChild(header_label);

  header_div.id = "header-id";
  header_div.className = "header-class";
  wrapper_div.appendChild(header_div);

  //   description div
  let description_div = document.createElement("div");
  let description_label = document.createElement("label");
  description_label.textContent = "Description";
  description_div.appendChild(description_label);

  description_div.id = "description-id";
  description_div.class = "description-class";
  wrapper_div.appendChild(description_div);

  //   button div
  let Btn_div = document.createElement("div");
  let Btn_button = document.createElement("button");
  Btn_div.id = "button-id";
  Btn_div.className = "button-class";
  Btn_button.innerHTML = "Add Data";
  Btn_div.appendChild(Btn_button);
  wrapper_div.appendChild(Btn_div);

  const container = document.querySelector(".container");

  container.append(wrapper_div);
});
