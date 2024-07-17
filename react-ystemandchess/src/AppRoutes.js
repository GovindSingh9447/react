// Imports for React Components/Pages
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Programs from "./Pages/Programs/Programs";
import CSBenefitPage from "./Pages/About-Us/Benefit-of-CS/CSBenefitPage";
import ChessBenefitPage from "./Pages/About-Us/Benefit-of-Chess/ChessBenefitPage";
import MathTutBenefitPage from "./Pages/About-Us/Benefit-of-Math-tut/MathTutBenefitPage";
import MentoringBenefitPage from "./Pages/About-Us/Benefit-of-Mentoring/MentoringBenefitPage";
import Lessons from "./Pages/Lessons/Lessons";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Mission from "./Pages/About-Us/Mission/Mission";
import SponsorsPartners from "./Pages/About-Us/SponsorsPartners/SponsorsPartners";
import Board from "./Pages/About-Us/Board/Board";
import Mentor from "./Pages/Mentor/Mentor";
import Financial from "./Pages/About-Us/Financial/Financial";
import StudentInventory from "./Pages/Student-Inventory/StudentInventory";
import StudentProfile from "./Pages/StudentProfile/Student-Profile";
import MentorProfile from "./Pages/MentorProfile/Mentor-Profile";
import LessonOverlay from "./Pages/piece-lessons/lesson-overlay/lesson-overlay";
// import LessonContent from "./Pages/piece-lessons/lesson-content/lesson-content"; // this one doesn't exist yet

// Variables and Mutable Data
import userPortraitImg from "./images/user-portrait-placeholder.svg";
const userName = "Nimesh Patel";

const AppRoutes = () => {
  // All components must be wrapped with the '<Route>' tag
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/benefit-of-computer-science" element={<CSBenefitPage />} />
      <Route path="/benefit-of-chess" element={<ChessBenefitPage />} />
      <Route
        path="/benefit-of-math-tutoring"
        element={<MathTutBenefitPage />}
      />
      <Route path="/benefit-of-mentoring" element={<MentoringBenefitPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/mentor" element={<Mentor />} />
      <Route path="/financial" element={<Financial />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/sponsors&partners" element={<SponsorsPartners />} />
      <Route path="/board" element={<Board />} />
      <Route
        path="/student-inventory"
        element={
          <StudentInventory
            userName={userName}
            userPortraitSrc={userPortraitImg}
          />
        }
      />

      <Route path="/mentor-profile" element={<MentorProfile />} />
      <Route path="/student-profile" element={<StudentProfile />} />
      <Route path="/learnings" element={<LessonOverlay />} />
      <Route path="/play-nolog" element={<ChessFreePlay />} />
    </Routes>
  );
};

export default AppRoutes;
