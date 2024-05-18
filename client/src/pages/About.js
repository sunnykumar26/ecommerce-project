import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - FastCraft app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Fast Craft, where innovation meets tradition! Fast Craft is not just an ecommerce platform; it's a revolutionary initiative designed to empower local artisans and craftspersons worldwide. Our mission is simple yet profound: to democratize online visibility for artisans and provide them with a dedicated platform to showcase their unique creations to a global audience.

At Fast Craft, we understand the challenges faced by local artisans in today's digital landscape. Traditional ecommerce platforms often lack the specialized support and affordability needed by artisans to thrive online. That's why we've created Fast Craft – a platform that prioritizes accessibility, usability, and affordability, ensuring that artisans of all backgrounds can showcase their talent and earn a livelihood without unnecessary barriers.



          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
