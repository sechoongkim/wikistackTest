// working !
// var expect = require("chai").expect;
// var mocha = require("mocha");
// var chai = require('chai');
// var spies = require('chai-spies');
// chai.use(spies);
// var obj = require("../newfile")

// 	describe("simple test", function(){

// 		xit("adds two numbers", function(){

// 			var result = 2 + 2;
// 			expect(result).to.equal(4);
// 		});

// 	})

// 	describe("asyn", function(){

// 		xit("test case", function(done){
// 			console.log("Waiting 1 seconds");
			
// 			setTimeout(function(){
// 				console.log("waiting over");
// 				done();
// 			}, 1000);
// 		})

// 	});

// 	describe("test on spy", function(){

// 		it("for each", function(){

// 			var array = [ 1, 2, 3 ];
// 			var runlog = function(){ console.log("running")};
// 			var spy = chai.spy(runlog); // args???
// 			array.forEach(spy);
// 			expect(spy).to.have.been.called(array.length);
// 		})

// 		it("obj working", function(){

// 			expect(obj.test()).to.equal("working");
// 			var arr = ["","",""];
// 			var spy = chai.spy.on(obj, "test");
// 			console.log('arr', arr);
// 			var arr2 = arr.map(function () {
// 				return spy()
// 			});
// 			console.log('arr2', arr2);
// 			expect(spy).to.have.been.called(arr.length);
// 			expect(arr[1]).to.equal("");
// 			expect(arr2[1]).to.equal("working");
// 		})
// 	})
