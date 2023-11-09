const partes = document.querySelectorAll('.parte');
const vasos = document.querySelectorAll('.vaso');

const cantidad = document.querySelector('.cantidad');
const queda = document.querySelector('.small-text');
const completado = document.querySelector('.completado');

vasos[0].addEventListener('click', () => {
  
  if (partes[1].classList.contains('botella-iniciada')) {
    cantidad.innerHTML = '2L';
    queda.innerHTML = 'Remained';
    completado.innerHTML = '100%';

    partes.forEach(parte => parte.classList.add('parte-llena'));
    partes[0].classList.remove('parte-llena');
    partes[1].classList.remove('botella-iniciada');
    
    vasos.forEach(vaso => vaso.classList.remove('vaso-lleno'));
  } else {
    cantidad.innerHTML = '1.75L';
    queda.innerHTML = 'Remained';
    completado.innerHTML = '87.5%';
    
    partes.forEach(parte => parte.classList.add('parte-llena'));
    partes[0].classList.remove('parte-llena');
    partes[1].classList.remove('parte-llena');
    partes[1].classList.add('botella-iniciada');
  
    vasos.forEach(vaso => vaso.classList.remove('vaso-lleno'));
    vasos[0].classList.add('vaso-lleno');
  }
});

vasos[1].addEventListener('click', () => {
  cantidad.innerHTML = '1.5L';
  queda.innerHTML = 'Remained';
  completado.innerHTML = '75%';

  partes.forEach(parte => parte.classList.add('parte-llena'));
  partes[0].classList.remove('parte-llena');
  partes[1].classList.remove('parte-llena');
  partes[2].classList.remove('parte-llena');

  vasos.forEach(vaso => vaso.classList.remove('vaso-lleno'));
  vasos[0].classList.add('vaso-lleno');
  vasos[1].classList.add('vaso-lleno');
});

vasos[2].addEventListener('click', () => {
  cantidad.innerHTML = '1.25L';
  queda.innerHTML = 'Remained';
  completado.innerHTML = '67.5%';

  partes.forEach(parte => parte.classList.add('parte-llena'));
  partes[0].classList.remove('parte-llena');
  partes[1].classList.remove('parte-llena');
  partes[2].classList.remove('parte-llena');
  partes[3].classList.remove('parte-llena');

  vasos.forEach(vaso => vaso.classList.remove('vaso-lleno'));
  vasos[0].classList.add('vaso-lleno');
  vasos[1].classList.add('vaso-lleno');
  vasos[2].classList.add('vaso-lleno');
});

vasos[3].addEventListener('click', () => {
  cantidad.innerHTML = '1L';
  queda.innerHTML = 'Remained';
  completado.innerHTML = '50%';

  partes.forEach(parte => parte.classList.add('parte-llena'));
  partes[0].classList.remove('parte-llena');
  partes[1].classList.remove('parte-llena');
  partes[2].classList.remove('parte-llena');
  partes[3].classList.remove('parte-llena');
  partes[4].classList.remove('parte-llena');

  vasos.forEach(vaso => vaso.classList.remove('vaso-lleno'));
  vasos[0].classList.add('vaso-lleno');
  vasos[1].classList.add('vaso-lleno');
  vasos[2].classList.add('vaso-lleno');
  vasos[3].classList.add('vaso-lleno');
});

vasos[4].addEventListener('click', () => {
  cantidad.innerHTML = '0.75L';
  queda.innerHTML = 'Remained';
  completado.innerHTML = '37.5%';

  partes.forEach(parte => parte.classList.add('parte-llena'));
  partes[0].classList.remove('parte-llena');
  partes[1].classList.remove('parte-llena');
  partes[2].classList.remove('parte-llena');
  partes[3].classList.remove('parte-llena');
  partes[4].classList.remove('parte-llena');
  partes[5].classList.remove('parte-llena');

  vasos.forEach(vaso => vaso.classList.remove('vaso-lleno'));
  vasos[0].classList.add('vaso-lleno');
  vasos[1].classList.add('vaso-lleno');
  vasos[2].classList.add('vaso-lleno');
  vasos[3].classList.add('vaso-lleno');
  vasos[4].classList.add('vaso-lleno');
});

vasos[5].addEventListener('click', () => {
  cantidad.innerHTML = '0.5L';
  queda.innerHTML = 'Remained';
  completado.innerHTML = '25%';

  partes.forEach(parte => parte.classList.add('parte-llena'));
  partes[0].classList.remove('parte-llena');
  partes[1].classList.remove('parte-llena');
  partes[2].classList.remove('parte-llena');
  partes[3].classList.remove('parte-llena');
  partes[4].classList.remove('parte-llena');
  partes[5].classList.remove('parte-llena');
  partes[6].classList.remove('parte-llena');

  vasos.forEach(vaso => vaso.classList.remove('vaso-lleno'));
  vasos[0].classList.add('vaso-lleno');
  vasos[1].classList.add('vaso-lleno');
  vasos[2].classList.add('vaso-lleno');
  vasos[3].classList.add('vaso-lleno');
  vasos[4].classList.add('vaso-lleno');
  vasos[5].classList.add('vaso-lleno');
});

vasos[6].addEventListener('click', () => {
  cantidad.innerHTML = '0.25L';
  queda.innerHTML = 'Remained';
  completado.innerHTML = '12.5%';

  partes.forEach(parte => parte.classList.add('parte-llena'));
  partes[0].classList.remove('parte-llena');
  partes[1].classList.remove('parte-llena');
  partes[2].classList.remove('parte-llena');
  partes[3].classList.remove('parte-llena');
  partes[4].classList.remove('parte-llena');
  partes[5].classList.remove('parte-llena');
  partes[6].classList.remove('parte-llena');
  partes[7].classList.remove('parte-llena');

  vasos.forEach(vaso => vaso.classList.remove('vaso-lleno'));
  vasos[0].classList.add('vaso-lleno');
  vasos[1].classList.add('vaso-lleno');
  vasos[2].classList.add('vaso-lleno');
  vasos[3].classList.add('vaso-lleno');
  vasos[4].classList.add('vaso-lleno');
  vasos[5].classList.add('vaso-lleno');
  vasos[6].classList.add('vaso-lleno');
});

vasos[7].addEventListener('click', () => {
  cantidad.innerHTML = '0L';
  queda.innerHTML = 'Remained';
  completado.innerHTML = '0%';

  partes.forEach(parte => parte.classList.add('parte-llena'));
  partes[0].classList.remove('parte-llena');
  partes[1].classList.remove('parte-llena');
  partes[2].classList.remove('parte-llena');
  partes[3].classList.remove('parte-llena');
  partes[4].classList.remove('parte-llena');
  partes[5].classList.remove('parte-llena');
  partes[6].classList.remove('parte-llena');
  partes[7].classList.remove('parte-llena');
  partes[8].classList.remove('parte-llena');

  vasos.forEach(vaso => vaso.classList.remove('vaso-lleno'));
  vasos[0].classList.add('vaso-lleno');
  vasos[1].classList.add('vaso-lleno');
  vasos[2].classList.add('vaso-lleno');
  vasos[3].classList.add('vaso-lleno');
  vasos[4].classList.add('vaso-lleno');
  vasos[5].classList.add('vaso-lleno');
  vasos[6].classList.add('vaso-lleno');
  vasos[7].classList.add('vaso-lleno');
});