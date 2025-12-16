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
    tns({
      container: '.my-slider',
      center: true,
      items: 1,
      slideBy: 'page',
      nav: true,
      navPosition: 'bottom',
      navAsThumbnails: true,
      controls: false,
      gutter: 10,
    });
  }
}

export default Home;