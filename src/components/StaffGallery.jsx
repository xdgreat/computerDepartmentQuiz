import React from "react";
import { StaffCards } from "./staffCards";
import hod from "../assets/hod.jpg";
import teacherOne from "../assets/compteacher1.jpg";
import teacherTwo from "../assets/compteacher2.jpg";
import "../styles/staff.css";

export const StaffGallery = () => {
  return (
    <section className="staff-section">
      <h1 className="title">
        Meet Our Staff{" "}
        <svg
          width={46}
          height={46}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5ZM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34ZM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12Zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7Zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44ZM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35Z" />
        </svg>
      </h1>

      <StaffCards
        name={"Mrs. Ranjani Kumar"}
        imageSrc={hod}
        bio={
          "Our esteemed HOD and Computer Studies teacher, brings a wealth of experience and expertise to our department. Her leadership has been instrumental in shaping our program and guiding students towards success in the field of computer science."
        }
      />
      <StaffCards
        name={"Ms. Ema"}
        imageSrc={teacherOne}
        bio={
          "Our talented Office Technology and Computer Studies teacher, brings a unique blend of creativity and technical expertise to our department. With her innovative teaching methods and hands-on approach, she empowers students to explore the world of office technology, develop practical skills, and unleash their full potential in the digital age."
        }
      />
      <StaffCards
        name={"Mr. Khan"}
        imageSrc={teacherTwo}
        bio={
          "Our dedicated Office Technology and Computer Studies teacher, is known for his expertise in the field and his commitment to helping students excel. With his extensive knowledge of computer systems and practical experience in office technology, he creates a supportive learning environment where students can thrive and gain the necessary skills for success."
        }
      />
    </section>
  );
};
