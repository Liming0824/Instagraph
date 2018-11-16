export const OPEN_POST_DROPDOWN = 'OPEN_POST_DROPDOWN';
export const CLOSE_POST_DROPDOWN = 'CLOSE_POST_DROPDOWN';
export const OPEN_COMMENT_DROPDOWN = "OPEN_COMMENT_DROPDOWN";
export const CLOSE_COMMENT_DROPDOWN = "CLOSE_COMMENT_DROPDOWN";
export const OPEN_SETTING_DROPDOWN = "OPEN_SETTING_DROPDOWN";
export const CLOSE_SETTING_DROPDOWN = "CLOSE_SETTING_DROPDOWN";
export const OPEN_PICTURE_DROPDOWN = "OPEN_PICTURE_DROPDOWN";
export const CLOSE_PICTURE_DROPDOWN = "CLOSE_PICTURE_DROPDOWN";
export const OPEN_EDIT_DROPDOWN = "OPEN_EDIT_DROPDOWN";
export const CLOSE_EDIT_DROPDOWN = "CLOSE_EDIT_DROPDOWN";
export const NOTICE_DROPDOWN = 'NOTICE_DROPDOWN';

export const ToggleNoticeDropdown = () => {
  return {
    type: NOTICE_DROPDOWN
  };
};


export const openEditDropdown = () => {
  return {
    type: OPEN_EDIT_DROPDOWN,
  };
};
export const closeEditDropdown = () => {
  return {
    type: CLOSE_EDIT_DROPDOWN,
  };
};

export const openPictureDropdown = (post) => {
  return {
    type: OPEN_PICTURE_DROPDOWN,
    post: post
  };
};

export const closePictureDropdown = () => {
  return {
    type: CLOSE_PICTURE_DROPDOWN
  };
};

export const openPostDropdown = () => {
  return {
    type: OPEN_POST_DROPDOWN
  };
};

export const closePostDropdown = () => {
  return {
    type: CLOSE_POST_DROPDOWN
  };
};
export const openCommentDropdown = () => {
  return {
    type: OPEN_COMMENT_DROPDOWN
  };
};
export const closeCommentDropdown = () => {
  return {
    type: CLOSE_COMMENT_DROPDOWN
  };
};

export const openSettingDropdown = () => {
  return {
    type: OPEN_SETTING_DROPDOWN
  };
};
export const closeSettingDropdown = () => {
  return {
    type: CLOSE_SETTING_DROPDOWN
  };
};
