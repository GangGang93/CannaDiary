import React from 'react';
import image from './img/straintype.jpg';
import { animateScroll as scroll } from 'react-scroll';

class strainSearch extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

componentDidMount(){
    scroll.scrollToTop();
  }

    render() {
        return (
          <div style={{ marginTop: "5%" }} className="container text-center">
            <h2 className="aboutus-title">Strain Search</h2>

            <form onSubmit={this.submitForm}>
              <div className="form-group">
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handelSearchKeywords}
                  value={this.state.searchKeywords}
                  placeholder="Strain Search and Press Enter"
                />
                <br />
                <div style={{ margin: "auto" }} className="loadmore">
                  Search
                </div>
                <br />
              </div>
              <img
                style={{ width: "60%", height: "60%" }}
                src={image}
                alt="image"
              />
            </form>
          </div>
        );
    }
}


export default strainSearch;