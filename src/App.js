import {Route, Routes} from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={ <AllMeetups/>} />
          <Route path='/new-meetups' element={<NewMeetup/>} />
          <Route path='/favorites' element={ <Favorites/>} />
          <Route path="*" element={<AllMeetups />} />
      </Routes>
    </div>
  );
}

export default App;
