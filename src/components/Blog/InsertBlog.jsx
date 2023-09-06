import { useState } from "react";

const InsertBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    date: new Date().toLocaleDateString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // onSubmit(formData); // Pass the form data to the parent component for handling
    // You can also clear the form fields here if needed
    setFormData({
      title: "",
      author: "",
      content: "",
      date: new Date().toLocaleDateString(),
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Insert Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-teal-500 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-600 mb-1">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-teal-500 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-600 mb-1">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows="4"
            value={formData.content}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-teal-500 w-full"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InsertBlog;
