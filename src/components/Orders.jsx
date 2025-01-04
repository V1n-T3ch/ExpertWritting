import { useState } from 'react';
import emailjs from 'emailjs-com';

const Orders = () => {
  const [academicLevel, setAcademicLevel] = useState('');
  const [paperType, setPaperType] = useState('');
  const [wordCount, setWordCount] = useState('');
  const [price, setPrice] = useState(0);

  const serviceid = import.meta.env.VITE_SERVICEID;
  const templateid = import.meta.env.VITE_ORDERS_TEMPLATEID;
  const userid = import.meta.env.VITE_USERID;

  const calculatePrice = () => {
    let basePrice = 0;

    switch (academicLevel) {
      case 'High School':
        basePrice = 0.05;
        break;
      case 'Undergraduate':
        basePrice = 0.10;
        break;
      case 'Master':
        basePrice = 0.15;
        break;
      case 'PhD':
        basePrice = 0.20;
        break;
      default:
        basePrice = 0;
    }

    switch (paperType) {
      case 'Essay':
        basePrice *= 1;
        break;
      case 'Research Paper':
        basePrice *= 1.5;
        break;
      case 'Thesis':
        basePrice *= 2;
        break;
      default:
        basePrice *= 1;
    }

    setPrice(basePrice * wordCount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceid, templateid, e.target, userid)
      .then(
        (result) => {
          console.log(result.text);
          alert('Order submitted successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to submit order, please try again later.');
        }
      );

    setAcademicLevel('');
    setPaperType('');
    setWordCount('');
    setPrice(0);
  };

  return (
    <section id="order" className="flex flex-col items-center justify-center px-4 py-16 bg-gray-100 mt-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Place an Order</h1>
      <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="academicLevel">
            Academic Level
          </label>
          <select
            id="academicLevel"
            name="academicLevel" // Matches {{academicLevel}} in the template
            value={academicLevel}
            onChange={(e) => setAcademicLevel(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Level</option>
            <option value="High School">High School</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Master">Master</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paperType">
            Type of Paper
          </label>
          <select
            id="paperType"
            name="paperType" // Matches {{paperType}} in the template
            value={paperType}
            onChange={(e) => setPaperType(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Paper Type</option>
            <option value="Essay">Essay</option>
            <option value="Research Paper">Research Paper</option>
            <option value="Thesis">Thesis</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="wordCount">
            Number of Words
          </label>
          <input
            id="wordCount"
            name="wordCount" // Matches {{wordCount}} in the template
            type="number"
            value={wordCount}
            onChange={(e) => setWordCount(e.target.value)}
            placeholder="Enter number of words"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <input type="hidden" name="price" value={price.toFixed(2)} /> {/* Matches {{price}} in the template */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            type="button"
            onClick={calculatePrice}
            className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Calculate Price
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Order
          </button>
        </div>
        {price > 0 && (
          <div className="text-lg font-bold text-green-600">
            Total Price: ${price.toFixed(2)}
          </div>
        )}
      </form>
    </section>
  );
};

export default Orders;
