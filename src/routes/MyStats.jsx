import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import "../components/myStats.css"


const MyStats = () => {
  return (
    <div className='meraStats'>
      <Navbar />
      <HeroImg2 heading="STATS" text="GitHub Activity Overview" />

      <p className='boxx'>
        <img align="left" className='imgg' src="https://github-readme-stats.vercel.app/api?username=shashi310&show_icons=true&locale=en&theme=dark&hide_border=false&background=0D1117&stroke=0000&ring=22DD22&fire=DD2222&currStreakLabel=DDDDDD&sideLabels=DDDDDD&dates=DDDDDD" alt="shashi310" />

      <img align="center" className='imgg' style={{
        
        marginTop:"18px",
        
      }} src="https://github-readme-stats.vercel.app/api/top-langs?username=shashi310&show_icons=true&locale=en&layout=compact&theme=dark&hide_border=false&background=0D1117&stroke=0000&ring=22DD22&fire=DD2222&currStreakLabel=DDDDDD&sideLabels=DDDDDD&dates=DDDDDD" alt="shashi310" />
      <img align="right" className='imgg' src="https://github-readme-streak-stats.herokuapp.com/?user=shashi310&theme=dark&hide_border=false&background=0D1117&stroke=0000&ring=22DD22&fire=DD2222&currStreakLabel=DDDDDD&sideLabels=DDDDDD&dates=DDDDDD" alt="shashi310" />
      
      </p>
<br />



      <p style={{
        textAlign:"center",
      }}>
      <img align="center" className='imgg' src="https://github-readme-activity-graph.vercel.app/graph?username=shashi310&background=0D1117&stroke=0000&ring=22DD22&fire=DD2222&currStreakLabel=DDDDDD&sideLabels=DDDDDD&dates=DDDDDD" alt="shashi310" />
      
      </p>
     

      <Footer />
     
    </div>
  )
}

export default MyStats