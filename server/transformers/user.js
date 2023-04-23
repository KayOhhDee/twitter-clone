export const userTransformer = ({ id, name, email, username, profileImage }) => {
  return {
    id,
    name,
    email,
    username,
    profileImage,
  };
};
