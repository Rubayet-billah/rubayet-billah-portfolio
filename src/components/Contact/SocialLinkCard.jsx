/* eslint-disable react/prop-types */
const SocialLinkCard = ({ icon, title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 bg-zinc-900 rounded-lg text-center transition-transform transform hover:scale-105"
    >
      {icon}
      <h3 className="text-xl font-bold mt-2">{title}</h3>
    </a>
  );
};

export default SocialLinkCard;
