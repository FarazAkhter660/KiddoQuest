import React from "react";
import Header from "@/components/KiddoQuestComponent/Header";
import Home from "@/components/KiddoQuestComponent/Home";
import Error from "@/components/KiddoQuestComponent/Error";
import Footer from "@/components/KiddoQuestComponent/Footer";
import "font-awesome/css/font-awesome.min.css";

const KiddoQuestPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Error />
      <Footer />
    </React.Fragment>
  );
};

export default KiddoQuestPage;
