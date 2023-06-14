import { useSelector } from 'react-redux';

const Categories = () => {
  const status = useSelector((state) => state.categories);

  return <p>{status === 'Under construction' ? status : 'Under construction'}</p>;
};

export default Categories;
