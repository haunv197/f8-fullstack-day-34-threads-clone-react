import { BrowserRouter as Router, Route, Routes } from "react-router";
import DefaultLayout from "./components/DefaultLayout";
import HomePage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import ActivityPage from "./pages/ActivityPage";
import ProfilePage from "./pages/ProfilePage";
import PostDetailPage from "./pages/PostDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/@:username" element={<ProfilePage />} />
          <Route path="/:username/post/:id" element={<PostDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
