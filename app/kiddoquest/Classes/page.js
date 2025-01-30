import React from "react";
import Header from "@/components/KiddoQuestComponent/Header";
import Home from "@/components/KiddoQuestComponent/Home";
import Classes from "@/components/KiddoQuestComponent/classes";
import Appointment from "@/components/KiddoQuestComponent/Appointment";
import Footer from "@/components/KiddoQuestComponent/Footer";
import TestimonialSection from "@/components/KiddoQuestComponent/TestimonialSection";
import "font-awesome/css/font-awesome.min.css";

const KiddoQuestPage = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col w-full">
        <Header />
        <div className="relative">
          <Home />
        </div>
        <Classes />
        <Appointment />
        <TestimonialSection />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default KiddoQuestPage;
