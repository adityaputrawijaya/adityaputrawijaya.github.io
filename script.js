// Efek Hover pada Profil Picture
const profilPicture = document.querySelector('.profile-picture');
profilPicture.addEventListener('mouseover', () => {
  profilPicture.classList.add('zoom');
  profilPicture.style.boxShadow = '0 0 10px #6495ed';
});
profilPicture.addEventListener('mouseout', () => {
  profilPicture.classList.remove('zoom');
  profilPicture.style.boxShadow = 'none';
});

// Animasi pada Nama
const nama = document.querySelector('.name');
nama.addEventListener('mouseover', () => {
  nama.classList.add('active');
  nama.style.color = '#6495ed';
  nama.style.fontSize = '28px';
});
nama.addEventListener('mouseout', () => {
  nama.classList.remove('active');
  nama.style.color = '#333';
  nama.style.fontSize = '24px';
});

// Efek Fade-in pada Konten
const container = document.querySelector('.container');
container.style.opacity = 0;
setTimeout(() => {
  container.style.opacity = 1;
  container.classList.add('fade-in');
}, 500);

// Efek Scroll ke Atas
const tombolScroll = document.createElement('button');
tombolScroll.textContent = 'Scroll ke Atas';
tombolScroll.classList.add('scroll-atas');
document.body.appendChild(tombolScroll);
tombolScroll.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
