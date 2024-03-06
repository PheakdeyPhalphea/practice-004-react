'use client';
import { Button, Navbar } from 'flowbite-react';
  export default function NavBarComponent() {
  return (
    <Navbar fluid  className='bg-gray-700'>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://www.flowbite-react.com/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        <Navbar.Link className='text-blue-200 font-bold' href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link className='text-white' href="#">About</Navbar.Link>
        <Navbar.Link className='text-white' href="#">Services</Navbar.Link>
        <Navbar.Link className='text-white' href="#">Pricing</Navbar.Link>
        <Navbar.Link className='text-white' href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
