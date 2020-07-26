# Static Site Generation Boilerplate

* `Public` directory is just copied, it does not go through minfication or any other process during build. So, keep minified vendor css, fonts, images, etc here.
* `Assets` directory will go through build process. So keep custom css, sass, etc here.
* `Pages` directory is root file based routing. (default is `index.js`)
* For connecting to custom APIs or proxy API connection use `pages/api` directory. This can become server side api.
* A sample static page example is `pages/index.js`
* A sample static page with data from API is `pages/blog.js`
* A sample static page with dynamic routing and data from API is `pages/posts/[id].js`
* `_app.js` is used to import custom global css
* Look for lightning icon in bottom of any page in dev mode to see if it was prerendered.
* For critical css, write styles in styled-jsx like in `index.js`
* There is also support for modular css approach in NextJS, read documentation.
* For custom global error page make `_error.js`, read more in documentation.

**Note**: Read [here](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
) for more details on Static Site Generation in NextJS.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
