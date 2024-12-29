import aman from "../awardsPages/img/Rectangle 4571.png";

const facedat = [
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.2.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.2.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.2.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.2.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.2.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.2.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.2.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.2.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.2.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.2.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.1.2024" },
    { aman: aman, p: "20.1.2024" },
];

const ImageFetcher = () => {



    const imageSizes = [
        { width: 287, height: 220 },
        { width: 665, height: 430 },
        { width: 513, height: 420 },
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
        { width: 513, height: 420 },
        { width: 287, height: 220 },
        { width: 287, height: 220 },
        { width: 287, height: 220 },
        { width: 287, height: 220 },




    ];

    return (
        <div className="container">
            <div className="header">
                <select className="dropdown">
                    <option>День</option>
                </select>
                <select className="dropdown">
                    <option>Месяц</option>
                </select>
                <select className="dropdown">
                    <option>Год</option>
                </select>
            </div>

            <div className="date-picker">
                <input
                    type="date"
                />
            </div>

            <div className="kartinca">
                {facedat.map((item, index) => (
                    <div
                        className='kartinca_img'
                        key={index}
                        style={{
                            width: imageSizes[index % imageSizes.length].width,
                            height: imageSizes[index % imageSizes.length].height,
                            // margin: '10px'
                        }}
                    >
                        <img src={item.aman}
                            alt={`example-${index}`}
                            style={{ width: '100%', height: '100%' }}
                        />
                        <p className="date-label">{item.p}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ImageFetcher;
