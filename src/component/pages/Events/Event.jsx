import React from 'react'
import ReactImg from '../../assets/photo-1594122230689-45899d9e6f69.jpg'
import './event.css'

const TeamData=[
  {
    id: 1,
    name: 'TES',
    Desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta repellat iusto, totam blanditiis beatae corrupti, voluptate impedit veritatis, voluptatum dolore voluptatem placeat consequuntur perferendis architecto ad? Adipisci aut neque deserunt magnam.',
  },
  {
    id: 2,
    name: 'E-Summit',
    Desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta repellat iusto, totam blanditiis beatae corrupti, voluptate impedit veritatis, voluptatum dolore voluptatem placeat consequuntur perferendis architecto ad? Adipisci aut neque deserunt magnam.',
  },
  {
    id: 3,
    name: 'Indian Navy Visit',
    Desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta repellat iusto, totam blanditiis beatae corrupti, voluptate impedit veritatis, voluptatum dolore voluptatem placeat consequuntur perferendis architecto ad? Adipisci aut neque deserunt magnam.',
  },
]

function Event() {
  return (
    <div className='container max-width'>
        <div className='heading'>
          <h1>Insights</h1>
        </div>
      

      <div className='card_container'>
        {
          TeamData.map((item)=>{
            return(
              <div className='card'>
                  <div className='cardBody'>
                    <h2 className='cardTitle'>{item.name}</h2>
                    <p className='classText'>
                      {item.Desc}
                    </p>
                  </div>
              </div>
            )
          }
          )

        }
    {/* <div className='card'>
    <div className='cardImg'>
  <img src={ReactImg} />
  <div className='cardBody'>
    <h2 className='cardTitle'>Card title</h2>
    <p className='classText'>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <Button href="#">Go somewhere</Button>
  </div>
</div>
    </div> */}
    
   </div> 
    </div>
  )
}

export default Event
