// // import { useState } from 'react'
// // import heroImg from './assets/hero.png'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <section id="center">
// //         <div className="hero">
// //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// //           <img src={reactLogo} className="framework" alt="React logo" />
// //           <img src={viteLogo} className="vite" alt="Vite logo" />
// //         </div>
// //         <div>
// //           <h1>Get started</h1>
// //           <p>
// //             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
// //           </p>
// //         </div>
// //         <button
// //           type="button"
// //           className="counter"
// //           onClick={() => setCount((count) => count + 1)}
// //         >
// //           Count is {count}
// //         </button>
// //       </section>

// //       <div className="ticks"></div>

// //       <section id="next-steps">
// //         <div id="docs">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#documentation-icon"></use>
// //           </svg>
// //           <h2>Documentation</h2>
// //           <p>Your questions, answered</p>
// //           <ul>
// //             <li>
// //               <a href="https://vite.dev/" target="_blank">
// //                 <img className="logo" src={viteLogo} alt="" />
// //                 Explore Vite
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://react.dev/" target="_blank">
// //                 <img className="button-icon" src={reactLogo} alt="" />
// //                 Learn more
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //         <div id="social">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#social-icon"></use>
// //           </svg>
// //           <h2>Connect with us</h2>
// //           <p>Join the Vite community</p>
// //           <ul>
// //             <li>
// //               <a href="https://github.com/vitejs/vite" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#github-icon"></use>
// //                 </svg>
// //                 GitHub
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://chat.vite.dev/" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#discord-icon"></use>
// //                 </svg>
// //                 Discord
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://x.com/vite_js" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#x-icon"></use>
// //                 </svg>
// //                 X.com
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#bluesky-icon"></use>
// //                 </svg>
// //                 Bluesky
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //       </section>

// //       <div className="ticks"></div>
// //       <section id="spacer"></section>
// //     </>
// //   )
// // }


// import React,{useState,useEffect} from 'react';
// import './App.css';
//  import heroImage from './assets/hero.png';
// // import Buttton from './components/index.jsx'; 

// const App = () => {
//   // const [counter, setCounter] = useState(0);
//   const [name, setData] = useState([]);
  
//    useEffect(()=>{
//       const fetchData=async()=>{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users');
//         const data=await response.json();
//         setData(data);
//       }
//       fetchData();
//     },[])
//     console.log(name,"data")
  

//      return ( 
//     <div>
//       <h1 className="text-yellow">Student Details </h1>

//       {/* <p>Welcome to your React application.</p>

//       <label className="name">Enter your name:</label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         placeholder="Type your name"
//       />

//       <br />
//       <br />
//       <label >Counter: {counter}</label>
//       <Buttton tname={"Increment Counter"} onclick={() => setCounter(counter + 1)}
//          customStyles={{
//           customButton:'tname'
//         }}/>
//       <Buttton tname={"Decrement Counter"} onclick={() => setCounter(counter - 1)}
//          customStyles={{
//           customButton:'tname'
//         }}/>
//       <Buttton tname={"Hello, React!"} onclick={() => alert("button is clicked ")} 
//         customStyles={{
//           customButton:'tname'
//         }}


//         />


//       <br />
//       <br />

//       <img
//         src={heroImage}
//         alt="My hero image"
//         width="250"
//       /> */}
//       {name.map((item,key)=>{
//         return(
//           <div className="user-card" key={key}>
//   <img
//     src={heroImage}
//     alt="My hero image"
//     width="250"
//   />

//   <div className="user-details">
//     <h1>{item.name}</h1>
//     <p>Email: {item.email}</p>
//     <p>Phone: {item.phone}</p>
//     <p>Address: {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}</p>
//   </div>
// </div>
//         )
//       })}
      
//     </div>
//   );
// }
// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [target,setTarget]=useState('')
 const [form, setForm] = useState({
  firstName: "", email: "", age: "",
});
const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((prev) => ({ ...prev, [name]: value }));
};
const display=(e)=>{
        e.preventDefault();
        setSubmit(true);
    }
    const[isdisplay,setSubmit]=useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://dummyjson.com/products?limit=15'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        console.log(response.status);
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
        
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <h2 className="status">Loading products...</h2>;
    
  }

  if (error) {
    return <h2 className="status">{error}</h2>;
  }
  return (
    <div className="app">
  {/* <input value={target} onChange={(e)=>setTarget(e.target.value)}></input>
      <label>{target}</label> */}
     

 
<input name="firstName" value={form.firstName}
       onChange={handleChange} />
<input name="email" value={form.email}
       onChange={handleChange} />
    
<input name="age" value={form.age} onChange={handleChange}></input>
<button onClick={display}>Submit</button>
 {isdisplay && (
                <>
          <h3>Submitted Details</h3>
          <label>Name: {form.firstName}</label>
          <br />
          <label>Email: {form.email}</label>
          <br />
          <label>Age: {form.age}</label>
        </>
            )}
  



  <h1 className="heading">Product Store</h1>
      <p className="subtitle">Explore our products</p>
      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="product-image"
            />

            <div className="product-info">
              <h2>{item.title}</h2>

              <p className="price">
                ${item.price}
              </p>

              <p className="description">
                {item.description}
              </p>

              <button
                className="details-button"
                onClick={() =>
                  setSelectedProduct(
                    selectedProduct?.id === item.id ? null : item
                  )
                }
              >
                {selectedProduct?.id === item.id
                  ? 'Hide Details'
                  : 'View Details'}
              </button>

              {selectedProduct?.id === item.id && (
                <div className="extra-details">
                  <p><strong>Category:</strong> {item.category}</p>
                  <p><strong>Rating:</strong> {item.rating} / 5</p>
                  <p><strong>Stock:</strong> {item.stock}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;



// import { useState} from "react";

// import Title from "./components/Title.jsx";

// function App() {

// const [count, setCount] = useState(0);

// return (

// <>

// <Title count={count} />

// <button onClick={() => setCount (count + 1)}>

// Click me</button>

// </>
// );
// }
// export default App;
