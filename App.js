import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, } from 'react-native';
import { Button, Card, Divider, IconButton } from 'react-native-paper';
import { ReactNotifications } from 'react-notifications-component'
import Icon from 'react-native-vector-icons/AntDesign';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

class App extends Component {
  render() {
    return (
      <View style={{
        backgroundColor: '#4A5D80',
        flexDirection: 'column',
        flex: 1
      }}>
        {/* Afternoon jo */}
        <View style={{ flexDirection: 'row', paddingRight: 20, paddingLeft: 20 }} >
          <Text style={{
            fontSize: 24
            , color: 'white'
          }}>
            Afternoon
          </Text>

          <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginLeft: 10,
            color: 'white'
          }}>
            JO
          </Text>
        </View>
        {/* Here is the latest */}
        <Text style={{
          fontSize: 16,
          paddingRight: 20, paddingLeft: 20,
          color: 'white'
        }}>
          Here's the latest
        </Text>
        {/* Money balance */}
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 10,
          paddingRight: 20, paddingLeft: 20,
          color: '#00E771'
        }}>
          KES 42,000
        </Text>
        {/* Here is the latest */}
        <Text style={{
          fontSize: 16,
          color: 'white',
          paddingRight: 20, paddingLeft: 20,
          marginBottom: 10
        }}>
          Total funds
        </Text>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            padding: 20,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: 'white'
          }}
        >
          <Text style={{ color: '#4A5D80', fontSize: 18, fontWeight: 'bold' }}>Your Goals</Text>
          <UserCard />
          <UserCard />
          <View style={{
            flex: 1
          }}></View>
          <Button
            onPress={() => Toast.show({
              type: 'success',
              visibilityTime: 10000,
              onPress: () => Toast.show({
                type: 'success',
                text1: 'Tapped'
              }),

              text1NumberOfLines: 3,

              text1: 'This is an in-app notification snackbar to show the user when they perform an action. Clicking it should change the text',
              backgroundColor: 'pink',
            })}
            style={{ backgroundColor: '#00E771', height: 40, alignItems: 'center', borderRadius: 20 }}>
            <Text style={{ color: 'white', fontSize: 14, }}>Show Snackbar</Text>
          </Button>

        </View>
        <Toast config={{
          success: ({ text1, props, onPress }) => (
            <TouchableWithoutFeedback
              onPress={onPress}
              style={{ padding: 16 }}>
              <View style={{ padding: 16, width: 300, borderRadius: 10, backgroundColor: '#E91780', flexDirection: 'row' }}>
                <Text style={{ color: 'white', flex: 9, fontWeight: 'bold' }}>{text1}</Text>
                <TouchableOpacity
                  onPress={() => Toast.hide()}
                  style={{ flex: 1 }}>
                  <Icon name="close" padding={8} size={30} color="white" />
                </TouchableOpacity>

              </View>
            </TouchableWithoutFeedback>
          )
        }} />
      </View>

    )
      ;
  }
}

export default App;


class UserCard extends Component {
  render() {
    return (
      <Card style={{
        elevation: 20,
        borderRadius: 10,
        padding: 8,
        height: 80,
        flexDirection: 'row',
        marginTop: 20
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <View style={{ flex: 7 }}>
            <Text style={{ color: '#4A5D80', fontSize: 16, }}>Your Goals</Text>
            <Text style={{ color: 'grey', fontSize: 14, }}>Your Goals</Text>
          </View>
          <View style={{alignItems:'center',height:60,flexDirection:'column',alignContent:'center'}}>

            <Button
              style={{ backgroundColor: '#00E771', height: 40, alignItems: 'center', textAlign: 'center',marginRight:8 }}
              title='Finish Goal'

              color='#00E771'
              onPress={() => { }}
            >
              <Text style={{ color: 'white', fontSize: 12, }}>Finish Goals</Text>
            </Button>
          </View>

          <View style={{ height: 60, width: 1, backgroundColor: 'grey', }}>

          </View>
          <Icon name="right" size={20} marginRight={8} color="grey" />
        </View>
      </Card>
    );
  }
}