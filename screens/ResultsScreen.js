import React from 'react';
import { View, Text } from 'react-native';
import { Bars } from 'react-native-loader';
import * as Font from 'expo-font';
import { Card } from './../components/Card'

export default class Results extends React.Component {

    static navigationOptions = {
        header: null,
        headerMode: 'none',

    }

    constructor(props) {
        super(props)

        this.state = {
            fontLoaded: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'roboto-mono': require('../assets/fonts/RobotoMono-Regular.ttf')
        });

        this.setState({
            fontLoaded: true
        })
    }

    render() {
        if (this.state.fontLoaded) {
            return (
                <Card
                    circle={()=><Text>Progress</Text>}
                    text={()=><Text>Progress</Text>}
                    button="Progress"
                />
                // <LinearGradient
                //   colors={colorSuccess}
                //   style={{alignItems: 'center', flex: 1}}
                // >
                //     <View style={styles.resultsCard}>
                //         <View style={styles.averageCircle}>
                //             <Text style={styles.average}>01:08:12</Text>
                //         </View>
                //         <View style={{textAlign: 'center', alignItems: 'center'}}>
                //             <View style={{flexDirection: 'row', marginTop: wp('15%')}}>
                //                 <Text style={{fontSize:  wp('5%'), color: "#000"}}>Referee 1</Text>
                //                 <Text style={{fontFamily: 'roboto-mono', fontSize: 17, color: "#2ECC71", marginLeft: wp('14%')}}>01:06:47</Text>
                //             </View>
                //             <View style={{borderWidth: 0.5, height: 0, width: wp('57%'), borderColor: "#DDDDDD", marginTop: wp('4%')}}></View>
                //             <View style={{flexDirection: 'row', marginTop: wp('3%')}}>
                //                 <Text style={{fontSize:  wp('5%'), color: "#000"}}>Referee 2</Text>
                //                 <Text style={{fontFamily: 'roboto-mono', fontSize: 17, color: "#2ECC71", marginLeft: wp('14%')}}>01:10:19</Text>
                //             </View>
                //             <View style={{borderWidth: 0.5, height: 0, width: wp('57%'), borderColor: "#DDDDDD", marginTop: wp('4%')}}></View>
                //             <View style={{flexDirection: 'row', marginTop: wp('3%')}}>
                //                 <Text style={{fontSize: wp('5%'), color: "#000"}}>Referee 3</Text>
                //                 <Text style={{fontFamily: 'roboto-mono', fontSize: 17, color: "#2ECC71", marginLeft: wp('14%')}}>01:08:34</Text>
                //             </View>
                //         </View>
                //     </View>
                // </LinearGradient>
            );
        } else {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                    <Bars size={20} color="#000" />
                </View>
            );
        }
    }
}

const colorSuccess = ["#2ECC71", "#1ABC9C"];
const colorFailure = ["#E74C3C", "#B53471"];