--vars
title: "How to validate form using javascript ?",
description: "form validation using json-msg library",
image: "https://www.positronx.io/wp-content/uploads/2020/06/jquery-form-validation-10131-03.jpg",
date: "Jan 26, 2021"
--

Form validation is very important in web development but in can be very messy if you will
validate all the inputs and it can lead to a bunch if/else statement and that's not what we want.Now, I am going to show you
how you can easily validate form on javascript.

## Package that you need to install

I use my own package called **[json-msg](https://json-msg.vercel.app)** you can visit the documentation if you want to learn more about it. If you are familiar of joi validation this might be easier to you.

Installation

```bash
$ npm i json-msg
```

### First, you need to design a schema.

```javascript
import jm from 'json-msg'

const schema = {
  username: jm.str({ min: 4, max: 255 }),
  password: jm.str({ min: 8, max: 50 }),
  confirmPass: jm.sameAs('password'),
}

const data = {
  username: 'xxx',
  password: '12345',
  confirmPass: 'asdfg',
}

  // to validate it
jm.validate(data,schema, {abortEarly: false});

// result
{
  username: "username characters length must be greater than 4",
  password: "password characters length must be greater than 8",
  confirmPass: "confirmPass must be the same as password"
}

```

As you can see you validating the object is easier when using json-msg, you just need to define a schema of your
data and pass data to validate it. You can use this on the backend and front-end if you are validating data before sending it
on the database.

### How to use it in React ?

> You need the form to be a controlled component by using state to store the value of the input in state

If you need a live example try to go to my [Contact](/contact) page and type anything anything on the input and
you will see the error messages;

### This is how I do it

```javascript
import React, { useState } from 'react'
import jm from 'json-msg'

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [error, setError] = useState({})

  const dataSchema = {
    name: jm.str({ min: 4, max: 20, alphanum: true }),
    email: jm.str({ email: true, max: 50 }),
    message: jm.str({ min: 10, max: 255 }),
  }

  function handleChange({ target }) {
    const value = target.value
    setData((prevData) => {
      const cloneData = { ...prevData }
      cloneData[target.name] = value
      return cloneData
    })
    const error = jm.validate(value, dataSchema[target.name])
    setError((prevError) => {
      prevError[target.name] = error
      return prevError
    })
  }
  async function handleSubmit(e) {
    e.preventDefault()
    const errors = jm.validate(data, dataSchema, { abortEarly: false })
    if (errors) return setError(errors)
    setError({})
    setData({ name: '', email: '', message: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact</h1>
      <div className="input">
        <input onChange={handleChange} value={data.name} name="name" />
        {error.name && <div className="alert alert-error"> {error.name} </div>}
      </div>
      <div className="input">
        <input onChange={handleChange} value={data.email} name="email" />
        {error.email && (
          <div className="alert alert-error"> {error.email} </div>
        )}
      </div>
      <div className="input">
        <textarea
          value={data.message}
          onChange={handleChange}
          name="message"
        ></textarea>
        {error.message && (
          <div className="alert alert-error"> {error.message} </div>
        )}
      </div>

      <button>Send</button>
    </form>
  )
}

export default Contact
```
