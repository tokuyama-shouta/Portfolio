
import './App.css';
import  React from 'react'
import Search from './components/Search'
import Header from './components/Header'
import Skill from './components/Skill'
import Footer from './components/Footer'

const App = () => {
  return(
    <React.Fragment>
      <Header />
      <Skill />
      <Search />
      <Footer />
    </React.Fragment>
  )
}

export default App;
