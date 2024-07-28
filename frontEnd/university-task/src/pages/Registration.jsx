import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        university: '',
        subjects: [],
        password: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'subjects') {
          setFormData({
            ...formData,
            [name]: value.split(',')
          });
        } else {
          setFormData({
            ...formData,
            [name]: value
          });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
      };
    

 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>University:</label>
        <input
          type="text"
          name="university"
          value={formData.university}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Subjects (comma separated):</label>
        <input
          type="text"
          name="subjects"
          value={formData.subjects.join(',')}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
export default Registration;