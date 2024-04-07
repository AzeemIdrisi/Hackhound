import React from "react";
import { LoginButton } from "../../component/Logs";
import ExamBro from "../../assets/Image/Exams-bro.svg";
import Barriers from "../../component/Barriers";
import Navbar from "../../component/Navbar";
import { particleConfig } from "../../component/config/particle-config";

export default function Login() {
  return (
    <div className="w-screen h-screen grid bg-base-primary">
      {/* <LoginButton/> */}

      <div className="fixed w-screen z-10">
        <Navbar />
      </div>
      <div className="text-gray-10 -skew-y-3 h-screen bg-base-tertiary place-items-center px-24 gap-4 grid grid-cols-2">
        <div className=" grid gap-4 pt-20 skew-y-3">
          <h1 className="text-6xl font-bold"> Normalize-EZ</h1>
          <h2 className="w-4/6 text-4xl font-bold">
            Simplifying Mark Normalization for Students
          </h2>
          <h3>
            NormalizEZ emerges as a beacon of educational integrity, redefining
            the landscape of fair evaluation. With its innovative approach,
            GradeSync tackles the complexities of mark normalization, offering
            students and educators a reliable platform for standardizing grades
            across varying courses. By facilitating seamless conversion and
            normalization processes, GradeSync instills confidence in academic
            outcomes, ensuring that merit and effort are duly recognized.
            Embracing transparency and equity, GradeSync heralds a new era in
            education, where every learner receives just and equitable
            assessment, fostering an environment of excellence and integrity
          </h3>
        </div>
        <img src={ExamBro} className="aspect-square w-3/4" />
      </div>
      <div>
        <Barriers />
      </div>
      <div
        className="h-[92vh] bg-grad grid place-items-center -skew-y-3"
        id="about"
      >
        <div className=" grid grid-flow-col gap-2 place-items-center  px-24 skew-y-3">
          <div className="w-3/5 py-4 bg-gray-5 p-5 aspect-sqaure rounded-xl grid gap-4">
            <h1 className="font-semibold text-2xl text-base-primary">
              Marks Normalizer Feature
            </h1>
            <p>
              Our Marks Normalizer feature is designed to ensure fairness and
              equity in grading by taking into consideration various factors
              beyond just academics.{" "}
            </p>
          </div>
          <div className="w-3/5 py-4 bg-gray-5 p-5 aspect-sqaure rounded-xl grid gap-4">
            <h1 className="font-semibold text-2xl text-base-primary">
              Supplementary Evaluation Method
            </h1>
            <p>
              It's based on other factor than academics.They includes:
              1.Olympiad scoresandother exam consideration 2.Extracurricular
              3.Academics (Excluding internal ony inlude External) 4.Portal Test
            </p>
          </div>
          <div className="w-3/5 py-4 bg-gray-5 p-5 aspect-sqaure rounded-xl grid gap-4">
            <h1 className="font-semibold text-2xl text-base-primary">
              Rationlization Solution Feature
            </h1>
            <p>
              Our Rationlization Solution feature is tailored to streamline the
              grading process while maintaining fairness and integrity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
