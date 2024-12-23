export const useNavigate = () => {
  return (path: string) => {
    console.log(`Navigated to ${path}`);
  };
};
