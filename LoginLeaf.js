import React, {Component} from 'react';
import {StyleSheet, Dimensions, View, Text, TextInput, Image, Button, Alert} from 'react-native';

let widthOfMargin = Dimensions.get('window').width * 0.05;
export default class LoginLeaf extends Component {
    static navigationOptions = {
        title: "登录",
    };

    constructor(props) {
        super(props);
        this.state = {
            inputedNum: '',
            inputedPW: ''
        };
        this.updateNum = this.updateNum.bind(this);
        this.jumpToWaiting = this.jumpToWaiting.bind(this);
    }

    updateNum(newText) {
        this.setState((state) => {
            return {
                inputedNum: newText
            };
        });
    }

    updatePW(newText) {
        this.setState(() => {
            return {
                inputedPW: newText
            };
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.updateNum}
                    placeholder={"请输入用户名"}/>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.updatePW.bind(this)}
                    secureTextEntry={true}
                    placeholder={"请输入密码"}/>
                <Text
                    style={styles.bigTextPrompt}
                    onPress={() => {
                        this.userPressConfirm()
                    }}>
                    确定
                </Text>
                <Text
                    style={styles.bigTextPrompt}
                    onPress={() => this.userPressAddressBook()}>通讯录</Text>
            </View>
        );
    }

    jumpToWaiting() {
        this.props.navigation.navigate('Wait', {
            phoneNumber: this.state.inputedNum,
            userPW: this.state.inputedPW
        });
    }

    userPressConfirm() {
        Alert.alert(
            '提示',
            '确定使用' + this.state.inputedNum + '登陆吗？',
            [
                {
                    text: '取消', onPress: (() => {
                    }), style: 'cancel'
                },
                {text: '确定', onPress: this.jumpToWaiting}
            ]
        );
    }

    userPressAddressBook() {

    }
}

const styles = StyleSheet.create({
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 360,
        height: 50,
    },
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    textInput: {
        fontSize: 15,
        height: 50,
        width: 300
    },
    button: {
        marginTop: 10,
        paddingLeft: 100,
        paddingRight: 100,
        width: 200,
        height: 60
    },
    bigTextPrompt: {
        margin: widthOfMargin,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 30
    }
});
