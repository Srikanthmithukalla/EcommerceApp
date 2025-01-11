// import React from 'react'
// import './Breadcrum.css'
// import arrow_icon from '../Assets/breadcrum_arrow.png'

// // const Breadcrum = (props) => {
//   const Breadcrum = ({ product = {} }) => {
//     const category = product.category || 'defaultCategory'; // Use a default value if category is undefined
//     // Rest of your component logic
//     console.log(category)
//     return (
//           <div className='breadcrum'>
//               HOME <img src={arrow_icon} alt='' /> SHOP <img src={arrow_icon} alt='' /> {product.category} <img src={arrow_icon} alt='' /> {product.name}
//           </div>
//         )
// };
//     // const {product} = props;
//     // if (!product) {
//     //     return null;
//     //   }
    
//     //   const category = product.category;
//     // if (product && product.category) {
//     //   } 
//     // else {
//       // }
// //   return (
// //     <div className='breadcrum'>
// //         HOME <img src={arrow_icon} alt='' /> SHOP <img src={arrow_icon} alt='' /> {product.category} <img src={arrow_icon} alt='' /> {product.name}
// //     </div>
// //   )
// // }

// export default Breadcrum


import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = ( {product} ) => {
    // Check if product is defined and has the necessary properties
    // const {category} = product.category && product.category ? product.category : 'mens';
    // const {ame} = product.name && product.name ? product.name : 'regularslimfit';

    const { category = 'Default Category', name = 'Default Name' } = product || {};

    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt='arrow' /> 
            SHOP <img src={arrow_icon} alt='arrow' /> 
            {category} <img src={arrow_icon} alt='arrow' /> 
            {name}
        </div>
    );
};

export default Breadcrum;