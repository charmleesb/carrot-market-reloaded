import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg w-full rounded-xl p-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-grey-600 font-semibold -mb-1">In transit</span>
            <span className="text-4xl font-semibold">Coolblue</span>
          </div>
          <div className="size-12 rounded-full bg-orange-400"></div>
          </div>
        <div className="flex my-2 gap-2 items-center">
          <span className="bg-green-400 text-white uppercase px-4 py-1 text-sm font-medium rounded-full">Today</span>
          <span>9:30-10:30</span>
        </div>
        <div className="relative py-3">
          <div className="bg-gray-200 absolute rounded-full w-full h-2"></div>
          <div className="bg-green-400 absolute rounded-full w-2/3 h-2"></div>
        </div>
        <div className="flex justify-between w-full items-center mt-5 text-gray-600">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span>Delivered</span>
        </div>
      </div>

    </main>
  );
}
