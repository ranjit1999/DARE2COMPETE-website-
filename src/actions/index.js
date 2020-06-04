const createInterview = interview => ({
  type: 'CREATE_INTERVIEW',
  interview,
});

const removeInterview = interview => ({
  type: 'REMOVE_INTERVIEW',
  id: interview.id,
});

const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});

export { createInterview, removeInterview, changeFilter };
