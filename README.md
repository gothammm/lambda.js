Lambda.js
=========

Lambda.js is a JavaScript version of "C# Lambda Expressions in Querying", used for querying array objects.

**Current Version:** *v0.1*


Getting Started
---------------

Include the `lambda.js` to your page.

```html
<script src="src/lambda.js"></script>
```

TODO
---------------
**Where**
 - support "or", "and" operations.
 - support "like" operation.


Usage
---------------

**Select**

```js
 var array = [{ "FirstName": "John", "LastName": "H", "Age": 24, "State": "CA" }];
 
 var selectedArr = lambda.select(array, ['FirstName', 'State']);
 
 //Output
 // [{ "FirstName": "John", "State": "CA" }];
``` 
 
**First**
```js
 var array = [{ "FirstName": "John", "LastName": "H", "Age": 24, "State": "CA" }, 
 { "FirstName": "Emily", "LastName": "J", "Age": 25, "State": "NY" }];
 
 var selectedArr = lambda.first(array);
 
 //Output
 // [{ "FirstName": "John", "LastName": "H", "Age": 24, "State": "CA" }];
```

**Where**
```js
 var array = [{ "FirstName": "John", "LastName": "H", "Age": 24, "State": "CA" }, 
 { "FirstName": "Emily", "LastName": "J", "Age": 25, "State": "NY" }, 
 { "FirstName": "David", "LastName": "Ken", "Age": 25, "State": "NY" }, 
 { "FirstName": "Hugo", "LastName": "Boss", "Age": 25, "State": "NY" }];
 
 var selectedArr = lambda.where(array, { Age: 25 });
 
 //Output
 // [{ "FirstName": "Emily", "LastName": "J", "Age": 25, "State": "NY" }, 
 // { "FirstName": "David", "LastName": "Ken", "Age": 25, "State": "NY" }, 
 // { "FirstName": "Hugo", "LastName": "Boss", "Age": 25, "State": "NY" }];
```
