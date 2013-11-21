itself
======

A damn simple library to help you write shorter functions:

Instead of this:

```javascript
var oddTaskNames = tasks
        .filter(function(task) { return task.number % 2 == 0 }).map
        .map(function(task) { return task.name })
```

Or this using [it.js](https://github.com/dtinth/it.js)

```javascript
var It = require('it.js')
var oddTaskNames = tasks
        .filter(It.get('number')['%'](2)['=='](0))
        .map(It.get('name'))
```

You can use this module, __itself__!

```javascript
var itself = its = require('itself'), its
var oddTaskNames = tasks
        .filter(its('.number % 2 == 0'))
        .map(its('.name'))
```
















