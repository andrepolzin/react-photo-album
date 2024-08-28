import axios from "axios";
import { PhotoList } from "./components/PhotoList";
import { SearchBar } from "./components/SearchBar";

import { useState, useEffect } from "react";

export const App = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [photos, setPhotos] = useState([]);
  const [activateSearch, setActivateSearch] = useState(false);

    const fetchData = async ({ query, category }: any) => {
      const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

      // If query or category was modified, get specific photos
      if (query || category) {
        let searchQuery = query;

        if (query && category) {
          searchQuery = `${query} ${category}`;
        } else if (category) {
          searchQuery = category;
        }

        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              client_id: apiKey,
              query: searchQuery,
            },
          }
        );
    
        setPhotos(response.data.results);
        return;
       
      }

      // If neither query nor category were modified, get random photos
      const response = await axios.get(
        "https://api.unsplash.com/photos/random",
        {
          params: {
            client_id: apiKey,
            count: 20,
          },
        }
      );

      setPhotos(response.data);
    };


    useEffect(() => {
      fetchData({query, category});
    }, []);
    

    useEffect(() => {

      if (activateSearch) {
        fetchData({query, category})
        setActivateSearch(false)
      }

    }, [activateSearch]);


    return (
      <div className="p-10 bg-[#4f5f76] min-h-screen">
        <SearchBar
          setQuery={setQuery}
          setCategory={setCategory}
          setActivateSearch={setActivateSearch}
        />
        <PhotoList photos={photos} />
      </div>
    );
};
