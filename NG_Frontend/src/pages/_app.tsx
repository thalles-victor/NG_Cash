import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { AuthProvider } from '../contexts/AuthContext';
import { globalStyles } from '../styles/global';
import NProgress from "nprogress";
import Router from "next/router";
import { useEffect } from 'react';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  useEffect( () => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, [])


  return(
    <>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />  
      </AuthProvider>
    </>
  )
}
