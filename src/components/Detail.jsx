import React from "react";
import { Container } from "react-bootstrap";
import Commonbtn from "../commonbtn/Commonbtn";
import EllipsOne from "../assets/img/png/ellips-1.png";

const Detail = () => {
  return (
    <div className="detail-py-182-164 position-relative z-3">
      {/* ellips */}
      <img src={EllipsOne} alt="ellips-img" className="ellipsOne" />
      <Container>
        <div className="detail-card mx-auto w-100 text-center d-flex flex-column align-items-center position-relative overflow-hidden">
          {/* ellips */}
          <div className="yello-ellips"></div>
          <div className=" d-flex flex-column gap-15 mb-32">
            <h5
              data-aos="fade-right"
              className="mb-0 fw-normal fs-18 lh-28 clr-whiteF2 ff-Manrope"
            >
              If you’re reading this, most likely you’re in search of the keys
              that unlock world class performance…..performance that can get you
              to the next level of your playing career …. And let you create a
              lifestyle that you’ve always dreamed of… right?
            </h5>
            <h5
              data-aos="fade-left"
              className="mb-0 fw-normal fs-18 lh-28 clr-whiteF2 ff-Manrope"
            >
              Well there’s a big obstacle in your way…… one that you most likely
              don’t even notice….. like a hacker whose stolen your starting
              spot…..and you have no control over it.
            </h5>
            <h5
              data-aos="fade-right"
              className="mb-0 fw-normal fs-18 lh-28 clr-whiteF2 ff-Manrope"
            >
              That annoying little hacker is simply a lack of knowledge. Sounds
              ridiculous, right? Stick with me here…. If I knew back then (in my
              playing days) what I know now, I would probably still be playing
              instead of writing this eBook.
            </h5>
            <h5
              data-aos="fade-left"
              className="mb-0 fw-normal fs-18 lh-28 clr-whiteF2 ff-Manrope"
            >
              Early on in my career I realized that in order to get to the next
              level I needed to get stronger, pack on some lean muscle, improve
              my endurance, increase my sprint speed & develop robust change of
              direction qualities.
            </h5>
            <h5
              data-aos="fade-right"
              className="mb-0 fw-normal fs-18 lh-28 clr-whiteF2 ff-Manrope"
            >
              Problem was... I had no idea how to improve these qualities. I
              needed help. I spent majority of my time researching on social
              media platforms & doing workouts that got me minimal results.
            </h5>
            <h5
              data-aos="fade-left"
              className="mb-0 fw-normal fs-18 lh-28 clr-whiteF2 ff-Manrope"
            >
              Once I figured out the secret sauce to improving all the qualities
              mentioned above, getting fit became effortless. No more stress,
              disappointment, anger or frustration. I want you to feel that too.
              This short eBook can provide you with the tools you need to start
              getting better results out of your current programs, while doing
              less not more.
            </h5>
          </div>
          <Commonbtn name="Download Now" />
        </div>
      </Container>
    </div>
  );
};

export default Detail;
