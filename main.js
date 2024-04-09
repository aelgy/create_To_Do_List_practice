function addToDo() {
  const content = document.querySelector('#typeToDo').value;
  const ul = document.querySelector('.list-group');
  // 處理 li 
  const li = document.createElement('li');
  const removeButton = removeBtn()
  const liSpan = completeBtn();
  // 處理 input 元素
  const liInput = inputCreate();
  // 處理 label 元素
  const liLabel = document.createElement('label');
  liLabel.classList.add('form-check-label');
  // 加入驗證
  if (content != "") {
    liLabel.textContent = content;
    ul.append(li);
    li.append(liInput, liLabel, liSpan, removeButton);
    addInputBorder();
    afterInput();
  } else {
    alert("請輸入正確文字")
  }
}

// 按添加鈕之後，把 input 選項歸零
function afterInput() {
  const input = document.querySelector('#typeToDo');
  input.classList.remove('border-warning', 'border-danger');
  // input.setAttribute('onfocus', 'this.value=""')
  input.value = "";
}

// 添加 li 中的 Input 元素
function inputCreate() {
  const liInput = document.createElement('input');
  liInput.classList.add('form-check-input', 'me-1');
  liInput.setAttribute('type', 'checkbox')
  liInput.setAttribute('onClick', 'completeToggle()')
  return liInput
}

// 添加已完成區塊（用按鈕來表示）
function completeBtn() {
  const liSpan = document.createElement('button');
  liSpan.classList.add('btn', 'btn-outline-success', 'btn-sm');
  liSpan.setAttribute('type', 'button');
  liSpan.setAttribute('style', 'display:none')
  liSpan.textContent = '已完成';
  return liSpan
}

// 添加刪除鍵
function removeBtn() {
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('btn', 'btn-secondary', 'btn-sm');
  removeBtn.setAttribute('type', 'button');
  removeBtn.setAttribute('onclick', 'removeAction()');
  removeBtn.textContent = 'delete';
  return removeBtn;
}

// 添加 li 的 border
function addInputBorder() {
  const optionValue = document.querySelector('.form-select').value;
  const li = event.target.parentElement.parentElement.nextElementSibling.nextElementSibling.lastChild;
  if (optionValue == "2") {
    li.classList.add('list-group-item', 'list-group-item-warning'
    )
  }
  else if (optionValue == "3") {
    li.classList.add('list-group-item', 'list-group-item-danger')
  } else {
    li.classList.add('list-group-item', 'border-0');
  }
}

// 刪除動作
function removeAction() {
  const li = event.target;
  li.closest('li').remove();
}

// 建立輸出鍵
function outputFile() {
  const listGroup = document.querySelectorAll('li');
  let text = "今日待辦：";
  let num = 1;
  for (let i of listGroup) {
    text = text + num + ". " + i.children[1].textContent + " "
    num++
  }
  alert(text)
}

// input 的顏色變化
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

// 已完成鍵的開關
function completeToggle() {
  const liSpan = event.target.nextElementSibling.nextElementSibling;
  if (liSpan.style.display === "none") {
    liSpan.style.display = "inline-block";
  } else {
    liSpan.style.display = "none";
  }
} 