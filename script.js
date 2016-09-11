document.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelector('#main-otter');
  const sound = document.querySelector('#otter-sound');
  image.addEventListener('click', event => {
    event.stopPropagation();
    sound.play();
  });

  document.body.addEventListener('click', event => {
    const x = event.clientX;
    const y = event.clientY;
    const image = document.createElement('img');
    image.src = 'otter_roll.png';
    image.setAttribute('style',
        `display: block; position: absolute; left: ${x}px; top: ${y}px;`);
    document.body.appendChild(image);
  });
});
