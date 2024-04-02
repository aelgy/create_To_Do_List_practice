function addToDo() {
  const content = document.getElementById('typeToDo').value;
  const ul = document.querySelector('.list-group');
  // 處理 li 元素
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'border-0');
  // 處理 input 元素
  const liInput = document.createElement('input');
  liInput.classList.add('form-check-input', 'me-1');
  liInput.setAttribute('type', 'checkbox')
  // 處理 label 元素
  const liLabel = document.createElement('label');
  liLabel.classList.add('form-check-label');
  // 處理 button
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('btn', 'btn-primary', 'btn-sm');
  removeBtn.setAttribute('type', 'button');
  removeBtn.setAttribute('onclick', 'removeBtn()');
  removeBtn.textContent = '刪除';
  // 加入驗證
  if (content != "") {
    liLabel.textContent = content;
    ul.append(li);
    li.append(liInput, liLabel);
    li.append(removeBtn);
  } else {
    alert("請輸入正確文字")
  }
}

function removeBtn() {
  event.target.parentElement.remove()
}

