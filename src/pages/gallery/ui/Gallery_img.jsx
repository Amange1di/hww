
import aman from "../../awardsPages/img/gallery_img.png";

const facedat = [
    { aman: aman, p: "20.10.2024" },
    { aman: aman, p: "20.10.2024" },
    { aman: aman, p: "20.10.2024" },
    { aman: aman, p: "20.10.2024" },
    { aman: aman, p: "20.10.2024" },
    { aman: aman, p: "20.10.2024" },
];

const Gallery_img = () => {
    const imageSizes = [
        { width: 287, height: 220 },
        { width: 665, height: 430 },
        { width: 413, height: 520 },
        { width: 287, height: 220 },
        { width: 287, height: 220 },
        { width: 287, height: 220 },
        { width: 287, height: 220 },
        { width: 287, height: 220 },
        { width: 287, height: 220 },


        { width: 665, height: 430 },
        { width: 337, height: 250 },
        { width: 287, height: 220 },
        { width: 287, height: 220 },
        { width: 413, height: 520 },
        { width: 287, height: 220 },
        { width: 287, height: 220 },
        { width: 287, height: 220 },
        { width: 287, height: 220 },
    ];

    const getImageSize = () => {
        if (facedat.length === 1) {
            return { width: 665, height: 430 };
        } else if (facedat.length === 2 || facedat.length === 3) {
            return { width: 413, height: 520 };
        } else if (facedat.length === 4) {
            return { width: 287, height: 220 };
        } else {
            return imageSizes;
        }
    };

    const imageSize = getImageSize();

    return (
        <div className="gallery container">
            <div className="gallery_select">
                <div>
                    <select>
                        <option>День</option>
                    </select>
                    <select>
                        <option>Месяц</option>
                    </select>
                    <select>
                        <option>Год</option>
                    </select>
                </div>
            </div>

            <div className="gallery_group">
                {facedat.map((item, index) => (
                    <div
                        className="gallery_card"
                        key={index}
                        style={{
                            width: Array.isArray(imageSize)
                                ? imageSize[index % imageSize.length].width  // бул жерде болсо егерде 5 тен  коп болсо  размер  берет 
                                : imageSize.width, // бул жерде 1,2,3,4  гана сурот болсо размер берет 
                            height: Array.isArray(imageSize)
                                ? imageSize[index % imageSize.length].height
                                : imageSize.height,
                        }}>
                        {/* %  бул )( мисалы   сурот 5  шт болсо   а  мен   4 еле размер берген болсом 
                             5-суроту кайрадан  1-суротун размерин берет 
                             эгерде суротордун  саны imageSizes санынан көп болсо, imageSizes кайра колдонуу учун . */}
                        <img className="gallery_img" src={item.aman} />
                        <p className="gallery_data">{item.p}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery_img;
