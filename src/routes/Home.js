import React from 'react';
import Axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';
//import PropTypes from 'prop-types';

// axios는 get을 통해서 API로부터 data를 받아온다.
// componentDidMount()가 처음 render()이후로 실행되며, 이때 axios가 API로부터 data를 받아온다. 
// axios는 네트워크를 통해서 작동하기 때문에 느리게 작동한다. 이때 get()이 반환한 데이터를 잡으려면,
// get()이 데이터를 다 잡을 때까지 기다려야 한다.
// 이를 위해서는 async와 wait를 사용해야 한다. 
class Home extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const {
      data: {
        data: {movies},
      },
    } =  await Axios.get('https://yts-proxy.now.sh/list_movies.json&sort_by=rating');
    this.setState({ movies, isLoading: false });
  }

  render() {   
    const { isLoading, movies } = this.state;
    return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">'Loading...'</span>
        </div>
        ) : (
          <div className="movies">
            {movies.map(movies => (
              <Movie 
              key = {movies.id}
              id ={movies.id}
              year = {movies.year}
              title = {movies.title}
              summary = {movies.summary}
              poster = {movies.medium_cover_image}
              genres = {movies.genres}
            />
          ))}
        </div>
      )}
    </ section>
    );
  }
}





/*****************class App 만들기와 생명주기 예제******************
class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('hello');
  }

  componentDidMount() {
    console.log('component rendered');
  }

  componentDidUpdate() {
    console.log('I just updated');
  }
  state = {
    count: 0,
  };

  componentWillUnmount() {
    console.log('Goodbye!');
  }

  add = () => {
    this.setState(current => ({
      count: current.count + 1,
    }));
  };

  minus = () => {
    this.setState(current => ({
      count: current.count - 1,
    }));
  };

  render() {
    console.log("I`m rendering");

    return ( 
      <div>
        <h1> This number is: {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
// App class는 React.Component 를 extend를 통해서 상속받았다.
// 이제 App class는 component니까 JSX를 반환해야 한다.
// JSX를 반환하기 위해서 render함수를 사용한다.
// 함수형 component는 return을 통해서 자동으로 JSX를 반환한다.
// 리액트는 자동으로 render()함수를 실행한다.
// state를 사용하기 위해서 class형 component를 사용한다. 
// state는 직접 변경하면 안된다. 리액트는 직접 변경하는 코드를 허용하지 않는다.
// 원래 리액트는 state를 변경하면 render()함수를 다시 실행하여 변겨오딘 state를 화면에 출력한다.
// 하지만 state를 직접 변경하는 경우에는 render()함수를 다시 실행하지 않는다.
// 따라서 state를 변경하고 싶다면 setState()함수를 사용해야 한다.
// setState()함수는 state를 변경하고 리액트는  setState()함수가 호출되면 자동으로 render()함수를 호출한다. 따라서 또 자동으로 화면이 갱신된다.  
// constructor는 초기 render()함수 실행 이전에 실행된다. 
// componentDidMount()는 처음 render()이후에 실행된다.
// constructor() -> render() -> componentDidMount()
// 이후 setstate() -> render() -> componentDidUpdate() 순으로 반복된다. 
//********************************************************************** */


/*
function Potato() {
  return <h1>I Love Potato!</h1>
}

function Food1(props) {
return <h1>I Love {props.fav}</h1>
}

// 이 배열은 실제로는 DB에서 넘어왔다고 생각!
const foodILike = [
  {
    id : 1,
    name: 'Kimchi',
    image: 'https://www.koreanbapsang.com/wp-content/uploads/2016/10/DSC_1904-e1477366498840.jpg',
    rating: 3,
  },
  {
    id : 2,
    name: 'ramen',
    image: 'http://file.mk.co.kr/meet/neds/2017/09/image_readtop_2017_587233_15042337473013492.jpg',
    rating: 2,
  },
  {
    id : 3,
    name: 'gogi',
    image: 'https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/20170910011347_photo1_481363df942d.jpg',
    rating: 1,
  },
];
// 배열을 만들고, map함수를 통해서 각 배열의 원소마다 특정 함수를 취해줌.


// 구조 분해 할당 방법으로 props받기
function Food({name, picture, rating}) {
  return (
    <div> 
      <h2>I Like {name}</h2> 
      <h4> rating is {rating}</h4>
      <img src={picture} alt = {name}/>

    </div>
  )
}

function App() {
  return ( 
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => (<Food key = {dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating} />))} 
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

function App1() {
  console.log(foodILike.map(renderFood));
  return ( 
    <div>
      <h1>Hello</h1>
      {foodILike.map(renderFood)} 
    </div>
  )
}

function renderFood(dish) {
  return <Food name = {dish.name} picture = {dish.image} />
}

*/
// props를 이용해서 컴포넌트에 데이터를 보내는 방법 => fav = "~~~"


export default Home;
