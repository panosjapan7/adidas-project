import React from "react";
import "../App.css";

const Home = ({
  homeSectionRef,
}: {
  homeSectionRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <section
      id="homeSection"
      className="homeSection"
      style={{ backgroundColor: "#F1F1F1" }}
    >
      <h2>Home</h2>
      <p ref={homeSectionRef}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        obcaecati sunt, aliquam at rerum accusantium ea suscipit necessitatibus
        doloremque vero!
      </p>
    </section>
  );
};

export default Home;
