import React from "react";

const About = () => {
  return (
    <section className="container mx-auto min-h-screen about">
      <h2 className="text-xl sm:text-4xl">About Us</h2>
      <ul className="text-white my-5">
        <li>
          <strong className="text-xl">Introduction:</strong>
          <p className="max-w-96  p-2 mt-2  border border-orange-500">
            Welcome to Listify, your go-to platform for staying organized and
            productive. Whether you're managing personal tasks, professional
            projects, or collaborative efforts, we've got you covered
          </p>
        </li>
        <li>
          <strong className="text-xl">Our Mission:</strong>
          <p>
            Our mission is to make task management effortless for everyone. We
            aim to empower individuals and teams to achieve their goals and
            manage their time more effectively with a seamless, user-friendly
            experience.
          </p>
        </li>
        <li>
          <strong className="text-xl">Features:</strong>
          <ul>
            <li>
              <strong>User-Friendly Interface: </strong>
              <p>
                Easily add, edit, and organize tasks with our clean and
                intuitive design.
              </p>
            </li>
            <li>
              <strong className="text-xl">Customization: </strong>
              <p>
                Personalize your task lists with categories, tags, and
                priorities to fit your workflow.
              </p>
            </li>{" "}
            <li>
              <strong className="text-xl">Reminders and Notifications: </strong>
              <p>
                Stay on track with customizable reminders and push
                notifications.
              </p>
            </li>{" "}
            <li>
              <strong className="text-xl">Security:</strong>
              <p>
                Your data is safe with us, thanks to our robust security
                measures and privacy policies.
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default About;
