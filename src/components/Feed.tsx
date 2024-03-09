import React, {useState} from 'react';
import ShareComponent from "@/components/feed/ShareComponent.tsx";
import CardFeed from "@/components/feed/CardFeed.tsx";
import InfiniteScroll from "react-infinite-scroll-component";
import {DummyData} from "../../DummyData.tsx";

const dummyDataItems = DummyData;
const Feed: React.FC = () => {
    let currentIndex = 5;
    const [data, setData] = useState(dummyDataItems.slice(0,5));
    const [hasMore, setHasMore] = useState(true);
    const fetchData = () => {
        const extractedData = dummyDataItems.slice(currentIndex, currentIndex + 5);
        currentIndex += 5;
        if (data.length > dummyDataItems.length) {
            setHasMore(false);
        } else {
            setTimeout(() => {
                setData(data.concat(extractedData));
            },3000)
        }
    }
    return (
        <div className="min-h-screen min-w-[800px] w-[800px] p-4 overflow-hidden">
            <div className="w-full px-4">
                <ShareComponent />
            </div>
            <div className="mt-4">
                <InfiniteScroll
                    dataLength={data.length}
                    next={fetchData}
                    hasMore={hasMore}
                    loader={<h4 className="text-black font-bold text-center">Loading...</h4>}
                    endMessage={<p className="text-black font-bold text-center">Yay! You have seen it all</p>}
                >
                    {data.map((item) => {
                        return <div className="m-4"><CardFeed item={item}/></div>
                    })}
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default Feed;
