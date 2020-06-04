import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Interview from '../components/Interview';
import { removeInterview, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

function InterviewsList({
  interviews,
  removeInterview,
  changeFilter,
  filter,
}) {
  const handleRemoveInterview = interview => removeInterview(interview);
  const getInterviews = filter => {
    switch (filter) {
      case 'All':
        return interviews;
      case filter:
        return interviews.filter(interview => interview.category === filter);
      default:
        return interviews;
    }
  };
  const interviewList = getInterviews(filter).map(interview => (
    <Interview interview={interview} key={interview.id} removeInterview={handleRemoveInterview} />
  ));
  const handleFilterChange = filter => {
    changeFilter(filter);
  };
  return (
    <div>
      <CategoryFilter filterChangeHandler={handleFilterChange} />
      {interviewList}
    </div>
  );
}

const mapStateToProps = state => ({
  interviews: state.interviews,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeInterview: interview => dispatch(removeInterview(interview)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

InterviewsList.propTypes = {
  interviews: PropTypes.oneOfType([PropTypes.array]).isRequired,
  removeInterview: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InterviewsList);
