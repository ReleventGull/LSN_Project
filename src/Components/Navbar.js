
const images = require.context('../../public/images', false, /\.(png|jpe?g|svg)$/);

const imageList = images.keys().map((path) => ({
  path: path,
  src: images(path),
}));
    console.log(imageList)
const Navbar = () => {
    return (
        <div className="h-full p-2 w-20 bg-playbar">

        </div>
    )
}

export default Navbar