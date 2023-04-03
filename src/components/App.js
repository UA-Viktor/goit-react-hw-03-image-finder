import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import fotoApi from '../services/pixabay-data';

class App extends Component {
  state = {
    hits: [],
    message: '',
    currentPage: 1,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.message !== this.state.message) {
      this.fetchArticles();
    }
  }

  handleFormSubmit = message => {
    this.setState({
      hits: [],
      message: message,
      currentPage: 1,
      error: null,
    });
  };

  fetchArticles = () => {
    const { currentPage, message } = this.state;
    const options = { currentPage, message };

    this.setState({ isLoading: true });

    fotoApi
      .fetchArticles(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    return (
      <>
        {/* <Container>Hello</Container> */}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery fotos={this.state.hits} />
        <button type="button" onClick={this.fetchArticles}>
          еще хочу
        </button>
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
