import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2><u>Testimonial</u></h2>

      <section>
        <TestimonialCard
          name={"Kishan Patel"}
          feedback={"Your Learning skills are so good."}
        />

        <TestimonialCard
          name={"mr. Mehta"}
          feedback={
            "Wow what a portfolio, doesn't expected this to be on Your Work!"
          }
        />

        <TestimonialCard
          name={"Sundar Pichai"}
          feedback={"Amazing seems like you should the Google CEO"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
