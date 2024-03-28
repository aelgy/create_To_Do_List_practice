function addToDo() {
  const content = document.getElementById('typeToDo').value;
  const ul = document.querySelector('.list-group');
  // 處理 li 元素
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'border-0');
  // 處理 input 元素
  const input = document.createElement('input');
  input.classList.add('form-check-input', 'me-1');
  input.setAttribute('type', 'checkbox')
  // 處理 label 元素
  const label = document.createElement('label');
  label.classList.add('form-check-label');
  label.textContent = content;
  ul.append(li);
  li.append(input, label);
}