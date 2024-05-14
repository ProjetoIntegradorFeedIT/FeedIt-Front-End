import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Cima, Esquerda, Direita, Baixo } from './styles';
import theme from '../../themes/theme';
import { Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const borderWidthPercentage = 10;

export default function App() {
  const cameraRef = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();
  const options = { quality: 0.5, base64: true };

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Autorizar o uso da camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  async function takePicture() {
    if(cameraRef){
        const photo = await cameraRef.current.takePictureAsync(options);
        console.log(photo.base64);
    }
  }

  return (
    <View style={styles.container}>
      <CameraView
        style = {{ flex: 1}}
        ref = {cameraRef}
      >
        <View style = {styles.bordas}></View>
        <Baixo onPress={() => {takePicture()}}>
          <Icon name="camera" size={100} color={theme.COLORS.YELLOW_100} />
        </Baixo>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bordas: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: theme.COLORS.BLUE_200,
    borderTopWidth: (windowHeight * 4) / 100,
    borderLeftWidth: (windowWidth * 4) / 100,
    borderRightWidth: (windowWidth * 4) / 100,
  },
});