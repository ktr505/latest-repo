const addProduct = () => {
  const ul = document.querySelector('ul');
  const input = document.querySelector('input');

  if (input.value !== "") {
      const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox"; 
        li.appendChild(checkbox); 
        li.appendChild(document.createTextNode(input.value)); 
        ul.appendChild(li); 
        input.value = "";
  input.value=""
  } else {
      alert('Inserire Prodotto')
  }
};
