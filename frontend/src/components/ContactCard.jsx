import { FiPhone, FiMapPin } from "react-icons/fi";

const ContactCard = () => {
  return (
    <div className="absolute bottom-0 left-1/4 translate-y-8 w-[400px] rounded-lg overflow-hidden shadow-lg">
      {/* Top section */}
      <div className="bg-gradient-to-b from-[#173E3F] to-[#1e4d4d] text-white p-6">
        <h3 className="text-lg font-semibold mb-2">
          Have a Challenge or an Idea?
        </h3>
        <p className="text-sm">
          Fill out the form, and let’s talk about how we can support your
          business with tailored solutions.
        </p>
      </div>

      {/* Bottom contact section */}
      <div className="bg-white">
        {/* Call us */}
        <div className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-[#E8F3F2] p-3 rounded-md">
              <FiPhone className="text-xl text-[#173E3F]" />
            </div>
            <div>
              <p className="text-sm text-gray-700">Call us at:</p>
              <p className="font-semibold text-gray-900">1-800-356-8933</p>
            </div>
          </div>
          <span className="text-xl text-gray-400">➜</span>
        </div>

        <hr />

        {/* Visit us */}
        <div className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-[#E8F3F2] p-3 rounded-md">
              <FiMapPin className="text-xl text-[#173E3F]" />
            </div>
            <div>
              <p className="text-sm text-gray-700">Visit us at:</p>
              <p className="font-semibold text-gray-900">
                Seventh Ave, 20th Floor, New York, NY 10018
              </p>
            </div>
          </div>
          <span className="text-xl text-gray-400">➜</span>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
