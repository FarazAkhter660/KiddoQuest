import Image from "next/image";

const classesData = [
  {
    title: "Art & Drawing",
    image: "/images/classes-1.jpg",
    teacher: "Jhon Doe",
    price: "$99",
    age: "3-5 Years",
    time: "9-10 AM",
    capacity: "30 Kids",
  },
  {
    title: "Color Management",
    image: "/images/classes-2.jpg",
    teacher: "Jhon Doe",
    price: "$99",
    age: "3-5 Years",
    time: "9-10 AM",
    capacity: "30 Kids",
  },
  {
    title: "Athletic & Dance",
    image: "/images/classes-3.jpg",
    teacher: "Jhon Doe",
    price: "$99",
    age: "3-5 Years",
    time: "9-10 AM",
    capacity: "30 Kids",
  },
  {
    title: "Music & Singing",
    image: "/images/classes-4.jpg",
    teacher: "Jane Smith",
    price: "$89",
    age: "4-6 Years",
    time: "10-11 AM",
    capacity: "25 Kids",
  },
  {
    title: "Storytelling",
    image: "/images/classes-5.jpg",
    teacher: "Alice Brown",
    price: "$79",
    age: "3-5 Years",
    time: "11 AM-12 PM",
    capacity: "20 Kids",
  },
  {
    title: "Science Experiments",
    image: "/images/classes-6.jpg",
    teacher: "Mark Taylor",
    price: "$109",
    age: "5-7 Years",
    time: "1-2 PM",
    capacity: "30 Kids",
  },
];

export default function ClassesSection() {
  return (
    <div className="bg-white py-16 px-40">
      <div className="text-center mb-12">
        <h2
          className="text-4xl font-bold text-teal-900"
          style={{ fontFamily: "'Lobster Two', cursive" }}
        >
          School Classes
        </h2>
        <p className="text-gray-600 mt-4">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
          dolor duo.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {classesData.map((cls, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-3"
          >
            <div className="flex justify-center mt-6">
              <div className="w-64 h-64 rounded-full overflow-hidden border-[12px] border-orange-50 transition-all duration-300">
                <Image
                  src={cls.image}
                  alt={cls.title}
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6 text-center bg-orange-50 min-h-[280px] flex flex-col justify-between">
              <h3
                className="text-xl font-bold text-teal-900"
                style={{ fontFamily: "'Lobster Two', cursive" }}
              >
                {cls.title}
              </h3>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/user.jpg"
                    alt="Teacher"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <p className="text-sm text-gray-700">{cls.teacher}</p>
                </div>
                <div className="bg-orange-500 text-white font-bold text-md px-4 py-1 rounded-full">
                  {cls.price}
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <div className="text-center flex-1">
                  <div className="w-full h-1 bg-red-500"></div>
                  <div className="text-red-500 mt-1">
                    <strong>Age:</strong>
                  </div>
                  <div className="text-red-500">{cls.age}</div>
                </div>
                <div className="text-center flex-1">
                  <div className="w-full h-1 bg-green-500"></div>
                  <div className="text-green-500 mt-1">
                    <strong>Time:</strong>
                  </div>
                  <div className="text-green-500">{cls.time}</div>
                </div>
                <div className="text-center flex-1">
                  <div className="w-full h-1 bg-yellow-500"></div>
                  <div className="text-yellow-500 mt-1">
                    <strong>Capacity:</strong>
                  </div>
                  <div className="text-yellow-500">{cls.capacity}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
