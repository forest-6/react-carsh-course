import { useState } from "react";
import MainHeader from "./components/MainHeader.jsx";
import PostsList from "./components/PostsList.jsx";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function showModalHandler() {
    setModalIsVisible(true);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          onStopPosting={hideModalHandler}
          modalIsVisible={modalIsVisible}
        />
      </main>
    </>
  );
}

export default App;
