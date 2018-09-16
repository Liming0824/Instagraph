export const UPDATE_POST_SELECTED = "UPDATE_POST_SELECTED";
export const OPEN_NOTICE_SELECTED = "OPEN_NOTICE_SELECTED";
export const OPEN_SEARCH_SELECTED = "OPEN_SEARCH_SELECTED";
export const OPEN_SETTING_SELECTED = "OPEN_SETTING_SELECTED";
export const CHANGE_PROFILE_SELECTED = "CHANGE_PROFILE_SELECTED";
export const CLOSE_TABS = "CLOSE_TABS";


export const updatePostSelected = () => {
  return {
    type: UPDATE_POST_SELECTED
  };
};


export const openNoticeSelected = () => {
  return {
    type: OPEN_NOTICE_SELECTED
  };
};

export const openSearchSelected = () => {
  return {
    type: OPEN_SEARCH_SELECTED
  };
};

export const openSettingSelected = () => {
  return {
    type: OPEN_SETTING_SELECTED
  };
};

export const changeProfileSelected = () => {
  return {
    type: CHANGE_PROFILE_SELECTED
  };
};

export const closeTabs = () => {
  return {
    type: CLOSE_TABS
  };
};
