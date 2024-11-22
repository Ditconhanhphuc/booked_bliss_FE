import './homePage.scss';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/searchBar/SearchBar';
import Card from '../../components/card/card';
import { listData } from '../../lib/dummydata';
import { useContext } from 'react';
import { AuthContext } from '../../components/context/AuthContext';

function HomePage() {

  const {currentUser} = useContext(AuthContext);

  console.log(currentUser);

  const data = listData;
  return (
    <div className='homePage'>
      <div className="homeImg">
        <img src="/homePage.png" alt="" />
      </div>
      <div className="head">
        <div className="headText">
          <h1>YOUR HOME WE CARE</h1>
          <span>FIND YOUR HOUSE THAT SUITS YOU</span>
          <p>Want to find a home? We ready to help you find one</p>
        </div>
        <SearchBar />
      </div>
      <div className="recentHome">
        <div className="text">
          <h3>Our Recent Homes</h3>
          <span>
            <Link to={`/list`}>Explore All</Link>
          </span>
        </div>
        <div className="homeItem">
          {data.slice(0, 3).map(item => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="whatWeDo">
        <div className="wwdcontent">
          <h3>What We Do?</h3>
          <div className="action">
            <div className="rent">
              <img src="/rent.png" alt="" />
            </div>
            <div className="sales">
              <img src="/sale.png" alt="" />
            </div>
          </div>
          <span>
            <Link to={`/list`}>Discover All</Link>
          </span>
        </div>
      </div>
      <div className="peopleSay">
        <h3>What People Say About Us?</h3>
        <div className="peopleItems">
          <div className="peopleItem">
            <div className="peopleItemImg">
              <img src="/user1.png" alt="" />
            </div>
            <div className="peopleItemText">
              <div className="textTitle">
                <h3>JONHNAS J.D</h3>
              </div>
              <div className="textContent">
                <p>The interface is clean and easy to use. I found my dream apartment in just a few clicks!</p>
              </div>
            </div>
          </div>
          <div className="peopleItem">
            <div className="peopleItemImg">
              <img src="/daphne.webp" alt="" />
            </div>
            <div className="peopleItemText">
              <div className="textTitle">
                <h3>Emily Davis</h3>
              </div>
              <div className="textContent">
                <p>A great platform with detailed listings. The comparison tool really helped me decide between renting and buying.</p>
              </div>
            </div>
          </div>
          <div className="peopleItem">
            <div className="peopleItemImg">
              <img src="/simon.webp" alt="" />
            </div>
            <div className="peopleItemText">
              <div className="textTitle">
                <h3>Simon Basset</h3>
              </div>
              <div className="textContent">
                <p>Fast and reliable! The property recommendations were spot on for my budget and preferences.</p>
              </div>
            </div>
          </div>
          <div className="peopleItem">
            <div className="peopleItemImg">
              <img src="/queen.jpg" alt="" />
            </div>
            <div className="peopleItemText">
              <div className="textTitle">
                <h3>Sarah Johnson</h3>
              </div>
              <div className="textContent">
                <p>I love the map integration feature. It made exploring neighborhoods so much easier!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage