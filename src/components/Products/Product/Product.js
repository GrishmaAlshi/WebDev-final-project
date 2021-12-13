import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import ProductList from "./ProductList";
import { Table } from "react-bootstrap";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  border-radius: 50%;
  z-index: 1;
`;

const Details = styled.div`
  justify-content: center;
  z-index: 2;
  overflow: hidden;
  padding-top: 270px;
  margin-left: -100px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

// const Product = ({ item }) => {

//     return (

//         <Container>
//             {/*<Circle />*/}
//             <Image src="data:image/jpeg;base64,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" />
//             <Details className="row">{item.model_name}</Details>

//             <Info>
//                 <Icon>
//                     <ShoppingCartOutlined />
//                 </Icon>
//                 <Icon>
//                     <SearchOutlined />
//                 </Icon>
//                 <Icon>
//                     <FavoriteBorderOutlined />
//                 </Icon>
//             </Info>
//         </Container>
//     );
// };

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
    this.getUserOrders();
  }

  getUserOrders() {
    const userEmail = localStorage.getItem("email");
    console.log("USERMAL", userEmail);
    fetch(`http://localhost:4000/api/orders/${userEmail}`)
      .then((response) => response.json())
      .then((orders) => {
        this.setState({ orders: orders });
      });
  }

  render() {
    return (
      <Table responsive variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Order Id</th>
            <th>Date of Order</th>
            <th>Items</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.orders.map((order) => {
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>;
          })}
        </tbody>
      </Table>
    );
  }
}

export default Product;
