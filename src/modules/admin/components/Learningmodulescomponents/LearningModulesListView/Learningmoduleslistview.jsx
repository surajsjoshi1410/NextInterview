import React from "react";
import { Link } from "react-router-dom";
import {
  ModulesSection,
  ModuleCard,
  ModuleActions,
  SearchBar,
  NewUploadButton,
} from "./Learningmoduleslistview.styles";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

const LearningModulesListView = ({ modules }) => {
  return (
    <ModulesSection>
      <div className="module-header">
        <h3>Data Science Lite Modules</h3>
        <div>
          <SearchBar type="text" placeholder="Search" />
          <NewUploadButton>
            <Link to={"/admin/uploadmodule"}>New Upload</Link>
          </NewUploadButton>
        </div>
      </div>

      {modules.map((module, index) => (
        <ModuleCard key={index}>
          <img
            src="https://media.istockphoto.com/id/1023428598/photo/3d-illustration-laptop-isolated-on-white-background-laptop-with-empty-space-screen-laptop-at.jpg?s=612x612&w=0&k=20&c=ssK6er5v1fGpSghGiqySwoD8tn5blC7xgefQJI2xU38="
            alt={module.title}
            className="module-image"
          />
          <div className="module-info">
            <h4>
              <Link to={`/${module.title.replace(/\s+/g, "-")}`}>
                {module.title}
              </Link>
            </h4>
            <p>{module.topics} topic</p>
          </div>
          <ModuleActions>
            <button className="edit-btn">
              <CiEdit size={20} />
            </button>
            <button className="delete-btn">
              <RiDeleteBin6Line size={20} />
            </button>
          </ModuleActions>
        </ModuleCard>
      ))}
    </ModulesSection>
  );
};

export default LearningModulesListView;
