import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Provider, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Toolbar = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<IconButton icon="menu" color="white" onPress={openMenu}>Show menu</IconButton>}>
          <Menu.Item style={styles.menuItem} titleStyle={styles.title} onPress={() => {}} title="Home" />
          <Menu.Item style={styles.menuItem} titleStyle={styles.title} onPress={() => {}} title="Search" />
          <Menu.Item style={styles.menuItem} titleStyle={styles.title} onPress={() => {}} title="Activity" />
          <Menu.Item style={styles.menuItem} titleStyle={styles.title} onPress={() => {}} title="Landlord" />
          <Menu.Item style={styles.menuItem} titleStyle={styles.title} onPress={() => {}} title="Message" />
          <Menu.Item style={styles.menuItem} titleStyle={styles.title} onPress={() => {}} title="Settings" />

        </Menu>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
    menuItem: {
        backgroundColor: 'green',
    },
    title: {
        color: 'white',
        fontFamily: 'josefin'
    }
})

export default Toolbar;