# Gatsby Starter MDX Less-Basic

My version of the [Gatsby Starter MDX Basic](https://github.com/ChristopherBiscardi/gatsby-starter-mdx-basic), but with a few more features added:

- ✅ Added `gatsby-plugin-sass` for Sass support out of the box.
- ✅ Added support for programmatically generating posts from the `posts` folder.
- ✅ Added support page slugs.

## Installation

1. **Initialize** this starter with the Gatsby CLI

```sh
gatsby new my-site https://github.com/AdamWhitcroft/gatsby-starter-mdx-basic
```

2. **Install** dependencies by changing directory

```sh
cd gatsby-starter-mdx-basic
npm install
```

3. **Run** the dev server

```sh
gatsby develop
```

## Personalization

There are a few fields to edit in `gatsby-config.js` to personlize this site to you. At the top of the file, you'll see this:

```
siteMetadata: {
  title: 'Gatsby Basic MDX Starter',
  description: 'A basic Gatsby starter powered by MDX.',
  author: '@adamwhitcroft',
},
```

Set the values for `title`, `description` and `author` to whatever you'd like to be rendered in your site meta tags.