import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import giveClassesImage from '../../assets/images/give-classes-background.png';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode='contain'
                source={giveClassesImage}
                style={styles.content}
            >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastar como um professor na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton style={styles.okButton} onPress={handleNavigateBack}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;