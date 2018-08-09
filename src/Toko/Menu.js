import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    Image,
    ListView,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Linking
} from 'react-native';
import {
    Container,
    Title,
    Content,
    Left,
    Right,
    Body,
    Icon,
    Accordion,
    Header,
    Button,
    Footer,
    FooterTab,
    Item,
    Input,

} from "native-base";
import { FormLabel, FormInput, Divider, } from 'react-native-elements';
import { NavigationActions, createStackNavigator, DrawerActions } from 'react-navigation';
// this.props.navigation.dispatch(DrawerActions.closeDrawer());
// this.props.navigation.dispatch(DrawerActions.openDrawer());
export default class UserListView extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    constructor(props) {
        super(props);
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }


    render() {
        console.log(this.props)
        return (
            <Container>
                <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }}
                    source={require('../assets/background1.jpg')}>
                    <Header style={{}}>
                        <Left style={{ paddingLeft: 10 }}>
                            <Button transparent >
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Toko</Title>
                        </Body>
                        <Right style={{ paddingRight: 10 }}>
                            <Button transparent onPress={() => { this.props.navigation.openDrawer() }}>
                                <Icon name='menu' />
                            </Button>
                        </Right>
                    </Header>
                    <View style={{ marginHorizontal: 30, paddingTop: 10, }}>
                        <Item searchBar rounded style={{ backgroundColor: 'white', height: 35 }}>
                            <Icon name="ios-search" style={{ height: 25 }} />
                            <Input placeholder="Search" />
                            <Icon name="ios-people" style={{ height: 25 }} />
                        </Item>
                    </View>

                    <ScrollView style={styles.scrollContainer}>
                        <View style={styles.container}>
                            <View style={styles.box}>
                                <Image style={styles.profileImage} source={{ uri: 'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b3ea1b8e2cc5a8fd1e3206ad84b8668&auto=format&fit=crop&w=2550&q=80' }} />
                                <TouchableOpacity onPress={this.navigateToScreen('fishstore')}>
                                    <Text style={styles.name}>Fish Store</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight style={[styles.button, styles.buttonphone]} onPress={() => { Linking.openURL('https://www.google.com') }}>
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/phone/ios/100/ffffff' }} />
                                </TouchableHighlight>

                                <Button style={[styles.button, styles.buttonLike]} onPress={() => { Linking.openURL('https://wa.me/6285606753920') }} >
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/whatsapp/ios/100/ffffff' }} />

                                </Button>

                                <TouchableHighlight style={[styles.button, styles.buttonLove]} onPress={() => { Linking.openURL('https://www.instagram.com') }}>
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/instagram/ios/100/ffffff' }} />
                                </TouchableHighlight>

                                <TouchableHighlight style={[styles.button, styles.buttonCall]} onPress={() => {Linking.openURL('https://maps.google.com')}}>
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios-location/ios/100/ffffff' }} />
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.box}>
                                <Image style={styles.profileImage} source={{ uri: 'https://images.unsplash.com/photo-1519147683487-66e0c2d0b5a0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=33757cd9aa1ff5ebdcfa82beefcf4213&auto=format&fit=crop&w=2550&q=80' }} />
                                <TouchableOpacity onPress={this.navigateToScreen('donutstore')}>
                                    <Text style={styles.name}>Donut Store</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight style={[styles.button, styles.buttonphone]} onPress={() => { Linking.openURL('https://www.google.com') }}>
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/phone/ios/100/ffffff' }} />
                                </TouchableHighlight>

                                <TouchableHighlight style={[styles.button, styles.buttonLike]} onPress={() => { Linking.openURL('https://wa.me/6285606753920') }} >
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/whatsapp/ios/100/ffffff' }} />
                                </TouchableHighlight>

                                <TouchableHighlight style={[styles.button, styles.buttonLove]} onPress={() => { Linking.openURL('https://www.instagram.com') }}>
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/instagram/ios/100/ffffff' }} />
                                </TouchableHighlight>

                                <TouchableHighlight style={[styles.button, styles.buttonCall]} onPress={() => { Linking.openURL('https://www.instagram.com') }}>
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios-ios-location/ios/100/ffffff' }} />
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.box}>
                                <Image style={styles.profileImage} source={require('../assets/toko2.png')} />
                                <TouchableOpacity onPress={this.navigateToScreen('cakdistore')}>
                                    <Text style={styles.name}>Cak-Di</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight style={[styles.button, styles.buttonphone]} onPress={() => { Linking.openURL('https://www.google.com') }}>
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/phone/ios/100/ffffff' }} />
                                </TouchableHighlight>

                                <TouchableHighlight style={[styles.button, styles.buttonLike]} onPress={() => { Linking.openURL('https://wa.me/6285606753920') }} >
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/whatsapp/ios/100/ffffff' }} />
                                </TouchableHighlight>

                                <TouchableHighlight style={[styles.button, styles.buttonLove]} onPress={() => { Linking.openURL('https://www.instagram.com') }}>
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/instagram/ios/100/ffffff' }} />
                                </TouchableHighlight>

                                <TouchableHighlight style={[styles.button, styles.buttonCall]} onPress={() => { Linking.openURL('https://www.instagram.com') }}>
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios-location/ios/100/ffffff' }} />
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.box}>
                                <Image style={styles.profileImage} source={{ uri: 'https://images.unsplash.com/photo-1526130963484-68fa9ba0717a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e9274f592bb0a930031a1c424f4d16a9&auto=format&fit=crop&w=934&q=80' }} />
                                <TouchableOpacity onPress={this.navigateToScreen('herbalstore')}>
                                    <Text style={styles.name}>herbalstore</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight style={[styles.button, styles.buttonphone]} onPress={() => { Linking.openURL('https://www.google.com') }}>
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/phone/ios/100/ffffff' }} />
                                </TouchableHighlight>

                                <TouchableHighlight style={[styles.button, styles.buttonLike]} onPress={() => { Linking.openURL('https://wa.me/6285606753920') }} >
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/whatsapp/ios/100/ffffff' }} />
                                </TouchableHighlight>

                                <TouchableHighlight style={[styles.button, styles.buttonLove]} onPress={() => { Linking.openURL('https://www.instagram.com') }}>
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/instagram/ios/100/ffffff' }} />
                                </TouchableHighlight>

                                <TouchableHighlight style={[styles.button, styles.buttonCall]} onPress={() => { Linking.openURL('https://www.instagram.com') }}>
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios-location/ios/100/ffffff' }} />
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.box}>
                                <Image style={styles.profileImage} source={{ uri: 'https://images.unsplash.com/photo-1531104048215-632162c6af26?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af73f2b6c701b9002b85ac1425607d5f&auto=format&fit=crop&w=934&q=80' }} />
                                <TouchableOpacity onPress={this.navigateToScreen('fruitstore')}>
                                    <Text style={styles.name}>Fruit-store</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight style={[styles.button, styles.buttonphone]} onPress={() => { Linking.openURL('https://www.google.com') }}>
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/phone/ios/100/ffffff' }} />
                                </TouchableHighlight>

                                <TouchableHighlight style={[styles.button, styles.buttonLike]} onPress={() => { Linking.openURL('https://wa.me/6285606753920') }} >
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/whatsapp/ios/100/ffffff' }} />
                                </TouchableHighlight>

                                <TouchableHighlight style={[styles.button, styles.buttonLove]} onPress={() => { Linking.openURL('https://www.instagram.com') }}>
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/instagram/ios/100/ffffff' }} />
                                </TouchableHighlight>

                                <TouchableHighlight style={[styles.button, styles.buttonCall]} onPress={() => { Linking.openURL('https://www.instagram.com') }}>
                                    <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios-location/ios/100/ffffff' }} />
                                </TouchableHighlight>
                            </View>
                        </View>
                    </ScrollView>
                    {/* <Footer>
                        <FooterTab>
                            <Button vertical onPress={this.navigateToScreen('Home')}>
                                <Image source={require('../assets/home.png')}
                                    style={{ width: 20, height: 20, alignSelf: 'center' }} />
                                
                            </Button>
                            <Button vertical onPress={this.navigateToScreen('Promosi')}>
                                <Image source={require('../assets/kantin.png')}
                                    style={{ width: 25, height: 25, alignSelf: 'center' }} />
                              
                            </Button>
                            <Button vertical onPress={this.navigateToScreen('Menu')}>
                                <Image source={{ uri: 'https://png.icons8.com/ios/50/000000/small-business-filled.png' }}
                                    style={{ width: 20, height: 20, alignSelf: 'center' }} />
                              
                            </Button>
                            <Button vertical onPress={this.navigateToScreen('Profile')}>
                                <Image source={require('../assets/user.png')}
                                    style={{ width: 20, height: 20, alignSelf: 'center' }} />
                                
                            </Button>
                        </FooterTab>
                    </Footer> */}
                </ImageBackground>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    container: {
        padding: 20,
    },
    box: {
        marginTop: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2,
        paddingTop: 10,
        borderRadius: 20
    },
    profileImage: {
        width: 300,
        height: 300,
        marginBottom: 20,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height: 1,
            width: -2
        },

    },
    name: {
        fontSize: 35,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#1E90FF',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 10,
        alignSelf: 'center'
    },

    button: {
        width: 60,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 30,
        margin: 10,
        shadowColor: 'black',
        shadowOpacity: .8,
        shadowOffset: {
            height: 2,
            width: -2
        },
        elevation: 4,
    },
    buttonphone: {
        backgroundColor: "#00BFFF",
    },
    buttonLike: {
        backgroundColor: "#228B22",
    },
    buttonLove: {
        backgroundColor: "#FF1493",
    },
    buttonCall: {
        backgroundColor: "#40E0D0",
    },
    icon: {
        width: 35,
        height: 35,
        alignSelf: 'center'
    }
}); 