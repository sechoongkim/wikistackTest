var expect = require("chai").expect;
var mocha = require("mocha");
var chai = require('chai');
var spies = require('chai-spies');
var index = require('../models/index');
var marked = require('marked');
chai.use(spies);



describe('Page model', function () {
  before(function(done){
    return index.User.sync({force: true})
    .then(function(){
      return index.Page.sync({force:true})

    })
    .then(function(){
      done(); 
    })
  })
  

  describe('Virtuals', function () {
   // beforeEach
   
  

   var page;
   beforeEach(function () {
   page = index.Page.build({
    title: "whateverTitle",
    urlTitle: "thisIsUrlTitle",
    content: "thisIsConTent"
   });
   
   
  });
   // var spy = chai.spy.on(index.Page.getterMethods, "route");
   // var spy2 = chai.spy.on(index.Page.getterMethods, "renderedContent");
   // console.log(spy);
   // console.log(spy2);


    describe('route', function () {
      it('returns the url_name prepended by "/wiki/"', function(){
 //                 console.log(page.urlTitle); //thisIsURTitle
        
        expect(page.route).to.equal("/wiki/"+page.urlTitle); 
      
      });
    });


    describe('renderedContent', function () {
      it('converts the markdown-formatted content into HTML',function() {
   
        
        expect(page.renderedContent).to.equal(marked(page.content));
    });
  });



}); 


//**************END OF VIRTUAL 

  describe('Class methods', function (){
    var page;
    before(function (done) {
    index.Page.create({ //instanvr
      title: 'foo',
      content: 'bar',
      tags: ['foo', 'bar']
    })
    /*
      page = index.Page.build({ //doesnt interact with db
        title: 'foo',
        content: 'bar',
        tags: ['foo', 'bar']
      })
      page.save() //now becomes async-WHEN INTERACTING WITH DB
    */
    .then(function(page){
      page = page; 
        done();
      })
   
    });

    //after eah

  describe('findByTag', function () {
    
    
    it('gets pages with the search tag', function (done) {
     
      
      index.Page.findByTag('bar')
      .then(function (pages) {
      console.log(pages,"HIIIIIIIIII")
      expect(pages).to.have.lengthOf(1);
      done();
    })
    .catch(done);
    });

    it('does not get pages without the search tag', function (done) {
      index.Page.findByTag('falafel')
      .then(function (pages) {
      console.log(pages,"HIIIII")
      expect(pages).to.have.lengthOf(0);
      done();
    })
    .catch(done);
    });
    

  });




  });//*******END OF CLASS 




  describe('Instance methods', function () {
    describe('findSimilar', function () {
      it('never gets itself');
      it('gets other pages with any common tags');
      it('does not get other pages without any common tags');
    });
  });

  describe('Validations', function () {
    it('errors without title');
    it('errors without content');
    it('errors given an invalid status');
  });

  describe('Hooks', function () {
    it('it sets urlTitle based on title before validating');
  });

});

