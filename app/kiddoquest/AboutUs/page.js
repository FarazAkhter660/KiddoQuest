"use client";

import React from "react";
import Header from "@/components/KiddoQuestComponent/Header";
import Home from "@/components/KiddoQuestComponent/Home";
import MiddleBody from "@/components/KiddoQuestComponent/MiddleBody";
import Teacher from "@/components/KiddoQuestComponent/Teacher";
import PopularTeachers from "@/components/KiddoQuestComponent/PopularTeachers";
import Footer from "@/components/KiddoQuestComponent/Footer";

const AboutPage = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col">
        <Header />
        <div className="relative">
          <Home />
        </div>
        <MiddleBody />
        <Teacher />
        <PopularTeachers />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
