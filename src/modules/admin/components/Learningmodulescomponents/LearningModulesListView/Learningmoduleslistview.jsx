import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ModulesSection,
  ModuleCard,
  ModuleActions,
  SearchBar,
  NewUploadButton,
  SearchBarWrapper,
} from "./Learningmoduleslistview.styles";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { deleteModule, getModule } from "../../../../../api/addNewModuleApi";
import DeleteModule from "../../../components/DeleteModule/DeleteModule"; // Import Delete Modal

const LearningModulesListView = () => {
  const [modules, setModules] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredModules, setFilteredModules] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Modal state
  const [selectedModuleId, setSelectedModuleId] = useState(null); // Store module ID
  const navigate = useNavigate(); // React Router hook for navigation

  useEffect(() => {
    fetchModules();
  }, []);

  const fetchModules = async () => {
    const data = await getModule();
    const response = data.data.map((item) => ({
      title: item.moduleName,
      topics: item.topicData.length || 0,
      _id: item._id,
    }));
    setModules(response);
    setFilteredModules(response);
  };

  const handleDeleteClick = (id) => {
    setSelectedModuleId(id); // Store the ID of the module to be deleted
    setIsDeleteModalOpen(true); // Open the modal
  };

  const handleDeleteConfirm = async () => {
    if (selectedModuleId) {
      await deleteModule(selectedModuleId);
      fetchModules(); // Refresh the list after deletion
    }
    setIsDeleteModalOpen(false); // Close modal
    setSelectedModuleId(null); // Reset selected module ID
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false); // Close modal
    setSelectedModuleId(null); // Reset selected module ID
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query === "") {
      setFilteredModules(modules);
    } else {
      setFilteredModules(
        modules.filter((module) => module.title.toLowerCase().includes(query))
      );
    }
  };

  const handleEditClick = (module) => {
    navigate(`/admin/editmodel/${module._id}`, {
      state: { moduleData: module, moduleId: module._id }, // Pass the selected module's data
    });
  };

  return (
    <ModulesSection>
      <div className="module-header">
        <h3>Data Science Lite Modules</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <SearchBarWrapper>
            <IoSearch size={20} />
            <SearchBar
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
            />
          </SearchBarWrapper>
          <NewUploadButton>
            <Link to={"/admin/uploadmodule"}>New Upload</Link>
          </NewUploadButton>
        </div>
      </div>

      {filteredModules.map((module, index) => (
        <ModuleCard key={index}>
          <img
            src="https://media.istockphoto.com/id/1023428598/photo/3d-illustration-laptop-isolated-on-white-background-laptop-with-empty-space-screen-laptop-at.jpg?s=612x612&w=0&k=20&c=ssK6er5v1fGpSghGiqySwoD8tn5blC7xgefQJI2xU38="
            alt={module.title}
            className="module-image"
          />
          <div className="module-info">
            <h4>
              <Link to={`/admin/Diagnosing-and-Investigating-Metrics`}>
                {module.title}
              </Link>
            </h4>
            <p>{module.topics} topic</p>
          </div>
          <ModuleActions>
            <button className="edit-btn" onClick={() => handleEditClick(module)}>
              <CiEdit size={20} />
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDeleteClick(module._id)}
            >
              <RiDeleteBin6Line size={20} />
            </button>
          </ModuleActions>
        </ModuleCard>
      ))}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <DeleteModule onDelete={handleDeleteConfirm} onCancel={handleCancelDelete} />
      )}
    </ModulesSection>
  );
};

export default LearningModulesListView;
