import InfiniteScroll from "react-infinite-scroll-component";
import {useState} from "react";

const fetchData = async () => {

}

const items = [
    {
        "userName": "CHISTES Y REFRANES",
        "userPhotoURL": "https://firebasestorage.googleapis.com/v0/b/meins-25f6d.appspot.com/o/imagesFromPost%2F0ed09698-4f83-4d55-91a2-f45060333d12.d35de476-0b22-408b-a273-f95ca8e1df83.jpg?alt=media&token=81e67f5c-f936-48db-8b2b-f91bb9bda988",
        "description": "Esto si que es arte, una de mis mejores fotos.",
        "mediaPhotos": "https://firebasestorage.googleapis.com/v0/b/meins-25f6d.appspot.com/o/imagesFromPost%2F0ed09698-4f83-4d55-91a2-f45060333d12.d35de476-0b22-408b-a273-f95ca8e1df83.jpg?alt=media&token=81e67f5c-f936-48db-8b2b-f91bb9bda988",
    },
];

const style = {
    border: "1px solid green",
    margin: 12,
    color: "blue"
}
const Feeds = () => {
    const [dataSource, setDataSource] = useState(items);
    return (
        <div className="bg-gray-200 h-screen w-screen">
            <InfiniteScroll
                dataLength={dataSource.length} //This is important field to render the next data
                next={fetchData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                }
            >
                {dataSource.map((item, index) => {
                    return <div style={style}>this is the index #{index} and {item.userName}</div>
                })}
            </InfiniteScroll>
        </div>
    )
}

export default Feeds;