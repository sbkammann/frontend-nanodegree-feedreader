/* feedreader.js
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        /* it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL defined', function() {
            allFeeds.forEach(function(val) {
                expect(val.url).toBeDefined();
                expect(val.url.length).not.toBe(0);
            });
        });

        /* loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name defined', function() {
            allFeeds.forEach(function(val) {
                expect(val.name).toBeDefined();
                expect(val.name.length).not.toBe(0);
            });
        });
    });

    /* test suite named "The menu" */
    describe('The menu', function() {
        /* test that ensures the menu element is
         * hidden by default.
         * How do I read external style in the style sheet when it
         * is not conveniently applied to the body as a closs that
         * gives away exactly what it does?
         */

        it('element hidden', function() {
            const menuHidden = document.querySelector('body');
            const classArray = menuHidden.getAttribute('class').split(" ");
            let hiddenClass;
            classArray.forEach(function(a) {
                if (a === 'menu-hidden') {
                    hiddenClass = a;
                }
            });
            expect(hiddenClass).toBe('menu-hidden');
        });

         /* test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          https://www.w3schools.com/jsref/met_html_click.asp
          same fragility as above
          */
        it('element visible when clicked, disappears when clicked again', function() {
            const menuHidden = document.querySelector('body');
            const icon = document.querySelector('i');

            icon.click();
            expect(menuHidden.getAttribute('class')).not.toBe('menu-hidden');
            icon.click();
            expect(menuHidden.getAttribute('class')).toBe('menu-hidden');
        });
    });
    /* test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        const feedcontainer = document.querySelector('.feed').children;
        let entry;


        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        it('Async loadFeed has at least one entry', function(done) {
            for (let i=0; i<feedcontainer.length; i++){
                if (feedcontainer[i].getAttribute('class') === 'entry-link') {
                    entry = feedcontainer[i];
                    break;
                }
            }
            expect(entry.getAttribute('class')).toBe('entry-link');
            done();
        });

    });
    /* test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let a;
        let b;

        beforeEach(function(done) {
            loadFeed(0, function() {
                a = document.querySelector('.feed').firstElementChild;
                loadFeed(1, function() {
                    b = document.querySelector('.feed').firstElementChild;
                    done();
                });
            });
        });

        it('Async loadFeed content changes', function(done) {
            expect(a.getAttribute('href')).not.toBe(b.getAttribute('href'));
            done();
        });
    });
}());
