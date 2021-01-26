--vars
title: "How to run mongodb on android",
description: "Running mongo db on the go with DORY on android",
date: "Jan 24, 2021",
image: "https://cdn.worldvectorlogo.com/logos/mongodb.svg"
--

**MongoDB** (from humongous) is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.

As a web developer and laptop is not always on our side and I came up in an idea what if I will try to code
using my phone. And Yes, I found a great way to run mongodb in android alongside with [Acode](https://play.google.com/store/apps/details?id=com.foxdebug.acodefree&hl=en&gl=us), acode is the best choice for code editting it has all the features you need with excellent workspace.

## How to run MongoDB in android ?

- Download **[DORY MONGODB](https://play.google.com/store/apps/details?id=io.tempage.dorymongo)** in playstore
- Open the app, keep the mode as **default**
- Tap the play icon in bottom right
- DONE!! MongoDB database is running

### Connect via mongo client

Try to connect the database in mongo client I personally use **[Mongo Lime](https://play.google.com/store/apps/details?id=com.mongolime.app)** because it has everything I need even though it was a paid app. Fortunately, there was a modified version of mongolime and you can download it for free.

### Connect using nodejs with mongoose

```javascript
import mongoose from 'mongoose'

mongoose
  .connect('mongodb://localhost:27017/demo', {
    useNewUrlParser: true, // If you don't know this, go to mongoose documentation
    useUnifiedTopology: true,
  })
  .then(() => 'MongoDB Connected')
```

> Run this using **Termux** on android

If you don't know how to run node in android read this [How to install NodeJS on android](/blog/how-to-run-nodejs-in-android)
