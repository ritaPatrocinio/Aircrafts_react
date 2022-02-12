import React, {PureComponent} from 'react';

class Dropdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen}
    );        
}
  
  render() {
    const {isOpen} = this.state;
    const {label} = this.props;

    return (
      <div className="dropdown">
        <button type="button" className="dropdown-button" id="dropdownButton" aria-haspopup="true" aria-expanded={isOpen} onClick={this.toggle}>{label}</button>
        {isOpen ? 
        <ul className={`${isOpen ? 'dropdown-open' : 'dropdown-menu'}`}  aria-labelledby="dropdownButton" role="menu" >
          {this.props.children}
        </ul> : ''}
      </div>
    );
  }
}

class DropdownItem extends PureComponent {
  render() {
    return (
      <a href={this.props.href} style={{display:' block'}}>{this.props.label}</a>
    )
  }
}

export default class ExampleNav extends PureComponent {
  render() {
    return (
      <nav>
        <Dropdown label="More items">
          <DropdownItem href="/page1" label='Page 1' ></DropdownItem>
          <DropdownItem href="/page2" label='Page 2' ></DropdownItem>
          <DropdownItem href="/page3" label='Page 3'></DropdownItem>
          <DropdownItem href="/page4" label='Page 4'></DropdownItem>
        </Dropdown>
        <Dropdown label="Even more items">
          <DropdownItem href="/page5" label='Page 5'></DropdownItem>
          <DropdownItem href="/page6" label='Page 6'></DropdownItem>
        </Dropdown>
      </nav>
    );
  }
}



//If the drop-down is synced with the server we would make an API request to the server on load to get the content from the
//server and render/populate the drop-down accordingly, to do that we would save the request's response in a state. So yes, 
// the state should be read again from the server every time the page loads. The state open/closed should not be saved in the server, it 
//should simply be defaulted to false (to show the closed dropdown on page load) and changed in the browser as it is now.

//If we wanted to pass children (like this example) OR a Promise that resolves to an array of items, in the component Dropdown 
//we would map through the array and return for each item the component DropdownItem
// with href and label passed in as props. In the case of the Promise that resolves to an array we can save the response in a state in ExampleNav
// and then pass this state as props to Dropdown to be mapped.

