import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import hogs from "../porkers_data";

function App() {
	const [clicked, setClicked] = useState(false);

	const filteredHogs = hogs.filter((hog) => {
		if(clicked === true) {
			return true;
		}else if(hog.greased === true){
			return true;
		}else {
			return false;
		}
	})
	function handleClick(){
		!!clicked ? setClicked(false) : setClicked(true);
	}	


	return (
		<div className="App">
			<Nav />
			<button onClick={handleClick}>Click me!</button>
			<HogContainer hogs = {filteredHogs}/>
		</div>
	);
}

export default App;
