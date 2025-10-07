'use client';

import Image from "next/image";
import Header from "../components/header";
import ImageLayer1 from "../components/image_layer_1";
import ImageLayer2 from "../components/image_layer_2";
import Head from "next/head";
import ImageLayer3 from "@/components/image_layer_3";
import ImageLayer4 from "../components/image_layer_4";
import ImageLayer5 from "@/components/image_layer_5";
import ImageLayer6 from "@/components/image_layer_6"
import ImageLayer7 from "@/components/image_layer_7"
import ImageLayer8 from "@/components/image_layer_8"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInRotate {
          from {
            opacity: 0;
            transform: translateY(30px) rotate(-2deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
        }

        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }

        .fade-in-left {
          animation: fadeInLeft 1s ease-out forwards;
          opacity: 0;
        }

        .fade-in-right {
          animation: fadeInRight 1s ease-out forwards;
          opacity: 0;
        }

        .fade-in-scale {
          animation: fadeInScale 1s ease-out forwards;
          opacity: 0;
        }

        .fade-in-rotate {
          animation: fadeInRotate 1s ease-out forwards;
          opacity: 0;
        }

        .delay-0 { animation-delay: 0s; }
        .delay-100 { animation-delay: 0.15s; }
        .delay-200 { animation-delay: 0.3s; }
        .delay-300 { animation-delay: 0.45s; }
        .delay-400 { animation-delay: 0.6s; }
        .delay-500 { animation-delay: 0.75s; }
        .delay-600 { animation-delay: 0.9s; }
        .delay-700 { animation-delay: 1.05s; }
        .delay-800 { animation-delay: 1.2s; }
      `}</style>
      
      <div className="fade-in-scale delay-0">
        <Header />
      </div>
      <div className="fade-in-left delay-100">
        <ImageLayer1 />
      </div>
      <div className="fade-in-right delay-200">
        <ImageLayer2 />
      </div>
      <div className="fade-in-scale delay-300">
        <ImageLayer3/>
      </div>
      <div className="fade-in-rotate delay-400">
        <ImageLayer4 />
      </div>
      <div className="fade-in-left delay-500">
        <ImageLayer5 />
      </div>
      <div className="fade-in-up delay-600">
        <ImageLayer6 />
      </div>
      <div className="fade-in-right delay-700">
        <ImageLayer7 />
      </div>
      <div className="fade-in-scale delay-800">
        <ImageLayer8/>
      </div>
    </div>
  );
}