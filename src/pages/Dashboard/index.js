import React from "react";

import { Container, Wrapper } from "./styles";

import Sidebar from "./Containers/Sidebar";
import NavBar from "./Containers/NavBar";
import DashBoard from "./Containers/DashBoard";
import Footer from "./Containers/Footer";

function Dashboard() {
  return (
    <Container id="page-top">
      <Wrapper>
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavBar />
          </div>
          <div class="container-fluid">
            <DashBoard />
          </div>
          <Footer />
        </div>
      </Wrapper>
    </Container>
  );
}

export default Dashboard;
