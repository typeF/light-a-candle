import React from "react";
import styled from "styled-components";
import Notifications from "./Notifications/Notifications";

const FooterContainer = styled.footer``;
function Footer() {
  return (
    <FooterContainer>
      <Notifications />
    </FooterContainer>
  );
}

export default Footer;
