import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createInterview } from '../actions/index';

const categories = [
  'Workshops',
  'Startups',
  'Camps',
  'Case study',
  'Design',
  'Web development',
  'Android',
];

class InterviewsForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', category: 'Action', show: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ show: true });
    const { createInterview } = this.props;
    const newInterview = { id: Math.random(), ...this.state };
    createInterview(newInterview);
    this.setState({ title: '', category: 'Action' });
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { title, category, show } = this.state;
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
      <div className="form-listing">
        <h3 className="add-interview">ADD NEW INTERVIEW</h3>
        <div className={showHideClassName}>
          <section className="modal-main">
            Thank you for Creating !!!!!!!
            <button onClick={this.hideModal}>close</button>
          </section>
        </div>
        <form onSubmit={this.handleSubmit} className="interviews-form">
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            required
            onChange={this.handleChange}
            placeholder="Interview Title"
          />
          <select
            name="category"
            onChange={this.handleChange}
            value={category}
            required
          >
            {categories.map(category => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <button className="Rectangle-2" onClick={this.showModal} type="submit">Create</button>
        </form>
      </div>
    );
  }
}

InterviewsForm.propTypes = {
  createInterview: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createInterview: interview => dispatch(createInterview(interview)),
});

export default connect(
  null,
  mapDispatchToProps,
)(InterviewsForm);
