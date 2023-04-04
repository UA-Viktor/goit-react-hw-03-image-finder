import { Component } from 'react';
import { Notify } from 'notiflix';
import { BsSearch } from 'react-icons/bs';

import {
  Searchbars,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormButtonInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.message.trim() === '') {
      Notify.failure('Введите что нибудь.', {
        width: '270px',
        svgSize: '120px',
        fontSize: '20px',
      });
      return;
    }

    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <Searchbars>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <BsSearch size={25} />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormButtonInput
            value={this.state.message}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </Searchbars>
    );
  }
}

export default Searchbar;
