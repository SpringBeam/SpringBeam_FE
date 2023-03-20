import AsyncStorage from "@react-native-async-storage/async-storage";

export const setRefreshToken = async (refreshToken) => {
  try {
    await AsyncStorage.setItem("refresh-token", refreshToken);
  } catch (e) {
    console.log(e);
  }
};

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

export const removeRefreshToken = () => {
  //
};