/* feedreader.js
*
* This is the spec file that Jasmine will read and contains
* all of the tests that will be run against your application.
*/

/* We're placing all of our tests within the $() function,
* since some of these tests may require DOM elements. We want
* to ensure they don't run until the DOM is ready.
*/
$(function() {

  describe('RSS Feeds', function() {

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('url is defined and not empty', function() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url.length).not.toBe(0);
      }
    });

    it('name is defined and not empty', function() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name.length).not.toBe(0);
      }
    });
  });

  describe('The menu', function() {

    it('menu element is hidden', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    it('menu state changes on click', function() {
      var menu = $('.menu-icon-link');
      menu.click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      menu.click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

  });

  describe('Initial Entries', function() {

    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it('has initial content', function() {
      expect($('.feed .entry').length).not.toBe(0);
    });

  });

  describe('New Feed Selection', function() {

    var entry1;
    var entry2;

    beforeEach(function(done) {
      entry1 = $(".entry").html();
      loadFeed(1, (function() {
        done();
        console.log('Entry1: ' + entry1)
      }));
      console.log('Load feed 1 finished!')
    });

    it('has new feed content', function(done) {
      entry2 = $(".entry").html();
      loadFeed(2, (function() {
        done();
        console.log('Entry2: ' + entry2)
        }));
      console.log('Load feed 2 finished!')
      expect(entry2).not.toBe(entry1);
      });
    });

}());
