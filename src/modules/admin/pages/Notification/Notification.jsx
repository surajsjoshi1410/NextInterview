import React, { useState } from "react";
import {
  Container,
  NotificationCard,
  NotificationHeader,
  NotificationBody,
  Actions,
  ActionButton,
  ToggleSwitch,
  AddButton,
} from "../Notification/Notification.styles";
import { MdEdit, MdDelete } from "react-icons/md";
import NotificationAdd from "../../components/NotificationComponent/NotificationForm/NotificationAdd";
import DeleteModule from "../../components/DeleteModule/DeleteModule";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedNotificationIndex, setSelectedNotificationIndex] = useState(null);
  const [editData, setEditData] = useState(null);

  const handleSaveNotification = (formData) => {
    if (editData) {
      // Update existing notification
      setNotifications((prev) =>
        prev.map((notification, index) =>
          index === selectedNotificationIndex ? { ...formData, createdOn: notification.createdOn } : notification
        )
      );
    } else {
      // Add new notification
      setNotifications((prev) => [
        ...prev,
        { ...formData, createdOn: new Date(), isActive: false }, // Add isActive property
      ]);
    }
    setEditData(null); // Reset edit data
  };

  const handleEditNotification = (index) => {
    setSelectedNotificationIndex(index);
    setEditData(notifications[index]);
    setIsModalOpen(true);
  };

  const handleDeleteNotification = () => {
    if (selectedNotificationIndex !== null) {
      setNotifications((prev) =>
        prev.filter((_, i) => i !== selectedNotificationIndex)
      );
      setSelectedNotificationIndex(null);
      setIsDeleteModalOpen(false);
    }
  };
  const ToggleSwitch = ({ checked, onChange }) => {
    return (
      <label style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={onChange} 
          style={{ display: 'none' }} // Hide the default checkbox
        />
        <span
          style={{
            width: '40px',
            height: '24px',
            backgroundColor: checked ? '#2390ac' : '#ccc',
            borderRadius: '20px',
            position: 'relative',
            transition: 'background-color 0.3s ease',
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '4px',
              left: checked ? '20px' : '4px',
              width: '16px',
              height: '16px',
              backgroundColor: 'white',
              borderRadius: '50%',
              transition: 'left 0.3s ease',
            }}
          />
        </span>
      </label>
    );
  };
  
  const handleToggleSwitch = (index) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification, i) =>
        i === index ? { ...notification, isActive: !notification.isActive } : notification
      )
    );
  };

  return (
    <Container>
      <AddButton
        onClick={() => {
          setEditData(null); // Reset edit data
          setIsModalOpen(true);
        }}
      >
        Create new notification
      </AddButton>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "40px",
        }}
      >
        {notifications.map((notification, index) => (
          <NotificationCard key={index}>
            <NotificationHeader>
              <p>
                <strong>Created On</strong> – {new Date(notification.createdOn).toLocaleDateString()}
              </p>
              <ToggleSwitch
                checked={notification.isActive} // controlled state
                onChange={() => handleToggleSwitch(index)} // toggle on/off
              />
            </NotificationHeader>
            <NotificationBody>
              <h3>{notification.heading}</h3>
              <p style={{ color: "black" }}>{notification.subText}</p>
              <p className="highlight">
                <strong>Trigger</strong> – {notification.trigger}
              </p>
              {notification.trigger === "Schedule" && (
                <>
                  <p>
                    <strong>Time Zone</strong> – {notification.timeZone}
                  </p>
                  <p>
                    <strong>Time</strong> – {notification.time}
                  </p>
                  <p>
                    <strong>Frequency</strong> – {notification.frequency}
                  </p>
                </>
              )}
              <p className="small-text">{notification.notificationType}</p>
            </NotificationBody>
            <Actions>
              <ActionButton onClick={() => handleEditNotification(index)}>
                <MdEdit />
              </ActionButton>
              <ActionButton
                onClick={() => {
                  setSelectedNotificationIndex(index);
                  setIsDeleteModalOpen(true);
                }}
              >
                <MdDelete />
              </ActionButton>
            </Actions>
          </NotificationCard>
        ))}
      </div>
      <NotificationAdd
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={(formData) => {
          handleSaveNotification(formData);
          setIsModalOpen(false);
        }}
        initialValues={editData} // Pass initial values for editing
      />

      {isDeleteModalOpen && (
        <DeleteModule
          onDelete={handleDeleteNotification}
          onCancel={() => setIsDeleteModalOpen(false)}
        />
      )}
    </Container>
  );
};

export default Notifications;
