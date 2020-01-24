/* eslint-disable no-undef */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Item, Input, DatePicker} from 'native-base';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/EvilIcons';
import MyIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#eee',
    padding: 5,
  },
  banner: {
    height: 150,
    backgroundColor: '#0064D2',
  },
  icon: {
    fontSize: 25,
    color: 'white',
    padding: 5,
    paddingRight: 15,
    paddingBottom: 10,
    marginTop: 10,
  },
  iconBody: {
    fontSize: 30,
    color: '#0064D2',
    marginLeft: -5,
  },
  iconFilter: {
    fontSize: 20,
    color: '#0064D2',
  },
  iconDoor: {
    fontSize: 20,
    color: '#0064D2',
    marginTop: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  bottom: {
    bottom: -160,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 150,
    elevation: 5,
  },
  card: {
    height: '73%',
    width: '90%',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    // marginTop: '-27%'
  },
  buttonLogin: {
    backgroundColor: 'yellow',
    borderRadius: 50,
    height: '40%',
    width: 300,
    padding: 20,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#0064D2',
    fontSize: 17,
  },
  image: {
    width: 250,
    height: 90,
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
  },
});

class BodySearchs extends Component {
  constructor(props) {
    super(props);
    this.state = {chosenDate: new Date()};
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }
  render() {
    return (
      <>
        <Card style={styles.card}>
          <View style={{marginTop: 10}}>
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 14, color: 'grey'}}>
                Nginep ke mana ?
              </Text>
            </View>

            <TouchableOpacity onPress={() => this.props.navigation.navigate()}>
              <Item inlineLabel style={{marginLeft: 10, marginRight: 10}}>
                <Icon name="location" style={styles.iconBody} />
                <Input
                  style={{marginLeft: -5, fontSize: 16}}
                  placeholder="Hotel Dekat Anda"
                  placeholderTextColor="#000"
                  disabled
                />
              </Item>
            </TouchableOpacity>

            <View style={{marginLeft: 10, marginTop: 10}}>
              <Text style={{fontSize: 14, color: 'grey'}}>Check-in</Text>
            </View>

            <Item inlineLabel style={{marginLeft: 10, marginRight: 10}}>
              <Icons name="calendar" style={styles.iconFilter} />
              <DatePicker
                minimumDate={new Date(2019, 1, 1)}
                maximumDate={new Date(2021, 12, 31)}
                locale={'en'}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={'fade'}
                androidMode={'default'}
                placeHolderText="Pilih Tanggal"
                placeholderTextColor="black"
                textStyle={{color: 'green'}}
                placeHolderTextStyle={{color: '#d3d3d3'}}
                onDateChange={this.setDate}
                disabled={false}
              />
              <Text>
                Date: {this.state.chosenDate.toString().substr(4, 12)}
              </Text>
            </Item>

            <View style={{marginLeft: 10, marginTop: 10}}>
              <Text style={{fontSize: 14, color: 'grey'}}>Check-out</Text>
            </View>

            <Item inlineLabel style={{marginLeft: 10, marginRight: 10}}>
              <Icons name="calendar" style={styles.iconFilter} />
              <DatePicker
                minimumDate={new Date(2019, 1, 1)}
                maximumDate={new Date(2021, 12, 31)}
                locale={'en'}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={'fade'}
                androidMode={'default'}
                placeHolderText="Pilih Tanggal"
                placeholderTextColor="black"
                textStyle={{color: 'green'}}
                placeHolderTextStyle={{color: '#d3d3d3'}}
                onDateChange={this.setDate}
                disabled={false}
              />
              <Text>
                Date: {this.state.chosenDate.toString().substr(4, 12)}
              </Text>
            </Item>

            <View style={{marginLeft: 10, marginTop: 10}}>
              <Text style={{fontSize: 14, color: 'grey'}}>Kamar & Tamu</Text>
            </View>

            <Item
              inlineLabel
              style={{marginLeft: 10, marginRight: 10, flexDirection: 'row'}}>
              <MyIcon name="door-open" style={styles.iconDoor} />
              <TouchableOpacity
                onPress={() => this.props.onRoomPickerPressed()}>
                <Text
                  style={{fontSize: 16, marginTop: 10, marginBottom: 10}}
                  disabled>
                  {' '}
                  <Text> {this.props.room} </Text>Kamar{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.onPersonPickerPressed()}>
                <Text
                  style={{fontSize: 16, marginTop: 10, marginBottom: 10}}
                  disabled>
                  {' '}
                  <Text> {this.props.person} </Text>Tamu{' '}
                </Text>
              </TouchableOpacity>
            </Item>

            <View style={{marginLeft: 10, marginTop: 10}}>
              <Text style={{fontSize: 14, color: 'grey'}}>Filter</Text>
            </View>

            <Item inlineLabel style={{marginLeft: 10, marginRight: 10}}>
              <Icons
                keyboardType="number-pad"
                name="filter"
                style={styles.iconFilter}
              />
              <Input
                keyboardType="number-pad"
                style={{fontSize: 16}}
                placeholder="Min (IDR)"
                placeholderTextColor="grey"
              />
              <Input
                style={{fontSize: 16}}
                placeholder="Max (IDR)"
                placeholderTextColor="grey"
              />
            </Item>

            <View style={{alignItems: 'center', marginTop: 10}}>
              <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.buttonText}>CARI HOTEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </>
    );
  }
}

const BodySearch = withNavigation(BodySearchs);
export default BodySearch;
