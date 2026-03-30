"use client";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO at TechStart",
      content: "Peter is an exceptional developer who delivers high-quality work on time. His problem-solving skills and attention to detail are outstanding.",
      avatar: "/images/u1.jpg",
    },
    {
      name: "Michael Chen",
      position: "Product Manager at InnovateCo",
      content: "Working with Peter was a game-changer for our project. His technical expertise and collaborative approach helped us achieve our goals ahead of schedule.",
      avatar: "/images/u2.jpg",
    },
    {
      name: "Emily Rodriguez",
      position: "Design Lead at Creative Studio",
      content: "Peter has a unique ability to translate complex technical requirements into elegant solutions. He's a true professional and a pleasure to work with.",
      avatar: "/images/u3.jpg",
    },
  ];

  return (
    <div id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="w-[80%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Client <span className="text-purple-700">Review</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Checkout our client reviews
          </p>
        </div>

        <div className="mt-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
