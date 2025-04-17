import React from "react";
import Header from "@/components/KiddoQuestComponent/Header";
import Home from "@/components/KiddoQuestComponent/Home";
import Body from "@/components/KiddoQuestComponent/Body";
import MiddleBody from "@/components/KiddoQuestComponent/MiddleBody";
import Teacher from "@/components/KiddoQuestComponent/Teacher";
import Classes from "@/components/KiddoQuestComponent/classes";
import Appointment from "@/components/KiddoQuestComponent/Appointment";
import Footer from "@/components/KiddoQuestComponent/Footer";
import PopularTeachers from "@/components/KiddoQuestComponent/PopularTeachers";
import TestimonialSection from "@/components/KiddoQuestComponent/TestimonialSection";
import 'font-awesome/css/font-awesome.min.css';

const KiddoQuestPage = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col w-full">
        <Header />
        <div className="relative">
          <Home />
        </div>
        <div className="relative mt-0 sm:mt-4">
          <Body />
        </div>
        <MiddleBody />
        <Teacher />
        <Classes />
        <Appointment />
        <PopularTeachers />
        <TestimonialSection />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default KiddoQuestPage;
