const bgColorBtn = document.querySelector('.change-bg-color');

const body = document.body;
const colors = [
  'red',
  'blue',
  'lightgreen',
  'green',
  'violet',
  'orange',
  'purple',
  'teal',
  'yellow'
];

const changeBgColor = () => {
  return (body.style.backgroundColor =
    colors[Math.floor(Math.random() * (colors.length - 0 + 1)) + 0]);
};

bgColorBtn.addEventListener('click', changeBgColor);
