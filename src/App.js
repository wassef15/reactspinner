import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header";
import MovieCards from './Components/MoviesCards';
import Search from './Components/Search';
import Stars from './Components/Stars'
import AddMovie from './Components/AddMovie';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      movieList: [
        {
          image: "https://images-na.ssl-images-amazon.com/images/I/912AErFSBHL._AC_SY445_.jpg",
          title: "Inception - 2010",
          rating : 5
        },
        {
          image: "https://images-na.ssl-images-amazon.com/images/I/519NBNHX5BL._AC_SY445_.jpg",
          title: "Shawshank Redemption",
          rating : 4
        },

        {
          image: "https://img8.cdn.cinoche.com/images/97b4e14bdf0c2e9ea82816d62a513cff.jpg",
          title: "Blade Runner - 2017",
          rating : 3
        },
      ],
      keyword: "",
      rating:1,
      loading: true
    }
    setTimeout(() => this.setState({loading: false}), 5000)

  }
  Search = text => {
    this.setState({keyword: text})
  }
  Rating = (rating) => {
    this.setState({
      rating : rating
    })
  }
  addNewmovie=(movie)=>{
    this.setState({movieList:this.state.movieList.concat(movie)})

   }


  render() {
    return (
      <div className="App">
        <Search search={title => this.Search(title)} />
        <Stars rating={this.state.rating} stars={rating => this.Rating(rating)}/>
        <AddMovie addmovie={movie=>this.addNewmovie(movie)}/>
        
        <MovieCards isLoading={this.state.loading} movieList={this.state.movieList.filter(el => el.title.toUpperCase().includes(this.state.keyword.toUpperCase().trim()) && el.rating >= this.state.rating)} />
      </div>
    );
  }

}




export default App;
