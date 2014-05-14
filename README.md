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


Usage
---------------

**Select**

```js
 var array = [{ "FirstName": "John", "LastName": "H", "Age": 24, "State": "CA" }];
 
 var selectedArr = lambda.select(arr, ['FirstName', 'State']);
 
 //Output
 // [{ "FirstName": "John", "State": "CA" }];
``` 
 
**First**
```js
 var array = [{ "FirstName": "John", "LastName": "H", "Age": 24, "State": "CA" }, 
 { "FirstName": "Emily", "LastName": "J", "Age": 25, "State": "NY" }];
 
 var selectedArr = lambda.first(arr);
 
 //Output
 // [{ "FirstName": "John", "LastName": "H", "Age": 24, "State": "CA" }];
```

**Where**
```js
 var array = [{ "FirstName": "John", "LastName": "H", "Age": 24, "State": "CA" }, 
 { "FirstName": "Emily", "LastName": "J", "Age": 25, "State": "NY" }, 
 { "FirstName": "David", "LastName": "Ken", "Age": 25, "State": "NY" }, 
 { "FirstName": "Hugo", "LastName": "Boss", "Age": 25, "State": "NY" }];
 
 var selectedArr = lambda.where({ Age: 25 });
 
 //Output
 // [{ "FirstName": "Emily", "LastName": "J", "Age": 25, "State": "NY" }, 
 // { "FirstName": "David", "LastName": "Ken", "Age": 25, "State": "NY" }, 
 // { "FirstName": "Hugo", "LastName": "Boss", "Age": 25, "State": "NY" }];
```
