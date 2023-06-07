export const fetchCompetitionsRequest = () => ({
    type: 'FETCH_COMPETITIONS_REQUEST',
  });
  
  export const fetchCompetitionsSuccess = (competitions) => ({
    type: 'FETCH_COMPETITIONS_SUCCESS',
    payload: competitions,
  });
  
  export const fetchCompetitionsFailure = (error) => ({
    type: 'FETCH_COMPETITIONS_FAILURE',
    payload: error,
  });

  export const updateParticipants = (updatedParticipants) => {
    return {
      type: 'UPDATE_PARTICIPANTS',
      payload: updatedParticipants,
    };
  };
  