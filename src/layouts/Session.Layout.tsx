import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import Loading from "../components/reusable/loading";

import { useAuthStore } from "../stores/auth";

import { socket } from "../utils/socket";
import { socketEvents } from "../utils/constants";

export default function SessionLayout() {
  const { user, token, loading, getSession } = useAuthStore();

  // 🔐 Init auth session
  useEffect(() => {
    if (!token) {
      getSession();
    }
  }, [token, getSession]);

  // 🔌 Init socket
  useEffect(() => {
    if (!user) return;
    if (socket.active) return;

    socket.connect();
    socket.emit(socketEvents.userJoinRoom, { userId: user.id });

    return () => {
      socket.disconnect();
    };
  }, [user]);

  //Loading
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loading width={64} height={64} />
      </div>
    );
  }

  //Layout
  return (
    <>
      <Outlet />
    </>
  );
}


