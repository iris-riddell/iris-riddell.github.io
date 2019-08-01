var glowstick1 = document.getElementById('glowstick1');
glowstick1.animate([
    { transform: 'scale(1)', background: 'purple', opacity: 1, offset: 0 },
    { transform: 'scale(.2) rotate(300deg)', background: 'blue', opacity: .5, offset: .2 },
    { transform: 'scale(1) rotate(0deg)', background: 'yellow', opacity: 1, offset: 1 },
  ], {
    duration: 2000,
    easing: 'ease-in-out', 
    delay: 10, 
    iterations: Infinity, 
    direction: 'alternate', 
    fill: 'forwards'
  });

  var glowstick2 = document.getElementById('glowstick2');
glowstick2.animate([
    { transform: 'scale(1)', background: 'white', opacity: 1, offset: 0 },
    { transform: 'scale(.2) rotate(200deg)', background: 'lightGreen', opacity: .5, offset: .2 },
    { transform: 'scale(1) rotate(0deg)', background: 'red', opacity: 1, offset: 1 },
  ], {
    duration: 2000, 
    easing: 'linear', 
    delay: 10, 
    iterations: Infinity, 
    direction: 'normal', 
    fill: 'backwards' 
  });

  var glowstick3 = document.getElementById('glowstick3');
glowstick3.animate([
    { transform: 'scale(1)', background: '#f032b1', opacity: 1, offset: 0 },
    { transform: 'scale(1.5) rotate(-100deg)', background: '#59d936', opacity: .5, offset: .5 },
    { transform: 'scale(1) rotate(0deg)', background: '#f032b1', opacity: 1, offset: 1 },
  ], {
    duration: 2000, 
    easing: 'ease-in', 
    delay: 10, 
    iterations: Infinity, 
    direction: 'normal', 
    fill: 'both' 
  });

  var glowstick4 = document.getElementById('glowstick4');
glowstick4.animate([
    { transform: 'scale(1)', background: '#f032b1', opacity: 1, offset: 0 },
    { transform: 'scale(1.5) rotate(20deg)', background: '#ffa47a', opacity: .5, offset: .5 },
    { transform: 'scale(1) rotate(350deg)', background: '#d57aff', opacity: 1, offset: 1 },
  ], {
    duration: 2000, 
    easing: 'ease-in-out', 
    delay: 10, 
    iterations: Infinity, 
    direction: 'reverse', 
    fill: 'none' 
  });

  var glowstick5 = document.getElementById('glowstick5');
glowstick5.animate([
    { transform: 'scale(1)', background: '#00ed08', opacity: 1, offset: 0 },
    { transform: 'scale(.5) rotate(290deg)', background: '#fcff63', opacity: .5, offset: .5 },
    { transform: 'scale(1) rotate(-350deg)', background: '#f20000', opacity: 1, offset: 1 },
  ], {
    duration: 2000, 
    easing: 'ease-in-out', 
    delay: 10, 
    iterations: Infinity, 
    direction: 'reverse', 
    fill: 'none' 
  });

  