//Common JS file, used for debugging purposes
if (!lambda) throw "lambda is undefined";

var query = lambda.query;
var array = [{ "FirstName": "John", "LastName": "H", "Age": 24, "State": "CA" }, 
 { "FirstName": "Emily", "LastName": "J", "Age": 25, "State": "NY" }, 
 { "FirstName": "David", "LastName": "Ken", "Age": 25, "State": "NY" }, 
 { "FirstName": "Hugo", "LastName": "Boss", "Age": 25, "State": "CA" }];
 query.add({
     or: {
         Age: 25,
         State: "NY"
     }, and: {
         Age: 25,
         State: "NY"
     }
 }).add({
     or: {
         Age: 25,
         FirstName: "Hugo"
     }
 });
 var result = lambda.where(array, query);
