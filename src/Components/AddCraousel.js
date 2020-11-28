import React, {Component} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-looped-carousel';

const {width, height} = Dimensions.get('window');

export default class AddCraousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: {width, height},
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({size: {width: layout.width, height: layout.height}});
  };

  render() {
    return (
      <View
        style={{height: 180, borderRadius: 20, elevation: 5}}
        onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={2000}
          style={this.state.size}
          autoplay={false}
          bullets={true}
          swipe={true}
          chosenBulletStyle={{backgroundColor: '#88026E'}}
          bulletStyle={{backgroundColor: '#C297DD'}}
          onAnimateNextPage={(p) => console.log(p)}>
          <View
            style={[
              {
                backgroundColor: 'fff',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginVertical: -25,
              },
              this.state.size,
            ]}>
            <Image
              source={require('../Assets/jammer.png')}
              style={{width: 100, height: 50}}
            />
            <Image
              source={require('../Assets/vs.png')}
              style={{width: 50, height: 40}}
            />
            <Image
              source={require('../Assets/splash.png')}
              style={{width: 100, height: 50}}
            />
          </View>

          <View
            style={[
              {
                backgroundColor: 'fff',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginVertical: -25,
              },
              this.state.size,
            ]}>
            <Image
              source={require('../Assets/splash.png')}
              style={{width: 100, height: 50}}
            />
            <Image
              source={require('../Assets/vs.png')}
              style={{width: 50, height: 40}}
            />
            <Image
              source={require('../Assets/jammer.png')}
              style={{width: 100, height: 50}}
            />
          </View>

          <View
            style={[
              {
                backgroundColor: 'fff',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginVertical: -25,
              },
              this.state.size,
            ]}>
            <Image
              source={require('../Assets/jammer.png')}
              style={{width: 100, height: 50}}
            />
            <Image
              source={require('../Assets/vs.png')}
              style={{width: 50, height: 40}}
            />
            <Image
              source={require('../Assets/splash.png')}
              style={{width: 100, height: 50}}
            />
          </View>

          <View
            style={[
              {
                backgroundColor: 'fff',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginVertical: -25,
              },
              this.state.size,
            ]}>
            <Image
              source={require('../Assets/splash.png')}
              style={{width: 100, height: 50}}
            />
            <Image
              source={require('../Assets/vs.png')}
              style={{width: 50, height: 40}}
            />
            <Image
              source={require('../Assets/jammer.png')}
              style={{width: 100, height: 50}}
            />
          </View>

          <View
            style={[
              {
                backgroundColor: 'fff',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginVertical: -25,
              },
              this.state.size,
            ]}>
            <Image
              source={require('../Assets/jammer.png')}
              style={{width: 100, height: 50}}
            />
            <Image
              source={require('../Assets/vs.png')}
              style={{width: 50, height: 40}}
            />
            <Image
              source={require('../Assets/splash.png')}
              style={{width: 100, height: 50}}
            />
          </View>
        </Carousel>
      </View>
    );
  }
}
