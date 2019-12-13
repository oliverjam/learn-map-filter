# Learn array map and filter

Map and filter are useful methods for manipulating arrays. Map lets you create a new array by applying a function to each item in the original. Filter lets you create a new array with only elements that pass a certain condition.

You may have used the native JavaScript versions (e.g. `array.map()`), but we're going to be implementing our own today to see how they work. You're only allowed to use `for` loops for this challenge.

<details>
<summary>Click for a hint</summary>

You could use a normal for loop, or take a look at [`for...of` loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).

</details>

## Challenge

You can open `challenge/test.html` in your browser to see some failing tests in the console. These should pass once you've completed parts one and two below.

### Part One: `map`

Clone this repo, then open `challenge/map-filter.js` in your editor. Right now the `map` function just returns the array it is given. Instead you should make it return a _new_ array, with each element transformed by calling the `fn` argument with the element.

Example usage:

```js
map(x => x * 10, [1, 2, 3]);
// [10, 20, 30]
```

### Part Two: `filter`

In the same file edit the `filter` function so it returns a new array with only elements that pass the test provided by the `fn` argument.

Example usage:

```js
filter(x => x > 1, [1, 2, 3]);
// [2, 3]
```

### Part Three: Pokémon

![Example of solution working](https://user-images.githubusercontent.com/9408641/70819859-2b4b1c80-1dcf-11ea-82b1-49918519f677.gif)

Open `challenge/pokemon.html` in your browser. You should see an input and a list of pokémon names. Open `challenge/pokemon.js` in your editor. The code is looping over an array of pokémon and rendering their names to the list on the page.

Unfortunately the data isn't great: there's an unnecessary `"."` character at the end of each name. Use your `map` function to create a new array where the names have the `"."` removed.

At the end of the file there's an event listener for the input. It's supposed to filter the list of pokémon based on what the user types. Use your `filter` function to make this work.

<details>
<summary>Click for a hint</summary>

You might want to read about [`string.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes).

</details>
