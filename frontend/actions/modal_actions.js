export const OPEN_POST_DROPDOWN = 'OPEN_POST_DROPDOWN';
export const CLOSE_POST_DROPDOWN = 'CLOSE_POST_DROPDOWN';
export const OPEN_COMMENT_DROPDOWN = "OPEN_COMMENT_DROPDOWN";
export const CLOSE_COMMENT_DROPDOWN = "CLOSE_COMMENT_DROPDOWN";

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
