import React from "react";
import Header from "@/components/KiddoQuestComponent/Header";
import Home from "@/components/KiddoQuestComponent/Home";
import Contact from "@/components/KiddoQuestComponent/Contact";
import Footer from "@/components/KiddoQuestComponent/Footer";
import 'font-awesome/css/font-awesome.min.css';

const KiddoQuestPage = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col w-full">
        <Header />
        <div className="relative">
          <Home />
        </div>
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default KiddoQuestPage;
