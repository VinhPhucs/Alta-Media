import React from "react";
import '../../assets/css/search.css'

const Search = () => {
    return(
        <div className='search-ti'>
            <input  style={{width:'100%',background: '#EDE6E6',borderRadius:'3px',height:'35px',border:'none',paddingLeft:'20px'}} type='text' name='search' placeholder='Tìm bằng số vé'></input> 
              <div className='search-icon'>
                <img  src='./img/fi_search.png'></img> 
              </div>
        </div>
    )
}
export default React.memo(Search);