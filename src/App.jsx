// import Parent from "./Topic-2 props/Parent";
// import Parents from "./Topic-3 immutable props/Parents";

// const App = () => {
//   return (
//     <div>
//       <Parent />
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   return (
//     <div>
//       <Parentsarents />
//     </div>
//   );
// };
// export default App;

// import Parent from "./Topic-4 map function/Parent";

// const App = () => {
//   return (
//     <div className="app-component">
//       <Parent />
//     </div>
//   );
// };

// export default App;

// import Parent from "./Topic -4 Childern props/Parent";
// const App = () => {
//   return (
//     <div className="app-component">
//       <Parent />
//     </div>
//   );
// };

// export default App;

// import Toggle from "./Topic-9 conditional Rendering-2/Toggle"
// import Counter from "./Topic-10 Lazy Initialization/Counter"

// const App = () => {

//   return (
//     <div id="app">
//         {/* <Toggle/> */}
//       <Counter/>
//     </div>
//   );
// };

// export default App;








// import Toggle from "./Topic -11 useEffect Hook/Toggle";

// const App = () => {
//   return (
//     <div id="app">
//       {/* <Toggle/> */}
//       <Toggle />
//     </div>
//   );
// };

// export default App;


// import Shop from "./Topic -12 useEffect Realworld/Shop"
// const App=()=>{
//   return (
//     <div id="app">
//      <Shop/>
//     </div>
//   )
// };

// export default Shop;


import React from 'react'
import Header from './Topic-14 React Routing/Header'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <div id="app">
      <Header/>

      <Outlet />
    </div>
  )
}

export default App


