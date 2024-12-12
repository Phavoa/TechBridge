// import axios from "axios"
import { useEffect, useState } from "react"



const App = () => {
  const [catFacts, setCatFact] = useState([])
  const [isButtonClicked, setIsButtonClicked] = useState(false)



  const handleClicks = () => {
    setIsButtonClicked(!isButtonClicked)
  }

  useEffect(() => {
   if(isButtonClicked) {
    const getCatFacts = async () => {
      const response = await fetch("https://catfact.ninja/facts");
      const data = await response.json();
      console.log(data.data)

      setCatFact(data.data)
    }


    getCatFacts()
   }
  }, [isButtonClicked])

  console.log(catFacts)

  return (
    <div style={{display: "flex", justifyContent: "center", width: "1000px", alignItems: "center", gap: "20px"}}>
      <h1>Fun cat facts</h1>
      <button onClick={handleClicks}>Click me daddy</button>
      {
        catFacts.length > 0 ? <div>
          {
            catFacts.map((catFact, index) => (
              <div key={index}>
                {catFact.fact}
                {/* {catFact.length} */}
              </div>
            ))
          }
        </div> : "No cat fact daddy" 
      }
    </div>
  )
}

export default App


























// import { useEffect, useState } from "react";

// const App = () => {
//   const [catFact, setCatfact] = useState([]);
//   const [goAhead, setGoAhead] = useState(false);

//   const handleClick = () => {
//     setGoAhead(true);
//   };

//   useEffect(() => {
//     if (goAhead) {
//       const getCatafact = async () => {
//         const response = await fetch("https://catfact.ninja/facts");

//         const data = await response.json();

//         console.log(data.data);
//         setCatfact(data.data);
//       };

//       getCatafact();
//     }
//   }, [goAhead]);

//   return (
//     <div style={{ fontSize: "20px" }}>
//       Cat Facts
//       {catFact.map((fact, index) => (
//         <div key={index}>
//           <p>{fact.fact}</p>
//         </div>
//       ))}
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// };

// export default App;




