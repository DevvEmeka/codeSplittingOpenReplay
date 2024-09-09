import React from "react";

const ReactLoadable = () => {
  const users = [
    {
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      country: "United States",
    },
    {
      name: "Liam Brown",
      email: "liam.brown@example.com",
      country: "Canada",
    },
    {
      name: "Sophia Garcia",
      email: "sophia.garcia@example.com",
      country: "Spain",
    },
    {
      name: "Oliver Smith",
      email: "oliver.smith@example.com",
      country: "United Kingdom",
    },
  ];

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Hurray! We display the array of object</h1>
      <table border="0" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>The Name</th>
            <th>The Email</th>
            <th>The Country</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ReactLoadable;
