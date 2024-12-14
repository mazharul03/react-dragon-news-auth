import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/swimming.png';
import qZone2 from '../../../assets/class.png';
import qZone3 from '../../../assets/playground.png';

const RightSideNav = () => {
    return (
        <div className="border mb-8">
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full">
                <FaGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full">
                <FaGithub />
                    Github
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl mb-4 font-semibold">Find Us On</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                    <FaFacebook className="mr-3"></FaFacebook>
                    Facebook
                </a>
                <a className="p-4 flex text-lg items-center border-x" href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    Twitter
                </a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                    <FaInstagram className="mr-3"></FaInstagram>
                    Instagram
                </a>
            </div>

            {/* q zone */}

            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-semibold">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
                
            </div>
        </div>
    );
};

export default RightSideNav;