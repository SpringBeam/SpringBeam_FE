import { PermissionsAndroid } from "react-native";

export const showPicker = async () => {
  const grantedcamera = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
    {
      title: "앱 내 카메라 허용",
      message: "해당 어플리케이션이 카메라 앱을 사용하고자 합니다!",
      buttonNeutral: "다음에 다시 묻기",
      buttonNegative: "취소",
      buttonPositive: "허용"
    }
  );

  const grantedstorage = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    {
      title: "앱 내 저장소 허용",
      message: "해당 어플리케이션이 저장소 앱을 사용하고자 합니다!",
      buttonNeutral: "다음에 다시 묻기",
      buttonNegative: "취소",
      buttonPositive: "허용"
    }
  );

  if (grantedcamera === PermissionsAndroid.RESULTS.GRANTED && grantedstorage === PermissionsAndroid.RESULTS.GRANTED) {
    console.log("Camera Permission Accessed.")
  }
  else {
    console.log("Camera Permission Denied.");
  }
};