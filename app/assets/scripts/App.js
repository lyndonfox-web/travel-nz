import '../styles/styles.css';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
//todo import Modal from './modules/Modal';

//todo new Modal();

// let stickyHeader = new StickyHeader();
new StickyHeader();

// let revealOnScroll = new RevealOnScroll();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

// let mobileMenu = new MobileMenu();
new MobileMenu();
let modal;

document.querySelectorAll('.open-modal').forEach((el) => {
  el.addEventListener('click', (e) => {
    if (typeof modal === 'undefined') {
      import(/* webpackChunkName: "modal" */ './modules/Modal')
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openTheModal(), 20);
        })
        .catch(() => console.log('There was a problem.'));
    } else {
      modal.openTheModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
