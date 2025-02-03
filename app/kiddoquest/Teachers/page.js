import React from "react";
import Header from "@/components/KiddoQuestComponent/Header";
import Home from "@/components/KiddoQuestComponent/Home";
import PopularTeachers from "@/components/KiddoQuestComponent/PopularTeachers";
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
        <PopularTeachers />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default KiddoQuestPage;
