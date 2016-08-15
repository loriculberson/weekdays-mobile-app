 //import code we need
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');

var DAYS = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
  'Thursday', 'Friday', 'Saturday'
]

 // Create a react component
var Weekdays = React.createClass({
  render: function(){
    return <View style={styles.container}>
      <Text>
        Days of the Week:
      </Text>
      {this.days()}
    </View>
  },
  days: function() {
    return DAYS.map(function(day){
      return <DayItem day={day} />
    });
  }
});

 //Style the React Component
 var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //Moves up and down
    alignItems: 'center' //Moves left to right
  }
 });

 // Show react component on the screen
 AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
 });