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
export default class toko extends Component {
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
                <ImageBackground style={{ width: '100%', height: '100%', }}
                    source={require('../assets/background1.jpg')}>
                    <Header style={{}}>
                        <Left style={{ paddingLeft: 10 }}>
                            <Button transparent >
                                <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios/50/000000/back-filled.png' }} />
                            </Button>
                        </Left>
                        <Body style={{ paddingRight: 80 }}>
                            <Title>promosi</Title>
                        </Body>
                        <Right style={{ paddingRight: 10 }}>
                            <Button vertical transparent onPress={() => { this.props.navigation.openDrawer() }}>
                                <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios/50/000000/checkout-filled.png' }} />
                            </Button>
                            <Button vertical transparent onPress={() => { this.props.navigation.openDrawer() }}>
                                <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios/50/000000/hearts-filled.png' }} />
                            </Button>
                        </Right>
                    </Header>
                    <View style={{ marginHorizontal: 10, paddingTop: 10, }}>
                        <Item searchBar rounded style={{ backgroundColor: '#EDEFF2', height: 35 }}>
                            <Icon name="ios-search" style={{ height: 25 }} />
                            <Input placeholder="mau makan apa hari ini" />

                        </Item>
                    </View>
                    <ScrollView style={{ flex: 1, }}>
                        <View style={styles.photosCard}>

                            <View style={{ flexDirection: 'row', height: 'auto', }}>
                                <View style={styles.box}>
                                    <Image source={{uri:'https://cdn.yukepo.com/content-images/main-images/2017/01/05/main_image_4001.jpg'}}
                                        style={{ width: 170, height: 180, alignSelf: 'center', borderRadius: 20, }} />
                                    <Text> warung bu nur</Text>
                                    <Text> harga 10rb</Text>
                                </View>
                                <View style={styles.box1}>

                                    <Image source={{uri :'https://1.bp.blogspot.com/-WHM7cAcRMLE/Wh40rzuowOI/AAAAAAAAD3k/tP9gdLxIOasuVW7exj_-YT4M6NbVIcDHwCLcBGAs/s1600/Warung-Nikmat-Kuta-Bali.jpg'}}
                                        style={{ width: 170, height: 180, alignSelf: 'center', borderRadius: 20, }} />
                                    <Text> warung cakdi</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', height: 'auto', }}>
                                <View style={styles.box}>
                                    <Image source={{uri:'https://www.infobmr.com/wp-content/uploads/2014/11/Ilustrasi-Warung-Makan.jpg'}}
                                        style={{ width: 170, height: 180, alignSelf: 'center', borderRadius: 20, }} />
                                    <Text> warung suroboyo</Text>
                                    <Text> harga 10rb</Text>
                                </View>
                                <View style={styles.box1}>

                                    <Image source={require('../assets/menu4.png')}
                                        style={{ width: 170, height: 180, alignSelf: 'center', borderRadius: 20, }} />
                                    <Text> </Text>
                                </View>
                            </View>
                            
                        </View>
                    </ScrollView>

                </ImageBackground>
            </Container >
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
    photosContainer: {
        flexDirection: 'row',

        height: 'auto',
    },
    photosCard: {
        marginTop: 10,
    },
    cardTittle: {
        color: "#808080",
        fontSize: 22,
        marginBottom: 5,
    },
    box: {
        marginTop: 10,
        marginHorizontal: 5,
        backgroundColor: '#EDEFF2',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2,
        paddingTop: 10,
        borderRadius: 20,
        flex: 1,

    },
    box1: {
        marginTop: 10,
        marginHorizontal: 5,
        backgroundColor: '#EDEFF2',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2,
        paddingTop: 10,
        borderRadius: 20,
        flex: 1,
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
        width: 20,
        height: 20,
        alignSelf: 'center'
    }
}); 