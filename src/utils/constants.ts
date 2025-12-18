const _apiBaseUrl = import.meta.env.VITE_API_URL ?? "http://localhost:8000";
export const apiBaseUrl = _apiBaseUrl.replace(/\/$/, "");

export const tokenNames = {
  access: "sweep_access",
  refresh: "sweep_refresh",
  adTimer: "sweep_ad_timer",
};

export const socketEvents = {
  userJoinRoom: "user:joinRoom",
  userBalanceUpdate: "user:balanceUpdate",
};