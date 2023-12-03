"use client";

import { getPost, getSigleUserDetail } from "@/Api/firebase/page";
import { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
function Feeds() {
  const [feeds, setFeeds] = useState("");
  console.log(feeds)
  const [allUsers , setAllUsers] = useState("")
  useEffect(() => {
    getFeeds();
  
  }, []);

  async function getFeeds() {
    const res = await getPost();
    setFeeds(res);
  }


 

  if (!feeds) {
    return <h1>Loading</h1>;
  }

  return (
    <div className=" relative  top-28 z-30 w-[62%]">
      {feeds.map((item, index) => {
        return (
          <>
            <div>
              <div className="flex items-center space-x-4 py-2">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/405857940_3328927547250822_2496378857394822956_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGrpAppzdVAV5EK7-GV47ulIL8-6ZN6J_Igvz7pk3on8lFIhWOszmHl08KZlH9ArhtmjN4xpkksT8FCg7_1f14S&_nc_ohc=HuOeklSivMUAX90_RFt&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfB6tsFmRjtugfW-3PtFMj3YWAqwhzsUkT308J3xYHI3zw&oe=65717ECE"
                    alt="img not found"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {item.profileName}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    demo user email
                  </p>
                </div>
              </div>

              <div>
                <p className="indent-5">{item.message}</p>
              </div>
              <div className="py-2">
                <img src={item.feedImage} />
              </div>
              <div className="flex bg-blue-400 justify-around">
                <button className="flex items-center py-2 space-x-3">
                  <AiFillLike /> like
                </button>
                <button className="flex items-center py-2 space-x-3">
                  <FaCommentAlt /> Comments
                </button>
                <button className="flex items-center py-2 space-x-3">
                  <FaShare /> Share
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Feeds;
