import SearchBar from '../../components/searchBar/SearchBar'
import './listPage.scss';
import Filter from '../../components/filter/filter';
import Map from '../../components/map/Map';
import Card from '../../components/card/card';
import { listData } from '../../lib/dummydata';

function ListPage() {
    const data = listData;
    return (
        <div className="listPage">
            <div className="head">
                <div className="headImg">
                    <img src="/headImg.png" alt="" />
                </div>
                <SearchBar />
            </div>
            <div className="listContent">
                <div className="mapContainer">
                    <Map items = {data}/>
                    <Filter />
                    {/* <div className="wrapper">
                    </div> */}
                </div>
                <div className="listContainer">
                    {data.map(item  => (
                        <Card key = {item.id} item={item}/>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default ListPage