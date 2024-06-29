import React from "react";

const About = () => {
  return (
    <section id="about" className="container mx-auto min-h-screen about">
      <h2 className="text-3xl sm:text-5xl text-center sm:text-left  text-orange-400">
        About Us
      </h2>

      {/* ul start  */}
      <ul className="text-white my-12 sm:flex justify-around flex-wrap gap-8 ">
        {/* first item  */}
        <li>
          <strong className="text-xl sm:text-2xl">Introduction :</strong>
          <p className="max-w-96 mx-auto  p-2 sm:py-8 mt-4  border border-orange-500 leading-7 tracking-wide text-gray-200 sm:text-xl sm:pl-4 sm:max-w-2/3 sm:h-60 sm:hover:scale-105 transition-all duration-500 ease-in-out">
            Welcome to Listify, your go-to platform for staying organized and
            productive. Whether you're managing personal tasks, professional
            projects, or collaborative efforts, we've got you covered
          </p>
        </li>
        {/* second item  */}
        <li className="mt-4 sm:mt-0 ">
          <strong className="text-xl sm:text-2xl">Our Mission :</strong>
          <p className="max-w-96 mx-auto sm:py-5 sm:pl-4  p-2 mt-4  border border-orange-500 leading-7 tracking-wide text-gray-200 sm:text-xl sm:max-w-2/3 sm:h-60 sm:hover:scale-105 transition-all duration-500 ease-in-out">
            Our mission is to make task management effortless for everyone. We
            aim to empower individuals and teams to achieve their goals and
            manage their time more effectively with a seamless, user-friendly
            experience.
          </p>
        </li>
        {/* third item */}
        <li className="mt-4 ">
          <strong className="text-xl sm:text-2xl">Features :</strong>
          <ul className="pl-4 sm:mt-4 sm:grid grid-cols-2 gap-8   ">
            <li className="mt-4">
              <strong className="">User-Friendly Interface : </strong>
              <p className="max-w-96 mx-auto sm:pl-4  p-2 mt-2 sm:mt-4   border border-orange-500 leading-7 tracking-wide text-gray-200 sm:text-xl sm:max-w-2/3 sm:py-5 sm:hover:scale-105 transition-all duration-500 ease-in-out">
                Easily add, edit, and organize tasks with our clean and
                intuitive design.
              </p>
            </li>
            <li className="mt-4">
              <strong className="">Customization : </strong>
              <p className="max-w-96 mx-auto sm:pl-4   p-2 mt-2 sm:mt-4  border border-orange-500 leading-7 tracking-wide text-gray-200 sm:text-xl sm:max-w-2/3 sm:hover:scale-105 transition-all duration-500 ease-in-out">
                Personalize your task lists with categories, tags, and
                priorities to fit your workflow.
              </p>
            </li>{" "}
            <li className="mt-4">
              <strong className=" ">Reminders and Notifications : </strong>
              <p className="max-w-96 mx-auto sm:pl-4   p-2 mt-2 sm:mt-4  border border-orange-500 leading-7 tracking-wide text-gray-200 sm:text-xl sm:max-w-2/3 sm:py-5 sm:hover:scale-105 transition-all duration-500 ease-in-out">
                Stay on track with customizable reminders and push
                notifications.
              </p>
            </li>{" "}
            <li className="mt-4">
              <strong className="">Security :</strong>
              <p className="max-w-96 mx-auto sm:pl-4   p-2 mt-2 sm:mt-4   border border-orange-500 leading-7 tracking-wide text-gray-200 sm:text-xl sm:max-w-2/3 sm:hover:scale-105 transition-all duration-500 ease-in-out">
                Your data is safe with us, thanks to our robust security
                measures and privacy policies.
              </p>
            </li>
          </ul>
        </li>
        <li></li>
      </ul>
    </section>
  );
};

export default About;
