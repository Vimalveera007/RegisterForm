import React from "react";

const User = () => {
  return (
    <div className="container">
      <h1>Paid User</h1>
      <table className="table  table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">DATE</th>
            <th scope="col">SUBJECT</th>
            <th scope="col">TOPIC</th>
            <th scope="col">STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>24-05-2024</td>
            <td>Physics</td>
            <td>Units and Measurement</td>
            <td>In Progress</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>24-05-2024</td>
            <td>Physics</td>
            <td>Physics World</td>
            <td>Not Started</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>24-05-2024</td>
            <td>Chemistry</td>
            <td>Some Basic Concept of Chemistry</td>
            <td>In Progress</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>24-05-2024</td>
            <td>Chemistry</td>
            <td>States of Matter</td>
            <td>Not Started</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>24-05-2024</td>
            <td>Botany</td>
            <td>Transport in Plants</td>
            <td>In Progress</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>24-05-2024</td>
            <td>Zoology</td>
            <td>Reproductive Health</td>
            <td>Not Started</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
