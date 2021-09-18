import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { useAuth } from '../context/AuthContext';
import Txt from './custom/Txt';
import Vew from './custom/Vew';
import Logo from './Logo';

interface LoginModalProps {}

const LoginModal: React.FC<LoginModalProps> = ({}) => {
    // VAMIQ WILL FINISH THIS.
    const {loggedIn, login} = useAuth();
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

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

                {/* <TouchableOpacity onPress={toggle}>
                    <Vew flexDir="row" alignItems="center" p={4} mt={4}>
                        <FontAwesome size={16} name="times" color={Colors.whiteAlpha[500]} />
                        <Txt ml={4} textAlign="center" color={Colors.whiteAlpha[500]} fontSize={14}></Txt>
                    </Vew>
                </TouchableOpacity> */}
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