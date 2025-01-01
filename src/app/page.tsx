import AuthorCard from "@/components/authorcard";
import FeaturePage from "@/components/feature";
import MegaPage from "@/components/mega";
import NavBar from "@/components/navbar";
import React from "react";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <FeaturePage/>

      <MegaPage/>
      <AuthorCard/>
    </div>
        
  );
}
