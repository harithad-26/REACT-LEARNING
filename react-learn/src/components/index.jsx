import React from 'react';
const Buttton=({tname,onclick,customStyles})=>{
       const {customButton}=customStyles||{};
    return(
        
        <button className={`${customButton}`} onClick={onclick}>
          {tname}
        </button>
    )
}
export default Buttton; 