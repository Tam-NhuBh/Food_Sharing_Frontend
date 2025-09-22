import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoginModal from "../components/Modal/LoginModal";

interface ProtectedRouteProps {
  children?: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setShowModal(true); 
    }
  }, [user]);

  if (!user && showModal) {
    return (
      <LoginModal
        open={showModal}
        onClose={() => {
          setShowModal(false);
          navigate("/"); 
        }}
      />
    );
  }

  return <>{children || <Outlet />}</>;
};

export default ProtectedRoute;