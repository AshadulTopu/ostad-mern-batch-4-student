import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
    console.log(props);
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-medium text-black">{props.breadcrumb.title}</h1>
        <ul className='flex gap-3'>
            {
              props.breadcrumb.links.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={`/${item}`}>{item}</Link>
                    <span className="text-black ms-2">/</span>
                  </li>
                );
              })
            }
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
