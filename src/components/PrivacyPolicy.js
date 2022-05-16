import React, { Component } from "react";

class PrivacyPolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      MyPrivacy: [],
    };
  }
  componentDidMount() {
    const apiUrl = "http://admin.heapdo.com/api/privacypolicy";
    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            MyPrivacy: result.item,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  render() {
    const { error, MyPrivacy } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
    return (
      <section className="privacy-policy">
        <div className="content">
          <div className="container">
          {MyPrivacy.map((MyPrivacyData, index) => (
            <div className="row" key={index}>
              <div className="col-6">
                <div className="terms-content">
                  <img src={MyPrivacyData.image} />
                </div>
              </div>
              <div className="col-6">
                <div className="terms-content">
                  <div className="terms-text">
                   {MyPrivacyData.description}
                  </div>
                 
                  <div className="col-6">
                    <div className="text-end btn-end">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))} 
          </div>
        </div>
      </section>
    );
    }
  }
}
export default PrivacyPolicy;
