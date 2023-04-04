import AsyncStorage from "@react-native-async-storage/async-storage";

// 리프레시 토큰 저장하기
export const setRefreshToken = async (refreshToken) => {
  try {
    await AsyncStorage.setItem("refresh-token", refreshToken);
  } catch (e) {
    console.log(e);
  }
};

// 리프레시 토큰 불러오기
export const getRefreshToken = async () => {
  try {
    const value = await AsyncStorage.getItem("refresh-token");
    if (value !== null) {
      console.log(value);
    }
  } catch (e) {
    console.log(e);
  }
};

// 리프레시 토큰 삭제하기
export const removeRefreshToken = () => {
  //
};