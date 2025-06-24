import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-10">
            <div className="text-xl font-bold">ReadBuddy</div>
            <div className="space-x-6 text-sm font-medium">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/books" className="hover:underline">Books</Link>
              <Link href="/quiz" className="hover:underline">Quiz</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
              <Link href="/admin" className="hover:underline">Admin</Link>
            </div>
          </div>
          <div className="space-x-4 text-sm font-medium">
            <Link href="/login">Login</Link>
            <Link href="/signup" className="bg-white text-blue-600 px-3 py-1 rounded">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-auto text-center text-sm text-gray-600">
        <div className="space-x-4">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/privacy" className="hover:underline">Privacy</Link>
        </div>
        <p className="mt-2">&copy; {new Date().getFullYear()} ReadBuddy. All rights reserved.</p>
      </footer>
    </div>
  );
}
