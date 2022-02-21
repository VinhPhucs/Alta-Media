import '../../assets/css/round.css';

function circle() {
  return (
    <div className='frame-45'>
          <div className='frame-44'>
            <i></i><p>Vé chưa sử dụng</p>
          </div>
          <div className='frame-43'>
            <i></i><p>Vé đã sử dụng</p>
          </div>
          <div className='frame-7'>
              <p>Gói sự kiện</p>
              <div className='chart-7'>
                <div className='elip3'>
                  <img src='./img/Ellipse 2.png'></img>
                  <p>30256</p>
                </div>
                <div className='elip2'>
                <img src='./img/Ellipse 3.png'></img>
                <p>28302</p>
                </div>
              </div>
          </div>
          <div className='frame-53'>
                <p>Gói gia đình</p>
                    <div className='chart-53'>
                      <div className='elip3-1'>
                        <img src='./img/Ellipse 2.1.png'></img>
                        <p>56024</p>
                      </div>
                      <div className='elip2-1'>
                      <img src='./img/Ellipse 3.1.png'></img>
                      <p>13568</p>
                      </div>
                    </div>
          </div>

          {/* <div className='frame-30'>
            <p>Tháng 4,2021</p><i><img src='./img/fi_calendar.png'></img></i>
          </div>
          <div className='frame-30-1'>
            <p>Tháng 4,2021</p><i><img src='./img/fi_calendar.png'></img></i>
          </div> */}
        </div>
  )
}

export default circle;