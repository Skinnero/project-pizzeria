import {templates} from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;

    thisHome.render(element);
    thisHome.initWidget();
  }

  render(element) {
    const thisBooking = this;
    const generatedHTML = templates.homeWidget();

    thisBooking.dom = {};

    thisBooking.dom.wrapper = element;
    thisBooking.dom.wrapper.innerHTML = generatedHTML;

  }

  initWidget() {
    const elem = document.querySelector('.carousel');
    // eslint-disable-next-line no-undef
    new Flickity(elem, {
      cellAlign: 'left',
      wrapAround: true,
      autoPlay: true,
      contain: true,
      prevNextButtons: false,
    });

  }
}

export default Home;