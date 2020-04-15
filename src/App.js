/* 
  * App wasn't tested on browsers other then Chrome  
*/
import React, {useState, useEffect} from 'react';
import './App.css';
import Loading from './components/Loading';
import Pokemons from './components/Pokemons';
import Header from './components/Header';
import Footer from './components/Footer'
import Pagination from './components/Pagination';
import Filter from './components/Filter'
function App() {
  const [currentPokemons, setCurrentPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const limit = 20;
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setLoading(true)
    fetch(currentPage)
    .then(response => response.json())
    .then(data => {
      setCount(data.count)
      setNextPage(data.next)
      setPrevPage(data.previous)
      setCurrentPokemons(data.results.map(p => p.url))
      setLoading(false)
    })
  }, [currentPage])

  const goToNext = () => {
    if (nextPage) {
      setCurrentPage(nextPage)
      setCounter(a => (a < Math.ceil(count / limit)) ? a + 1 : a);
    }
  }
  const goToPrev = () => {
    if (prevPage) {
      setCurrentPage(prevPage)
      setCounter(a => (a > 1) ? a - 1 : a)
    }
  }
  return (
    <>
      <Header />
      <main className="container-fluid p-4">
        <section className="d-flex flex-row-reverse p-2">
          <Pagination count={count} counter={counter} limit={limit} next={goToNext} prev={goToPrev}/>
          <Filter />
        </section>
        <div className="row">
          {(loading) ? <Loading /> : <Pokemons list={currentPokemons}/>}
        </div>
      </main>
      <Footer pagination={<Pagination count={count} counter={counter} limit={limit} next={goToNext} prev={goToPrev}/>}/>
    </>
  )
}
export default App;
