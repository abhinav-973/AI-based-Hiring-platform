import { useState } from "react";

const CreateJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    skills: "",
    experience: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.skills ||
      !formData.experience
    ) {
      setError("All fields are required");
      return;
    }

    setError("");
    console.log("Job Created:", formData);

    // later → API call
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-xl font-semibold mb-6">Create Job</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        {error && (
          <p className="text-red-600 bg-red-100 p-2 rounded">
            {error}
          </p>
        )}

        <div>
          <label className="block mb-1 font-medium">Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Frontend Developer"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Job Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Describe the role..."
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Required Skills
          </label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="React, Node, MongoDB"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Experience (years)
          </label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Create Job
        </button>
      </form>
    </div>
  );
};

export default CreateJob;
