'use strict';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h1
          className="text-center">
          Bill Splitter
        </h1>
      </div>
      
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#index-container');
ReactDOM.render(<Index/>, dom_container);