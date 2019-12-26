import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import { readAsStringAsync } from 'expo-file-system';
import { Bars } from 'react-native-loader';

import Markdown from 'react-native-markdown-renderer';

const copy = `# h1 Heading 8-)

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
`;

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
        <View style={{ padding: 20, textAlign: 'center' }}>
            <Markdown>
                {data.readme.replace(
                    /(# Ref.?7[^\n]*)/m,
                    '$1`Version: ' + data.version + '`'
                )}
            </Markdown>
            <Markdown>
                # Authors{'\n'}
                {data.authors}
            </Markdown>
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
