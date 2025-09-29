// src/components/WhatsAppChat.jsx
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const WhatsAppChat = () => {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () =>
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => scrollToBottom(), [input, isOpen]);

  const sendToWhatsApp = () => {
    if (!input.trim()) {
      toast.error("Please type a message first!");
      return;
    }
    const phone = "+923219515138"; // WhatsApp number
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      input
    )}`;
    window.open(url, "_blank");
    setInput("");
    toast.success("Opening WhatsApp...");
  };

  return (
    <>
      <Toaster position="top-right" />

      {/* Open Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed md:bottom-5 bottom-30 right-5 w-16 h-16 rounded-full bg-[#25D366] text-white text-2xl shadow-lg flex items-center justify-center z-[9999] hover:bg-[#128C7E] transition"
          >
            💬
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-5 right-5 w-[90%] max-w-sm rounded-xl bg-white shadow-2xl flex flex-col overflow-hidden z-[9999]"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-2 bg-[#25D366] text-white font-bold">
              WhatsApp Chat
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-lg hover:text-gray-200 transition"
              >
                ❌
              </button>
            </div>

            {/* Input */}
            <div className="flex border-t border-gray-200">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendToWhatsApp()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 outline-none text-gray-800"
              />
              <button
                onClick={sendToWhatsApp}
                className="px-4 bg-[#25D366] text-white font-semibold hover:bg-[#128C7E] transition"
              >
                Send
              </button>
            </div>

            <div ref={chatEndRef} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChat;
