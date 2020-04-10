import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Asset } from 'expo-asset';
import { readAsStringAsync } from 'expo-file-system';
import { Bars } from 'react-native-loader';

import Markdown from 'react-native-markdown-renderer';

const styles = StyleSheet.create({
    scroll: {
        padding: 20,
        flexGrow: 1
    },
    container: {
        flexDirection: 'column',
        height: '100%'
    },
    border: {
        width: '100%',
        height: 8,
        backgroundColor: '#f00',
        borderBottomWidth: 2,
        borderBottomColor: '#0f0'
    },
    version: {
        color: 'gray',
        width: '100%',
        textAlign: 'center'
    }
});

const markdownStyles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        width: '100%',
        borderTopColor: '#000',
        marginTop: 4
    }
});

export default function InfoScreen() {
    const [data, setData] = useState({
        readme: '',
        version: 0,
        authors: '',
        loaded: false
    });

    useEffect(() => {
        Promise.all([
            readAsStringAsync(Asset.fromModule(require('../README.md')).localUri),
            readAsStringAsync(Asset.fromModule(require('../AUTHORS.md')).localUri),
            require('../package.json')
        ]).then(e => {
            console.log(e);
            setData({
                readme: e[0],
                version: e[2].version,
                authors: e[1],
                loaded: true
            });
        });
    }, []);

    return data.loaded ? (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <Markdown style={markdownStyles}>{data.readme}</Markdown>

                <Markdown style={markdownStyles}>{'# Authors\n' + data.authors}</Markdown>
            </ScrollView>
            <View>
                <Text style={styles.version}>Version: {data.version}</Text>
            </View>
        </View>
    ) : (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}
        >
            <Bars size={20} color="#000" />
        </View>
    );
}

InfoScreen.navigationOptions = {
    header: null
};
