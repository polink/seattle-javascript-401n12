// Vinicio - we know that actions are just objects

export const createSection = (title) => {
  // Vinicio - returning an object that represents the action
  return {
    type: 'SECTION_CREATE',
    payload: {
      id: Math.random(),
      title,
      createdOn: new Date(),
    }
  }
};

export const updateSection = (section) => {
  return {
    type: 'SECTION_UPDATE',
    payload: section,
  }
};

export const deleteSection = (section) => {
  return {
    type: 'SECTION_DELETE',
    payload: section,
  }
};
