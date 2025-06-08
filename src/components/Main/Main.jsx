import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/context";
import { useContext } from "react";

function Main() {
  const {
    input,
    setinput,
    result,
    resultData,
    prevPrompts,
    setprevPrompts,
    isLoading,
    onSent,
    recentPrompts,
    setRecentPrompts,
  } = useContext(Context);

  return (
    <>
      <div className="container">
        <div className="nav">
          <nav>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="User Icon" />
          </nav>
        </div>

        {!result ? (
          <>
            <div className="Main_content">
              <div className="Text_Content">
                <h1>Hello, Dev.</h1>
                <h1>How can I help you today?</h1>
              </div>
              <div className="Options_Content">
                <div onClick={()=>{onSent("Suggest beautiful places to see on an upcoming road trip")}} >
                  <p>Suggest beautiful places to see on an upcoming road trip</p>
  <img src={assets.compass_icon} alt="Compass Icon" />
  </div>
                <div onClick={()=>{onSent("Briefly summarize this concept: urban planning")}}>
                  <p>Briefly summarize this concept: urban planning</p>
                  <img src={assets.bulb_icon} alt="Bulb Icon" />
                </div>
                <div  onClick={()=>{onSent("Brainstorm team bonding activities for our work retreat")}}>
                  <p>Brainstorm team bonding activities for our work retreat</p>
                  <img src={assets.message_icon} alt="Message Icon" />
                </div>
                <div  onClick={()=>{onSent("Tell me about React js and React native")}}>
                  <p>Tell me about React js and React native</p>
                  <img src={assets.code_icon} alt="Code Icon" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="Main">
            <div className="Result">
              <img src={assets.user_icon} alt="User Icon" />
              <p>{input}</p>
            </div>
            <div className="Under">
              <img src={assets.gemini_icon} alt="Gemini Icon" />
              {isLoading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="Search">
          <input
            type="text"
            aria-label="Enter your prompt"
            onChange={(e) => setinput(e.target.value)}
            value={input}
            placeholder="Enter Your Prompt"
            disabled={isLoading}
          />
          <div className="Search_content">
            <img src={assets.gallery_icon} alt="Gallery Icon" />
            <img src={assets.mic_icon} alt="Mic Icon" />
            <button
              onClick={() => onSent()}
              aria-label="Send prompt"
              className="icon-button"
              disabled={isLoading}
            >
              <img src={assets.send_icon} alt="Send Icon" />
            </button>
          </div>
        </div>

        <p>
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </>
  );
}

export default Main;
