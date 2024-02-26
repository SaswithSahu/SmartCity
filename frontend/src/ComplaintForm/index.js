import React, { useState } from 'react';
import './index.css';

const categories = ['Water', 'Waste', 'Electric'];

const ComplaintForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission (e.g., API call).
    console.log('Complaint Submitted:', { title, category, details });
  };

  return (
    <div className='complaint-container'>
    <div className="complaint-form">
      <h2>Complaint Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
        <label>
          Details:
          <textarea
            rows={8}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ComplaintForm;