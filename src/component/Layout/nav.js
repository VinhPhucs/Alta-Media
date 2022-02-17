import '../../assets/css/nav.css'

function nav() {
  return (  
      <div className='nav-bar'>    
        <div className='logo'>
              <img src='./img/insight-05 1.png'></img>
        </div>
        <div className='search'>
           <input  style={{width:'100%',background: '#EDE6E6',borderRadius:'3px',height:'30px',border:'none',paddingLeft:'20px'}} type='text' name='search' placeholder='Search'></input> 
              <div className='search-icon'>
                <img  src='./img/fi_search.png'></img> 
              </div>
        </div>       
          <div className='bell'><p><img src='./img/fi_bell.png'></img></p></div>
          <div className='mail'><img src='./img/fi_mail.png'></img></div>
          <div className='user'><p><img src='./img/Frame-54.png'></img></p></div>        
      </div>  
  )
}

export default nav;