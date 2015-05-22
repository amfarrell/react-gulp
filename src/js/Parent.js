multiply = require('./Multiply')
var Parent = React.createClass({
  render: function(){
    return (
      <div>
        <div> This is the parent {multiply.multiply(2,4)}. </div>
        <Child name="child"/>
      </div>
    )
  }
});
