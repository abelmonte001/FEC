import React from 'react';

class AddToCartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: null,
      sizeId: null,
      currentStyle: null,
      onAddToBagClick: null
    };
  }

  UNSAFE_componentWillReceiveProps (props) {
    console.log('test')
    if (props.currentStyle !== null) {
      console.log(this.state.sizeId)
      this.setState({['sizeId']: props.sizeId});
      console.log(this.state.sizeId)
      this.setState({['quantity']: props.quantity});
      this.setState({['currentStyle']: props.currentStyle});
      this.setState({['onAddToBagClick']: props.onClick})
    }
  }

  // onAddToBagClick () {
  //   console.log('clicked')
  //   // var data = {
  //   //   sizeId : props.sizeId,
  //   //   quantity : props.quantity,
  //   //   currentStyle: props.currentStyle
  //   // }
  //   // console.log(data)
  // }

  render() {
    return (
      <div>
        <button onClick ={this.props.onClick}>Add to Bag!</button>
      </div>
    );
  }
}

export default AddToCartButton;