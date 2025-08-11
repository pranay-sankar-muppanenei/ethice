import { FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";

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
      <div className="bg-[#f1f5f1]">
        {/* Call us */}
        <div className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-[#E8F3F2] p-3 rounded-md">
              <FiPhone className="text-xl text-[#173E3F]" />
            </div>
            <div>
              <p className="text-sm text-gray-700">Call us at:</p>
              <p className="font-semibold text-gray-900">+91 8097072126</p>
            </div>
          </div>
          <FiArrowRight className="text-xl text-gray-400" />
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
                shop No:03, Vithal Mandi Building,Station Road,Thane,Maharashtra -400 099
              </p>
            </div>
          </div>
          <FiArrowRight className="text-xl text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
