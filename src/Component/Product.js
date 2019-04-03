import React, { Component } from 'react';


class Product extends Component {
  addToCart = () =>{
    alert(this.props.children + '-'+ this.props.price)
  }
  render() {
    return (


      <div>

        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <div className="thumbnail">
            <img alt="iphone 6" src={this.props.image} />
           
              <div className="caption">
              <h3>{this.props.children}</h3>
              <p>{this.props.price}</p>
              <p>
                <a href ="go"className="btn btn-primary" onClick={this.addToCart}>Mua san pham</a>
               
              </p>
              
            </div>

          </div>


        </div>
      </div>


    );
  }
}

export default Product;
