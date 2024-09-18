// get data
const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)]{
  _id,
    name,
    description,
    images,
    price,
    price_id,
    "slug": slug.current,
    "categories": categories[]-> {
    name
    }
}`;
};

const PopularBikes = () => {
  return <div>Popular Bikes</div>;
};

export default PopularBikes;
