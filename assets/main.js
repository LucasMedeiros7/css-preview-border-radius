const $box = document.querySelector('.box');

document.querySelectorAll('input').forEach(modifyBorderRadius);

function modifyBorderRadius(input) {
  const borderDirection = {
    'top-left': 'borderTopLeftRadius',
    'top-right': 'borderTopRightRadius',
    'bottom-right': 'borderBottomRightRadius',
    'bottom-left': 'borderBottomLeftRadius',
  };

  input.addEventListener('input', event => { 
    let userInput = (+event.target.value).toFixed(3);
    if (userInput.length > 3) {
      userInput = userInput.substring(0, 3);
    }
    const direction = borderDirection[event.target.id];
    generateBorderRadiusValues(direction, userInput)
    $box.style[direction] = `${userInput}px`;
  });
}

function generateBorderRadiusValues(direction, value) {
  const borderDirectionValues = {
    'borderTopLeftRadius': 0,
    'borderTopRightRadius': 1,
    'borderBottomRightRadius': 2,
    'borderBottomLeftRadius': 3,
  }
  const $borderRadiusValues = document.querySelector('#border-radius-values');
  const listDirectionValues = $borderRadiusValues.innerText.split(' ')
  if(value <= 0 ) {
    listDirectionValues[borderDirectionValues[direction]] = 0
  } else {
    listDirectionValues[borderDirectionValues[direction]] = `${Math.round(value)}px` 
  }
  $borderRadiusValues.innerText = listDirectionValues.join(' ')
}
