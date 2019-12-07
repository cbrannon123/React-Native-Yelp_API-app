import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
//importing built in icons
import { Feather} from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput style={styles.inputStyle}
            placeholder='Search'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        marginTop:15,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'

    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;