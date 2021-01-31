--vars
title: "Svelte is better than react",
description: "Everything you need to know about svelte",
image: "https://github.com/sveltejs/branding/blob/master/svelte-logo.svg?raw=true",
date: "Jan 24, 2021"
--

A lot of frameworks popular this days especially the most dominating among the all the frameworks **React**. I know React is a library if you are just using pure Javascript and not jsx. React
is matured enough and tons of website made by it. But, there is still some drawbacks about this framework especially the
size. A lot of them says "**React is a lightweight library**" , I think twice why the hell React is lightweight, **React DOM** is almost **110 kb** size minified version. There was even a ditch that if you load your react website the first time it load you will watching loading spinner for 5 seconds or even higher in slower connection.

After I learned React, I tried **Vue** and I am not satisfied to it, it feels weird to me cause some of the conditions are put on the strings not on the curly brackets like I usually do in React. Then, I found **Svelte** , first I doubt the capabalities of svelte and hate it at the first sight cause there's a syntactic sugar that I don't like. But, after I tried it there's nothing bad I can tell, everytihng is good and expected.

### Things that I like in Svelte

- Easy to learn
- Reactivity
- No Virtual DOM
- Performant
- Small bundle size
- Less Code
- You can easily perform animation without using third party libraries

# Comparison between Svelte and React with a simple counter

### Svelte

```html
<script>
  let counter = 0
</script>

<button on:click={()=> counter++}>
  {counter}
</button>
```

### React

```js
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return <button onClick={() => setCount(count + 1)}>{count}</button>
}

export default Counter
```

As you can see svelte follow the will of jquery **write less, do more** as stated by Rich Harris.
In react you need export the specific component as default, but in Svelte it was automatically exported and it follow the rule of 1 file 1 component.

# Conclusion

If you set aside the popularity of the frameworks, Svelte is the clear winner. As a web developer the easier the
frameworks the faster the workflow and svelte fullfill the flaw that I wanted. I personally use svelte in some of my projects
now and everything is good as expected. I highly recommend svelte it was a life changing experience as a programmer.
