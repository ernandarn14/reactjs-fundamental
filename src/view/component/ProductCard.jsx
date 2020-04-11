import React from "react";

// const ProductCard = (props) => {
//   const { productData } = props;
//   const { nama, harga, desc, discount, stock } = productData;
//   const renderData = () => {
//     if (stock) {
//       return (
//         <>
//           <h3>Nama: {nama}</h3>
//           <h4>Harga: Rp.{harga}</h4>
//           {discount > 0 ? (
//             <h4>
//               Disc: {discount}% menjadi {harga - (harga * discount) / 100}
//             </h4>
//           ) : null}
//           <p>Desc: {desc}</p>
//         </>
//       );
//     } else {
//       return <h4>Stok Kosong</h4>;
//     }
//   };
//   return (
//     <div
//       style={{
//         width: "240px",
//         padding: "8px",
//         border: "1px solid black",
//         borderRadius: "7px",
//       }}
//     >{renderData()}</div>
//   );
// };

class ProductCard extends React.Component{
  render(){
    const { productData } = this.props
  const { nama, harga, desc, discount, stock } = productData
    const renderData = () => {
    if (stock) {
      return (
        <>
          <h3>Nama: {nama}</h3>
          <h4>Harga: Rp.{harga}</h4>
          {discount > 0 ? (
            <h4>
              Disc: {discount}% menjadi {harga - (harga * discount) / 100}
            </h4>
          ) : null}
          <p>Desc: {desc}</p>
        </>
      );
    } else {
      return <h4>Stok Kosong</h4>;
    }
  };
    return (
      <div
        style={{
          width: "240px",
          padding: "8px",
          border: "1px solid black",
          borderRadius: "7px",
        }}
      >{renderData()}</div>
    );
  }
}

export default ProductCard;
