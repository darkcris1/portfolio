--vars
title: "Custom dialogs using calerts",
description: "how to create custom alerts or dialogs in javascript",
image: "https://calert.vercel.app/logo.svg",
js: "https://unpkg.com/calerts",
date: "Jan 31, 2021"
--

Creating a custom dialogs from scratch is time consuming and you don't want to waste your time just
building your own. In this post, I am introducing you to my own package called **[calerts](https://npmjs.com/package/calerts)**. I know there was a lot of custom libraries that you can use out there. I recommend calert because it was a lightweight package and no extra dependencies.

# Installation

```bash
$ npm i calerts
```

or embed it on html

```html
<script src="https://unpkg.com/calerts"></script>
```

## How to use it?

```html
<button onclick="calert('You clicked')">Try Me</button>
<button onclick="calert('Title','TextHere')">Try me</button>

<!-- With Icon  -->

<button onclick="calert('Success','I am success','success')">Successful</button>
<button onclick="calert('Error Occured','I am error','error')">Error</button>
<button onclick="calert('Maintenance','','warning')">Warning</button>
```

<button onclick="calert('You clicked')"> Try Me </button>
<button onclick="calert('Title','TextHere')"> Try me</button>
<br />

#### WIth Icon

<button onclick="calert('Success','I am success','success')">Successful</button>
<button onclick="calert('Error Occured','I am error','error')">Error</button>
<button onclick="calert('Maintenance','','warning')">Warning</button>

### There was a lot of features that you can do on calerts if you visit the documentation

> if you want to learn more just visit the [calerts documentation](https://calert.vercel.app)
