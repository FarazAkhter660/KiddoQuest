import Image from "next/image";

export default function AppointmentForm() {
  return (
    <div className="bg-white py-16 px-40">
      <div className="bg-orange-50 container mx-auto flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
        <div className="rounded-lg p-8 flex-1">
          <h2
            className="text-3xl font-bold text-teal-900 mb-6 text-center lg:text-left"
            style={{ fontFamily: "'Lobster Two', cursive" }}
          >
            Make Appointment
          </h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            <input
              type="text"
              placeholder="Guardian Name"
              className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Guardian Email"
              className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Child Name"
              className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="number"
              placeholder="Child Age"
              className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="col-span-2 border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="col-span-2 bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex-1 mt-8 lg:mt-0">
          <Image
            src="/images/appointment.jpg"
            alt="Happy Child"
            width={720}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}