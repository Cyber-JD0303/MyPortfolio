import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Contact</div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get In Touch</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            I'm open to new opportunities in DevOps. Feel free to reach out if you'd like to discuss potential collaborations or have any questions.
          </p>
        </div>
        <div className="flex flex-col gap-4 min-[400px]:flex-row lg:justify-end">
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Email</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">your-email@example.com</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Phone</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">+91 12345 67890</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Location</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Your City, Your State</div>
          </div>
        </div>
        <div className="space-y-4 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="message"
              placeholder="Enter your message"
            />
          </div>
          <button className="bg-blue-500 text-white rounded-md px-4 py-2">Send Message</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;