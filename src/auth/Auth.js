import AsyncStorage from "@react-native-async-storage/async-storage";

// 액세스 토큰 저장하기
export const setAccessToken = async (accessToken) => {
  try {
    await AsyncStorage.setItem("access-token", accessToken);
  } catch (e) {
    console.log(e);
  }
};

// 액세스 토큰 불러오기
export const getAccessToken = async () => {
  try {
    const value = await AsyncStorage.getItem("access-token");
    if (value !== null) {
      console.log(value);
    }
  } catch (e) {
    console.log(e);
  }
};

// 인증 유무 저장하기
export const setAuthentication = (boolean) => AsyncStorage.setItem("isAuthenticated", boolean);
