const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} ExpertAssignmetWriting. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li><a href="#services" className="hover:text-yellow-400">About Us</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
        <a href="https://github.com/v1n-t3ch" className="hover:text-yellow-400">By VinTech Freelancing</a>
      </div>
    </footer>
  );
};

export default Footer;