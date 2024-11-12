import ProgressScroll from "@/components/Common/ProgressScroll";
import Cursor from "@/components/Common/cusor";
import LoadingScreen from "@/components/Common/loader";
import Footer from "@/components/dark/home/footer";
import NavTop from "@/components/dark/home/nav-top";
import Navbar from "@/components/dark/home/navbar";
import Portfolio from "@/components/dark/home/portfolio";
import Profile from "@/components/dark/home/profile";
import Services from "@/components/dark/home/services";
import Skills from "@/components/dark/home/skills";
import Testimonials from "@/components/dark/home/testimonials";
import Script from "next/script";
import React from "react";

function Dark() {
  return (
    <div>
      <Cursor />
      <LoadingScreen />
      <ProgressScroll />

      <div>
        <NavTop />
        <main className="container">
          <Profile />
          <Navbar />
          <section className="in-box">
            <Services />
            <Skills />
            <Portfolio />
            <Testimonials />
          </section>
        </main>
        <Footer />
      </div>
      <Script
        src="/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/jquery-migrate-3.4.0.min.js"
        strategy="beforeInteractive"
      />

      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/scripts.js" strategy="beforeInteractive" />
      <Script src="/assets/js/three.min.js" strategy="lazyOnload" />
    </div>
  );
}

export default Dark;
