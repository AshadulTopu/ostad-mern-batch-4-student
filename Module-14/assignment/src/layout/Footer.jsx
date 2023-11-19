import Links from "../components/Links";
import SocialLink from "../components/SocialLink";

const Footer = (props) => {
  return (
    <div className="bg-black py-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-6 justify-between">
          <div className="col-span-1">
            <h1 className="text-4xl font-bold text-white mb-6">
              {props.footer.logo}
            </h1>
            <p className="text-white mb-10">{props.footer.description}</p>
            <SocialLink footer={props.footer.social} />
          </div>
          <Links className="col-span-1" data={props.footer} />
          <div className="col-span-1">
            <h1 className="text-xl font-bold text-white mb-6">
              {props.footer.contact[0]}
            </h1>
            <p className="text-white mb-10">{props.footer.contact[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
