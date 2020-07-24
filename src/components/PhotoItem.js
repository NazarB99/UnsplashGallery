import React from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'
import {WIDTH} from "../commons/Constants";


const PhotoItem = (props) => {
    return (
        <TouchableOpacity onPress={() => props.navigateToPhoto(props.item)}>
            <ImageBackground
                source={{uri: props.item.urls.regular}}
                style={styles.imageContainer}
                resizeMode="cover"
                resizeMethod="scale"
            >
                <View style={styles.description}>
                    <Text allowFontScaling={false} style={styles.text}>{props.item.user.name}</Text>
                    <Text allowFontScaling={false} numberOfLines={3} text
                          style={styles.text}>{props.item.alt_description || "No Title"}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    imageContainer: {
        width: WIDTH * 0.5,
        height: 200,
        justifyContent: 'flex-end'
    },
    description: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: WIDTH * 0.5,
        height: 100,
        padding: 10
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'system font'
    }
})

export default PhotoItem;
