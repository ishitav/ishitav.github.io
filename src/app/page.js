export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-pink-900">
      <h1 className="text-5xl font-bold">🌸 Welcome! My name is Ishita! 🌸</h1>
      <p className="mt-4 text-lg">I love building, learning, and sharing my journey.</p>
      <a href="/about" className="mt-6 bg-pink-500 text-white py-2 px-4 rounded-full">
        Learn More About Me →
      </a>
    </main>
  );
}