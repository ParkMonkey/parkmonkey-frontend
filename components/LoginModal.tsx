import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import Colors from '../constants/Colors';
import { useAuth } from '../context/AuthContext';
import Btn from './custom/Btn';
import Txt from './custom/Txt';
import Vew from './custom/Vew';

interface LoginModalProps {}

const LoginModal: React.FC<LoginModalProps> = ({}) => {
    const {login} = useAuth();
    const [open, setOpen] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const toggle = () => setOpen(!open);

    const closeModalBtn = () => (
        <TouchableOpacity onPress={toggle}>
            <Btn 
                color={Colors.brand.green}
                size={40}
                icon={"times"} // arrow-left
                padding={8}
            />
        </TouchableOpacity>
    )

    const loginUser = () => {
        if (!email && !password) return Alert.alert(
            "Invalid email and or password.",
            "Please fill in the appropriate field(s).",
            [ { text: "OK" } ],
        );

        login(Math.random().toString(), email, "username_invalid", "pfpUrl_invalid", {});
        toggle();
    }

    return (
    <>
        <Modal
            animationType="slide"
            transparent={false}
            visible={open}
            onRequestClose={toggle}
        >
            <Vew style={[styles.centeredView]}>
                <Vew position="absolute" style={{top: 0, left: 0, margin: 8}}>
                    {closeModalBtn()}
                </Vew>

                <Txt color="black" fontWeight={"700"} fontSize={40} mb={16}>Login</Txt>
                <Image 
                    source={require('../assets/images/green_logo_outline.png')} 
                    style={{width: 125, height: 125, resizeMode:'contain', marginBottom: 8}}
                />

                <TextInput 
                    style={styles.textInput}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email Address"
                    placeholderTextColor={Colors.blackAlpha[200]}
                />

                <TextInput 
                    style={styles.textInput}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    placeholderTextColor={Colors.blackAlpha[200]}
                />

                <Pressable onPress={loginUser}>
                    {({ pressed }) => (
                        <Btn 
                            text="LOG IN"
                            bg={pressed ? Colors.brand.dark : Colors.brand.green}
                            size={24}
                            style={{
                                marginTop: 16,
                                padding:10,
                                borderRadius: 16,
                                paddingHorizontal: "17%",
                                shadowColor: "black",
                                shadowOffset: {
                                    width: 8, height: 9
                                },
                                shadowOpacity: 0.9,
                                elevation: 6,
                            }}
                        />
                    )}
                </Pressable>

                <Txt color={Colors.blackAlpha[200]} mt={16}>
                    Don't have an account? 
                    <Txt color={Colors.blackAlpha[500]}> Sign up here.</Txt>
                </Txt>
                
            </Vew>
        </Modal>
    </>);
}

const styles = StyleSheet.create({
    centeredView: {
        zIndex: 12,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    textInput: {
        padding: 2,
        paddingHorizontal: 6,
        paddingBottom: 8,
        borderBottomWidth: 3,
        borderColor: Colors.blackAlpha[200],
        color: Colors.blackAlpha[700],
        borderRadius: 4,
        marginTop: 8,
        marginBottom: 2,
        width: "75%",
        fontSize: 22,
    }
});

export default LoginModal;