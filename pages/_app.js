import '../assets/css/index.css';

// custom _app.js to import custom global css
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}