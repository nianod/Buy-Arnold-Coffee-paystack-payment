import { useState } from "react";
import axios from "axios";

const Layout = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("test@example.com");
  const [error, setError] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (phoneNumber.length < 10) {
      setError("Please enter a valid number");
      setLoading(false);
      return;
    }
    if (+amount < 5 || +amount >= 50000) {
      setError("Please enter a realistic amount");
      setLoading(false);
      return;
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/initialize-payment",
          {
            email,
            amount: +amount,
          }
        );
        console.log("Payment response:", response.data);
        setError("");
      } catch (err: any) {
        setError(err.response?.data?.error || "Payment API error");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-800">
      <form
        onSubmit={submit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Buy <span className="text-amber-700">Arnold Coffee</span>
        </h2>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-black font-semibold ">
            Your Number:
          </label>
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            id="phone"
            type="tel"
            required
            placeholder="e.g. 07XXXXXXXX"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="amount" className="text-black mb-1 font-semibold">
            Amount:
          </label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            id="amount"
            type="number"
            placeholder="minimum 10"
            required
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
        </div>

        {error && (
          <span className="text-red-600 flex justify-center">{error}</span>
        )}
        <button
          type="submit"
          disabled={loading}
          className={`w-full font-semibold text-white py-2 rounded-lg transition duration-200 ${
            !loading
              ? "bg-amber-700 hover:bg-amber-800 cursor-pointer"
              : "bg-amber-400 cursor-not-allowed opacity-70"
          }`}
        >
          {loading ? "Sending" : "Buy coffee"}
        </button>
      </form>
    </div>
  );
};

export default Layout;
