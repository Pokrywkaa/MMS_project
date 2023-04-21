import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = (props) => {
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [photo, setPhoto] = useState(null);
    const [photos, setPhotos] = useState([]);
    const cameraRef = useRef(null);

    const handleTakePhoto = async () => {
        if (cameraRef.current) {
          const options = { quality: 0.5, base64: true };
          const data = await cameraRef.current.takePictureAsync(options);
          setPhoto(data.uri);
        }
      };
      return (
        <View style={styles.container}>
          {photo ? (
            <View>
            <Image source={{ uri: photo }} style={styles.photo} />
            <View style={styles.buttonContainer2}>
              <Icon.Button name='remove'
                color='red'
                size={40}
                backgroundColor='transparent'
                onPress={()=>setPhoto(null)}
                />
              <Icon.Button name='check'
                color='green'
                size={40}
                backgroundColor='transparent'
                onPress={()=>{
                  setPhotos([...photos, photo])
                  setPhoto(null)
                }}
                />
            </View>
            </View>
          ) : (
            <View>
            <Camera
              style={styles.camera}
              type={type}
              ratio="4:3"
              ref={cameraRef}
            >

            </Camera>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.cameraButton}  
                onPress={() => {
                setType(
                    type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
            }}>
                <Icon name='refresh' size={40}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cameraButton} onPress={handleTakePhoto}>
                <Icon name='camera' size={40}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cameraButton} 
                onPress={()=>props.navigation.navigate('GalleryView', { images: photos})}>
                <Icon name='image' size={40}/>
            </TouchableOpacity>
        </View>
        </View>
            )}
        </View>
      );
    }


export default Home


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    camera: {
      width: 350,
      height: 600,
    },
    cameraView: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    cameraButton: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        paddingLeft: 30
    },
    buttonContainer: {
        flexDirection: 'row',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
        paddingLeft: 20,
        alignItems: 'center',
    },
    buttonContainer2: {
        flexDirection: 'row',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
        paddingLeft: 90,
        alignItems: 'center',
    },
    button: {
      backgroundColor: '#2196F3',
      borderRadius: 10,
      padding: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    photo: {
      width: 300,
      height: 300,
    },
    });
        