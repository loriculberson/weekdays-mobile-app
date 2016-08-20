 //import code we need
var Moment = require('moment');
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');



 // Create a react component
var Weekdays = React.createClass({
  render: function(){
    return <View style={styles.container}>
      {this.days()}
    </View>
  },
  days: function() {
    var daysItems = [];

    for(var i=1;i < 8; i++) {
      var day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }
    return daysItems;
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