import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'

const Main = () => {
    const [search, setSearch] = useState('');
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <main>
            <div className="container">

                <div className="searcher">
                    <div className="logo">
                        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
                    </div>
                    <form>
                        <div className="search-input">
                            <div className="icon icon-search">
                                <AiOutlineSearch />
                            </div>
                            <input type="text" name="search" value={search} onChange={handleChange} />
                            {
                                search && (
                                    <div className="icon remove-btn" onClick={() => setSearch('')}>
                                        <CgClose />
                                    </div>
                                )
                            }
                        </div>
                        <div className="btn-wrapper">
                            <button className="btn">Google Search</button>
                            <button className="btn">I'm Feeling Lucky</button>
                        </div>
                    </form>
                    <div className="searcher__links">
                        <ul className="searcher__links__list">
                            <li>Google offered in:</li>
                            <li><a href="https://www.google.com/">español</a></li>
                            <li><a href="https://www.google.com/">galego</a></li>
                            <li><a href="https://www.google.com/">català</a></li>
                            <li><a href="https://www.google.com/">english</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
