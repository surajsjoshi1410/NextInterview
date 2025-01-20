import React, { useState } from "react";
import styled from "styled-components";
import {
    TableWrapper,
    ToggleSwitch,
    StatusLabel
} from "../../pages/Settings/Setting.styles"

const Settings = () => {
  const [features, setFeatures] = useState([
    { id: 1, name: "Challenges", status: true },
    { id: 2, name: "Show solution in coding", status: true },
    { id: 3, name: "Hits", status: true },
    { id: 4, name: "Code optimized solution", status: true },
    { id: 5, name: "Show suggested solution", status: false },
  ]);

  const handleToggle = (id) => {
    setFeatures((prevFeatures) =>
      prevFeatures.map((feature) =>
        feature.id === id ? { ...feature, status: !feature.status } : feature
      )
    );
  };

  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            <th>Features</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature.id}>
              <td>{feature.name}</td>
              <td>
                <ToggleSwitch
                  isActive={feature.status}
                  onClick={() => handleToggle(feature.id)}
                >
                  <div className="toggle-circle"></div>
                </ToggleSwitch>
                <StatusLabel isActive={feature.status}>
                  {feature.status ? "Active" : "Inactive"}
                </StatusLabel>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default Settings;
