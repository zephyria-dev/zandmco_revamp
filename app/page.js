import Image from "next/image";
import Header from "../components/header";
import ImageLayer1 from "../components/image_layer_1";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ImageLayer1/>
    </div>
  );
}
