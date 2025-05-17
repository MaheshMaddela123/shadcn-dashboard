import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Home, Settings, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden p-4 bg-white shadow-md">
        <Button variant="ghost" onClick={toggleSidebar} aria-label="Toggle Sidebar">
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:block transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={toggleSidebar}
            aria-label="Close Sidebar"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="mt-4">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link to="/settings" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </Link>
        </nav>
      </div>

      {/* Overlay for Mobile when Sidebar is Open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
}