import React from "react";
import Html from "../../../code/Html";
import { linkhtmlCode } from "../../../data/Html/button/linkhtmlCode";
import ContentSection from "../../../shared/ContentSection";

const HtmlLinkBtn: React.FC = () => {
  return (
    <div>
      <section id="code-container">
        <Html codeHtml={linkhtmlCode} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlLinkBtn;
