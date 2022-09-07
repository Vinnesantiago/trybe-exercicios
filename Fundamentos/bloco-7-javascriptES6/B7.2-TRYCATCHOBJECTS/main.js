function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  if (value1 == 0 || value2 == 0) {
    throw new Error('Um dos valores é vazio, soma não executada');
  }
  const result = Number(value1) + Number(value2);
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
}
window.onload = () => {
  const button = document.getElementById('button');
  try {
    button.addEventListener('click', sum);
  } catch (error) {
    return error.message;
  }
};
