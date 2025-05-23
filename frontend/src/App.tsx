import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; // AuthProvider import
import UserInfoDisplay from './components/UserInfoDisplay'; // UserInfoDisplay import
import HomePage from './pages/HomePage'; // HomePage import
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'; // RegisterPage 임포트
import CreateRoomPage from './pages/CreateRoomPage';
import GamePage from './pages/GamePage'; // GamePage import
import './App.css';

// AppContent 컴포넌트를 만들어 useLocation을 사용하도록 분리
const AppContent: React.FC = () => {
  const location = useLocation();
  const isGamePage = /^\/game\/.+/.test(location.pathname);

  return (
    <div>
      {!isGamePage && <UserInfoDisplay />} {/* UserInfoDisplay 컴포넌트 조건부 렌더링 */}
      {!isGamePage && (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link> {/* 회원가입 네비게이션 링크 추가 (선택 사항) */}
            </li>
            <li>
              <Link to="/create-room">Create Room</Link>
            </li>
            {/* 게임 페이지로 이동하는 링크는 방 ID가 필요하므로 동적으로 생성해야 할 수 있습니다. */}
            {/* 예: <li><Link to="/game/some-room-id">Game Room</Link></li> */}
          </ul>
        </nav>
      )}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> {/* 회원가입 페이지 라우트 추가 */}
        <Route path="/create-room" element={<CreateRoomPage />} />
        <Route path="/game/:roomId" element={<GamePage />} /> {/* HomePage를 GamePage로 변경 */}
        <Route path="/" element={<div>Navigate to /create-room or /game/:roomId</div>} />{' '}
        {/* 기본 페이지 안내 변경 */}
      </Routes>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
