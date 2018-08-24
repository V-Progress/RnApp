import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class WaitLeaf extends Component {
    static navigationOptions = {
        title: "登录中",
    }

    constructor(props) {
        super(props);
        this.onGoBackPressed = this.onGoBackPressed.bind(this);
    }

    render() {
        const {param} = this.props.navigation.state;
        return (
            <View style={Styles.container}>
                <Text style={Styles.textPromptStyle}>
                    登录使用手机号：{/*{param.phoneNumber}*/}
                </Text>
                <Text style={Styles.textPromptStyle}>
                    登录使用密码：{/*{param.userPW}*/}
                </Text>
                <Text style={Styles.bigTextPrompt} onPress={this.onGoBackPressed}>
                    返回
                </Text>
            </View>
        );
    }

    onGoBackPressed() {
        this.props.navigation.goBack();
    }
}
WaitLeaf.propTypes = {
    phoneNumber: PropTypes.string,
    userPW: PropTypes.string
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textPromptStyle: {
        fontSize: 20
    },
    bigTextPrompt: {
        width: 300,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 60
    }
});