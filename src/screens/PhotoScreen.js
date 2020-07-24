import React from 'react';
import {View, Image} from 'react-native'
import {HEIGHT, WIDTH} from "../commons/Constants";
import {connect} from 'react-redux'

const PhotoScreen = ({navigation}) => {
    const photoUrl = navigation.dangerouslyGetState().routes[1].params?.photo.urls.regular ?? ''
    console.log(navigation.dangerouslyGetState().routes[1].params?.photo)
    return (
        <View style={{flex: 1}}>
            <Image
                reszieMethod="resize"
                style={{width: WIDTH, height: HEIGHT}}
                source={{uri: photoUrl}}
            />
        </View>
    )
};

export default PhotoScreen;
