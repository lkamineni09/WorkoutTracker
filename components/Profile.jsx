import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container}>
            {/* <Image source={{ uri: 'https://example.com/profilepic.jpg' }} style={styles.profilePic} /> */}
            <Text style={styles.name}>Lasya Kamineni</Text>
            <Text style={styles.bio}>Workout Tracker</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    bio: {
        fontSize: 16,
        color: 'gray',
        marginTop: 5,
        textAlign: 'center',
    },
});

export default Profile;