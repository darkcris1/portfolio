--vars
title: "Ripple effects with just one line of code in javascript",
description: "how to implement ripple effects",
image: "https://i.stack.imgur.com/beNis.gif",
js: "https://unpkg.com/ripple-effects",
date: "Jan 28, 2021"
--

Web UI is important it can attract more customers or users who will visit to your website. Adding effects to your
website is really cool and attractive. In this post, I'm gonna show you how you can add ripple effects on your website
with just one line of code.

## Prerequisite

- **[ripple-effects](https://www.npmjs.com/package/ripple-effects)** library

> You can learn more about ripple effects if you visit the link

Install **ripple-effects** package in npm

```bash
$ npm i ripple-effects
```

or you can use unpkg

```html
<script src="https://unpkg.com/ripple-effects"></script>
```

## Usage

On browser

```html
<button id="btn">Ripple</button>
<script>
  ripple('.btn')
</script>
```

### You can view the demo here

<iframe height="400" style="width: 100%;" scrolling="no" title="Ripple Effect with just one line of code using ripple-effects library" src="https://codepen.io/darkcris1/embed/zYoOWrO?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/darkcris1/pen/zYoOWrO'>Ripple Effect with just one line of code using ripple-effects library</a> by darkcris1
  (<a href='https://codepen.io/darkcris1'>@darkcris1</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
