'use client';

import { useEffect } from "react";
import "../scss/App.scss";
import images from "../components/data";
import Lenis from "lenis";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Home() {

  gsap.registerPlugin(ScrollTrigger, useGSAP);

    useEffect(() => {
        const lenis = new Lenis();

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 500);
        });

        gsap.ticker.lagSmoothing(0);
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".contaier",
                start: "top top",
                end: "+=100%",
                scrub: 4,
                pin: true,
            },
        });
        tl.to(".imgMask1", {
            maskSize: "200%",
        });
        tl.to(".imgMask2", {
            maskSize: "200%",
        });

        tl.to(".imgMask3", {
            maskSize: "200%",
        });
    });


  return (
   <>
            <section>往下滑動</section>
            <div className="contaier bg-black">
                <img src={images[0]} alt="" className="imgMask1 bg-red-400" />
                <img src={images[1]} alt="" className="imgMask2 bg-green-300" />
                <img src={images[2]} alt="" className="imgMask3 bg-purple-400" />
            </div>
            <section>Mask</section>
        </>
  );
}
