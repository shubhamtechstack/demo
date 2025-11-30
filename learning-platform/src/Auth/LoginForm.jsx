import React from "react";

const LoginForm = ({ onClose }) => {
  // Quick safety: show a console message on render so you can check modal is mounted.
  console.log("LoginForm mounted. onClose is", typeof onClose);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      // clicking overlay could also close modal:
      onClick={(e) => {
        // if user clicked overlay (not the inner box), close:
        if (e.target === e.currentTarget) {
          if (typeof onClose === "function") onClose();
        }
      }}
    >
      <div className="bg-white p-6 rounded-xl w-80" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input required type="email" placeholder="Email" className="w-full p-2 border rounded mb-3" />
        <input required type="password" placeholder="Password" className="w-full p-2 border rounded mb-3" />

        <button onClick={()=>{
                      if (typeof onClose === "function") onClose();
        }} className="w-full bg-purple-600 text-white py-2 rounded-md">
            
            
            Login</button>

        <button
          onClick={() => {
            if (typeof onClose === "function") onClose();
            else console.warn("onClose not provided to LoginForm");
          }}
          className="w-full mt-3 text-red-600 font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
