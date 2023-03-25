import { PermissionsAndroid } from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const showPicker = async () => {
  const grantedcamera = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
    {
      title: "App Camera Permission",
      message: "App needs access to your camera",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK"
    }
  );

  const grantedstorage = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    {
      title: "App Storage Permission",
      message: "App needs access to your storage",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK"
    }
  );

  if (grantedcamera === PermissionsAndroid.RESULTS.GRANTED && grantedstorage === PermissionsAndroid.RESULTS.GRANTED) {
    console.log("Camera & Storage Permission Given!");
  }
  else {
    console.log("Camera Permission Denied.");
  }
};