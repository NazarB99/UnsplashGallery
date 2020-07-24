import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    View,
    StyleSheet
} from 'react-native';
import {Provider} from 'react-redux'
import {store} from "./store";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack'
import MainScreen from "./src/screens/MainScreen";
import PhotoScreen from "./src/screens/PhotoScreen";

const Stack = createStackNavigator()

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={{flex: 1}}>
                <Provider store={store}>
                    <View style={styles.container}>
                        <NavigationContainer>
                            <Stack.Navigator>
                                <Stack.Screen name="Main" component={MainScreen} />
                                <Stack.Screen name="Photo" component={PhotoScreen} />
                            </Stack.Navigator>
                        </NavigationContainer>
                    </View>
                </Provider>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default App;
