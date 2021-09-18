import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Colors from '../constants/Colors';
import { useAuth } from '../context/AuthContext';
import Btn from './custom/Btn';
import Txt from './custom/Txt';
import Vew from './custom/Vew';
import Logo from './Logo';

interface LoginModalProps {}

const LoginModal: React.FC<LoginModalProps> = ({}) => {
    // VAMIQ WILL FINISH THIS.
    const {loggedIn, login} = useAuth();
    const [open, setOpen] = useState(true);

    const toggle = () => setOpen(!open);

    const closeModalBtn = (txt?:string | undefined) => (
        <TouchableOpacity onPress={toggle}>
            <Btn 
                color={Colors.brand.green}
                size={40}
                padding={2}
                icon={"arrow-left"}
            />
        </TouchableOpacity>
    )

    return (
    <>
        <Modal
            animationType="slide"
            transparent={false}
            visible={open}
            onRequestClose={toggle}
        >
            <Vew style={[styles.centeredView]}>
                <Logo size={{width: 100, height: 100, fontSize: 16}} />

                <Vew position="absolute" style={{top: 0, left: 0, margin: 16}}>
                    {closeModalBtn()}
                </Vew>
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
});

export default LoginModal;