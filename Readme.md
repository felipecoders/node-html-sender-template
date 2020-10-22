# Simple server

Simple handler herokuapp to server viewer

# Introduction

Using structure folder to create a dinamic access a files and routes.

## Structure folder
```
├── pages
│   |- admin
│   │  └─ index.html
│   |- index.html
│   |- services
│   │  |- test
│   │  │  └─ index.html
│   │  |- index.html
│   │  |- post.html
│   │  └─ loader.html
├── public
│   |- css
│   │  └─ layout.css
│   |- images
│   │  └─ logo.png
```

## Dinamic routes

All files `.html` in folder `pages` are used as dinamic routes.

### Paths examples

`/admin`
```
├── pages
│   |- admin
│   │  └─ index.html

```
or
```
├── pages
│   └─ admin.html

```

### Chaining paths `/user/profile`
```
├── pages
│   |- user
│   │   └─ profile
│   │   │   └─ index.html

```
or
```
├── pages
│   |- user
│   │   └─ profile.html

```

## Assets

All assets should be put in `public` folder and accessed by path `/public/...`

### Using assets example

```
├── public
│   |- css
│   │   └─ profile.css
│   |- images
│   │   └─ users
│   │   │   └─ avatar.png
```

`.html` file:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Profile</title>

    <!-- using css asset -->
    <link href="/public/css/profile.css" rel="stylesheet" type="text/css" />

    ...
  </head>

  <body>
    <!-- using image asset -->
    <img src="/public/images/users/avatar.png" alt="avatar" />
    ...
  </body>
</html>

```

## Pre-install
Before you use this simple server, you need install dependencies.

### Installation
- Clone this with `git clone https://github.com/felipecoders/node-html-sender-template.git`
- Run `yarn` or `npm install` to install node dependencies
- Run `yarn start` or `npm start` to run server
- Access url `http://localhost:3000`


# Utils

> [Environment and support docs](https://www.notion.so/Environment-3cfd8e32d8db48568f2a892d5deff37e)
