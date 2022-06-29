import React from 'react'

// fetches data from the API



function FetchData() {
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
          .then(res => res.json())
          .then(data => console.log(data));
    
      }, []);
      return(
        <div>
            <h1>FetchData</h1>
        </div>
    )
}

function DisplayData(){
    return(
        <div>
            <h1>DisplayData</h1>
        </div>
    )
}

export { FetchData, DisplayData };