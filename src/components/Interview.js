import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Interview({ interview, removeInterview }) {
  const [show, setShow] = useState(false);
  const showModal = (interview) => {
    // removeInterview(interview)
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <>
      <div className={showHideClassName}>
        <section className="modal-main">
          Thank you for Following !!!!!!!
          <button onClick={hideModal}>close</button>
        </section>
      </div>
      <div className="Lesson-Panel">
        <div className="first-row">
          <span className="School-of">{interview.category}</span>
          <span className="Current-Chapter">Last date:</span>
        </div>
        <div className="second-row">
          <span className="title">{interview.title}</span>
          <span className="chapterNo">20/06/2020</span>
        </div>

        <span className="author">Author Name</span>
        <button
          className="Rectangle-2"
          type="button"
          onClick={() => showModal(interview)}
        >
          <span className="remove">Follow</span>
        </button>
      </div>
    </>
  );
}

Interview.propTypes = {
  interview: PropTypes.oneOfType([PropTypes.object]).isRequired,
  removeInterview: PropTypes.func.isRequired,
};

export default Interview;
