import React from "react";

import { Container } from "../styles";

function Footer() {
  return (
    <Container>
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>2021 &copy; Afya Educacional</span>
          </div>
        </div>
      </footer>

      <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
      </a>
    </Container>
  );
}

export default Footer;
