function addToDo() {
  const content = document.getElementById('typeToDo').value;
  // 處理重要事項
  const optionValue = document.querySelector('.form-select').value;
  const ul = document.querySelector('.list-group');
  // 處理 li 元素
  const li = document.createElement('li');
  if (optionValue == "2") {
    li.classList.add('list-group-item', 'list-group-item-warning'
    )
  }
  else if (optionValue == "3") {
    li.classList.add('list-group-item', 'list-group-item-danger')
  } else {
    li.classList.add('list-group-item', 'border-0');
  }

  // 處理 input 元素
  const liInput = document.createElement('input');
  liInput.classList.add('form-check-input', 'me-1');
  liInput.setAttribute('type', 'checkbox')
  liInput.setAttribute('onClick', 'completeToggle()')
  // 處理 label 元素
  const liLabel = document.createElement('label');
  liLabel.classList.add('form-check-label');
  // 處理 button
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('btn', 'btn-secondary', 'btn-sm');
  removeBtn.setAttribute('type', 'button');
  removeBtn.setAttribute('onclick', 'removeAction()');
  removeBtn.textContent = 'delete';
  // 處理已完成
  const liSpan = document.createElement('button');
  liSpan.classList.add('btn', 'btn-outline-success', 'btn-sm');
  liSpan.setAttribute('type', 'button');
  liSpan.setAttribute('style', 'display:none')
  liSpan.textContent = '已完成';
  // 加入驗證
  if (content != "") {
    liLabel.textContent = content;
    ul.append(li);
    li.append(liInput, liLabel, liSpan, removeBtn);
  } else {
    alert("請輸入正確文字")
  }
}

function removeAction() {
  event.target.parentElement.remove()
}

function outputFile() {
  const listGroup = document.getElementById('listGroup').children
  let text = "今日待辦：";
  let num = 1;
  for (let i of listGroup) {
    text = text + num + ". " + i.children[1].textContent + " "
    num++
  }
  alert(text)
}

function colorChange() {
  const selectValue = document.querySelector(".form-select").value;
  const inputClass = document.querySelector(".form-control");
  if (selectValue == "2") {
    inputClass.classList.remove('border-danger');
    inputClass.classList.add('border-warning');
  } else if (selectValue == "3") {
    inputClass.classList.remove('border-warning');
    inputClass.classList.add('border-danger');
  } else if (selectValue == "1") {
    inputClass.classList.remove('border-danger', 'border-warning');
  }
}

function completeToggle() {
  const liSpan = event.target.nextElementSibling.nextElementSibling;
  if (liSpan.style.display === "none") {
    liSpan.style.display = "inline-block";
  } else {
    liSpan.style.display = "none";
  }
} 