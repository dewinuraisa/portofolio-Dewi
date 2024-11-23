import React, { useState } from "react";
import Swal from "sweetalert2";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState("");

  const addProject = () => {
    setProjects([...projects, newProject]);
    setNewProject("");
  };

  const deleteProject = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedProjects = projects.filter((_, i) => i !== index);
        setProjects(updatedProjects);
        Swal.fire("Deleted!", "Your project has been deleted.", "success");
      }
    });
  };

  return (
    <section id="projects" className="container mt-5">
      <h2>Projects</h2>
      <input
        type="text"
        value={newProject}
        onChange={(e) => setNewProject(e.target.value)}
        placeholder="Add a new project"
        className="form-control"
      />
      <button onClick={addProject} className="btn btn-success mt-2">
        Add Project
      </button>
      <ul className="mt-3">
        {projects.map((project, index) => (
          <li key={index}>
            {project}
            <button
              onClick={() => deleteProject(index)}
              className="btn btn-danger ml-3"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
