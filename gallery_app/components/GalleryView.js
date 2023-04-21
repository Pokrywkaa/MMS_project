import { Image, View, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';


const GalleryView = (props) => {
  const images = props.route.params.images

  return (
    <View style={styles.container}>
      <FlatList
        data={props.route.params.images}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3} 
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate("SingleImage", {images: images, index: index})}
          >
            <Image source={{ uri: item }} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
        }
export default GalleryView

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width / 3.05,
    height: Dimensions.get('window').width / 3.05,
    margin: 1,
  },
});