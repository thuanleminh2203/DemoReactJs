/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      products: [
        {
          id: 1,
          name: 'iphone 6',
          status: true,
          price: 15000000,
          image: 'https://images-americanas.b2w.io/produtos/01/00/oferta/41964/1/41964136_1GG.jpg'
        }, {
          id: 2,
          status: true,
          name: 'iphone 7',
          price: 15000000,
          image: 'https://images-americanas.b2w.io/produtos/01/00/oferta/41964/1/41964136_1GG.jpg'
        }, {
          id: 3,
          name: 'iphone 8',
          status: true,
          price: 15000000,
          image: 'https://images-americanas.b2w.io/produtos/01/00/oferta/41964/1/41964136_1GG.jpg'
        },
        {
          id: 4,
          name: 'iphone 9',
          price: 15000000,
          status: true,
          image: 'https://images-americanas.b2w.io/produtos/01/00/oferta/41964/1/41964136_1GG.jpg'
        }
      ],
      isActive: true

    }


  }

  onSetState = () => {
    this.setState(
      {
        isActive : ! this.state.isActive
      }
    )

  }
  addtoCart = () => {
    console.log(this.refs.name.value)
  }
  render() {
    let elements = this.state.products.map((product, index) => {
      let result = '';
      if (product.status) {
        result = <tr key={product.id}>
          <td>{index}</td>
          <td>{product.name}</td>
          <td>
            <span className="label label-success">{product.price}</span>
          </td>
        </tr>

      }


      return result;
    })
    return (


      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand" >ThuanLM</a>

          </div>

        </nav>
        <div className="container">
          <table className="table table-hover"  >
            <thead>
              <tr>
                <th>STT</th>
                <th>Ten san pham</th>
                <th>Gia</th>
              </tr>
            </thead>
            <tbody>
                {elements}
            </tbody>
          </table>
        </div>


        <br />
        <br />
        <br />
        <br />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title">Them san pham</h3>
            </div>

            <div className="panel-body">
              <div className="form-group">
                <label >Product name</label>
                <input type="text" className="form-control" ref='name' />
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.addtoCart}>Save</button>
            </div>

          </div>

        </div>
        
        <button type="button" className="btn btn-danger" onClick={this.onSetState}>
            Active : {this.state.isActive === true ? 'true' : 'false'}
        </button>
        
      </div>

    );
  }
}

export default App;
