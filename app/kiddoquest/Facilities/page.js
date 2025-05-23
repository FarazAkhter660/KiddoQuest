import React from "react";
import Header from "@/components/KiddoQuestComponent/Header";
import Home from "@/components/KiddoQuestComponent/Home";
import Body from "@/components/KiddoQuestComponent/Body";
import Footer from "@/components/KiddoQuestComponent/Footer";
import "font-awesome/css/font-awesome.min.css";

const KiddoQuestPage = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col w-full">
        <Header />
        <div className="relative">
          <Home />
        </div>
        <div className="relative mt-20 mb-20">
          <Body />
        </div>
        <div className="relative mt-20">
          <Footer />
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default KiddoQuestPage;
