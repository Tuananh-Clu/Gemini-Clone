import { assets } from "../../assets/assets";
import "./SideBar.css";
import { useContext, useState } from "react";
import { Context } from "../../context/context";

function Sidebar() {
  const {input,recentPrompts,prevPrompts}=useContext(Context);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="top">
        <img
          onClick={() => setIsOpen((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="menu"
        />
        <div className="create">
          <img className="create_plus" src={assets.plus_icon} alt="plus" />
          {isOpen && <p>New Chat</p>}
        </div>

        {isOpen && (
          <div className="recent">
            <h2>Recent</h2>
            {prevPrompts.map((item,index)=>{return(
              <div id={index} className="recent-entry">
              <img src={assets.message_icon} alt="msg" />
              <p>{item}...</p>
            </div>
            )})}
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="Help">
          <img src={assets.question_icon} alt="?" />
          {isOpen && <p>Help</p>}
        </div>
        <div className="Help">
          <img src={assets.history_icon} alt="history" />
          {isOpen && <p>Activity</p>}
        </div>
        <div className="Help">
          <img src={assets.setting_icon} alt="setting" />
          {isOpen && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
