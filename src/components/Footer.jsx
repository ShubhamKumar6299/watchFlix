// import React from 'react'

// const Footer = () => {
//   return (
//     <footer className="px-6 pt-8 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
//             <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
//                 <div className="md:max-w-96">
//                     <img alt="" class="h-11" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiLogoSquareShape.svg" />
//                     <p className="mt-6 text-sm">
//                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//                     </p>
//                     <div className="flex items-center gap-2 mt-4">
//                         <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg" alt="google play" className="h-10 w-auto border border-white rounded" />
//                         <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg" alt="app store" className="h-10 w-auto border border-white rounded" />
//                     </div>
//                 </div>
//                 <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
//                     <div>
//                         <h2 className="font-semibold mb-5">Company</h2>
//                         <ul className="text-sm space-y-2">
//                             <li><a href="#">Home</a></li>
//                             <li><a href="#">About us</a></li>
//                             <li><a href="#">Contact us</a></li>
//                             <li><a href="#">Privacy policy</a></li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h2 className="font-semibold mb-5">Get in touch</h2>
//                         <div className="text-sm space-y-2">
//                             <p>+1-234-567-890</p>
//                             <p>contact@example.com</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <p className="pt-4 text-center text-sm pb-5">
//                 Copyright {new Date().getFullYear()} © <a href="https://prebuiltui.com">PrebuiltUI</a>. All Right Reserved.
//             </p>
//         </footer>
//   )
// }

// export default Footer



// import React from 'react';
// import { assets } from '../assets/assets';

// const Footer = () => {
//   return (
//     <footer className="px-6 pt-8 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
//       <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
//         {/* Logo and description */}
//         <div className="md:max-w-xs">
//           <img
//             alt="Logo"
//             className="h-11"
//             src={assets.logo}
//           />
//           <p className="mt-6 text-sm text-gray-400">
//             Our MovieTicketBooking app makes it easy to browse, book, and enjoy your favorite movies. Discover new releases, check showtimes, and reserve your seats—all in one place.
//           </p>
//           <div className="flex items-center gap-2 mt-4">
//             <img
//               src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
//               alt="Google Play"
//               className="h-10 w-auto border border-white rounded"
//             />
//             <img
//               src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
//               alt="App Store"
//               className="h-10 w-auto border border-white rounded"
//             />
//           </div>
//         </div>

//         {/* Links section */}
//         <div className="flex-1 flex flex-col md:flex-row items-start md:justify-end gap-10 md:gap-40">
//           <div>
//             <h2 className="font-semibold mb-5">shubhamCodes</h2>
//             <ul className="text-sm space-y-2">
//               <li><a href="#" className="hover:underline">Home</a></li>
//               <li><a href="#" className="hover:underline">About us</a></li>
//               <li><a href="#" className="hover:underline">Contact us</a></li>
//               <li><a href="#" className="hover:underline">Privacy policy</a></li>
//             </ul>
//           </div>
//           <div>
//             <h2 className="font-semibold mb-5">Get in touch</h2>
//             <div className="text-sm space-y-2">
//               <p>+91 6299410557</p>
//               <p>satyaanandsharma9534@example.com</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <p className="pt-4 text-center text-sm text-gray-400 pb-5">
//         Copyright {new Date().getFullYear()} © {"shubhamCodes"}. All Rights Reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;




import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  const [showCopyright, setShowCopyright] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="px-6 pt-8 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
        <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
          {/* Logo and description */}
          <div className="md:max-w-xs">
            <img alt="Logo" className="h-11" src={assets.logo} />
            <p className="mt-6 text-sm text-gray-400">
              Our MovieTicketBooking app makes it easy to browse, book, and enjoy your favorite movies. Discover new releases, check showtimes, and reserve your seats—all in one place.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
                alt="Google Play"
                className="h-10 w-auto border border-white rounded"
              />
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
                alt="App Store"
                className="h-10 w-auto border border-white rounded"
              />
            </div>
          </div>

          {/* Links section */}
          <div className="flex-1 flex flex-col md:flex-row items-start md:justify-end gap-10 md:gap-40">
            <div>
              <h2 className="font-semibold mb-5">shubhamCodes</h2>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About us</a></li>
                <li><a href="#" className="hover:underline">Contact us</a></li>
                <li
                  className="hover:underline cursor-pointer"
                  onClick={() => setShowPrivacy(true)}
                >
                  Privacy policy
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-5">Get in touch</h2>
              <div className="text-sm space-y-2">
                <p>+91 6299410557</p>
                <p>satyaanandsharma9534@example.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p
          className="pt-4 text-center text-sm text-gray-400 pb-5 cursor-pointer hover:underline"
          onClick={() => setShowCopyright(true)}
        >
          Copyright {new Date().getFullYear()} © shubhamCodes. All Rights Reserved.
        </p>
      </footer>

      {/* Copyright Popup */}
      {showCopyright && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-900 text-white p-6 rounded-lg max-w-sm w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => setShowCopyright(false)}
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-2">Copyright Information</h2>
            <p className="text-sm">
              All content on this MovieTicketBooking app, including text, images, and logos, is © {new Date().getFullYear()} shubhamCodes. Unauthorized use is prohibited.
            </p>
          </div>
        </div>
      )}

      {/* Privacy Policy Popup */}
      {showPrivacy && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-900 text-white p-6 rounded-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => setShowPrivacy(false)}
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-2">Privacy Policy</h2>
            <p className="text-sm">
              Your privacy is important to us. This app does not share your personal data with third parties without your consent. All booking information is securely stored and used only to provide our services. By using this app, you agree to our privacy practices.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
