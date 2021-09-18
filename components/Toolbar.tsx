import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Provider, IconButton, List } from 'react-native-paper';
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
          <Menu.Item 
            icon={() => (
                <List.Icon
                  icon='menu'
                  color='white'
                  style={styles.icon}
                />
              )}          
            style={styles.menuItem} 
            titleStyle={styles.title} 
            onPress={() => {}} 
            title="Home" 
          />
          <Menu.Item 
            icon={() => (
                <List.Icon
                  icon='map'
                  color='white'
                  style={styles.icon}
                />
              )}          
            style={styles.menuItem} 
            titleStyle={styles.title}
            onPress={() => {}} 
            title="Search" 
          />
          <Menu.Item 
            icon={() => (
                <List.Icon
                  icon='history'
                  color='white'
                  style={styles.icon}
                />
              )}          
            style={styles.menuItem} 
            titleStyle={styles.title} 
            onPress={() => {}} 
            title="Activity" 
          />
          <Menu.Item 
            icon={() => (
                <List.Icon
                  icon='home'
                  color='white'
                  style={styles.icon}
                />
              )}          
            style={styles.menuItem} 
            titleStyle={styles.title} 
            onPress={() => {}} 
            title="Landlord" />
          <Menu.Item 
            icon={() => (
                <List.Icon
                  icon='forum'
                  color='white'
                  style={styles.icon}
                />
              )}          
            style={styles.menuItem} 
            titleStyle={styles.title} 
            onPress={() => {}} 
            title="Message" />
          <Menu.Item 
            icon={() => (
                <List.Icon
                  icon='cog'
                  color='white'
                  style={styles.icon}
                />
              )}          
            style={styles.menuItem} 
            titleStyle={styles.title} 
            onPress={() => {}} 
            title="Settings" 
          />
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
    },
    icon: {
        margin: 0
    }
})

export default Toolbar;