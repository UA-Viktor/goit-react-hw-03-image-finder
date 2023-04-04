import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import ButtonLoadMore from './Button/Button';
import fotoApi from '../services/pixabay-data';

import { Container } from './App.styled';

class App extends Component {
  state = {
    hits: [],
    message: '',
    currentPage: 1,
    isLoading: false,
    error: null,
    bigImage: '',
    showModal: false,
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleImageClick = largeImageURL => {
    this.setState({ bigImage: largeImageURL });
    this.toggleModal();
  };

  fetchArticles = () => {
    const { currentPage, message } = this.state;
    const options = { currentPage, message };

    this.setState({ isLoading: true });

    setTimeout(() => {
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
    }, 1000);
  };

  render() {
    const { hits, isLoading, bigImage, showModal } = this.state;
    const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;

    return (
      <>
        <Container>
          <Searchbar onSubmit={this.handleFormSubmit} />

          <ImageGallery images={hits} onImageClick={this.handleImageClick} />

          {showModal && (
            <Modal onClose={this.toggleModal} bigImage={bigImage}></Modal>
          )}

          {isLoading ? (
            <ButtonLoadMore isLoading={isLoading} />
          ) : (
            shouldRenderLoadMoreButton && (
              <ButtonLoadMore onClick={this.fetchArticles} />
            )
          )}

          <ToastContainer autoClose={3000} />
        </Container>
      </>
    );
  }
}

export default App;
