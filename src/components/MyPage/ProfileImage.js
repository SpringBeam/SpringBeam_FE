import React, { useState } from "react";
import styled from "styled-components/native";
import { Alert } from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import { showPicker } from "./ImagePicker";

export default ProfileImage = () => {

  const [ selectedImage, setSelectedImage ] = useState(null);

  const handleLaunchCamera = () => {
    launchCamera({ mediaType: "photo"}, (response) => {
      if (response.didCancel) {
        console.log("User cancelled Image Picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = {uri: response.uri};
        setSelectedImage(source);
      }
    });
  };

  const handleLaunchImageLibrary = () => {
    launchImageLibrary({ mediaType: "photo"}, (response) => {
      if (response.didCancel) {
        console.log("User cancelled Image Picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = {uri: response.uri};
        setSelectedImage(source);
      }
    });
  };

  const onPressHandler = () => {
    Alert.alert(
      "프로필 사진 업로드",
      "프로필 사진을 올려주세요!",
      [
        {
          text: "카메라로 업로드",
          onPress: async() => {handleLaunchCamera()}
        },
        {
          text: "앨범에서 업로드",
          onPress: async() => {handleLaunchImageLibrary()}
        },
      ],
      {cancelable: false}
    )
  };

  return (
    <ImageContainer
      onPress={() => {onPressHandler()}}
    >
      
    </ImageContainer>
  );
};

const ImageContainer = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  backgroundColor: #fff;
  borderRadius: 100px;
`;

