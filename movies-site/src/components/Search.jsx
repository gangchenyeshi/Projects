import React, {useState} from "react";

const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=46a12a0dcce2af5d37ce67d499098b1f&query=";

const Search = () => {
    const [searchMovie, setSearchMovie] = useState("");

    
    return (

        <div className="container-fluid">
            <div className="row d-flex justify-content-end">
                <div className="col-6 col-md-4 col-lg-3">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Search;