import { StyleSheet, View } from "react-native";
import React  from "react";
import { Entypo } from '@expo/vector-icons';

export default function ButtonNew({ size, color, focused }) {
    return (
        <View style={ [styles.container, { backgroundColor: focused ? '#3eccf5' : '#6fdfff' }] }>
            <Entypo name="plus"  color={ focused ? '#FFF' : '#f8f8f8' } size={size} />
        </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#3eccf5',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    }
});
