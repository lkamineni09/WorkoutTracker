import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import profilepic from '../assets/profilepic.jpg';

const Profile = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                <Image source={profilepic} style={styles.profilepic} />
                    <Text style={styles.name}>Your Name</Text>
                    <Text style={styles.subtitle}>WorkoutWhiz Member</Text>
                </View>
                <View style={styles.menuContainer}>
                    <MenuItem title="Edit Profile" onPress={() => navigation.navigate('Edit Profile')}  />
                    <MenuItem title="Badges" onPress={() => navigation.navigate('Badges')} />
                    <MenuItem title="Goals" onPress={() => navigation.navigate('Goals')} />
                    <MenuItem title="Friends" onPress={() => navigation.navigate('Friends')} />
                    <MenuItem title="Progress" onPress={() => navigation.navigate('Progress')} />
                    <MenuItem title="Favorites" onPress={() => navigation.navigate('Favorites')} />
                    <MenuItem title="Account Settings" onPress={() => navigation.navigate('AccountSettings')} />
                </View>
            </View>
        </ScrollView>
        
    );
};

const MenuItem = ({ title, notifications, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
        <Text style={styles.menuText}>{title}</Text>
        {notifications && <View style={styles.notificationBubble}><Text style={styles.notificationText}>{notifications}</Text></View>}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profilePic: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: '#ddd',
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    subtitle: {
        fontSize: 16,
        color: '#aaa',
    },
    menuContainer: {
        flex: 1,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
    },
    menuText: {
        fontSize: 18,
        color: '#000',
    },
    notificationBubble: {
        backgroundColor: '#aaa',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    notificationText: {
        color: '#000',
        fontSize: 14,
    },

});

export default Profile;