export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-200/60 dark:bg-gray-800/60 backdrop-blur-md text-center p-4">
      &copy; {new Date().getFullYear()} My Portfolio
    </footer>
  )
}
