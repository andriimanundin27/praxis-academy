# Task Array

##Is array copied?
`let fruits = ["Apples", "Pear", "Orange"];`
> undefined

`let shoppingCart = fruits;`
> undefined

`shoppingCart.push("Banana");`
> 4

`console.log(fruits.length)`
> 4

`fruits`
> [ 'Apples', 'Pear', 'Orange', 'Banana' ]

##Array operations
`let styles=["Jazz","Blues"]`
>undefined

`styles`
>[ 'Jazz', 'Blues' ]

`styles.push("Rock-n-Roll")`
>3

`styles`
>[ 'Jazz', 'Blues', 'Rock-n-Roll' ]

`styles[(styles.length-1)/2]="Classic"`
>'Classic'

`styles`
>[ 'Jazz', 'Classic', 'Rock-n-Roll' ]

`styles.shift()`
>'Jazz'

`styles`
>[ 'Classic', 'Rock-n-Roll' ]

`styles.unshift("Rap","Reggae")`
>4

`styles`
>[ 'Rap', 'Reggae', 'Classic', 'Rock-n-Roll' ]

## Calling in an array context

`let arr = ["a", "b"];`
>undefined

`arr`
>[ 'a', 'b' ]

```
arr.push(function() {
...   alert( this );
... })
```
>3

`arr`
>[ 'a', 'b', [Function] ]

`arr[2]`
>[Function]