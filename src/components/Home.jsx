import React, { useEffect } from 'react'

function Home() {

    useEffect(()=>{
        const data = { category:"movies",language:"kannada",genre:"all",sort:"voting" };

        fetch('https://hoblist.com/api/movieList', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },[])

  return (
    <div>
     Home 
    </div>
  )
}

export default Home;
