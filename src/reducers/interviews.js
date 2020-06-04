const CREATE_INTERVIEW = 'CREATE_INTERVIEW';
const REMOVE_INTERVIEW = 'REMOVE_INTERVIEW';

const initState = [
  { title: 'ABC', category: 'Android', id: Math.random() },
  { title: 'XYZ', category: 'Design', id: Math.random() },
  { title: 'QWERTY', category: 'Web Development', id: Math.random() },
];

const interviews = (state = initState, action) => {
  switch (action.type) {
    case CREATE_INTERVIEW:
      return [...state, action.interview];
    case REMOVE_INTERVIEW:
      return state.filter(interview => interview.id !== action.id);
    default:
      return state;
  }
};

export default interviews;
