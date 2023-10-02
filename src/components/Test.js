import React, { useState, useEffect } from 'react';

function ApplicationForm() {
  const [formData, setFormData] = useState(null);

  const fetchApplicationForm = async () => {
    try {
      const response = await fetch('https://stoplight.io/mocks/uthmanbello/capital-placement/251192254/users/12');
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setFormData(data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchApplicationForm();
  }, []);

  const updateApplicationForm = async () => {
    const updatedData = {
      data: {
        id: 'someId',
        type: 'applicationForm',
        attributes: {
          firstName: 'New First Name',
          lastName: 'New Last Name',
        },
      },
    };

    try {
      const response = await fetch('https://stoplight.io/mocks/uthmanbello/capital-placement/251192254/users/12', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        console.log('Data updated successfully');
      } else {
        console.error('Failed to update data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={updateApplicationForm}>Update Form</button>
    </div>
  );
}

export default ApplicationForm;
