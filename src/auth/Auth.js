// 액세스 토큰 저장하기
export const setAccessToken = (accessToken) => localStorage.setItem("access_token", accessToken);

// 액세스 토큰 불러오기
export const getAccessToken = () => localStorage.getItem("access_token");

// 인증 유무 저장하기
export const setAuthentication = (boolean) => sessionStorage.setItem("isAuthenticated", boolean);
