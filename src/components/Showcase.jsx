import Interface from "../data/interface.js";
import { textBaseSemi } from "../data/uiStyles.js";

const Showcase = ({ id }) => {
  const selected = Interface.find(item => item.id === id);

  if (!selected) {
    return (
      <div className={`${textBaseSemi} text-center py-12`}> No Images Found. </div>
    );
  }

  return (
    <div>
      <div className="pt-16 md:pt-32 w-full md:w-[1000px] columns-2 md:columns-3 gap-2 space-y-2 rotate-[-14deg] md:rotate-[-20deg]">
        {selected.cover.map((image, index) => (
          <div key={index} className="break-inside-avoid overflow-hidden">
            <img src={image.img} alt={`cover-${index}`} className="w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
