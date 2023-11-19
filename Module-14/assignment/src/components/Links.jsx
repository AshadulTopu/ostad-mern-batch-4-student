const Links = (props) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-white mb-6">{props.data.linkTitle}</h1>
      <ul>
        {props.data.links.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link} className="text-white">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;
