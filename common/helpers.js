// Adds url params to url
export const urlTags = (url, tags) => {
  let tagString = "?";
  tags.forEach((tag, idx) => {
    if (idx !== 0) tagString += "&";
    tagString += tag;
  });
  return url + tagString;
};
