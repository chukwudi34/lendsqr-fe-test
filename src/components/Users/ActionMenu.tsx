import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ActionMenu.scss";

interface ActionMenuProps {
  userId: string;
}

const ActionMenu: React.FC<ActionMenuProps> = ({ userId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAction = (action: string) => {
    setIsOpen(false);

    switch (action) {
      case "view":
        navigate(`/users/${userId}`);
        break;
      case "blacklist":
        // TODO: Implement blacklist functionality
        console.log(`Blacklist user with ID: ${userId}`);
        break;
      case "activate":
        // TODO: Implement activate functionality
        console.log(`Activate user with ID: ${userId}`);
        break;
      default:
        console.log(`${action} user with ID: ${userId}`);
    }
  };

  const menuItems = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 3.5C6.067 3.5 4.5 5.067 4.5 7S6.067 10.5 8 10.5S11.5 8.933 11.5 7S9.933 3.5 8 3.5ZM8 9.5C6.619 9.5 5.5 8.381 5.5 7S6.619 4.5 8 4.5S10.5 5.619 10.5 7S9.381 9.5 8 9.5Z"
            fill="#545F7D"
          />
          <path
            d="M8 0C3.589 0 0 3.589 0 8S3.589 16 8 16S16 12.411 16 8S12.411 0 8 0ZM8 15C4.14 15 1 11.86 1 8S4.14 1 8 1S15 4.14 15 8S11.86 15 8 15Z"
            fill="#545F7D"
          />
        </svg>
      ),
      label: "View Details",
      action: "view",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 0C3.589 0 0 3.589 0 8S3.589 16 8 16S16 12.411 16 8S12.411 0 8 0ZM8 15C4.14 15 1 11.86 1 8S4.14 1 8 1S15 4.14 15 8S11.86 15 8 15Z"
            fill="#545F7D"
          />
          <path
            d="M10.5 7.5H5.5C5.224 7.5 5 7.724 5 8S5.224 8.5 5.5 8.5H10.5C10.776 8.5 11 8.276 11 8S10.776 7.5 10.5 7.5Z"
            fill="#545F7D"
          />
        </svg>
      ),
      label: "Blacklist User",
      action: "blacklist",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 0C3.589 0 0 3.589 0 8S3.589 16 8 16S16 12.411 16 8S12.411 0 8 0ZM8 15C4.14 15 1 11.86 1 8S4.14 1 8 1S15 4.14 15 8S11.86 15 8 15Z"
            fill="#545F7D"
          />
          <path
            d="M10.5 7.5H8.5V5.5C8.5 5.224 8.276 5 8 5S7.5 5.224 7.5 5.5V7.5H5.5C5.224 7.5 5 7.724 5 8S5.224 8.5 5.5 8.5H7.5V10.5C7.5 10.776 7.724 11 8 11S8.5 10.776 8.5 10.5V8.5H10.5C10.776 8.5 11 8.276 11 8S10.776 7.5 10.5 7.5Z"
            fill="#545F7D"
          />
        </svg>
      ),
      label: "Activate User",
      action: "activate",
    },
  ];

  return (
    <div className="action-menu" ref={menuRef}>
      <button className="action-trigger" onClick={() => setIsOpen(!isOpen)}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 6C10.5523 6 11 5.55228 11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5C9 5.55228 9.44772 6 10 6Z"
            fill="#545F7D"
          />
          <path
            d="M10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z"
            fill="#545F7D"
          />
          <path
            d="M10 16C10.5523 16 11 15.5523 11 15C11 14.4477 10.5523 14 10 14C9.44772 14 9 14.4477 9 15C9 15.5523 9.44772 16 10 16Z"
            fill="#545F7D"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="action-dropdown">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="action-item"
              onClick={() => handleAction(item.action)}
            >
              <span className="action-icon">{item.icon}</span>
              <span className="action-label">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActionMenu;
