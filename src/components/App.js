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
    listEmpty: false,
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
      listEmpty: false,
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
          if (hits.length === 0) {
            this.setState({ listEmpty: true });
            return;
          }

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
    const { hits, isLoading, bigImage, showModal, listEmpty } = this.state;
    const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;

    return (
      <>
        <Container>
          <Searchbar onSubmit={this.handleFormSubmit} />

          {listEmpty ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                // alignItems: 'center',
                height: '100vh',
                fontSize: '24px',
              }}
            >
              Давай поищем что-то другое
            </div>
          ) : (
            <ImageGallery images={hits} onImageClick={this.handleImageClick} />
          )}

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
