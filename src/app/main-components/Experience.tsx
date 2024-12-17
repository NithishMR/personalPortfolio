export default function Education() {
  return (
    <div className=" ml-10">
      <div className="border-l-2 border-gray-500">
        <div className="flex items-center">
          <div className="ml-4 mt-5">
            <div className="flex flex-row items-start justify-between">
              <div className="">
                <div className="">
                  <img
                    src="./Armtech.jpeg"
                    alt="SVCE"
                    width={80}
                    height={80}
                    className=""
                  />
                </div>
              </div>
              <div className="ml-5">
                <div className="text-lg text-gray-500">
                  December 2023 - January 2024
                </div>
                <div className="text-2xl font-semibold">
                  ARMTECH COMPUTERS SOLUTIONS PVT. LTD.
                </div>
                <div className="text-lg text-gray-500">Hardware Intern</div>
                <div className="">
                  <ul>
                    <li className="list-disc mt-3">
                      Performed hardware diagnostics (RAM, SSD, HDD), system
                      health checks, and Windows OS installations on laptops
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
