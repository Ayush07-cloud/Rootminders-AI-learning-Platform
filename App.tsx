import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useThemeStore } from './store/themeStore';
import { useAuthStore } from './store/authStore';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';
import CodeChallengePage from './pages/CodeChallengePage';
import ForumPage from './pages/ForumPage';
import ForumPostDetailPage from './pages/ForumPostDetailPage';
import NewPostPage from './pages/NewPostPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import InstructorDashboardPage from './pages/instructor/InstructorDashboardPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import Chatbot from './components/chatbot/Chatbot';
import NotFoundPage from './pages/NotFoundPage';
import WishlistPage from './pages/WishlistPage';
import CheckoutPage from './pages/CheckoutPage';

const ProtectedRoute: React.FC<{ children: React.ReactElement; roles?: string[] }> = ({ children, roles }) => {
  const { user } = useAuthStore();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

function App() {
  const { theme } = useThemeStore();
  const { user, checkAuth } = useAuthStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CourseDetailPage />} />
        
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/learn/:courseId/lesson/:lessonId" element={<ProtectedRoute><LessonPage /></ProtectedRoute>} />
        <Route path="/quiz/:quizId" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
        <Route path="/challenge/:challengeId" element={<ProtectedRoute><CodeChallengePage /></ProtectedRoute>} />
        
        <Route path="/forum/new" element={<ProtectedRoute><NewPostPage /></ProtectedRoute>} />
        <Route path="/forum/:postId" element={<ProtectedRoute><ForumPostDetailPage /></ProtectedRoute>} />
        <Route path="/forum" element={<ProtectedRoute><ForumPage /></ProtectedRoute>} />
        
        <Route path="/profile/edit" element={<ProtectedRoute><EditProfilePage /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="/wishlist" element={<ProtectedRoute><WishlistPage /></ProtectedRoute>} />
        <Route path="/checkout/:courseId" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />

        <Route path="/instructor" element={
          <ProtectedRoute roles={['instructor', 'admin']}><InstructorDashboardPage /></ProtectedRoute>
        } />
        <Route path="/admin" element={
          <ProtectedRoute roles={['admin']}><AdminDashboardPage /></ProtectedRoute>
        } />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {user && <Chatbot />}
    </HashRouter>
  );
}

export default App;