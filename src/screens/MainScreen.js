import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native'
import {connect} from 'react-redux'
import {CommonActions} from '@react-navigation/native'
import {getPhotos} from "../actions/photosAction";
import PhotoItem from "../components/PhotoItem";

const MainScreen = (props) => {

    const [page, setPage] = useState(1)

    useEffect(() => {
        props.getPhotos(page)
    }, [page])

    const navigateToPhoto = (item) => {
        props.navigation.dispatch(
            CommonActions.navigate({
                name: 'Photo',
                params:{
                    photo: item
                }
            })
        )
    }

    return (
        <View style={{flex: 1}}>
                <FlatList
                    data={props.photos}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    renderItem={({item, index}) => <PhotoItem navigateToPhoto={navigateToPhoto} item={item}/>}
                    onEndReached={() => setPage(page + 1)}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={() => {
                        return props.loading ? <ActivityIndicator size="large"/> : <View/>
                    }}
                />
        </View>
    )
};

const mapStateToProps = state => ({
    photos: state.photos.photos,
    loading: state.photos.loading
})

export default connect(mapStateToProps, {
    getPhotos
})(MainScreen);
