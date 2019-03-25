import SmoothScroll from 'jquery-smooth-scroll';

class smoothScroll {
    constructor() {

        this.headerLinks = $('.primary-nav a, .btn, .large-hero__ribbon');
        this.arrowBt = $('.arrow_down');
        this.addSmoothScroll();



    }

    addSmoothScroll () {
        this.headerLinks.smoothScroll({
            offset: -70
        });

        this.arrowBt.on('click', function() {
            var trg = $(this).closest("section").nextAll("section[id]:first");
            $.smoothScroll({
                scrollTarget: trg
            });
            return false;
        });
    }
}


export default smoothScroll;