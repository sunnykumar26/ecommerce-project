import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>At Fast Craft, we take your privacy and security seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website and services.</p>
          <p>1. Information We Collect:

Personal Information: When you create an account or make a purchase, we may collect personal information such as your name, email address, shipping address, and payment details.
Usage Information: We may collect information about how you interact with our website, including your browsing history, IP address, and device information.
Cookies: We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.</p>

        </div>
      </div>
    </Layout>
  );
};

export default Policy;
