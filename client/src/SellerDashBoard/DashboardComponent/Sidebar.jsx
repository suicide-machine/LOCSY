import React from "react"
import {
  HomeIcon,
  ChartBarIcon,
  MailIcon,
  CollectionIcon,
  ArrowUpIcon,
  ExternalLinkIcon,
} from "@heroicons/react/solid"

const Sidebar = () => {
  return (
    <div className="bg-slate-800 flex-none w-14 sm:w-20 min-h-screen">
      <div className="flex items-center h-20">
        <HomeIcon
          width={40}
          className="text-gray-300 left-3 sm:left-6 relative"
        />
      </div>

      <div className="relative  left-3 sm:left-6 top-[60px]">
        <CollectionIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
        <ChartBarIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />

        <MailIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
        {/* </div> */}

        <div className="fixed bottom-4 left-3 sm:left-6">
          <a href="#top">
            <ArrowUpIcon
              width={40}
              className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
            />
          </a>
          <ExternalLinkIcon
            width={40}
            className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
          />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
