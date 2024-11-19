import Slider from '../../components/slider/Slider';
import './singlePage.scss'
import { singlePostData, userData } from '../../lib/dummydata'
import Map from '../../components/map/Map'

function SinglePage() {
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      {/* Buttons (send & save) */}
      <div className="buttons">
        <button>
          <img src="/chat.png" alt="" />
          Send a Message
        </button>
        <button>
          <img src="/save.png" alt="" />
          Save a Place
        </button>
      </div>
      <div className="features">
        {/* General */}
        <div className="featureContainer">
          <p className="title">General</p>
          <div className="feature">
            <img src="/utility.png" alt="" />
            <span>Renter is responsible</span>
          </div>
          <div className="feature">
            <img src="/pet.png" alt="" />
            <span>Pet Allowed</span>
          </div>
          <div className="feature">
            <img src="/fee.png" alt="" />
            <span>Property Fees</span>
          </div>
        </div>
        {/* Size */}
        <div className="featureContainer">
          <p className="title">Sizes</p>
          <div className="feature">
            <img src="/area.png" alt="" />
            <span>80sqft</span>
          </div>

          <div className="feature">
            <img src="/bed.png" alt="" />
            <span>2 beds</span>
          </div>

          <div className="feature">
            <img src="/bathroom.png" alt="" />
            <span>1 bathroom</span>
          </div>
        </div>
        {/* Nearby Places */}
        <div className="places">
          <p className="title">Nearby Places</p>
          <div className="place">
            <img src="/school.png" alt="" />
            <span>School</span>
            <p>250m away</p>
          </div>

          <div className="place">
            <img src="/bus.png" alt="" />
            <span>Bus Stop</span>
            <p>100m away</p>
          </div>

          <div className="place">
            <img src="/restaurant.png" alt="" />
            <span>Restaurant</span>
            <p>200m away</p>
          </div>
        </div>
      </div>
      {/* Location */}
      <div className="location">
        <p className="title">Location</p>
        <div className="mapContainer">
          <Map items={[singlePostData]} />
        </div>

      </div>
    </div>
  )
}

export default SinglePage