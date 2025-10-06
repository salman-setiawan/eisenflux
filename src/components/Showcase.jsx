import PropTypes from "prop-types";
import Interface from "../data/interface.js";

const Showcase = ({ id }) => {
  const selected = Interface.find(item => item.id === id);

  if (!selected) {
    return (
      <div className="text-neutral-400 text-center py-12">
        No images found.
      </div>
    );
  }

  return (
    <div className="pt-16 md:pt-32 w-full md:w-[1000px] mx-auto">
      <div className="columns-2 md:columns-3 gap-2 space-y-2 rotate-[-14deg] md:rotate-[-20deg]">
        {selected.cover.map((image, index) => (
          <div key={index} className="break-inside-avoid overflow-hidden">
            <img src={image.img} alt={`cover-${index}`} className="w-full h-auto object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

Showcase.propTypes = {
  id: PropTypes.string,
};

Showcase.defaultProps = {
  id: null,
};

export default Showcase;
