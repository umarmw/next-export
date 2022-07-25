This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Netlify

This demo has been deployed on Netlify:

[Demo](https://tubular-gnome-1c7ca0.netlify.app/) - Static generated site demo.

## Issue

The Footer is dynamically loaded, yet, the whole markup is present in the view source.

```
import dynamic from 'next/dynamic';

...

const DynamicFooter = dynamic(() => import('../components/Footer'))

...

<DynamicFooter />

```

# Output

The markup is pre-generated and available.

`<footer class="Home_footer____T7K"><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">© Powered by Cat</a></footer>`

# Expectation

The markup should be dynamically generated and loaded when in view, thus reducing the number of JS files loaded at page load.

