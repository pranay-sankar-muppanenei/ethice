import blogData from "@/data/blogData";
import Link from "next/link";

export default function BlogDetail({ blog, relatedBlogs }) {
  if (!blog) {
    return <div className="p-6">Blog not found</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-[#f5f7f4] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-semibold leading-snug mb-6">
            {blog.title}
          </h1>
          <Link href="/blogs">
            <button className="px-4 py-1 rounded-md text-sm border border-gray-300 bg-white hover:bg-gray-100 transition">
              ← Back to Blogs
            </button>
          </Link>
        </div>
      </section>

      {/* Main Blog Content */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />

        {/* Author & Date */}
        <div className="text-sm text-gray-500 flex gap-4 mb-6">
          <span>{blog.author}</span>
          <span>{blog.date}</span>
        </div>

        {/* Challenge */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Challenge</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {blog.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Solution</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {blog.solution}
          </p>
        </div>

        {/* Results */}
     {/* Results */}
<div className="mb-10">
  <h2 className="text-xl font-semibold mb-6">Results</h2>
  <div className="grid sm:grid-cols-2 gap-6">
    {blog.results.map((result, index) => (
      <div
        key={index}
        className="rounded-lg bg-[#f5f7f4] p-6"
      >
        <p className="text-4xl font-bold text-[#0F3D3A] mb-2">
          {result.value}
        </p>
        <h3 className="text-lg font-semibold text-[#0F3D3A] mb-1">
          {result.label}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {result.description}
        </p>
      </div>
    ))}
  </div>
</div>

      </section>
       <section className="py-12 flex justify-center">
        <div className="bg-[#0F3D3A] rounded-lg px-8 py-10 max-w-6xl h-[250px] text-center">
          <h3 className="text-xl md:text-2xl font-medium text-white mb-6">
            Call Us Today to Schedule a Free Consultation
          </h3>
          <Link href="/contact">
            <button className="bg-[#C8F8A9] text-[#0F3D3A] px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-[#b7e997] transition">
              Book A Free Strategy Call
              <span className="text-lg">→</span>
            </button>
          </Link>
        </div>
      </section>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-light mb-8">Related Blogs</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {relatedBlogs.map((related) => (
              <Link
                key={related.id}
                href={`/blogs/${related.id}`}
                className="flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md hover:scale-103 transition"
              >
                <img
                  src={related.image}
                  alt={related.title}
                  className="h-[300px] w-[250px] object-cover"
                />
                <div className="p-5 flex flex-col justify-between">
                  <h3 className="text-md font-semibold mb-2">{related.title}</h3>
                  <p className="text-sm text-gray-600">
                    {related.challenge.substring(0, 100)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: blogData.map((blog) => ({ params: { id: blog.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = blogData.find((b) => b.id === params.id);
  const relatedBlogs = blogData.filter((b) => b.id !== params.id).slice(0, 2);
  return { props: { blog, relatedBlogs } };
}
