import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Heading extends Component {
  render() {
    return (
      <View style={{ marginTop: 80, marginLeft: 130 }}>
        <Text>DJ Sound Mixer App</Text>
        <View style={{ marginTop: 0, marginLeft: 25}}>
          <Text>Project 54</Text>
        </View>
      </View>
    );
  }
}

class Button1 extends Component {
  displayAlert1 = () => {
    alert('Playing Sound 1!!');
  };
  render() {
    return (
      <View style={{ marginTop: 35, marginLeft: 85, height: 100, width: 200 }}>
        <Button
          title="Sound 1"
          color={this.props.color}
          onPress={this.displayAlert1}
        />
      </View>
    );
  }
}

class Button2 extends Component {
  displayAlert2 = () => {
    alert('Playing Sound 2!!');
  };
  render() {
    return (
      <View style={{ marginLeft: 85, height: 100, width: 200 }}>
        <Button
          title="Sound 2"
          color={this.props.color}
          onPress={this.displayAlert2}
        />
      </View>
    );
  }
}

class Button3 extends Component {
  displayAlert3 = () => {
    alert('Playing Sound 3!!');
  };
  render() {
    return (
      <View style={{ marginLeft: 85, height: 100, width: 200 }}>
        <Button
          title="Sound 3"
          color={this.props.color}
          onPress={this.displayAlert3}
        />
      </View>
    );
  }
}

class Button4 extends Component {
  displayAlert4 = () => {
    alert('Playing Sound 4!!');
  };
  render() {
    return (
      <View style={{ marginLeft: 85, height: 100, width: 200 }}>
        <Button
          title="Sound 4"
          color={this.props.color}
          onPress={this.displayAlert4}
        />
      </View>
    );
  }
}

class Button5 extends Component {
  displayAlert5 = () => {
    alert('Playing Sound 5!!');
  };
  render() {
    return (
      <View style={{ marginLeft: 85, height: 100, width: 200 }}>
        <Button
          title="Sound 5"
          color={this.props.color}
          onPress={this.displayAlert5}
        />
      </View>
    );
  }
}

class StopMusic extends Component {
  displayAlert6 = () => {
    alert('Stopping Music!!');
  };
  render() {
    return (
      <View style={{ marginTop: 80, marginLeft: 85, height: 100, width: 200 }}>
        <Button
          title="Stop Music"
          color={this.props.color}
          onPress={this.displayAlert6}
        />
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 0 }}>
        <Heading />
        <Button1 color="red" />
        <Button2 color="blue" />
        <Button3 color="cyan" />
        <Button4 color="purple" />
        <Button5 color="yellow" />
        <StopMusic color="black" />
      </View>
    );
  }
}
