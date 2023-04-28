import react ,{useState}from "react";
import Card from "./Card";
import axios from "axios";
import {IoIosSearch} from "react-icons/io";
// bu sayfada arama  islemini yaptigimiz input alani var burdan aldigimiz datalari bookData adiyla Card componentine gonderiyoruz.
const Search=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
                .then(res=>setData(res.data.items))
                .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="header">

                <div className="row2">
                    <h2>Book Search</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                               value={search}
                               onChange={e => setSearch(e.target.value)}
                               onKeyDown={searchBook}
                               onFocus={e => e.target.placeholder = ''}
                        />

                        <button className="icon">
                            <IoIosSearch/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="container">
                {
                    <Card book={bookData}/>
                }
            </div>
        </>
    )
}
export default Search;