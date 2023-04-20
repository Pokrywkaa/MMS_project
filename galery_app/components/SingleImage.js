import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper";
import ImageZoom from 'react-native-image-pan-zoom';

const SingleImage = (props) => {
  return (
    <Swiper>
      {props.route.params.images.map((image, index) => {
        return (
          <View style={styles.slide} key={index}>
              <ImageZoom
              cropWidth={400}
              cropHeight={700}
              imageWidth={300}
              imageHeight={400}
              panToMove={true}
              pinchToZoom={true}
              enableCenterFocus={false}
              onDoubleClick={() => setIsZoomed(!isZoomed)}
          >
            <Image source={{ uri: image }} style={styles.image} />
      </ImageZoom>
          </View>
        );
      })}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default SingleImage;
