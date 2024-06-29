import React from "react";

const Details = () => {
  return (
    <section className="details container min-h-screen py-10 mx-auto">
      <h2>Explore Our Features</h2>
      <ul>
        <li>
          <strong>Task Management:</strong>
          <ul>
            <li>
              <strong>Create and Manage Tasks:</strong>
              <p>
                Quickly add tasks with due dates, priorities, and notes.
                Effortlessly edit or delete tasks as needed.
              </p>
            </li>
            <li>
              <strong>Subtasks:</strong>
              <p>
                Break down larger tasks into manageable subtasks to ensure every
                detail is covered
              </p>
            </li>
          </ul>
        </li>

        <li>
          <strong>Customization:</strong>
          <ul>
            <li>
              <strong>Categories and Tags:</strong>
              <p>
                Organize your tasks with categories and tags for easy filtering
                and searching.
              </p>
            </li>
            <li>
              <strong>Themes and Layouts:</strong>
              <p>
                Personalize your dashboard with a variety of themes and layouts
                to suit your style.
              </p>
            </li>
          </ul>
        </li>

        <li>
          <strong>Productivity Tools:</strong>
          <ul>
            <li>
              <strong>Calendar View:</strong>
              <p>
                Visualize your tasks on a calendar to better manage your
                schedule.
              </p>
            </li>
            <li>
              <strong>Time Tracking:</strong>
              <p>
                Track the time spent on each task to improve your productivity
                insights.
              </p>
            </li>
            <li>
              <strong>Recurring Tasks:</strong>
              <p>
                Set up recurring tasks for daily, weekly, or monthly routines.
              </p>
            </li>
          </ul>
        </li>

        <li>
          <strong>Getting Started:</strong>
          <ul>
            <li>
              <strong>Sign Up: </strong>
              <p>
                Join our community by creating a free account in just a few
                simple steps.
              </p>
            </li>
            <li>
              <strong>Support:</strong>
              <p>
                Access our support center for help with any issues or questions
                you may have.
              </p>
            </li>
            <li>
              <strong>Recurring Tasks:</strong>
              <p>
                Set up recurring tasks for daily, weekly, or monthly routines.
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Details;
