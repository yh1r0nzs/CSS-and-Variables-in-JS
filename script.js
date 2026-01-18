/*
CODIGO ANTIGO 

const spacing = document.querySelector('#spacing');
const blurIn = document.querySelector('#blur');
const color = document.querySelector('#basecolor');
const imageModify = document.querySelector('#imagem-natureza');

blurIn.addEventListener('input', () => {
    return imageModify.style.filter = `blur(${blurIn.value}px)`;

});

spacing.addEventListener('input', () => {
    document.documentElement.style.setProperty(
        '--spacing',
        `${spacing.value}px`
    )
})

color.addEventListener('input', () => {
    document.documentElement.style.setProperty(
        '--baseColor',
        `${color.value}`
    )
})

const backColor = document.querySelector('#backColor')

backColor.addEventListener('input', () => {
    document.documentElement.style.setProperty(
        '--background',
        `${backColor.value}`
    )
})
*/

const root = document.documentElement;
const image = document.querySelector('#imagem-natureza');

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', () => {

    // CSS variable
    if (input.dataset.var) {
      root.style.setProperty(
        input.dataset.var,
        `${input.value}${input.dataset.unit || ''}`
      );
    }

    // filtro
    if (input.dataset.filter) {
      image.style.filter = `${input.dataset.filter}(${input.value}${input.dataset.unit})`;
    }
  });
});
