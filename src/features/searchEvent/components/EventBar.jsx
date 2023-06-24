export default function EventBar({ event, setSelected, placeLoad }) {



    return (
        <div className="navbar bg-base-100  flex justify-stretch">
            <div className="navbar-start">
            </div>
            <div className="navbar-center hidden lg:flex">
                <select className="select select-bordered w-full max-w-xs mx-10">
                    <option disabled selected>Location?</option>
                    {placeLoad?.map((el, idx) => (<option key={idx}>{el.placeProvince}</option>))}
                </select>
                <ul className="menu menu-horizontal px-1">
                    {event.map((el, idx) => (
                        <li key={idx} >
                            <a onClick={() => {
                                console.log(el.id)
                                return setSelected(el.id)
                            }}>{el.emoji}&nbsp;{el.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="menu menu-horizontal px-1 ">
                <li tabIndex={0}>
                    <details>
                        <summary className="bg-success">Nearby</summary>
                        <ul className="p-2">
                            <li>
                                <a>10km</a>
                            </li>
                            <li>
                                <a>30km</a>
                            </li>
                        </ul>
                    </details>
                </li>
            </div>
            <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search… title or place name" className="input input-bordered w-[300px]" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <form autoComplete="off" action="/action_page.php">
                <div className="autocomplete" style={{ width: 300 }}>
                    <input id="myInput" type="text" name="myCountry" placeholder="Country" />
                </div>
                <input type="submit" />
            </form>
            <div className="navbar-end">
            </div>
        </div>
    );
}
