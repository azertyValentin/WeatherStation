import React from 'react'
import { StyleSheet, View, Text, Image, Switch} from 'react-native'
import {initializationDB} from '../BD/firebase'
import Icon from 'react-native-vector-icons/Feather'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lightOn: false,
            heaterOn: 'false',
            light: 0,
            temperature: 0,
            humidity: 0
        }
            
        this.db = initializationDB()
    }

    _getLampPowerValue() {
        var starCountRef = this.db.ref('lamp/on');
        starCountRef.on('value', (snapshot) => {
                this.setState({
                    lightOn: snapshot.val()
                })
           
        });
    }

    _setLampPowerValue() {
        if(this.state.lightOn === false){
            this.db.ref('lamp/').set({
                'on': true
            });
        } else {
            this.db.ref('lamp/').set({
                'on': false
            });
        }
    }

    _getHeaterPowerValue() {
        var starCountRef = this.db.ref('heater/on');
        starCountRef.on('value', (snapshot) => {
                this.setState({
                    heaterOn: snapshot.val()
                })
           
        });
    }

    _setHeaterPowerValue() {
        if(this.state.heaterOn === false){
            this.db.ref('heater/').set({
                'on': true
            });
        } else {
            this.db.ref('heater/').set({
                'on': false
            });
        }
    }

    _getLight() {
        var starCountRef = this.db.ref('light');
        starCountRef.on('value', (snapshot) => {
                this.setState({
                    light: snapshot.val()
                })
           
        });
    }

    _getTemperature() {
        var starCountRef = this.db.ref('temperature');
        starCountRef.on('value', (snapshot) => {
                this.setState({
                    temperature: snapshot.val()
                })
           
        });
    }

    _getHumidity() {
        var starCountRef = this.db.ref('moisture');
        starCountRef.on('value', (snapshot) => {
                this.setState({
                    humidity: snapshot.val()
                })
           
        });
    }

    componentDidMount() {
        this._getLampPowerValue()
        this._getHeaterPowerValue()
        this._getLight()
        this._getTemperature()
        this._getHumidity()
    }

    render() {
        return (
            <View style={styles.main_container}>
                <Image style={styles.sky_image} source={require("../Images/cloud.jpg")}/>
                <View style={styles.second_container}>
                    <View style={styles.equipmentContainer}>
                        <View style={styles.equipmentTitleContainer}>
                            <Text style={[styles.equipmentTitle, styles.text]}>Light</Text>
                        </View>
                        <View style={styles.equipmentSwitch}>
                            <Switch onValueChange={() => this._setLampPowerValue()} value={this.state.lightOn}></Switch>
                        </View>
                    </View>
                    <View style={styles.equipmentContainer}>
                        <View style={styles.equipmentTitleContainer}>
                            <Text style={[styles.equipmentTitle, styles.text]}>Heater</Text>
                        </View>
                        <View style={styles.equipmentSwitch}>
                            <Switch onValueChange={() => this._setHeaterPowerValue()} value={this.state.heaterOn}></Switch>
                        </View>
                    </View>
                    <View style={styles.infos}>
                        <View style={styles.infoIcons}>
                        <Icon style={styles.icon} name="sun" size={40} color="white"/>
                        <Icon style={styles.icon} name="thermometer" size={40} color="white"/>
                        <Icon style={styles.icon} name="droplet" size={40} color="white"/>
                    </View>
                    <View style={styles.infoValues}>
                        <Text style={[styles.text, styles.value]}>{this.state.light}</Text>
                        <Text style={[styles.text, styles.value]}>{this.state.temperature}°</Text>
                        <Text style={[styles.text, styles.value]}>{this.state.humidity}%</Text>
                    </View>
                    </View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        color: 'white'
    },
    main_container: {
        flex: 1,
    },
    second_container:{
        backgroundColor: 'black',
        marginTop: 250,
        flex: 1
    },
    equipmentContainer: {
        flexDirection: 'row',
        margin: 10
    },
    equipmentTitleContainer: {
        flex: 1,
        justifyContent: 'center',
        marginRight: 15
    },
    equipmentTitle:{
        textAlign:'right',
        fontSize: 17,
        fontWeight: 'bold'
    },
    equipmentSwitch:{
        flex: 1,
        alignItems: 'flex-start'
    },
    sky_image: {
        height: 250,
        width: 500,
        backgroundColor: 'grey',
        position: 'absolute',
    },
    infos:{
        marginTop: 30
    },
    infoIcons: {
        flexDirection: 'row',
    },
    infoValues:{
        flexDirection: 'row',
        marginTop: 10
    },
    icon:{
        flex: 1,
        textAlign: 'center'
    },
    value:{
        flex: 1,
        textAlign: 'center',
        fontSize: 18
    }
})

export default Home